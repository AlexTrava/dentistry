import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/Navigation/navigation-menu.tsx";

interface NavSubItem {
  list: string[];
}

type NavItemType = {
  title: string;
} & Partial<NavSubItem>;

const data: NavItemType[] = [
  { title: "О клинике" },
  {
    title: "Услуги",
    list: ["Консультация", "Первичный осмотр", "Экскурсия"],
  },
  { title: "Ночные линзы" },
  { title: "Врачи" },
  { title: "Цены" },
  { title: "Отзывы" },
  { title: "Вопросы и ответы" },
  { title: "Контакты" },
];

const navigationItemRender = (item: NavItemType) => {
  if (item.list) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent px-2 py-1 text-[17px] font-medium text-gray-800 transition-colors">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!text-xl">
          <ul className="grid w-[300px] list-none gap-4 rounded-3xl bg-white p-4 shadow-lg">
            {item.list.map((subItem: string, index: number) => (
              <li key={index}>
                <NavigationMenuLink asChild>
                  <a href="#" className="block font-medium text-gray-800 hover:text-blue-600">
                    {subItem}
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
        className="font-medium text-gray-800 hover:text-blue-600"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const Navigation = () => {
  return (
    <NavigationMenu className="px-layout relative my-5">
      <NavigationMenuList className="list-none justify-center gap-[84px] text-xl">
        {data.map((item) => navigationItemRender(item))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;

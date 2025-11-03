import Header from "@/components/ui/Header/Header.tsx";
import Navigation from "@/components/ui/Navigation/Navigation.tsx";
import CarouselCard from "@/components/ui/CarouselCard/CarouselCard.tsx";

interface Props extends React.ComponentProps<"div"> {}

export const Home = ({ ...rest }: Props) => {
  return (
    <div className="grid h-32 min-h-screen text-white" {...rest}>
      <div>
        <Header />
        <Navigation />
        <h1 className="text-[56px] text-white">Центр зрения ДОКТОР ЛИНЗ</h1>
      </div>
      <CarouselCard />
    </div>
  );
};

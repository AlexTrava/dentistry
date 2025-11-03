import { Button } from "@/components";

const Header = () => {
  return (
    <header className="px-layout flex items-center justify-between gap-3.5 py-9 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.1)]">
      <img src="src/assets/header/header_logo.svg" alt="Header Logo" />
      <Button className="rounded bg-linear-(--color-gradient)" size="lg">
        Записаться онлайн
      </Button>
      <p className="text-text text text-xl">Ежедневно 09:00 – 21:00</p>
      <div className="flex items-center gap-5">
        <div className="flex flex-col items-center justify-center">
          <div className="text-text text-xl">8-383-209-17-18</div>
          <a href="tel:+83832091718" className="text-text">
            Обратный звонок
          </a>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Button
            variant="outline"
            size="icon"
            aria-label="WhatsUp"
            className="cursor-pointer rounded shadow-md transition-transform duration-300 hover:scale-125 hover:bg-white"
          >
            <img src="src/assets/header/WA.svg" alt="WhatsUp" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Telegram"
            className="cursor-pointer rounded shadow-md transition-transform duration-300 hover:scale-125 hover:bg-white"
          >
            <img src="src/assets/header/Telegram.svg" alt="Telegram" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

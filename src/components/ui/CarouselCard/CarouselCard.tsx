import { Button } from "@/components";

const CarouselCard = () => {
  return (
    <section className="relative flex min-h-[650px] items-stretch overflow-hidden bg-[linear-gradient(90deg,#0E7FA6_0%,#16B7C9_100%)] px-8 text-white md:px-16 lg:px-24">
      {/* Контейнер, который теперь занимает всю высоту секции */}
      <div className="mx-auto flex w-full max-w-[1700px] items-stretch justify-between gap-8 md:gap-14">
        {/* Левая часть — текст */}
        <div className="flex max-w-[750px] flex-1 flex-col justify-center">
          <h1 className="text-5xl leading-tight font-bold md:text-6xl">
            Центр зрения <br /> ДОКТОР ЛИНЗ
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Большой опыт успешной и безоперационной коррекции зрения. Наши клиенты остаются довольны
            клиникой на протяжении многих лет — это говорит о том, что мы ориентированы на
            долгосрочное сотрудничество.
          </p>

          <Button className="mt-10 flex items-center gap-2 bg-cyan-400 px-8 py-3 text-lg font-medium text-white transition hover:bg-cyan-300">
            Подробнее →
          </Button>
        </div>

        {/* Средняя часть — изображение врача */}
        <div className="relative flex h-full shrink-0 items-end justify-center">
          <img
            src="/src/assets/carouselCard/doctor1.svg"
            alt="Доктор ЛИНЗ"
            className="h-[600px] w-auto object-contain object-bottom transition-all lg:h-[650px]"
          />
        </div>

        {/* Правая часть — цифры */}
        <div className="flex shrink-0 flex-col justify-center gap-10 pl-4 text-left text-white max-md:hidden">
          <div>
            <p className="text-2xl font-semibold">15 лет</p>
            <p className="text-sm font-light">успешной работы</p>
          </div>

          <div>
            <p className="text-2xl font-semibold">Более</p>
            <p className="text-4xl leading-none font-bold">13 000</p>
            <p className="text-sm font-light">довольных пациентов</p>
          </div>

          <div>
            <p className="text-2xl leading-none font-bold">4 клиники</p>
            <p className="text-sm font-light">в Новосибирске и Кемерово</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselCard;

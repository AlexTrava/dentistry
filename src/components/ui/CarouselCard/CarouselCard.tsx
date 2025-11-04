import { Button } from "@/components";

const CarouselCard = () => {
  return (
    <section className="relative flex items-stretch gap-5 overflow-hidden bg-linear-(--color-gradient) pt-24 text-white max-md:pt-12 max-md:pb-12">
      {/* Контейнер */}
      <div className="px-layout flex w-full items-stretch justify-between max-xl:gap-8 max-lg:flex-col-reverse max-lg:items-center">
        {/* Левая часть — текст */}
        <div className="flex max-w-[600px] flex-col max-lg:items-center max-lg:text-center">
          <h1 className="text-5xl leading-tight font-bold max-md:text-4xl max-sm:text-3xl md:text-6xl">
            Центр зрения <br className="max-lg:hidden" /> ДОКТОР ЛИНЗ
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/90 max-lg:mt-4 max-md:text-base max-sm:text-sm">
            Большой опыт успешной и безоперационной коррекции зрения. Наши клиенты остаются довольны
            клиникой на протяжении многих лет — это говорит о том, что мы ориентированы на
            долгосрочное сотрудничество.
          </p>

          <Button className="bg-primary mt-10 max-w-[200px] rounded px-5 py-7 text-lg font-medium text-white transition max-lg:mt-6 max-md:px-6 max-md:py-4 max-md:text-base">
            Подробнее →
          </Button>
        </div>

        {/* Средняя часть — изображение врача */}
        <div className="relative flex h-full shrink-0 items-end justify-center max-lg:mt-10 max-lg:w-full">
          <img
            src="/src/assets/carouselCard/doctor3.png"
            alt="Доктор ЛИНЗ"
            className="max-h-[480px] w-auto object-contain object-bottom transition-all max-xl:max-h-[400px] max-lg:max-h-[350px] max-md:max-h-[300px]"
          />
        </div>

        {/* Правая часть — цифры */}
        <div className="flex shrink-0 flex-col justify-start gap-10 text-left text-white max-xl:gap-6 max-lg:flex-row max-lg:justify-center max-lg:gap-8 max-md:hidden">
          <div className="text-center max-lg:text-left">
            <h2 className="text-5xl leading-tight font-bold max-md:text-4xl md:text-6xl">15 лет</h2>
            <p className="text-sm font-light">успешной работы</p>
          </div>

          <div className="text-center max-lg:text-left">
            <p className="text-2xl font-semibold max-md:text-xl">Более</p>
            <h2 className="text-5xl leading-tight font-bold max-md:text-4xl md:text-6xl">13 000</h2>
            <p className="text-sm font-light">довольных пациентов</p>
          </div>

          <div className="text-center max-lg:text-left">
            <h2 className="text-5xl leading-tight font-bold max-md:text-4xl md:text-6xl">
              4 клиники
            </h2>
            <p className="text-sm font-light">в Новосибирске и Кемерово</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselCard;

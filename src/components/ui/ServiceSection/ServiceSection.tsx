import ServiceCard from "@/components/ui/ServiceCard/ServiceCard.tsx";

const ServiceSection = () => {
  return (
    <section className="pt-24">
      <h2 className="text-text text-center text-[40px] font-bold">Сервис клиники ДОКТОР ЛИНЗ</h2>
      <div className="pt mx-auto grid max-w-[1320px] grid-cols-12 gap-6 pt-10">
        <div className="col-span-6">
          <ServiceCard
            title="Запись на прием врача в клинике"
            text="Наши врачи – это специалисты высшей категории и кандидаты медицинских наук. Они диагностируют и остановят процесс ухудшения вашего зрения."
            srcImg="/src/assets/serviceCard/doctor3.png"
            button
            buttonText="Выбрать врача"
          />
        </div>

        <div className="col-span-6">
          <ServiceCard
            title="Выбрать услуги клиники"
            text="Диагностика, биометрия, подбор очков, линз и т.д. Консультация и быстрая запись на прием в удобное для вас время."
            srcImg="/src/assets/serviceCard/doctor3.png"
            button
            buttonText="Выбрать услугу"
          />
        </div>

        {/* Вторая строка — 3 маленькие карточки */}
        <div className="col-span-4">
          <ServiceCard
            title="Ночные линзы"
            text="Замедляют и останавливают развитие близорукости у детей и взрослых."
            srcImg="/src/assets/serviceCard/1.svg"
          />
        </div>

        <div className="col-span-4">
          <ServiceCard
            title="Диагностика"
            text="Диагностика зрения у детей и взрослых: бесконтактно и безболезненно, по Европейскому протоколу."
            srcImg="/src/assets/serviceCard/1.svg"
          />
        </div>

        <div className="col-span-4">
          <ServiceCard
            title="Оптика"
            text="Если вы нуждаетесь в коррекции зрения, мы подберем качественные и безопасные очки или линзы для глаз."
            srcImg="/src/assets/serviceCard/1.svg"
          />
        </div>
      </div>
      {/* Первая строка — 2 больших карточки */}
    </section>
  );
};

export default ServiceSection;

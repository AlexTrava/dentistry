import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselCard from "@/components/ui/CarouselCard/CarouselCard.tsx";

const HeroCarousel = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet bg-white/50 opacity-70 hover:opacity-100 transition-all duration-300",
          bulletActiveClass: "bg-white opacity-100",
        }}
        navigation={true}
        className="h-full w-full"
      >
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroCarousel;

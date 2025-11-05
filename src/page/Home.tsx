import Header from "@/components/ui/Header/Header.tsx";
import Navigation from "@/components/ui/Navigation/Navigation.tsx";
import HeroCarousel from "@/components/ui/Swiper/HeroCarousel.tsx";
import ServiceSection from "@/components/ui/ServiceSection/ServiceSection.tsx";

interface Props extends React.ComponentProps<"div"> {}

export const Home = ({ ...rest }: Props) => {
  return (
    <div className="grid min-h-screen text-white" {...rest}>
      <div>
        <Header />
        <Navigation />
      </div>
      <HeroCarousel />
      <ServiceSection />
    </div>
  );
};

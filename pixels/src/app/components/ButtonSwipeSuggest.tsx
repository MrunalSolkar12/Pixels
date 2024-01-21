// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export const ButtonSwipeSuggest: React.FC = () => {
  const userSuggestArr = [
    "cricket",
    "Fashion",
    "Toys",
    "Nature",
    "India",
    "Blue",
    "Black",
    "Cartoons",
    "New York",
    "Night",
    "Beaches",
    "Apple",
    "Bikes",
    "Cars",
  ];
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 4,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 6,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 7,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 9,
    },
  };

  return (
    <>
      <Swiper breakpoints={breakpoints} className="mySwiper my-3">
        {userSuggestArr.map((items, index) => (
          <SwiperSlide key={index}>
            {" "}
            <Button
              color="success"
              radius="sm"
              variant="ghost"
              className="text-black font-bold border-1 border-gray sm:text-md md:text-md lg:text-md 2xl:text-md"
            >
              {items}
            </Button>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

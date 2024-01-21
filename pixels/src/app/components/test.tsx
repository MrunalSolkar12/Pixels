import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom, EffectFade, Keyboard } from "swiper/modules";
import { UserContext } from "../context/context";
import { ImageContext } from "../context/context";
import { useContext, useState, useEffect, use } from "react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/effect-fade";

// ... (your other imports)

export const Mrunal: React.FC = () => {
  const { state } = useContext(UserContext);
  const {imgdispatch} = useContext(ImageContext);
  const [swipeImage, setSwipeImage] = useState<number>(state.imageIndexNumber);
  const [swiper, setSwiper] = useState<any>(null);
  console.log("Swiper Image3333:",state);

  useEffect(() => {
    // Update Swiper's active slide when swipeImage changes
    if (swiper) {
      swiper.slideTo(swipeImage);
    }
  }, [swipeImage]);


 /// console.log("jkdk",state.storeImagesUrls.length,swipeImage);
  const handleNextImage = () => {
    if (swipeImage < state.storeImagesUrls.length -1) { // Check the array length and image index number 
      setSwipeImage((prev) => prev + 1);
      imgdispatch({type:"IMGLOAD",payload:{imgdownloadUrl:state.storeImagesUrls[swipeImage + 1],AllImageDetails:state.AllImageData,imgIndexNumber:state.imageIndexNumber}});
    }
  };

  const handlePrevImage = () => { //Check the array length and image index number 
    if (swipeImage > 0) {
      setSwipeImage((prev) => prev - 1);
      imgdispatch({type:"IMGLOAD",payload:state.storeImagesUrls[swipeImage - 1]});
    }
  };

  return (
    <>
      <div className="flex">
        <button
          className="text-black mr-5 md:mr-10 lg:mr-20 2xl:mr-20"
          onClick={handlePrevImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>
        <Swiper
          effect={"fade"}
          slidesPerView={1}
          navigation={true}
          modules={[Zoom, EffectFade, Keyboard, Navigation]}
          className="mySwiper"
          zoom={true}
          onSwiper={(swiper) => setSwiper(swiper)}
          keyboard={{
            enabled: true,
          }}
        >
          <SwiperSlide key={swipeImage}>
            <div className="swiper-zoom-container">
              <Image
                alt="swipeImage"
                src={state.storeImagesUrls[swipeImage]}
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          className="text-black ml-5 md:ml-10 lg:ml-20 2xl:ml-20"
          onClick={handleNextImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

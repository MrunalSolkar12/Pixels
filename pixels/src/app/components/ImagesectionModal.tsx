"use client"
import { Imagesection } from "./Imagesection";
import { ImageModal } from "./ImageModal";
import { useState } from "react";

export default function ImagesectionModal(): JSX.Element {
  const [imageClick, setImageClick] = useState<boolean>(false);

  console.log("imageClick", imageClick);

  const handleImageModal = () => {
    setImageClick(false);
  };



  return (
    <>
      <Imagesection setImageClick={setImageClick}/>
      <ImageModal imageClick={imageClick} handleImageModal={handleImageModal}/>
    </>
  );
}

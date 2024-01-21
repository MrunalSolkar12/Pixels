"use client"
import { SearchImageSection } from "./SearchImageSection";
import { ImageModal } from "./ImageModal";
import { useState } from "react";

export default function SearchSectionModal(): JSX.Element {
  const [imageClick, setImageClick] = useState<boolean>(false);

  console.log("imageClick", imageClick);

  const handleImageModal = () => {
    setImageClick(false);
  };



  return (
    <>
      <SearchImageSection setImageClick={setImageClick}/>
      <ImageModal imageClick={imageClick} handleImageModal={handleImageModal}/>
    </>
  );
}

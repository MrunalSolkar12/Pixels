"use client";
import React, {
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import { ImageViewsection } from "./ImageViewsection ";
import { User } from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import { useContext } from "react";
import { UserContext } from "../context/context";
import { ImageContext } from "../context/context";
import {saveAs} from "file-saver";
import {Mrunal} from "./test";




interface ImageModalProps {
  imageClick: Dispatch<SetStateAction<boolean>>;
  handleImageModal: Dispatch<SetStateAction<boolean>>;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  imageClick,
  handleImageModal,
}) => {
  const [handleViewImageApi, setHandleViewImageApi] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { state } = useContext(UserContext);
  const {imgstate,imgdispatch} =useContext(ImageContext);
  console.log("UserData111:", state);
  console.log("ImgState2222:", imgstate);
  
  
  const handleOpen = () => {
    onOpen();
  };

  useEffect(() => {
    if (imageClick) {
      //It is not an error it is a typescript warning.
      handleOpen();
    }
  }, [imageClick]);

  const handleClose = () => {
    onClose();
    imgdispatch({type:"IMGLOAD",payload:undefined});
    handleImageModal(); //It is not an error it is a typescript warning. // update the state to false;
  };

  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      if (!container) return "hello";

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      //console.log("scrollTop",scrollTop)
      //console.log("scrollHeight",scrollHeight)
      //console.log("clientHeight",clientHeight)

      // Check if the scroll position is at the bottom
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("Reached the end of the scroll!");
        setHandleViewImageApi(true);
        // Perform your desired action here, such as fetching more data
      }
    };

    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(()=>{

  },[imgstate]);

  //Download the Image
  const downloadImage = async (imgUrl:string) => {
    let url = imgUrl;
     try {
       
         if (url != "") {
           let Imagename = JSON.stringify(url).split("-");
           saveAs(url, Imagename[1]);
         }
     } catch (error) {
       console.log(error);
     }
   };

  
   
  return (
    <>
      <NextUIProvider>
        <Modal
          size="5xl"
          isOpen={isOpen}
          onClose={handleClose}
          scrollBehavior="inside"
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-start gap-1">
                  <User
                    name={state.userName}
                    description={state.location}
                    avatarProps={{
                      src: `${state.userImg}`,
                    }}
                  />

                  <Button
                    className="ml-5"
                    variant="ghost"
                    color="danger"
                    aria-label="Like"
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
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    {state.imgLikes}
                  </Button>
                </ModalHeader>
                <ModalBody ref={scrollRef}>
                  <div className="flex justify-center">
                    <Mrunal/>
                  </div>
                  <ImageViewsection
                    handleViewImageApi={handleViewImageApi}
                    setHandleViewImageApi={setHandleViewImageApi}
                  />
                </ModalBody>
                <ModalFooter>
                  <button>
                    <a href={state.socialLink.instagram}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M17.636 7h.012"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    </a>
                  </button>
                  <button>
                  <a href={state.portfolioUrl}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.14 21.62c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    </a>
                  </button>
                  <Button color="success" variant="light" onClick={()=>downloadImage(state.imgUrl)}>
                    Download
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </NextUIProvider>
    </>
  );
};

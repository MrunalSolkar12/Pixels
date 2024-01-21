"use client";
import {Image} from "@nextui-org/react";
import React, { Dispatch, SetStateAction } from 'react';
import { useEffect, useState,useContext,useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImagePageLoader from "./Loader/Loader";
import { saveAs } from "file-saver";
import { UserContext } from "../context/context";
import { SwipeImgContext } from "../context/context";
import {Tabs, Tab} from "@nextui-org/react"; 
import {Divider} from "@nextui-org/react";


export const GalleryIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
    fill="none"
   
  >
    <path d="M2.58078 19.0112L2.56078 19.0312C2.29078 18.4413 2.12078 17.7713 2.05078 17.0312C2.12078 17.7613 2.31078 18.4212 2.58078 19.0112Z" fill="currentColor"/>
    <path d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z" fill="currentColor"/>
    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z" fill="currentColor"/>
  </svg>
); 


export const MusicIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
    fill="none"
  >
    <path d="M9.66984 13.9219C8.92984 13.9219 8.33984 14.5219 8.33984 15.2619C8.33984 16.0019 8.93984 16.5919 9.66984 16.5919C10.4098 16.5919 11.0098 15.9919 11.0098 15.2619C11.0098 14.5219 10.4098 13.9219 9.66984 13.9219Z" fill="currentColor"/>
    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.12 9.8C17.12 10.41 16.86 10.95 16.42 11.27C16.14 11.47 15.8 11.58 15.44 11.58C15.23 11.58 15.02 11.54 14.8 11.47L12.51 10.71C12.5 10.71 12.48 10.7 12.47 10.69V15.25C12.47 16.79 11.21 18.05 9.67 18.05C8.13 18.05 6.87 16.79 6.87 15.25C6.87 13.71 8.13 12.45 9.67 12.45C10.16 12.45 10.61 12.59 11.01 12.8V8.63V8.02C11.01 7.41 11.27 6.87 11.71 6.55C12.16 6.23 12.75 6.15 13.33 6.35L15.62 7.11C16.48 7.4 17.13 8.3 17.13 9.2V9.8H17.12Z" fill="currentColor"/>
  </svg>
);

export const VideoIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="24"
    role="presentation"
    viewBox="0 0 24 24"
    width="24"
    fill="none"
  >
    <path d="M14.7295 2H9.26953V6.36H14.7295V2Z" fill="currentColor"/>
    <path d="M16.2305 2V6.36H21.8705C21.3605 3.61 19.3305 2.01 16.2305 2Z" fill="currentColor"/>
    <path d="M2 7.85938V16.1894C2 19.8294 4.17 21.9994 7.81 21.9994H16.19C19.83 21.9994 22 19.8294 22 16.1894V7.85938H2ZM14.44 16.1794L12.36 17.3794C11.92 17.6294 11.49 17.7594 11.09 17.7594C10.79 17.7594 10.52 17.6894 10.27 17.5494C9.69 17.2194 9.37 16.5394 9.37 15.6594V13.2594C9.37 12.3794 9.69 11.6994 10.27 11.3694C10.85 11.0294 11.59 11.0894 12.36 11.5394L14.44 12.7394C15.21 13.1794 15.63 13.7994 15.63 14.4694C15.63 15.1394 15.2 15.7294 14.44 16.1794Z" fill="currentColor"/>
    <path d="M7.76891 2C4.66891 2.01 2.63891 3.61 2.12891 6.36H7.76891V2Z" fill="currentColor"/>
  </svg>
);


interface ImagesectionProps {
  setImageClick: Dispatch<SetStateAction<boolean>>;
}

export const Imagesection: React.FC<ImagesectionProps> = ({setImageClick}) => {
  interface ImageProps {
    id: string;
    urls: {
      regular: string;
    };
    alt_description: string;
    user:{
      username:"string";
      portfolio_url:"string";
      profile_image:{
        medium:"string"
      };
      social:{
        instagram_username:"string";
      }
      location:"string"
    };
    likes:number;
    width: number;
    height: number;
    srcSet: string;
  }


  interface ImageDetailsProps {
    imageIndexNumber: number;
    imgLikes: number;
    imgUrl: string;
    location: string;
    portfolioUrl: string;
    socialLink: {
      instagram: string;
    };
    storeImagesUrls: string[];
    userImg: string;
    userName: string;
  }
  
  //UseState Section
  const [ApiImage, setApiImage] = useState<ImageProps[] | undefined>([]);
  const [pages, setPages] = useState<number>(0);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [imageHoverIndex,setImageHoverIndex] = useState<number | null>(null);
  const [imageHoverArray, setImageHoverArray] = useState<boolean[]>(Array(ApiImage?.length).fill(false));
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageLoading,setImageLoading] = useState<boolean>(false);
  const [ApiError,setApiError] = useState<boolean>(false);
  const [storeImages,setStoreImages] = useState<string[]>([]);
  const [allImageData, setAllImageData] = useState<ImageDetailsProps[]>([]);


  const {dispatch} = useContext(UserContext);
  const {swipeimgdispatch} = useContext(SwipeImgContext);
 

  
  useEffect(() => {
    try {
      setIsLoading(true);

      fetch(
        `https://api.unsplash.com/photos/?client_id=YdDQN2fIB-_47KYeRzoHJ7lR5kulg-FfM2pcHZIq1NE&page=${pages}&orientation=landscape`,
        { cache: "no-store" }
      )
        .then((response) => response.json())
        .then((newdata) => {
          console.log(newdata);
          setApiImage((prev) => (prev ? [...prev, ...newdata] : newdata));
          const storeImgUrls = newdata.map((item:any)=>item.urls.regular);
          setStoreImages((prev)=>(prev? [...prev,...storeImgUrls] : storeImgUrls));

          const newImageData = newdata.map((item: any) => ({
            // Map the data for each image to the new structure
            imageIndexNumber: 0, // Replace with the actual index
            imgLikes: item.likes,
            imgUrl: item.urls.regular,
            location: item.user.location,
            portfolioUrl: item.user.portfolio_url,
            socialLink: {
              instagram: `https://www.instagram.com/${item.user.social.instagram_username}`,
            },
            storeImagesUrls: [], 
            userImg: item.user.profile_image.medium,
            userName: item.user.username,
            // ... Other existing fields ...
          }));

          // Update the state to include the new image data
          setAllImageData((prev) => (prev ? [...prev, ...newImageData]:newImageData));

        })
        .catch((error) => {
          console.log("API Error", error);
          setApiError(true);
        })
        
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  }, [pages]);


  function fetchData():void {
    setPages((prev) => prev + 1);
  }



  const handleMouseEnter = useMemo(
    () => (index: number): void => {
     // console.log("Mouse Enter", index);
      setImageHoverArray((prev) => {
        const newHoverArray = [...prev];
        newHoverArray[index] = true;
        return newHoverArray;
      });
      setImageHoverIndex(index);
      //console.log(index);
    },
    [setImageHoverArray, setImageHoverIndex]
  );

  const handleMouseLeave = useMemo(
    () => (index: number): void => {
      //console.log("Mouse Leave", index);
      setImageHoverArray((prev) => {
        const newHoverArray = [...prev];
        newHoverArray[index] = false;
        return newHoverArray;
      });
      setImageHoverIndex(null);
    },
    [setImageHoverArray, setImageHoverIndex]
  );

  //Download the Image
  const downloadImage = async (imgUrl:string) => {
   let url = imgUrl;
    try {
      if(imageLoading){
        if (url != "") {
          let Imagename = JSON.stringify(url).split("-");
          saveAs(url, Imagename[1]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleImageClick = (photo:any,index:number)=>{
    if(imageLoading){
    setImageClick(true)
    dispatch({type:"USER",
      payload:{imgUrl:photo.urls.regular,userName:photo.user.username,userImg:photo.user.profile_image.medium,location:photo.user.location,imgLikes:photo.likes,socialLink:{instagram:`https://www.instagram.com/${photo.user.social.instagram_username}`},
      portfolioUrl:photo.user.portfolio_url,imageIndexNumber:index,storeImagesUrls:storeImages}})
      
    swipeimgdispatch ({type:"SWIPEIMG",payload:{imgUrl:photo.urls.regular,userName:photo.user.username,userImg:photo.user.profile_image.medium,location:photo.user.location,imgLikes:photo.likes,socialLink:{instagram:`https://www.instagram.com/${photo.user.social.instagram_username}`},
      portfolioUrl:photo.user.portfolio_url,imageIndexNumber:index,storeImagesUrls:storeImages,AllImageData:allImageData}});
  }
}

 // console.log("storeImageUrls",storeImages);
  //console.log("allImageData",allImageData);
 
  return (
    <>

<div className="flex justify-center mt-10">
      <Tabs  disabledKeys={["music","videos"]} aria-label="Options" color="success" variant="underlined" radius="lg">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2 font-medium sm:text-md text-xl ">
              <GalleryIcon/>
              <span>Photos</span>
            </div>
          }
        />
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2 font-medium sm:text-md text-xl">
              <MusicIcon/>
              <span>Music</span>
            </div>
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2 font-medium sm:text-md text-xl">
              <VideoIcon/>
              <span>Videos</span>
            </div>
          }
        />
      </Tabs>
    </div>  

    <Divider orientation="horizontal" className="sm:hidden mt-5"/>   

      <div className="mx-5 lg:mx-20 2xl:mx-64">
        <div className="grid grid-row-1 text-2xl lg:grid-row-12 font-bold 2xl:text-3xl py-10">
          Free Stock Photos
        </div>

        <InfiniteScroll
          dataLength={ApiImage ? ApiImage.length : 0} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<div className="font-bold text-xl">Loading ...</div>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        
        { 
        ApiError ? <ImagePageLoader/> : 
        (
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
            {ApiImage
              ? ApiImage.map((photo, index) => (
                  <div
                    key={index}
                    className="relative"
                    style={{
                      gridRowEnd: `span ${Math.ceil(
                        photo.height / photo.width
                      )}`,
                    }}

                    onMouseEnter={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave(index)}
                    onClick={()=>{handleImageClick(photo,index)}}
                      
                  >
                    <div
                      className="image-container"
                    >
                      <Image
                        src={photo.urls.regular}
                        alt={photo.alt_description}
                        width={photo.width}
                        height={photo.height}
                       loading="lazy"
                       className="z-0"
                       onLoad={()=>setImageLoading(true)}
                       
                      />

                      { 
                        imageHoverArray[index] &&(
                      <button
                      onClick={()=>{downloadImage(photo.urls.regular)}}
                      className="absolute z-1 top-4 right-4 sm:bg-transparent text-white lg:bg-white lg:text-black lg:px-3 lg:py-2 lg:rounded-md lg:hover:bg-gray-300 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                          />
                        </svg>
                      </button>
                      
                      )}
                    </div>
                  </div>
                ))
              : null}
          </div>
)}
        </InfiniteScroll>
      </div>
    </>
  );
}

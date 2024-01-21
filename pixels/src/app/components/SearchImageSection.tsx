"use client";
import {Image} from "@nextui-org/react";
import React, { Dispatch, SetStateAction } from 'react';
import { useEffect, useState,useContext,useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImagePageLoader from "./Loader/Loader";
import { saveAs } from "file-saver";
import { UserContext } from "../context/context";
import { ImageContext } from "../context/context";
import LoadingBar from 'react-top-loading-bar';
import { ButtonSwipe } from "./ButtonSwipe";


interface SearchImageSectionProps {
  setImageClick: Dispatch<SetStateAction<boolean>>;
}

export const SearchImageSection: React.FC<SearchImageSectionProps> = ({setImageClick}) => {
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
  
  //UseState Section
  const [ApiImage, setApiImage] = useState<ImageProps[] | undefined>(undefined);
  const [pages, setPages] = useState<number>(0);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [imageHoverIndex,setImageHoverIndex] = useState<number | null>(null);
  const [imageHoverArray, setImageHoverArray] = useState<boolean[]>(Array(ApiImage?.length).fill(false));
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ApiError,setApiError] = useState<boolean>(false);
  const [imageLoading,setImageLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0)
  const [storeImages,setStoreImages] = useState<string[]>([]);


  const {dispatch} = useContext(UserContext);
  const {imgstate} = useContext(ImageContext);
 
  // Get individual parameters
const currentURL = window.location.href;
//console.log("param1",currentURL);

const data=currentURL.split("?");

//console.log("encodedData",encodedData); calling when image  is hover
//console.log("param12",param1[1]);

  
  useEffect(() => {
    try {
      setIsLoading(true);
       console.log("page:",pages);
       console.log("fetching API:",`https://api.unsplash.com/search/photos?page=${pages}&query=${data[1]}&client_id=YKQggzXZr8XE8LSx_WeINtCsJvmqggkejq4DXEGk8N0`);

       if ((data[1] !== undefined)){ 
      fetch(
        `https://api.unsplash.com/search/photos?page=${pages}&query=${data[1]}&client_id=YKQggzXZr8XE8LSx_WeINtCsJvmqggkejq4DXEGk8N0`,
        { cache: "no-store" }
      )
        .then((response) => response.json())
        .then((newdata) => {
          console.log(newdata);
          const data = newdata.results;
          setApiImage((prev) => (prev ? [...prev, ...data] : data));
          const storeImgUrls = newdata.results.map((item:any)=>item.urls.regular);
          setStoreImages((prev)=>(prev? [...prev,...storeImgUrls] : storeImgUrls));
        })
        .catch((error) => {
          console.log("API Error", error);
          setApiError(true);
        })
      }  
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  }, [pages,data[1]]);

  



  function fetchData():void {
    setPages((prev) => prev + 1);
  }

  function handleCharacterCapitalize(str) {
    // Check if the input is a valid string
    if (typeof str !== 'string' || str.length === 0) {
      return str;
    }
  
    // Capitalize the first letter and concatenate the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
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


  const handleImageClick = (photo:any,index:any)=>{
    if(imageLoading){
    setImageClick(true)
    dispatch({type:"USER",
      payload:{imgUrl:photo.urls.regular,userName:photo.user.username,userImg:photo.user.profile_image.medium,location:photo.user.location,imgLikes:photo.likes,
        socialLink:{instagram:`https://www.instagram.com/${photo.user.social.instagram_username}`},portfolioUrl:photo.user.portfolio_url,imageIndexNumber:index,storeImagesUrls:storeImages}})
  }
}


 
  return (
    <>
       <LoadingBar color="#f11946" progress={imgstate != false ? imgstate : 100} onLoaderFinished={() => setProgress(0)} height={3}/>
      <div className="mx-5 lg:mx-20 2xl:mx-64">
      <ButtonSwipe/>
        <div className="grid grid-row-1 text-4xl lg:grid-row-12 font-bold lg:text-4xl 2xl:text-5xl py-10">
         
         {`${handleCharacterCapitalize(data[1])} images`}
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

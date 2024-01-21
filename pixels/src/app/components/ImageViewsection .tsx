"use client";
import {Image} from "@nextui-org/react";
import { useEffect, useState,Dispatch,SetStateAction,useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {saveAs} from "file-saver";
import { UserContext } from "../context/context";
import { ButtonSwipeSuggest } from "./ButtonSwipeSuggest";

interface ImageViewsectionProps{
  handleViewImageApi:boolean;
  setHandleViewImageApi:Dispatch<SetStateAction<boolean>>;
}

export const ImageViewsection:React.FC<ImageViewsectionProps>=({handleViewImageApi,setHandleViewImageApi})=> {
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
  const [imageLoading,setImageLoading] = useState<boolean>(false);
  const [storeImages,setStoreImages] = useState<string[]>([]);


  const {dispatch} = useContext(UserContext);

 


  // Event listener for scroll
 /* window.addEventListener("scroll", () => {
    if (isScrollAtEnd()) {
      // Do something when the scroll is at the middle
      console.log("Scroll is at the End!");
      setPages((prev) => prev + 1);
    }
  });
*/
  useEffect(()=>{
      if(handleViewImageApi){
        setPages((prev) => prev + 1);
      }
      setHandleViewImageApi(false);
  },[handleViewImageApi])

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
        })
        .catch((error) => {
          console.log("API Error", error);
        })
        
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  }, [pages]);


  function fetchData():void {
    setPages((prev) => prev + 1); 
  } 




  const handleMouseEnter = (index: number): void => {
    //console.log("mouse Entered");
    setImageHoverArray((prev) => {
      const newHoverArray = [...prev];
      newHoverArray[index] = true;
      return newHoverArray;
    });
    setImageHoverIndex(index);
  };
  
  const handleMouseLeave = (index: number): void => {
    //console.log("mouse Leave");
    setImageHoverArray((prev) => {
      const newHoverArray = [...prev];
      newHoverArray[index] = false;
      return newHoverArray;
    });
    setImageHoverIndex(null);
  };

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

  return (
    <>
      <div className="mx-1 lg:mx-20 2xl:mx-0">
        <div className="grid grid-row-1  lg:grid-row-12 font-bold text-3xl  pt-10 pb-3 text-black">
          More like this
        </div>
        <ButtonSwipeSuggest/>

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
                    onClick={()=>{
                      dispatch({type:"USER",
                        payload:{imgUrl:photo.urls.regular,userName:photo.user.username,userImg:photo.user.profile_image.medium,location:photo.user.location,imgLikes:photo.likes,
                          socialLink:{instagram:`https://www.instagram.com/${photo.user.social.instagram_username}`},portfolioUrl:photo.user.portfolio_url,imageIndexNumber:index,storeImagesUrls:storeImages}})}}
                   
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

        </InfiniteScroll>
      </div>
    </>
  );
}

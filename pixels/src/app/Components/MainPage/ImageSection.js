"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
//import Page from "../ImageView/page";
import { UserContext } from "@/app/Context/context";
import { useContext } from "react";
import { saveAs } from "file-saver";
//import Loader from "../SearchPage/Loader";
import Image from "next/image";
import ViewImage2 from "../ImageView/ViewImage2";

const Card = ({
  imageUrl,
  index,
  handleHover,
  isHovered,
  userData,
  openModal,
}) => {
  //useState
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [cardBackgroundColor, setCardBackgroundColor] = useState(
    getRandomColor()
  );
  const [isDownloadVisible, setDownloadVisible] = useState(false);

  const imageRef = useRef(null);

  const router = useRouter();
  const { state, dispatch } = useContext(UserContext);

  //When user hover to an image only that particular image card gets hover and not all.
  const handleMouseEnter = () => {
    handleHover(index); //Here index is the unique index number og every image.
    setDownloadVisible(true);
  };

  // When user does not hover to an image only that particular image card gets hover and not all.
  const handleMouseLeave = () => {
    handleHover(null);
    setDownloadVisible(false);
  };

  //When user click to an image it will redirect to ImageView Page.
  const routetonext = (
    imageurl,
    Total_like,
    alt_description,
    photographername,
    photographerimage,
    description,
    photographerinstaid,
    photographerloc,
    photogtwitterid,
    width,
    height,
    isFromButton
  ) => {
    if (isFromButton) {
      console.log("hello");
    } else {
      //router.push('/Components/ImageView');//It will navigate to ImageView Page on click of an iamge.
      console.log(
        "before dispatch:",
        imageurl,
        Total_like,
        alt_description,
        photographername,
        photographerimage,
        description,
        photographerinstaid,
        photographerloc
      );
      //Here we are dispatching the image to the ImageView Page.
      dispatch({
        type: "USER",
        payload: {
          url: imageurl,
          total_like: Total_like,
          alt_desc: alt_description,
          pimage: photographerimage,
          pname: photographername,
          pdesc: description,
          instaid: photographerinstaid,
          location: photographerloc,
          photogtwitterid: photogtwitterid,
          width: width,
          height: height,
        },
      });
    }
  };

  //When User click on downlaod button the image will get download with different file name.
  const downloadImage = (imgvalue, event) => {
    event.stopPropagation();
    let url = imgvalue;
    try {
      // eslint-disable-next-line eqeqeq
      if (url != "") {
        let Imagename = JSON.stringify(imgvalue).split("-");
        saveAs(url, Imagename[1]);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function getRandomColor() {
    // Generate a random color in hex format (#RRGGBB)
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  return (
    <>
      <div
        className="relative overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isImageLoaded ? "transparent" : cardBackgroundColor,
        }}
        onClick={() => {
          openModal();
          routetonext(
            userData.urls.regular,
            userData.likes,
            userData.alt_description,
            userData.user.first_name,
            userData.user.profile_image.medium,
            userData.description,
            userData.user.instagram_username,
            userData.user.location,
            userData.user.social.twitter_username,
            userData.width,
            userData.height,
            false
          );
        }}
      >
        <Image
          src={imageUrl}
          alt="Card"
          width={userData.width}
          height={userData.height}
          srcset={`${userData.urls.small} 1x,${userData.urls.regular} 2x,${userData.urls.full} 3x`}
          className="w-full h-full object-cover"
        />

        {isHovered && isDownloadVisible && (
          <div>
          <div
          className="absolute bottom-4 left-4   rounded-full overflow-hidden "
          
        >
          <img
                                src={userData.user.profile_image.medium}
                                srcset={`${userData.user.profile_image.medium} 1x,${userData.user.profile_image.medium} 2x`}
                                alt={userData.user.name}
                                width="50"
                                height="50"
                                
                              />
        </div>
        <div
          className="absolute bottom-8 left-20 text-white font-medium  rounded-full overflow-hidden "
          
        >
         {userData.user.name}
        </div>

          <button
            className="absolute bottom-4 right-4 bg-white text-black px-3 py-2 rounded-md hover:bg-gray-300 "
            onClick={(event) => downloadImage(userData.urls.regular, event)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
              />
            </svg>
          </button>
          </div>
        )}

        {/*isImageLoaded || (
      <div className="absolute inset-0 flex items-center justify-center">
       <Loader/>
      </div>
      )*/}
      </div>
    </>
  );
};

///----------------------------------------------------------------------- Image Section Components Starts-----------------------------------------///
export default function ImageSection() {
  const [Images, setImages] = useState([]);
  const [page, setPage] = useState(3);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isloading, setLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { state, dispatch } = useContext(UserContext);
  console.log("closeModal:", state);

  const handleHover = (index) => {
    setHoveredCard(index);
  };

  const handleInfiniteScroll = async () => {
    //console.log("scrollheight",document.documentElement.scrollHeight);
    //console.log(window.innerHeight + document.documentElement.scrollTop + 1);
    //console.log("innerheight",window.innerHeight);
    //console.log("scrollTop",document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
        //setPage(page+1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=YdDQN2fIB-_47KYeRzoHJ7lR5kulg-FfM2pcHZIq1NE&page=${page}&orientation='landscape'`,
      { cache: "no-store" }
    ) // Calling the API
      //let data = await fetch(`https://dummyjson.com/users`,{cache:"no-store"});
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setImages((prev) => [...prev, ...data]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll); //Event to which will get trigger on scroll
  }, []);

  useEffect(() => {
    setIsOpenModal(state);
  }, [state]);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const dataArr = Array.from(Images);

  return (
    <>
      <div>
        {/*<!-- Featured section  Starts-->*/}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Free Stock Photos
            </h2>
            <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
              {isloading ? (
                <div className="text-black">Loading....</div>
              ) : (
                dataArr.map((product, index) => (
                  <Card
                    key={index}
                    imageUrl={product.urls.full}
                    index={index}
                    handleHover={handleHover}
                    isHovered={index === hoveredCard}
                    userData={product}
                    openModal={openModal}
                  />
                ))
              )}
            </div>
          </div>
        </section>
        {isOpenModal && <ViewImage2 />}
        {/*<!-- Featured section Ends-->*/}
      </div>
    </>
  );
}
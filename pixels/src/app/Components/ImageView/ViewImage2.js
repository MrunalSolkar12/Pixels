"use client";
import ImageViewSection from "./ImageViewSection";
import { User } from "@nextui-org/react";
import { UserContext } from "@/app/Context/context";
import { UserContext1 } from "@/app/Context/context";
import { useContext } from "react";
import { useRef, useEffect, useState } from "react";
import "./ViewImage.css";
import { saveAs } from "file-saver";



export default function ViewImage2() {
  const [page, setPage] = useState(7);
  const { state, dispatch } = useContext(UserContext);
  const { state1, dispatch1 } = useContext(UserContext1);

  const ClosedModal = () => {
    dispatch({ type: "USER", payload: false });
  };
  const contentRef = useRef();

  const handleScroll = () => {
    const contentElement = contentRef.current;
    if (contentElement) {
      const scrollTop = contentElement.scrollTop;

      const scrollHeight = contentElement.scrollHeight;

      const clientHeight = contentElement.clientHeight;

      if (scrollTop + clientHeight + 10 > scrollHeight) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (contentElement) {
        contentElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    dispatch1({ type: "PAGE", payload: page });
  }, [page]);

  const isSmallScreen = window.innerWidth <= 640;

  //When User click on downlaod button the image will get download with different file name.
  const downloadImage = (imgvalue) => {
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


  return (
    <div>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          {isSmallScreen ? (
            <div
              className="inline-block bg-white rounded-lg p-4 sm:p-6 shadow-xl transform transition-all max-w-full sm:max-w-8xl sm:my-8 sm:align-middle"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              style={{ maxHeight: "90vh", overflowY: "auto" }}
              ref={contentRef}
            >
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  onClick={ClosedModal}
                  data-behavior="cancel"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="sm:flex sm:items-start">
                <div className="w-full sm:w-20 flex justify-center sm:justify-start">
                  <User
                    className="w-20"
                    src="https://randomuser.me/api/portraits/men/46.jpg"
                    name=""
                  />
                </div>

                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3
                    className="text-lg leading-6 mt-2 font-medium text-gray-900 sm:hidden"
                    id="modal-headline"
                  >
                    Mrunal
                  </h3>

                  <div className="flex flex-row justify-between mt-2 sm:hidden">
                    <button className="bg-bg font-medium text-center text-sm border border-gray rounded-md shadow-yellow py-2 px-3 hover:border-black focus:outline-none ">
                      <div className="flex flex-row ">
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
                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                          />
                        </svg>
                        <p className="pl-2 text-base">Collect</p>
                      </div>
                    </button>
                    <button className="bg-bg font-medium text-center text-sm border border-gray rounded-md shadow-yellow py-2 px-3 hover:border-black focus:outline-none ">
                      <div className="flex flex-row">
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
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <p className="pl-1 text-base">Likes</p>
                      </div>
                    </button>
                    <button className="font-bold text-center text-sm border-black rounded-md shadow-yellow py-2 px-6 bg-green-500 hover:bg-green-700 focus:outline-none">
                      <div className="flex flex-row">
                        <p className="text-base">Free Download</p>
                      </div>
                    </button>
                  </div>

                  <div className="mt-2">
                    <ImageViewSection />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-8xl  sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              style={{ maxHeight: "90vh", overflowY: "auto" }}
              ref={contentRef}
            >
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  onClick={() => ClosedModal()}
                  data-behavior="cancel"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0  sm:text-left">
                  {/*User Details and Buttons Starts*/}

                  <div
                    className=" desktop:visible oversized:invisible flex justify-between items-center flex-wrap mb-15 pt-30 pb-15"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* userImages and name*/}
                    <div className="flex ">
                      <a
                        rel="nofollow"
                        className="Link_link__mTUkz clickable_clickable__Klxi1 spacing_noMargin__Q_PsJ"
                        href="/@shkrabaanthony/"
                      >
                        <div className="TooltipShell_container__ROul9">
                          <div>
                            <div className="rounded-full overflow-hidden">
                              <img
                                src={state.pimage}
                                srcset={`${state.pimage} 1x,${state.pimage} 2x`}
                                alt={state.pname}
                                className="spacing_noMargin__Q_PsJ"
                                width="50"
                                height="50"
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="px-3">
                        <a
                          rel="nofollow"
                          className="Link_link__mTUkz clickable_clickable__Klxi1 spacing_noMargin__Q_PsJ"
                          href="https"
                        >
                          <h5 className="text-text text-h18 text-midnight2C343E no-margin text-ellipsis  font-bold">
                            {state.pname}
                          </h5>
                          <h5 className="text-gray-300  no-margin text-ellipsis font-medium hover:text-gray-500">
                            <a href="https://www.instagram.com/hikiapp/">
                              Follow
                            </a>
                          </h5>
                        </a>
                      </div>
                    </div>
                    {/* userImages and name*/}

                    {/*--------------- */}

                    <nav className="inline-flex space-x-2.5  mr-5">
                      <a
                        className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-black"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 mr-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                        Likes
                        <p className="pl-2 text-gray-400">{state.total_like}</p>
                      </a>

                      <a
                        className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-black "
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 48 48"
                        >
                          <linearGradient
                            id="Bzs3Q20SDmnq8e419w3cTa_EZQdGLNeo7JI_gr1"
                            x1="40.097"
                            x2="7.182"
                            y1="297.569"
                            y2="333.871"
                            gradientTransform="matrix(1 0 0 -1 0 340)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#823af3"></stop>
                            <stop offset=".36" stop-color="#4b66e1"></stop>
                            <stop offset=".906" stop-color="#01f1c4"></stop>
                          </linearGradient>
                          <path
                            fill="url(#Bzs3Q20SDmnq8e419w3cTa_EZQdGLNeo7JI_gr1)"
                            fill-rule="evenodd"
                            d="M37.722,6.506H9.073c-1.758,0-3.183,1.425-3.183,3.183	v28.649c0,1.758,1.425,3.183,3.183,3.183h28.649c1.758,0,3.183-1.425,3.183-3.183V9.689C40.905,7.931,39.48,6.506,37.722,6.506z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="none"
                            stroke="#1d1d1b"
                            stroke-miterlimit="10"
                            d="M30.123,30.343c-1.176,1.081-1.94,1.825-3.651,2.699 c-0.98,0.489-2.083,0.784-3.123,0.784c-3.12,0-4.642-2.873-4.945-5.354c-0.777-6.366,4.816-15.115,8.716-15.115 c0.91,0,1.722,0.791,1.873,2.024c0.234,1.919,0.196,3.279-1.788,4.936c-0.217,0.181-0.281,0.474-0.169,0.648 c0.169,0.259,0.702,0.286,1.779-0.259c2.11-1.065,2.871-2.709,2.639-4.612c-0.259-2.112-2.102-3.88-4.573-3.88 c-1.202,0-2.523,0.359-3.704,1.078c-5.143,3.133-8.462,10.283-7.795,15.735c0.211,1.73,0.93,3.624,2.289,4.897 c0.916,0.848,2.571,1.893,4.523,1.893c2.113,0,3.897-0.816,5.497-1.826c1.085-0.695,1.992-1.535,2.758-2.395 C31.707,30.426,30.803,29.701,30.123,30.343z"
                            opacity=".07"
                          ></path>
                          <path
                            fill="#1d1d1b"
                            d="M26.882,12.212c2.472,0,4.315,1.768,4.573,3.88c0.232,1.904-0.528,3.548-2.639,4.612 c-0.619,0.313-1.059,0.438-1.353,0.438c-0.217,0-0.355-0.068-0.427-0.178c-0.112-0.173-0.049-0.467,0.169-0.648 c1.984-1.658,2.022-3.018,1.788-4.936c-0.151-1.233-0.964-2.024-1.873-2.024c-3.9,0-9.494,8.75-8.716,15.115 c0.303,2.481,1.825,5.354,4.945,5.354c1.04,0,2.142-0.294,3.123-0.784c1.711-0.875,2.475-1.618,3.651-2.699 c0.175-0.165,0.364-0.239,0.528-0.239c0.474,0,0.733,0.623-0.201,1.491c-0.766,0.86-1.674,1.701-2.758,2.395 c-1.6,1.01-3.385,1.826-5.497,1.826c-1.951,0-3.607-1.045-4.523-1.893c-1.358-1.273-2.078-3.167-2.289-4.897 c-0.667-5.453,2.652-12.602,7.795-15.735C24.358,12.571,25.68,12.212,26.882,12.212 M26.882,11.212 c-1.428,0-2.928,0.434-4.224,1.223c-5.291,3.223-9,10.72-8.267,16.711c0.269,2.203,1.215,4.21,2.597,5.506 c0.705,0.653,2.616,2.164,5.206,2.164c2.594,0,4.684-1.13,6.031-1.98c1.051-0.673,2.011-1.504,2.941-2.542 c1.126-1.069,0.942-1.965,0.81-2.303c-0.212-0.539-0.732-0.887-1.325-0.887c-0.433,0-0.864,0.182-1.214,0.512l-0.175,0.161 c-1.052,0.969-1.746,1.609-3.245,2.375c-0.868,0.433-1.819,0.674-2.668,0.674c-2.514,0-3.7-2.411-3.952-4.475 c-0.491-4.017,1.758-8.949,4.234-11.745c1.265-1.429,2.537-2.249,3.49-2.249c0.368,0,0.788,0.393,0.881,1.145 c0.219,1.796,0.149,2.722-1.437,4.047c-0.605,0.503-0.764,1.345-0.367,1.958c0.155,0.239,0.524,0.635,1.266,0.635 c0.488,0,1.078-0.178,1.804-0.546c2.349-1.185,3.478-3.183,3.18-5.626C32.116,13.258,29.723,11.212,26.882,11.212L26.882,11.212z"
                            opacity=".05"
                          ></path>
                          <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M30.123,30.343c-1.176,1.081-1.94,1.825-3.651,2.699	c-0.98,0.489-2.083,0.784-3.123,0.784c-3.12,0-4.642-2.873-4.945-5.354c-0.777-6.366,4.816-15.115,8.716-15.115	c0.91,0,1.722,0.791,1.873,2.024c0.234,1.919,0.196,3.279-1.788,4.936c-0.217,0.181-0.281,0.474-0.169,0.648	c0.169,0.259,0.702,0.286,1.779-0.259c2.11-1.065,2.871-2.709,2.639-4.612c-0.259-2.112-2.102-3.88-4.573-3.88	c-1.202,0-2.523,0.359-3.704,1.078c-5.143,3.133-8.462,10.283-7.795,15.735c0.211,1.73,0.93,3.624,2.289,4.897	c0.916,0.848,2.571,1.893,4.523,1.893c2.113,0,3.897-0.816,5.497-1.826c1.085-0.695,1.992-1.535,2.758-2.395	C31.707,30.426,30.803,29.701,30.123,30.343z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Edit in Canvas
                      </a>
                      <a
                        className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900  transition-colors  text-white "
                        href="#"
                        onClick={()=>downloadImage(state.url)}
                        style={{ backgroundColor: "#05A081" }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = "#0A8577"; // Change to a different color on hover
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = "#05A081"; // Restore original color on hover out
                        }}
                      >
                        Free Download
                      </a>
                    </nav>

                    {/*----------- */}
                  </div>
                  {/*User Details and Buttons Ends*/}

                  <div
                    className=" mt-2"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/*Image Container Starts*/}

                    {/*Pexels Code Start */}
                    <div
                      className="PhotoZoom_overflowContainer__LExev spacing_noMargin__Q_PsJ spacing_mobile-margin-bottom-20__MNqYa spacing_tablet-margin-bottom-20__hI9tY spacing_desktop-margin-bottom-30__OIQCK spacing_oversized-margin-bottom-30__32MBV"
                      style={{ cursor: "zoom-in", marginTop: "2vw" }}
                    >
                      <a
                        href="https://images.pexels.com/photos/6252095/pexels-photo-6252095.jpeg?cs=srgb&amp;dl=pexels-antoni-shkraba-6252095.jpg&amp;fm=jpg"
                        target="_blank"
                        download="true"
                        className="PhotoZoom_mediumLink__MCCiP"
                      ></a>
                      <div
                        className="PhotoZoom_widthContainer__vLtIS"
                        style={{
                          maxHeight: "75vh",
                          minHeight: "300px",
                          maxWidth: "calc(50vh)",
                          minWidth: "calc(200px)",
                        }}
                      >
                        <div
                          className="PhotoZoom_aspectRatioBox__G8otS"
                          style={{ paddingBottom: "150%" }}
                        >
                          <img
                            src={state.url}
                            srcset={`${state.url} 1x,${state.url} 2x`}
                            alt="Free Person Holding a Tibetan Singing Bowl Stock Photo"
                            className="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia"
                            width="4000"
                            height="6000"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/*Pexels Code Ends */}

                    {/*Image Conatainer Ends*/}
                    <ImageViewSection />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

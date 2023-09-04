"use client"


import ImageViewSection from "./ImageViewSection";
import "./ViewImage.css";
import { User } from "@nextui-org/react";
import { UserContext } from "@/app/Context/context";
import { useContext } from "react";



export default function ViewImage(){

    const {state,dispatch} = useContext(UserContext);
    console.log("Image View:",state);

    return(
        <>
                <div className="bg-gray-800">   
            <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
                <div id="viewerButton" className="hidden w-full flex justify-center">
                    <button onclick="openView()" className="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold">
                        Open Quick View
                    </button>
                </div>
                <div id="viewerBox" className="lg:p-10 md:p-6 p-4 bg-white">
                    <div className="flex justify-end">
                        <button onclick="closeView()" aria-label="Close" className="focus:outline-none focus:ring-2 focus:ring-gray-800">
                        <a href="http://localhost:3000/">
                            <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.8799 15.9996L23.6133 10.2796C23.8643 10.0285 24.0054 9.688 24.0054 9.33293C24.0054 8.97786 23.8643 8.63733 23.6133 8.38626C23.3622 8.13519 23.0217 7.99414 22.6666 7.99414C22.3115 7.99414 21.971 8.13519 21.7199 8.38626L15.9999 14.1196L10.2799 8.38626C10.0288 8.13519 9.68832 7.99414 9.33325 7.99414C8.97818 7.99414 8.63766 8.13519 8.38659 8.38626C8.13551 8.63733 7.99446 8.97786 7.99446 9.33293C7.99446 9.688 8.13551 10.0285 8.38659 10.2796L14.1199 15.9996L8.38659 21.7196C8.26161 21.8435 8.16242 21.991 8.09473 22.1535C8.02704 22.316 7.99219 22.4902 7.99219 22.6663C7.99219 22.8423 8.02704 23.0166 8.09473 23.179C8.16242 23.3415 8.26161 23.489 8.38659 23.6129C8.51054 23.7379 8.658 23.8371 8.82048 23.9048C8.98296 23.9725 9.15724 24.0073 9.33325 24.0073C9.50927 24.0073 9.68354 23.9725 9.84602 23.9048C10.0085 23.8371 10.156 23.7379 10.2799 23.6129L15.9999 17.8796L21.7199 23.6129C21.8439 23.7379 21.9913 23.8371 22.1538 23.9048C22.3163 23.9725 22.4906 24.0073 22.6666 24.0073C22.8426 24.0073 23.0169 23.9725 23.1794 23.9048C23.3418 23.8371 23.4893 23.7379 23.6133 23.6129C23.7382 23.489 23.8374 23.3415 23.9051 23.179C23.9728 23.0166 24.0077 22.8423 24.0077 22.6663C24.0077 22.4902 23.9728 22.316 23.9051 22.1535C23.8374 21.991 23.7382 21.8435 23.6133 21.7196L17.8799 15.9996Z"
                                    fill="#1F2937"
                                />
                            </svg>
                        </a>                            
                        </button>
                    </div>

                    {/*Image Section Starts */}
                    <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                            <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                                <div className="w-full h-screen border border-gray-400 shadow-md rounded-lg overflow-hidden">
                                    <img src={state.url} alt="Sample Image" className="object-contain h-full w-full"/>
                                </div>
                                    <div class="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-60 right-5">
                                        <div class="flex justify-between font-bold text-sm">
                                            <User src={state.pimage} name={state.pname}/>
                                                <p class="text-gray-400 pt-2">17th March, 2021</p>
                                        </div>
                                        <div class="flex justify-end pl-10 font-bold text-sm">
                                            <div className="flex">
                                                <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" className="px-5" />
                                                    <h2 className="mt-1">{state.instaid}</h2>
                                            </div>
                                            <div className="flex">
                                                <img src="https://img.icons8.com/fluent/30/000000/twitter.png" className="px-5" />
                                                    <h2 className="mt-1">state.photogtwitterid</h2>
                                            </div>
                                        </div>
                                            <h2 class="text-3xl font-semibold mt-4 md:mt-10">{state.alt_desc}</h2>
                                            <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">{state.pdesc}</p>
                                            <div class="button" data-tooltip="Size: 20Mb">
                                                <div class="button-wrapper">
                                                    <div class="text">Download</div>
                                                            <span class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                                                            </span>
                                                </div>
                                            </div>
                                    </div>
                            </section>
                    </section>
                        {/*Image Section Ends */}


                    <div className="mt-8 flex flex-wrap flex-row-reverse gap-4 ">
                            <div>
                                <button className="flex flex-wrap gap-2 py-2 px-4 text-lg  font-bold text-gray-800    focus:outline-none ring-green-500 ring-1 hover:ring-green-800 hover:ring-2  ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                </svg>

                                    Share
                                </button>
                            </div> 

                            <div>
                                <button className="flex flex-wrap gap-2 py-2 px-4 text-lg  font-bold text-gray-800    focus:outline-none ring-green-500 ring-1 hover:ring-green-800 hover:ring-2  ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>


                                    More info
                                </button>
                            </div>           
                    </div>           
                    <ImageViewSection/>
                </div>
               
               
            </div>
            
           
         
            
        </div>
        </>
    )
};
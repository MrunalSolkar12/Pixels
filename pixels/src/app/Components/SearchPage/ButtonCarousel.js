'use client'
import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function ButtonCarousel() {
    return (
        <div className="py-20">
        <div className="container mx-auto px-4 ">
            <div className="flex items-center justify-center w-full h-full py-24  sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={17} visibleSlides={4} step={1} infinite={false}>
                    <div className="w-screen relative flex items-center justify-center px-20">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Nature</button>
                                    </Slide>
                                    <Slide index={1}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Landscape</button>
                                    </Slide>
                                    <Slide index={2}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Greenery</button>
                                    </Slide>
                                    <Slide index={3}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Cars</button>
                                    </Slide>
                                    <Slide index={4}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Forest</button>
                                    </Slide>
                                    <Slide index={5}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Night</button>
                                    </Slide>
                                    <Slide index={6}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Summer</button>
                                    </Slide>
                                    <Slide index={7}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Newyork</button>
                                    </Slide>
                                    <Slide index={8}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Mountains</button>
                                    </Slide>
                                    <Slide index={9}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Beach</button>
                                    </Slide>
                                    <Slide index={10}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Animals</button>
                                    </Slide>
                                    <Slide index={11}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Flowers</button>
                                    </Slide>
                                    <Slide index={12}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Bikes</button>
                                    </Slide>
                                    <Slide index={13}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Portrait</button>
                                    </Slide>
                                    <Slide index={14}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Fashion</button>
                                    </Slide>
                                    <Slide index={15}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Cars</button>
                                    </Slide>
                                    <Slide index={16}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Football</button>
                                    </Slide>
                                    <Slide index={17}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">India</button>
                                    </Slide>
                                    
                                   
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={13} visibleSlides={2} step={1} infinite={false}>
                    <div className="w-screen relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Nature</button>
                                    </Slide>
                                    <Slide index={1}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Landscape</button>
                                    </Slide>
                                    <Slide index={2}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Greenery</button>
                                    </Slide>
                                    <Slide index={3}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Cars</button>
                                    </Slide>
                                    <Slide index={4}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Forest</button>
                                    </Slide>
                                    <Slide index={5}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Night</button>
                                    </Slide>
                                    <Slide index={6}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Summer</button>
                                    </Slide>
                                    <Slide index={7}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Newyork</button>
                                    </Slide>
                                    <Slide index={8}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Mountains</button>
                                    </Slide>
                                    <Slide index={9}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Beach</button>
                                    </Slide>
                                    <Slide index={10}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Animals</button>
                                    </Slide>
                                    <Slide index={11}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Flowers</button>
                                    </Slide>
                                    <Slide index={12}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Bikes</button>
                                    </Slide>
                                    <Slide index={13}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Portrait</button>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={13} visibleSlides={2} step={1} infinite={false}>
                    <div className="w-screen relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Nature</button>
                                    </Slide>
                                    <Slide index={1}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Landscape</button>
                                    </Slide>
                                    <Slide index={2}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Greenery</button>
                                    </Slide>
                                    <Slide index={3}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Cars</button>
                                    </Slide>
                                    <Slide index={4}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Forest</button>
                                    </Slide>
                                    <Slide index={5}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Night</button>
                                    </Slide>
                                    <Slide index={6}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Summer</button>
                                    </Slide>
                                    <Slide index={7}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Newyork</button>
                                    </Slide>
                                    <Slide index={8}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Mountains</button>
                                    </Slide>
                                    <Slide index={9}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Beach</button>
                                    </Slide>
                                    <Slide index={10}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Animals</button>
                                    </Slide>
                                    <Slide index={11}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Flowers</button>
                                    </Slide>
                                    <Slide index={12}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Bikes</button>
                                    </Slide>
                                    <Slide index={13}>
                                        <button type="button" class="text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 px-5 py-3 text-sm rounded">Portrait</button>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
        </div>
    );
}

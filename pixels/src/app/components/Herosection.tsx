"use client";
import { useState,useContext } from "react";
import { useRouter } from 'next/navigation'
import { ImageContext } from "../context/context";

export default function Herosection() {
  const [userInput, setUserInput] = useState<string | null>(null);
  const router = useRouter();

  const {imgdispatch} = useContext(ImageContext);

  const handleUserInput = (event: any) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const handleUserSearch = () => {
    console.log("button clicked");
    console.log("userInput", userInput);
    if (userInput != null) {
      imgdispatch({type:"IMGLOAD",payload:100});
      router.push(`/page/Search?${userInput}`);
    }
  };

  const handleKeyDown=(e:any)=>{
    if(e.key === 'Enter'){
      console.log("Enter");
      handleUserSearch();
    }
  }
  return (
    <>
      <div
        className=" hero min-h-96"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content  lg:text-center text-neutral-content">
          <div className="max-w-9xl  mt-36 lg:mt-20">
            <h1 className="mb-5 font-bold text-white text-4xl lg:max-w-2xl 2xl:text-5xl 2xl:max-w-7xl">
              The best free stock photos, royalty free images & videos shared by
              creators.
            </h1>
            <p className="mb-5 font-bold text-white">
              Trending : color, nuclear, big size, exercise, sports
            </p>

            {/*Search input starts for Large screen*/}
            <div className="join hidden lg:flex justify-center">
              <div>
                <div>
                  <input
                    className="input input-bordered join-item"
                    placeholder="Search"
                    onChange={(event) => handleUserInput(event)}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
              <select className="select select-bordered join-item">
                <option disabled selected>
                  Filter
                </option>
                <option>Photos</option>
                <option>Videos</option>
              </select>
              <div className="indicator">
                <span className="indicator-item badge badge-success">
                  new
                </span>
               
                  <button
                    className="btn join-item"
                    onClick={() => handleUserSearch()}
                  >
                    Search
                  </button>
              
              </div>
            </div>
            {/*Search input ends for Large screen*/}

            {/*Search input Starts for small screen */}

            <div className="join lg:hidden">
              <input
                className="input input-bordered join-item"
                placeholder="Search for free photos"
                onChange={(event) => handleUserInput(event)}
                onKeyDown={handleKeyDown}
              />

              
                <button
                  className="btn join-item rounded-r-full"
                  onClick={() => handleUserSearch()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              
            </div>

            {/*Search input Ends for small screen*/}
          </div>
        </div>
      </div>
    </>
  );
}

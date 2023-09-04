"use client";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

//----------------------------------------------------------------------- PromoSection Components ------------------------------------------------------------

export function PromoSection() {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleAvatarClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleBlur = () => {
        setDropdownOpen(false);
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update local storage with the input value or 'nature' if no input provided
    const valueToStore = searchInput.trim() !== "" ? searchInput : "nature";
    localStorage.setItem("userInput", valueToStore);

    // clear the input field after submission
    setSearchInput("");
    router.push("/Components/SearchPage");
    // dispatch({type:'USER',payload:{usersearch:searchInput}});
  };

  const handleSubmitEffect = () => {
    // Update local storage with the input value or 'nature' if no input provided
    const valueToStore = searchInput.trim() !== "" ? searchInput : "nature";
    localStorage.setItem("userInput", valueToStore);

    // clear the input field after submission
    setSearchInput("");
    // dispatch({type:'USER',payload:{usersearch:searchInput}});
  };

  console.log("searchInput", searchInput);

  useEffect(() => {
    handleSubmitEffect();
  }, []);


  return (
    <section
      class="bg-image font-sans"
      style={{
        backgroundImage: `url('https://i.pinimg.com/564x/e1/f4/c4/e1f4c4d64e6d44184f78e298ed8c9757.jpg')`,
        height: "40vh",
      }}
    >
      <div class="container mx-auto px-4 py-8 ">
        {/*Navbar Section starts*/}
        <nav class="flex  justify-between items-center">
          <a href="#" class="font-bold text-xl text-white">
            My Site
          </a>
          <div className="flex flex-row">
            <a href="#" class="text-gray-400 font-bold hover:text-white mx-4">
              Home
            </a>
            <a href="#" class="text-gray-400 font-bold hover:text-white mx-4">
              About
            </a>
            `
            <a href="#" class="text-gray-400 font-bold hover:text-white mx-4">
              Contact
            </a>

           
            <div class="relative inline-block text-left ml-3 ">
              <button
                type="button"
                class="flex items-center justify-center rounded-full w-10 h-10 bg-gray-300 text-gray-800"
                id="avatar-menu"
                aria-haspopup="true"
                onClick={handleAvatarClick}
                onBlur={handleBlur}
              >
                <img
                  class="rounded-full w-8 h-8"
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="User Avatar"
                />
              </button>
              {isDropdownOpen && (
              <div
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="avatar-menu"
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              </div>
                )}
            </div>
            
          </div>
        </nav>
      {/*Navbar Section End*/}

        {/*Hero Section starts*/}
        <div class="flex flex-col justify-center items-center my-16 ">
          <h1 class="text-3xl font-bold text-white leading-tight">
            The best free stock photos, royalty free images & videos shared by
            creators.
          </h1>
          <form className=" flex mt-5 w-full lg:w-6/12" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className={` inline text-lg text-black  rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-black  focus:outline-none focus:text-black focus:ring-1 focus:ring-black  w-11/12 lg:w-9/12`}
              placeholder="Search for free photos"
              autofocus=""
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <button
              type="submit"
              className={` lg:mt-3 inline-flex w-1/3  items-center justify-center rounded-md border border-transparent bg-black px-3.5 py-1.5  text-lg font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto  `}
            >
              Search
            </button>
          </form>
        </div>
        {/*Hero Section End*/}
      </div>
    </section>
  );
}

export default function MainPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //https://images.pexels.com/photos/15170716/pexels-photo-15170716/free-photo-of-field-of-sunflowers.jpeg?auto=compress&cs=tinysrgb&w=1600
  return (
    <>
      <PromoSection />
    </>
  );
}

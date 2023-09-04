"use client"
import React, { useState,useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

const Card = ({ imageUrl, index, handleHover, isHovered }) => {
  const handleMouseEnter = () => {
    handleHover(index);
  };

  const handleMouseLeave = () => {
    handleHover(null);
  };

return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt="Card" className="w-full h-full object-cover" />

      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <a href={imageUrl} download className="text-white text-xl">
            Download
          </a>
        </div>
      )}
    </div>
  );
};


const CardGrid = ({}) => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [page,setPage] = useState(3);
    const [Images,setImages] = useState([]);
    
    const handleHover = (index) => {
      setHoveredCard(index);
    };
    
    useEffect(()=>{
        fetch(`https://api.unsplash.com/photos/?client_id=YdDQN2fIB-_47KYeRzoHJ7lR5kulg-FfM2pcHZIq1NE&page=${page}&orientation='landscape'`, { cache: 'no-store' }) // Calling the API
      //let data = await fetch(`https://dummyjson.com/users`,{cache:"no-store"});
      .then( response =>  response.json())
      .then((data) =>
      {
          console.log('data',data) 
          setImages((prev)=>[...prev,...data])
          setLoading(false);
          
      })
      .catch(error =>console.log(error));
      
    },[page])

    console.log("isloading",isloading);
    
    const dataArr = Array.from(Images);


    return (
        <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Free Stock Photos</h2>
            <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
              
        {
        
        dataArr.map((product, index) => (
          <Card
            key={index}
            imageUrl={product.urls.full}
            index={index}
            handleHover={handleHover}
            isHovered={index === hoveredCard}
          />
        )
        )}
      </div>
      </div>
      </section>
    );
  };
  
  

export default CardGrid;

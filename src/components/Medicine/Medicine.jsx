import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Medicine = () => {
  const medicines = [
    {
      image: "/images/first.jpg",
      title: "Calcium Supplements",
      description: "Use to strengthen bones and aid recovery.",
      duration: "2 weeks",
    },
    {
      image: "/images/second.jpg",
      title: "Pain Reliever",
      description: "Helps reduce pain and swelling.",
      duration: "Take as prescribed by the doctor.",
    },
    {
      image: "/images/third.jpg",
      title: "Vitamin D",
      description: "Enhances calcium absorption for bone healing.",
      duration: "1 month",
    },
    {
      image: "/images/fort.jpg",
      title: "Antibiotics",
      description: "Prevents infections in open fractures.",
      duration: "7 days",
    },
  ];

  return (
    <div id="Medicine" className="text-center py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-yellow-400">Recommended Medicines</h2>
      
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-yellow-400 opacity-70 w-3 h-3',
          bulletActiveClass: 'swiper-pagination-bullet-active bg-yellow-500 opacity-100'
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="pb-12"
      >
        {medicines.map((medicine, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg shadow-white/10 border border-yellow-400 transition-all duration-300 hover:scale-105 hover:bg-slate-700 w-full max-w-xs sm:w-64 md:w-72 lg:w-80 mx-2">
              <div className="flex justify-center mb-4">
                <img 
                  src={medicine.image} 
                  alt={medicine.title}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover rounded-lg shadow-md shadow-yellow-400/30"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-400">{medicine.title}</h2>
              <p className="text-sm sm:text-base text-slate-300 mb-3">{medicine.description}</p>
              <p className="text-sm sm:text-base text-slate-200">
                <span className="font-bold">Duration:</span> {medicine.duration}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Medicine;
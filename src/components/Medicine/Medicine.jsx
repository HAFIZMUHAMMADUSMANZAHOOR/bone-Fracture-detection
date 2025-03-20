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
    <div id="Medicine">
      <h2>Recommended Medicines</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // Show 3 cards per row
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 }, // 3 slides on large screens
          768: { slidesPerView: 2 },  // 2 slides on medium screens
          480: { slidesPerView: 1 },  // 1 slide on small screens
        }}
      >
        {medicines.map((medicine, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-cell">
              <div className="carousel-img">
                <img src={medicine.image} alt={medicine.title} />
              </div>
              <h2>{medicine.title}</h2>
              <p>{medicine.description}</p>
              <p><strong>Duration:</strong> {medicine.duration}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Medicine;

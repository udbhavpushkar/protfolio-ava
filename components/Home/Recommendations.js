import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";

// Recommendations Data
const recommendations = [
  {
    name: "Aditi Shinde",
    title: "Founder, Hybrid Inks Studio",
    text: "I had the pleasure of mentoring Avantika Nayak during her 3-month internship at Hybrid Inks Studio, where she consistently impressed with her ability to craft engaging and well-researched content. Her attention to detail, creativity, and adaptability to our brand's tone were exceptional, and she quickly understood what resonated with our audience. Avantika not only met deadlines but also proactively suggested fresh ideas, showcasing a strong work ethic and initiative.Highly recommend her to any organization looking for a talented content writer.",
    profilePicture: "/images/recom1.png",
  },
  {
    name: "Pravat Ranjan",
    title: "Head of Design, Leanpitch",
    text: "Avantika is an incredibly talented content strategist, a sublime storyteller and an empathetic copywriter. Her ability to think creatively and adapt to changing needs, especially in a fast-paced environment is what sets her apart. Bringing fresh perspectives to the table is her forte. She is proactive in seeking feedback and continuously improving her craft. As a person she brings a ton of vibrant energy to the team, helping create a dynamic and cohesive collaborative space. She will surely continue to excel and make a positive impact wherever she goes.",
    profilePicture: "/images/recom2.png",
  },
  {
    name: "Shubhanjana Sikdar",
    title: "Head of Marketing, Leanpitch",
    text: "Avantika consistently demonstrates exceptional diligence and creativity in every task assigned, ensuring complete involvement in project delivery. Her impeccable work ethic is remarkable for her career stage. She consistently delivers effective scripts and content designs within tight deadlines, upholding brand value. Her clarity, adaptability, and leadership skills are particularly commendable.",
    profilePicture: "/images/recom3.png",
  },
  {
    name: "Udbhav Srivastava",
    title: "Senior Developer, Freecharge",
    text: "Working with Avantika has been an incredible experience. Her expertise in content design is matched by her ability to collaborate seamlessly with the development team. She brings clarity and precision to every project. A true professional and an exceptional teammate!",
    profilePicture: "/images/recom4.png",
  },
];

const Recommendations = () => {
  const swiperRef = useRef(null); // Create a reference to the Swiper instance
  // Custom slide functions
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="bg-white font-crimson py-10 m-auto">
      {/* Header */}
      <div className="py-6 text-center max-w-[1220px] mx-auto">
        <div className="flex items-center">
          <div className="mr-3">
            <Image
              src="/images/svgs/recommendations.svg"
              alt="win"
              height={60}
              width={75}
            />
          </div>
          <div className="text-5xl font-bold my-6">Recommendations</div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-5xl mx-auto">
        <button
          className="absolute top-1/2 left-[-60px] z-10 p-4 bg-[#A80021] text-white rounded-full shadow-md hover:bg-[#8b0018] transition duration-300 transform -translate-y-1/2"
          onClick={handlePrev}
        >
          <FaArrowLeft size={20} />
        </button>
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}

          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 }, // Single slide for small screens
            768: { slidesPerView: 2 }, // Two slides for medium screens
            1024: { slidesPerView: 3 }, // Three slides for larger screens
          }}
        >
          {recommendations.map((rec, index) => (
            <SwiperSlide key={index} className="pb-8" style={{ height: "396px" }}>
              <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col mx-auto h-[100%]">
                {/* Header (Avatar, Name, Title) */}
                <div className="flex items-center mb-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={rec.profilePicture}
                      alt={rec.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  {/* Name and Title */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {rec.name}
                    </h3>
                    <p className="text-sm text-gray-500">{rec.title}</p>
                  </div>
                </div>
                {/* Text Content */}
                <p className="text-gray-700 text-sm">{rec.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute top-1/2 right-[-60px] z-10 p-4 bg-[#A80021] text-white rounded-full shadow-md hover:bg-[#8b0018] transition duration-300 transform -translate-y-1/2"
          onClick={handleNext}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Recommendations; 
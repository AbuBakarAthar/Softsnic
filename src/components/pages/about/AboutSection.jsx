import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AboutSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="container mx-auto max-w-6xl bg-[#101828] py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 px-6">
          <h1 className="text-white text-3xl font-bold mb-4">Who We Are</h1>
          <p className="text-white text-lg">
            At SoftSincs, we craft innovative, scalable, and user-centric software solutions.
            Specializing in web & mobile development, UI/UX design, and cloud solutions, 
            we help businesses thrive in the digital world.
            <br />
            🚀 Your vision, our innovation!
          </p>
        </div>

        {/* Carousel Content */}
        <div className="w-full lg:w-1/2 px-6">
          <Slider {...settings}>
            <div>
              <img
                src="\images\Pic1.jpg"
                alt="Slide 1"
                className="w-full h-[400px] rounded-lg"
              />
            </div>
            <div>
              <img
                src="\images\pic2.jpg"
                alt="Slide 2"
                className="w-full h-[400px] rounded-lg"
              />
            </div>
            <div>
              <img
                src="/images/pic3.jpg"
                alt="Slide 3"
                className="w-full h-[400px] rounded-lg"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

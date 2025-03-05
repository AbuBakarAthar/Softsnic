import React from 'react';
import Slider from 'react-slick';  // Import react-slick

const AboutSection = () => {
  // Slider settings
  const settings = {
    dots: true,               // Show navigation dots
    infinite: true,           // Enable infinite looping
    speed: 500,               // Transition speed in ms
    slidesToShow: 1,          // Number of slides to show at once
    slidesToScroll: 1,        // Number of slides to scroll at a time
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 3000,      // Set the speed of autoplay (3 seconds in this case)
    pauseOnHover: true,       // Pause autoplay when hovering over the carousel
  };

  return (
    <div className="container mx-auto max-w-6xl bg-[#101828]">
      <div className="flex justify-between items-center">
        
        {/* Left side with text */}
        <div className="w-1/2 p-8">
          <h1 className="text-white text-3xl font-bold mb-4">Who We Are</h1>
          <p className="text-white text-lg">
          At SoftSincs, we craft innovative, scalable, and user-centric software solutions. Specializing in web & mobile development, UI/UX design, and cloud solutions, we help businesses thrive in the digital world.

🚀 Your vision, our innovation!          </p>
        </div>
        
        {/* Right side with Carousel */}
        <div className="w-1/2 p-8">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div>
              <img src="data:image/jpeg;base64,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" alt="Image 1" className="w-full" />
            </div>
            {/* Slide 2 */}
            <div>
              <img src="data:image/jpeg;base64,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" alt="Image 2" className="w-full" />
            </div>
            {/* Slide 3 */}
            <div>
              <img src="data:image/jpeg;base64,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" alt="Image 3" className="w-full" />
            </div>
          </Slider>
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const HomeL = () => {
  return (
<div className="p-6 bg-[#120c16] text-white min-h-screen">
  <h1 className="text-4xl font-bold text-center text-[#f4379d]">What Makes Us Special?</h1>
  <p className="text-center text-gray-300 mt-2 text-[#d1a5c7]">
    At Softsinc, our commitment to innovation and excellence sets us apart. Here’s why clients choose us:
  </p>


      {/* Timeline Section */}
      <div className="mt-10 p-6 bg-[#120c16] text-white min-h-screen">
        <VerticalTimeline>
          <Feature title="Government Endorsement">
            Recognized by key government bodies for trusted expertise and leadership in technology.
          </Feature>
          <Feature title="World-Class Team">
            Over 200 elite staff, 90% in the top 5% of their fields, with senior management in the top 1%.
          </Feature>
          <Feature title="Extensive Expertise & Worldwide Presence">
            200+ projects completed across 13 countries, delivering global solutions with a local touch.
          </Feature>
          <Feature title="Proven Case Studies">
            Successful projects for startups, industry giants, and governments across various sectors.
          </Feature>
          <Feature title="Cost Effective">
            High-value solutions without the premium price tag.
          </Feature>
          <Feature title="Unmatched Success">
            Global tech pacesetter in 2023 and 2024 with a legacy of groundbreaking achievements.
          </Feature>
        </VerticalTimeline>
      </div>
    </div>
  );
};

// Feature Component using VerticalTimelineElement with a smaller icon
const Feature = ({ title, children }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.3)" }}
    iconStyle={{
      background: "#3b82f6",
      color: "#fff",
      width: "30px",  // Small icon
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      marginLeft: "-15px", // Adjust to keep it centered
    }}
  >
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-gray-300 text-sm">{children}</p>
  </VerticalTimelineElement>
);

export default HomeL;
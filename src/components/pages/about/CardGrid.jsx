import React from "react";
import { FaBrain } from "react-icons/fa6";
import Card from "../../home/Card";

const CardGrid = () => {
  const cardData = [
    {
      title: "Discovery and Planning",
      description:
        "At the forefront of technological innovation, we provide advanced AI services, machine learning, natural language processing.",
      icon: <FaBrain size={50} />,
      time: "2 hours ago",
    },
    {
      title: "Design and Prototyping",
      description:
        "At the forefront of technological innovation, we provide advanced AI services, machine learning, natural language processing.",
      icon: <i style={{ fontSize: "50px", color: "white" }} className="material-icons">public</i>,
      time: "2 hours ago",
    },
    {
      title: "Development and Implementation",
      description:
        "At the forefront of technological innovation, we provide advanced AI services, machine learning, natural language processing.",
      icon: <i style={{ fontSize: "50px", color: "white" }} className="material-icons">search</i>,
      time: "2 hours ago",
    },
    {
      title: "Support and Maintenance",
      description:
        "At the forefront of technological innovation, we provide advanced AI services, machine learning, natural language processing.",
      icon: <i style={{ fontSize: "50px", color: "white" }} className="material-icons">design_services</i>,
      time: "2 hours ago",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Grid container with wider cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
        {cardData.map((card, index) => (
          <div key={index} className="w-full sm:w-80 lg:w-96"> {/* Adjust card width here */}
            <Card
              title={card.title}
              description={card.description}
              icon={card.icon}
              time={card.time}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;

import React from "react";
import Card from "./Card";
import { FaBrain } from "react-icons/fa6";

const CardList = () => {
  const cardData = [
    {
      title: "Artificial Intelligence",
      description:
        "At the forefront of technological innovation, we provide advanced AI services such as machine learning, natural language processing.",
      icon: <FaBrain size={50} />,
    },
    {
      title: "Web Development",
      description:
        "At the forefront of technological innovation, we provide advanced web development services including responsive design and full-stack development.",
      icon: <i style={{ fontSize: "50px" }} className="material-icons">public</i>,
    },
    {
      title: "SEO",
      description:
        "Boost your search engine rankings with our cutting-edge SEO techniques designed to improve visibility and drive traffic.",
      icon: <i style={{ fontSize: "50px" }} className="material-icons">search</i>,
    },
    {
      title: "Graphic Design",
      description:
        "Our creative design team delivers visually stunning graphics, helping businesses stand out with memorable designs.",
      icon: <i style={{ fontSize: "50px" }} className="material-icons">design_services</i>,
    },
    {
      title: "Marketing",
      description:
        "Achieve your business goals with our comprehensive marketing strategies, tailored to increase brand awareness and sales.",
      icon: <i style={{ fontSize: "50px" }} className="material-icons">trending_up</i>,
    },
    {
      title: "UI/UX Design",
      description:
        "Transform your user's experience with our intuitive and user-friendly UI/UX designs that focus on enhancing engagement.",
      icon: <i style={{ fontSize: "50px" }} className="material-icons">design_services</i>,
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl p-4 text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our Innovative Services</h1>
        <p className="text-lg text-white mt-2">
          Explore the cutting-edge solutions we offer to elevate your business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

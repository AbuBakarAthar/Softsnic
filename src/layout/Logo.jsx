import { useState } from "react";

const Logo = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="text-4xl font-bold transition-all duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className={`text-purple-500 ${hover ? "hidden" : "inline"}`}>Softsinc</span>
      <span className={`text-white ${hover ? "inline" : "hidden"}`}>Softsinc</span>
    </div>
  );
};

export default Logo;

import { useState } from "react";
import pattern from "../assets/pattern.png";
import profile from "../assets/profile.jpg";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaAngleDown,
} from "react-icons/fa";
const Hero = () => {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(true);
  return (
    <section style={{ backgroundImage: `url(${pattern})` }}>
      <div className="flex flex-col items-center justify-center min-h-screen gap-8 relative lg:p-0 p-5">
        <div className="conic shadow-2xl shadow-sec-color">
          <img
            src={profile}
            className={`img ${isImgLoaded ? "blur-img" : ""}`}
            loading="lazy"
            onLoad={() => setIsImgLoaded(false)}
          />
        </div>
        <h3 className="lg:text-5xl text-2xl font-bold">
          Hi, I am <span className="text-main-color">Md Kamrul Hasan</span>
        </h3>
        <p className="lg:text-lg text-xs lg:w-1/2 text-center text-desc-color">
          I am Md Kamrul Hasan. I have graduated from Shanto-Mariam University
          of Creative technology in CSE. Furthermore, I'm a frontend developer
          with prominent experience in web development and frontend. I've worked
          on a variety of projects for my organizations and clients. I'm
          passionate about creating great user experiences and have a strong
          understanding of usability and accessibility standards. I'm also quick
          learner and thinker for problem solving approaches.
        </p>
        <div className="flex gap-6 items-center">
          <a
            className="social-btn"
            href="https://www.facebook.com/profile.php?id=100006805098760"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            className="social-btn"
            href="https://www.linkedin.com/in/sakib-hossain-a33357280/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-btn"
            href="https://github.com/SakibHossain48"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="social-btn"
            href="https://twitter.com/SakibHasan3953"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="text-xs text-desc-color flex gap-2 absolute bottom-4">
          <span className="animate-bounce text-xl">
            <FaAngleDown />
          </span>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

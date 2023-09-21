import SectionHead from "./SectionHead";
import js from "../assets/icons/js.png";
import jquery from "../assets/icons/jquery-removebg-preview.png";
import ts from "../assets/icons/typescript.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import figma from "../assets/icons/figma.png";
import jwt from "../assets/icons/icon-removebg-preview.png";
import next from "../assets/icons/Nextjs-logo.png";
import firebase from "../assets/icons/firebase.png";
import tailwind from "../assets/icons/Tailwind_CSS_logo.png";
import Quasar from "../assets/icons/Quasar_Logo-removebg-preview.png";
import RB from "../assets/icons/RB.png";
import MUI from "../assets/icons/material-ui-svgrepo-com.png";
import Chart from "../assets/icons/chartjs-logo-removebg-preview.png";
import socket from "../assets/icons/Socket-io.svg-removebg-preview.png";
import Tilt from "react-parallax-tilt";

interface SkillTypes {
  skill: string;
  img: string;
  index: number;
}

const SkillCard = ({ skill, img, index }: SkillTypes) => {
  return (
    <div data-aos="zoom-out-dow" data-aos-duration="2000">
      <Tilt
        className={`group card bg-[#162033] rounded-3xl shadow-2xl mx-auto w-40 h-40 select-none ${
          index % 2 === 0 ? "lg:mt-0 mt-5" : "lg:mt-28 mt-5"
        }`}
        perspective={500}
        scale={1.1}
      >
        <div>
          <img
            src={img}
            className="object-contain mx-auto p-4 h-32 duration-500 saturate-0 group-hover:saturate-100"
          />
          <h3 className="text-desc-color lg:text-lg font-black text-center">
            {skill}
          </h3>
        </div>
      </Tilt>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <SectionHead parallaxValue="skills" value="my skills" />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 lg:mt-20 lg:mb-8">
        <SkillCard index={1} skill="TypeScript" img={ts} />
        <SkillCard index={2} skill="JQuery" img={jquery} />
        <SkillCard index={3} skill="JavaScript" img={js} />
        <SkillCard index={4} skill="ReactJS" img={react} />
        <SkillCard index={5} skill="ReduxJS" img={redux} />
        <SkillCard index={6} skill="NextJS" img={next} />
        <SkillCard index={7} skill="TailwindCSS" img={tailwind} />
        <SkillCard index={8} skill="Quasar" img={Quasar} />
        <SkillCard index={9} skill="JWT" img={jwt} />
        <SkillCard index={10} skill="Firebase" img={firebase} />
        <SkillCard index={11} skill="Figma" img={figma} />
        <SkillCard index={12} skill="React Bootstrap" img={RB} />
        <SkillCard index={13} skill="Material UI" img={MUI} />
        <SkillCard index={14} skill="ChartJS" img={Chart} />
        <SkillCard index={15} skill="Socket.IO" img={socket} />
      </div>
    </section>
  );
};

export default Skills;

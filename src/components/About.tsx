import { Typewriter } from "react-simple-typewriter";
import SectionHead from "../components/SectionHead";

const About = () => {
  const words = [
    "Frontend Developer",
    "Web Developer",
    "React & Next Developer",
  ];

  // ?? Handle Download Resume
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1Y-nvpQyK1E87UtDy5jtBMVi7Ji5zjXj-/view?usp=sharing";
    const fileIdMatch = resumeUrl.match(/[-\w]{25,}/);
    const fileId = fileIdMatch?.[0] ?? "";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.location.href = downloadUrl;
  };
  return (
    <section className="section" id="about">
      <SectionHead parallaxValue="About" value="About me" />
      <div className="lg:mt-20 lg:grid grid-cols-2 gap-20">
        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-desc-color lg:text-lg text-justify"
        >
          Hi! I'm Md Kamrul Hasan, a proficient web developer with knowledge of
          JS, ReactJS, Next.js, Typescript, Redux(RTK-query), and numerous other
          JavaScript and Typescript-related technologies. Being a student
          Shanto-Mariam University of Creative Technology CSE Department.
          Crafting dynamic and engaging online apps is my passion. I bring my
          expertise and creativity to every job. Having a great sense of
          detail-oriented, have a good sense of problem-solving, and I'm devoted
          to providing high-quality, effective, and user-friendly services
          solutions. Development of the front end to back end (API)
          implementation I have the wide range of abilities required to create
          solid and Web apps that scale.
        </p>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="space-y-4 lg:mt-0 mt-4"
        >
          <h3 className="lg:text-2xl text-lg font-black">
            I am a{" "}
            <span className="text-main-color">
              <Typewriter
                words={words}
                loop={0}
                cursor={true}
                cursorColor="rgb(114 226 174)"
              />
            </span>
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                First Name
              </strong>
              : Md Kamrul
            </li>
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Last Name
              </strong>
              : Hasan
            </li>
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Age
              </strong>
              : 23 years
            </li>
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Nationality
              </strong>
              : Bangladeshi
            </li>
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Language
              </strong>
              : Bangla, English
            </li>
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Address
              </strong>
              : Uttara, Dhaka, Bangladesh
            </li>
          </ul>
          <button onClick={handleDownload} className="social-btn">
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

import { ReactComponent as Arrow } from "./../svg/arrow.svg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ReactComponent as GitLab } from "./../svg/gitlab.svg";

const About = () => {
  return (
    <div className=" relative h-[80vh] min-h-[30rem] bg-white">
      <div className="absolute top-[5vh] left-1/2 w-[90vw] -translate-x-1/2 rounded-md p-8 lg:top-[20vh] lg:w-[40vw] lg:min-w-[50rem] lg:max-w-[40vw]">
        <div className="flex-center flex-col gap-4 lg:h-48 lg:flex-row">
          <div className="flex-center basis-1/2 flex-col">
            <p className="mr-28 w-full select-none lg:mr-[15rem]">Hi, I'm</p>
            <h1 className="-mt-6 mb-3 select-none tracking-tighter lg:-mt-12 lg:mb-0">
              anton
            </h1>
            <div className="flex-center flex-wrap gap-2">
              <a
                href="https://github.com/anforsm"
                target="_blank"
                className="flex-center text-[#24292f] lg:basis-1/3"
              >
                <AiFillGithub className="mr-1 h-8 w-8" />
                /anforsm
              </a>

              <a
                href="https://gitlab.com/anforsm"
                target="_blank"
                className="flex-center text-[#e24329] lg:basis-1/3"
              >
                <GitLab className="mr-1 aspect-square h-8" />
                /anforsm
              </a>
              <a
                href="https://www.linkedin.com/in/antonforsman/"
                target="_blank"
                className="flex-center text-[#0077b5] lg:basis-1"
              >
                <AiFillLinkedin className="mr-1 h-8 w-8" />
                /antonforsman
              </a>
            </div>
          </div>

          <div className="hidden h-full w-[2px] bg-black lg:inline-block"></div>
          <div className="h-[2px] w-full bg-black lg:hidden"></div>

          <div className="flex-center basis-1/2 flex-col lg:text-left">
            <p>
              I'm a Software Engineer from Stockholm, Sweden. I'm currently
              pursuing a masters degree in Machine Learning at{" "}
              <a href="https://kth.se/en" target="_blank">
                KTH Royal Institute of Technology
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="handwritten fixed left-[0.5rem] top-[calc(40vh+7.75rem)] -z-0 h-64 w-64 select-none fill-gray-600 text-gray-600 lg:left-[10rem] lg:top-[52vh]">
        <div className=" absolute left-6 top-0 h-20 w-20 -scale-x-100 -scale-y-100">
          <Arrow />
        </div>
        <h4 className="absolute top-20 left-10">Check out my projects</h4>
      </div>
    </div>
  );
};

export default About;

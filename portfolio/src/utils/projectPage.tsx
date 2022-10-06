import { AiOutlineLink } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import SlantedPage from "./slantedPage";

const ProjectPage = (props: any) => {
  const lg = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const getImage = () => {
    return (
      <div
        className={`${
          props.wideImage ? "basis-1/2" : "basis-1/3"
        } h-full max-h-full ${
          lg ? (props.imageLeft ? "mr-8" : "ml-8") : "mb-6"
        }`}
      >
        <img
          src={props.image}
          alt={props.projectName}
          className={`card max-h-[70vh] max-w-[70vw] lg:max-w-full ${
            props.imageLeft ? "float-right" : "float-left"
          } relative z-40 w-auto rounded-md transition lg:hover:scale-125`}
        />
      </div>
    );
  };

  const getDescription = () => {
    return (
      <div
        className={`card ${
          props.wideImage ? "basis-1/2" : "basis-2/3"
        } flex min-h-fit max-w-7xl flex-col rounded-md bg-black/70 p-6 text-left`}
      >
        {props.aboutProject.map(
          (paragraph: { subtitle: string; text: string }, index: number) => (
            <>
              <h6 className="my-1">{paragraph.subtitle}</h6>
              <p className=" text-base">{paragraph.text}</p>
              <div
                className={`min-h-[1rem] w-full  ${
                  index === props.aboutProject.length - 1
                    ? "min-h-[2rem] grow"
                    : ""
                }`}
              ></div>
            </>
          )
        )}
        <div className="flex w-full gap-4">
          {props.projectLink && (
            <a
              className=" flex-center rounded-md bg-blue-700 py-1 text-slate-300 transition hover:bg-blue-800 hover:no-underline"
              href={props.projectLink}
              target="_blank"
            >
              <span className="px-2">
                <AiOutlineLink />
              </span>
              <div className=" h-full w-[1px] bg-slate-300" />
              <span className="px-2">Website</span>
            </a>
          )}
          {props.githubLink && (
            <a
              className=" flex-center rounded-md bg-slate-300 py-1 text-slate-800 transition hover:bg-slate-400 hover:no-underline"
              href={props.githubLink}
              target="_blank"
            >
              <span className="px-2">
                <BiGitBranch />
              </span>
              <div className=" h-full w-[1px] bg-slate-500" />
              <span className="px-2">Source</span>
            </a>
          )}
        </div>
      </div>
    );
  };
  return (
    <SlantedPage color={props.color} skew={props.skew}>
      <>
        <div className="flex-center h-48 w-full flex-col pt-8 text-white">
          <h2 className="projecttitle">{props.projectName}</h2>
          <div className="flex-center mt-6 max-w-[80vw] flex-wrap gap-2">
            {props.technologies?.map((Technology: any) => (
              <Technology />
            ))}
          </div>
        </div>
        <div className="h-fit min-h-[38rem] w-full py-8 text-white">
          <div className="flex-center h-full">
            <div className="flex w-5/6 max-w-[72rem] flex-col items-center lg:w-2/3 lg:flex-row lg:items-stretch">
              {props.imageLeft || !lg ? getImage() : getDescription()}
              {!props.imageLeft && lg ? getImage() : getDescription()}
            </div>
          </div>
        </div>
      </>
    </SlantedPage>
  );
};

export default ProjectPage;

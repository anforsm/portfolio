import { AiOutlineLink } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import GitLink from "./gitlink";
import WebLink from "./weblink";

const ProjectCard = (props: any) => {
  return <div className=" bg-black/10 h-80 aspect-[16/12] m-4 rounded-xl overflow-hidden hover:scale-105 transition">
    <div className="h-[40%] w-full bg-slate-500">
      <img src={"images/thumbnails/" + props.image} alt={props.name} className="w-full h-full object-cover" />
    </div>
    <div className="h-[60%] w-full bg-white/40 border-t-4 border-black">
      <div className="flex flex-col h-full">
        <div className="bg-black/10 w-full py-2">
          <h5 className=" font-medium">{props.name}</h5>
        </div>
        <div className="grow px-4">
          <p className=" text-lg">
            {props.description}
          </p>
        </div>
        <div className="px-4 pb-4 w-full flex justify-between">
          <span className="w-1/3">
            {props.link && <WebLink link={props.link} />}
          </span>
          <span className="w-1/3">
            {props.source && <GitLink link={props.source} />}
          </span>
        </div>
      </div>
    </div>
  </div>
}

export default ProjectCard;
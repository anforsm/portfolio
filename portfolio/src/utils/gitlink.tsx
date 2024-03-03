import Link from "./link"
import { BiGitBranch } from "react-icons/bi";

const GitLink = (props: any) => {
  return <Link 
    link={props.link} 
    icon={<BiGitBranch />} 
    text={"Source"} 
    hoverColor={"bg-black/5"}
    textColor={"text-black"}
  />
}

export default GitLink
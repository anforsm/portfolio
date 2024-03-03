import Link from "./link"
import { AiOutlineLink } from "react-icons/ai";

const WebLink = (props: any) => {
  return <Link 
    link={props.link} 
    icon={<AiOutlineLink />} 
    text={"Website"}
    hoverColor={"bg-blue-800"}
    color={"bg-blue-700"}
    textColor={"text-slate-300"}
  />
}

export default WebLink 
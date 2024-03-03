
const Link = (props: any) => {

  return <div className="">
    <a
        className={`hover:${props.hoverColor} flex-center rounded-md ${props.color} py-1 transition hover:no-underline ${props.textColor} border-2`}
        href={props.link}
        target="_blank"
      >
        <span className="px-2">
          {props.icon}
        </span>
        <div className={` h-full w-[1px] ${props.textColor}`} />
        <span className="px-2">{props.text}</span>
    </a>
  </div>
}

export default Link
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

let pages = ["About me", "Movieguesser", "TV Ratings", "Tickertracker"];

const getScrollPage = () => {
  let scrollPosition = window.scrollY;
  let closestPage = pages[0];
  let closestDistance = Infinity;
  document.querySelectorAll("section").forEach((section) => {
    let yPos =
      section.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top;
    let distance = Math.abs(yPos - scrollPosition);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestPage = section.id;
    }
  });
  return pages.indexOf(closestPage);
};

let longScroll = false;
let pageNum = getScrollPage();

const PageNav = (props: any) => {
  const [pageNumReactive, setPageNumReactive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const lg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    const pageSetter = () => {
      if (longScroll && pageNum == getScrollPage()) {
        longScroll = false;
      }
      if (!longScroll) {
        setPageNumReactive(getScrollPage());
        pageNum = getScrollPage();
      }
    };
    pageSetter();
    window.addEventListener("scroll", pageSetter);
  }, []);

  return (
    <nav
      className={`navbar fixed top-1/2 z-50 -translate-y-1/2 select-none rounded-r-[1.5rem] bg-black/80 py-2 pr-4 text-left shadow-md transition-all lg:bg-black/10 ${
        expanded && !lg ? "w-[9.5rem]" : "w-[0] cursor-pointer"
      } transition-all duration-300 ease-in-out lg:w-fit`}
      onClick={() => {
        if (!expanded && !lg) {
          setExpanded(true);
        }
      }}
    >
      <ul className="flex flex-col gap-2">
        {pages.map((page, index) => {
          return (
            <li
              key={index}
              className={`navitem relative ml-2 ${
                pageNumReactive === index ? " active" : ""
              } overflow-hidden`}
              onClick={() => {
                longScroll = true;
                pageNum = index;
                setPageNumReactive(index);
                window.scroll({
                  top:
                    document.getElementById(page)!.getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top,
                  behavior: "smooth",
                });
                if (!lg) setExpanded(false);
              }}
            >
              <a className="">
                <p className="whitespace-nowrap">{page}</p>
              </a>
            </li>
          );
        })}
        <div
          className="indicator"
          style={{ transform: `translateY(${pageNum * (3 + 0.5)}rem)` }}
        />
        <div
          className={`absolute top-1/2 -right-8 h-14 w-8 -translate-y-1/2 cursor-pointer rounded-r-[50%] bg-black/80 text-white lg:hidden lg:bg-black/10`}
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        >
          <IoIosArrowForward
            className={`h-10 w-10 ${
              expanded && "rotate-180"
            } relative right-2 top-1/2 -translate-y-1/2 transition duration-300`}
          />
        </div>
      </ul>
    </nav>
  );
};

export default PageNav;

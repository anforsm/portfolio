const TechnologyTemplate = ({
  technology,
  color,
  textcol,
}: {
  technology: string;
  color: string | string[];
  textcol: string;
}) => {
  let colArr = Array.isArray(color);
  let colorShare = colArr ? (1 / color.length) * 100 : 0;
  let style: any = {};

  if (colArr) {
    let colorGradient = "";
    //@ts-ignore
    color.forEach((col, i) => {
      if (i === 0) {
        colorGradient += `${col} ${colorShare}%, `;
      } else if (i === color.length - 1) {
        colorGradient += `${col} ${colorShare * i}%`;
      } else {
        colorGradient += `${col} ${colorShare * i}% ${colorShare * (i + 1)}%, `;
      }
    });
    //@ts-ignore
    style["backgroundImage"] = `linear-gradient(to right, ${colorGradient})`;
    style["boxShadow"] = `inset 0 0 0 100px rgba(255,255,255,0.7)`;
  } else {
    style["backgroundColor"] = color;
  }

  return (
    <div
      className={` relative select-none overflow-hidden rounded-2xl px-2 py-1 shadow-lg transition hover:scale-105 ${
        textcol === "dark" ? "text-slate-800" : "text-slate-200"
      }`}
      style={style}
    >
      <p className=" whitespace-nowrap">{technology}</p>
    </div>
  );
};

const ReactTech = () => {
  return (
    <TechnologyTemplate technology="React" color="#61dafb" textcol="dark" />
  );
};

const TailwindCSS = () => {
  return (
    <TechnologyTemplate
      technology="Tailwind CSS"
      color="#0b1120"
      textcol="light"
    />
  );
};

const NextJS = () => {
  return (
    <TechnologyTemplate technology="Next.js" color="#ffffff" textcol="dark" />
  );
};

const UIComponents = () => {
  return (
    <TechnologyTemplate
      technology="UI Components"
      color="#ce3554"
      textcol="light"
    />
  );
};

const GoogleCloud = () => {
  // blue red yellow green
  return (
    <TechnologyTemplate
      technology="Google Cloud"
      color={["#4285f4", "#ea4335", "#fbbc04", "#34a853"]}
      textcol="dark"
    />
  );
};

const Heroku = () => {
  return (
    <TechnologyTemplate technology="Heroku" color="#430098" textcol="light" />
  );
};

const Firebase = () => {
  return (
    <TechnologyTemplate technology="Firebase" color="#ffcb2e" textcol="dark" />
  );
};

const RESTAPI = () => {
  return (
    <TechnologyTemplate technology="REST API" color="#00b0ff" textcol="dark" />
  );
};

const Scraping = () => {
  return (
    <TechnologyTemplate
      technology="Web Scraping"
      color="#00b0ff"
      textcol="dark"
    />
  );
};

const Redux = () => {
  return (
    <TechnologyTemplate technology="Redux" color="#764abc" textcol="light" />
  );
};

const JavaScript = () => {
  return (
    <TechnologyTemplate
      technology="JavaScript"
      color="#f0db4f"
      textcol="dark"
    />
  );
};

const TypeScript = () => {
  return (
    <TechnologyTemplate
      technology="TypeScript"
      color="#007acc"
      textcol="light"
    />
  );
};

export default TechnologyTemplate;
export {
  ReactTech,
  TailwindCSS,
  NextJS,
  UIComponents,
  GoogleCloud,
  Heroku,
  Firebase,
  RESTAPI,
  Scraping,
  Redux,
  JavaScript,
  TypeScript,
};

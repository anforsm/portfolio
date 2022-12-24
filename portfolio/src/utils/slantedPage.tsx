const rad = (angle: number) => angle * (Math.PI / 180);
const SlantedPage = (props: {
  color: string;
  skew: number;
  children?: any;
}) => {
  let positiveSkew = props.skew > 0;
  return (
    <div
      className="relative z-20 my-10 h-fit"
      style={{
        backgroundColor: props.color,
      }}
    >
      <div
        className="absolute -top-20 z-30 h-20 w-full"
        style={{
          backgroundColor: props.color,
          clipPath: `polygon(0 101%, 100% 101%, ${
            positiveSkew ? "0%" : `100%`
          } calc(100% - ${Math.abs(props.skew)}%))`,
        }}
      ></div>
      {props.children}
      <div
        className="relative -bottom-20 z-10 h-20 w-full"
        style={{
          backgroundColor: props.color,
        }}
      ></div>
    </div>
  );
};

export default SlantedPage;

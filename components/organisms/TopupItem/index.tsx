interface TopupItemProps {
  type: "desktop" | "mobile";
  title: string | string[] | undefined;
  photo: string | string[] | undefined;
  category: string | string[] | undefined;
}

function TopupItem(props: TopupItemProps) {
  const { type } = props;
  if (type === "desktop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {props?.title}
        </h2>
        <p className="text-lg color-palette-2 mb-0">
          Category: {props?.category}
        </p>
      </div>
    );
  }
  return (
    <div className="row align-items-center">
      <div className="col-md-12 col-4">
        <img
          src={`/img/${props.photo}.png`}
          width="280"
          height="380"
          className="img-fluid"
          alt=""
        />
      </div>

      {/*  Mobile: Game title  */}
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
          {props?.title}
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">
          Category: {props?.category}
        </p>
      </div>
    </div>
  );
}

export default TopupItem;

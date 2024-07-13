export default function TextWidgets(props) {
  if (props.type === "Productivity")
    return (
      <h1 className="z-[1001] h-screen bg-coverfont-outfit text-[4vw] font-semibold text-white text-center leading-[100vh] align-middle">
        {props.children}
      </h1>
    );

  if (props.type === "Entertainment")
    return (
      <h1 className="z-[1001] font-outfit text-[4vw] font-semibold text-white text-center leading-[50vh] align-middle">
        {props.children}
      </h1>
    );

  if (props.type === "Educational")
    return (
      <h1 className="z-[1001] font-outfit text-[4vw] font-semibold text-white text-center leading-[50vh] align-middle">
        {props.children}
      </h1>
    );
}

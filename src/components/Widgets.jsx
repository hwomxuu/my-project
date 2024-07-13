export default function Widgets(props) {
  if (props.type === "Productivity")
    return (
      <div className="flex flex-col justify-center items-center relative">
        <div className="absolute h-full w-full mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1515334798407-90e6ea6624c1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center opacity-[0.3]"></div>
        {props.children}
      </div>
    );

  if (props.type === "Entertainment")
    return (
      <div className="flex flex-col justify-center items-center relative">
        <div className="absolute h-full w-full mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center opacity-[0.3]"></div>
        {props.children}
      </div>
    );

  if (props.type === "Educational")
    return (
      <div className="relative flex flex-col justify-center items-center">
        <div className="absolute h-full w-full mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1667312939934-60fc3bfa4ec0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center opacity-[0.3]"></div>
        {props.children}
      </div>
    );
}

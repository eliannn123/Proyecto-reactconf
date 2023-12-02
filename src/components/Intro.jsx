import logoreact from "../assets/UilReact.svg";
export function Intro() {
  return (
    <div className="flex justify-center h-[600px] relative">
      <img src={logoreact} className="pb-9 " />
      <h1 className="absolute text-7xl sm:text-8xl md:text-9xl lg:text-9xl lg:mt-[13.5rem] md:mt-[13.8rem] sm:mt-[14.8rem] mt-[15.4rem] text-zinc-100 font-principal  ">
        REACTCON
      </h1>
    </div>
  );
}

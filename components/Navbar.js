export default function Navbar() {
  return (
    <nav className=" w-[80%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* left side */}
        <div className=" hidden lg:block text-white font-semibold text-3xl ">
          Portfolio
        </div>
        {/* right side */}
        <div className="justify-self-center lg:justify-self-end  text-white font-medium text-lg space-x-8 md:space-x-12 xl:space-x-28">
          <a href="#home">Home</a>
          <a href="#skills">Skill</a>
          <a href="#work">Work</a>
          <a href="mailto:tansijones@outlook.com">Contact</a>
        </div>
      </div>
    </nav>
  );
}

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <header className="relative bg-black z-50 h-[90vh]">
        {/* top section */}
        <Image
          src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
          layout="fill"
          className=" object-cover z-[-1] opacity-30 sm:rounded-b-3xl"
        />

        <div className=" z-50 fixed w-full backdrop-blur-md">
          <nav className=" grid items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-[80%] mx-auto py-4">
            <div className="hidden lg:block text-white font-semibold text-3xl ">
              Portfolio
            </div>
            <div className="justify-self-center lg:justify-self-end  text-white font-medium text-lg space-x-8 md:space-x-12 xl:space-x-28">
              <a href="#home">Home</a>
              <a href="#skills">Skill</a>
              <a href="#work">Work</a>
              <a href="mailto:tansijones@outlook.com">Contact</a>
            </div>
            <div className="hidden xl:flex space-x-5 justify-self-end ">
              <div className="w-[35px] h-[35px] rounded-full bg-gray-700 p-2">
                <a
                  href="https://www.linkedin.com/in/jones-mbouna-183a9b200/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="h-5 text-white "
                  />
                </a>
              </div>
              <div className="w-[35px] h-[35px] rounded-full bg-gray-700 p-2">
                <a href="https://github.com/Tansi-Jones" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-5 text-white "
                  />
                </a>
              </div>
              <div className="w-[35px] h-[35px] rounded-full bg-gray-700 p-2">
                <a href="https://twitter.com/jones_tansi" target="_blank">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="h-5 text-white "
                  />
                </a>
              </div>
            </div>
          </nav>
        </div>
        {/* bottom section */}
        <div>
          <h1 className="text-white text-4xl text-center font-bold md:text-[4rem]  lg:text-[5rem] pt-[18rem]">
            Hi, I'm Tansi Jones
          </h1>
          <p className="text-white text-2xl text-center mt-5  lg:mt-14">
            Web developer & aws cloud enthusiast
          </p>
        </div>
      </header>
    </>
  );
}

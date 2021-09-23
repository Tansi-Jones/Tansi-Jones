import Work from "../components/Work";
import About from "../components/About";
import Header from "../components/Header";
import MetaHead from "../components/MetaHead";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";
import Footer from "../components/Footer";

import ProjectData from "../components/projectData";

export default function Home() {
  return (
    <main className=" relative overflow-hidden" id="home">
      <MetaHead />

      {/*  */}
      <section
        className="fixed py-5  w-full z-50 bg-opacBlack backdrop-blur-md"
        id="stickyNav"
      >
        <Navbar />
      </section>

      <Header />

      {/*  */}
      <section className="w-[80%] mx-auto ">
        <About />
      </section>

      {/*  */}
      <section className="w-[80%] mx-auto mt-32" id="skills">
        <Skill />
      </section>

      {/*  */}
      <section className="w-[80%] mx-auto mt-32" id="work">
        <p className="text-gray-400 mb-4 md:text-lg">// MY WORK</p>

        <div className="flex flex-wrap gap-x-10 gap-y-14 mt-16 mb-20">
          {ProjectData.map(
            ({ img, title, description, markers, url }, index) => (
              <Work
                id={index}
                imgSrc={img}
                heading={title}
                desc={description}
                mark={markers}
                link={url}
              />
            )
          )}
        </div>
      </section>

      {/*  */}
      <section>
        <Footer />
      </section>
    </main>
  );
}

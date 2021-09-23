export default function About({ imgSrc, heading, desc, mark, link }) {
  return (
    <>
      <div className="rounded-xl shadow-md min-w-[20rem]">
        <div className="h-52 w-full">
          <img
            className="h-full w-full rounded-t-xl object-cover"
            src={imgSrc}
          />
        </div>
        <div className="my-7 px-6">
          <h1 className="text-xl font-semibold text-gray-800 mb-3">
            {heading}
          </h1>
          <p className="text-md mb-3 text-gray-800">
            {desc}
            <mark className="text-sm text-gray-500 bg-transparent italic">
              {" "}
              {mark}
            </mark>
          </p>
          <a
            href={link}
            className="bg-gray-700 rounded-md px-5 py-2 block text-center text-white mt-5"
          >
            Check it out
          </a>
        </div>
      </div>
    </>
  );
}

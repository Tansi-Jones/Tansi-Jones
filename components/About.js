export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20 ">
        <div className="py-20">
          <p className="text-gray-400 mb-4 md:text-lg">//ABOUT ME</p>
          <p className="text-gray-800 md:text-lg py-5">
          Hi, I'm Tansi Jones, developer and cloud enthusiast, i've been
            writing code for over 3 years in different languages, but ive come
            to love JavaScript, I love its simplicity and flexibility, and with
            the introduction of Next Js i've taken my development to the next
            level, I'm also passionate about cloud computing am currently
            studying AWS. I love traveling, love to discovering new things. And
            i love playing simulations video games.
          </p>
        </div>
        <div className="justify-self-center md:justify-self-end">
          <div className=" h-96">
            <img
              className="h-full object-cover justify-end"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

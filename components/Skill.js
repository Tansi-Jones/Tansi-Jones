import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faAws,
  faJsSquare,
  faNodeJs,
  faGithub,
  faCss3,
  faHtml5,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

export default function Skill() {
  return (
    <>
      <div className="flex justify-evenly space-x-5 items-center my-10">
        <FontAwesomeIcon
          icon={faReact}
          className="h-10 md:h-20 text-gray-600"
        />
        <FontAwesomeIcon
          icon={faAws}
          className="h-10 sm:h-14 md:h-20 text-gray-600"
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          className="h-10 sm:h-14 md:h-20 text-gray-600"
        />
        <FontAwesomeIcon
          icon={faJsSquare}
          className="h-10 sm:h-14 md:h-20 text-gray-600"
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="h-10 sm:h-14 md:h-20 text-gray-600"
        />
        <FontAwesomeIcon
          icon={faCss3}
          className="h-10 sm:h-14 md:h-20 text-gray-600"
        />
        <FontAwesomeIcon
          icon={faHtml5}
          className="h-10 sm:h-14 md:h-20 text-gray-600"
        />
        <FontAwesomeIcon
          icon={faNpm}
          className="h-10 sm:h-14 md:h-20 text-gray-600"
        />
      </div>
    </>
  );
}

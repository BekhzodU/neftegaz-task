import PropTypes from "prop-types";
import {
  CalendarIcon,
  MapPinIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Conference = ({ conference }) => {
  return (
    <div
      key={conference.id}
      className="group relative shadow-lg rounded-md bg-white w-full max-w-2xl border-b-4 border-gray-300 transition-all duration-300 ease-in-out hover:border-b-[#3C4BDC] p-4"
    >
      <div className="flex items-center bg-gray-100 text-gray-700 p-2 rounded-md mb-3">
        <CalendarIcon className="w-5 h-5 mr-2 text-gray-500" />
        <span className="text-sm">{conference.date}</span>
      </div>

      <h2 className="text-md font-semibold text-black my-6 group-hover:text-[#3C4BDC]">
        {conference.title}
      </h2>

      <hr className="border-gray-300 mb-3" />

      <div className="flex items-center text-gray-600 mb-2">
        <MapPinIcon className="w-5 h-5 mr-2 text-[#3C4BDC]" />
        <span className="text-sm">{conference.location}</span>
      </div>

      <div className="flex items-center text-gray-600 mb-2">
        <EnvelopeIcon className="w-5 h-5 mr-2 text-[#3C4BDC]" />
        <span className="text-sm">{conference.email}</span>
      </div>

      <div className="flex items-center text-gray-600 mb-2">
        <GlobeAltIcon className="w-5 h-5 mr-2 text-[#3C4BDC]" />
        <a
          href={conference.website}
          className="text-sm underline hover:text-[#3C4BDC]"
        >
          {conference.website}
        </a>
      </div>
    </div>
  );
};

Conference.propTypes = {
  conference: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default Conference;

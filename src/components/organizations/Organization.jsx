import PropTypes from "prop-types";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Organization = ({ organization }) => {
  return (
    <div className="relative flex items-start p-4 py-6 rounded-lg bg-white w-full max-w-2xl border-b-4 border-gray-300 transition-all duration-300 ease-in-out hover:border-b-[#3C4BDC] group">
      <div className="flex-shrink-0 mr-4 self-start">
        <img
          src={organization.icon}
          alt="Organization Logo"
          className="w-14 h-14 rounded-full"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#3C4BDC]">
          {organization.name}
        </h2>
        <div className="space-y-3 text-gray-600">
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5 mr-2 text-[#3C4BDC]" />
            <span>{organization.address}</span>
          </div>

          <div className="flex items-center">
            <PhoneIcon className="w-5 h-5 mr-2 text-[#3C4BDC]" />
            <span>{organization.phone}</span>
          </div>

          <div className="flex items-center">
            <PhoneIcon className="w-5 h-5 mr-1 text-[#3C4BDC]" />
            <span>
              <span className="font-semibold text-xs text-[#3C4BDC] mr-1">
                Facs:
              </span>
              {organization.phone}
            </span>
          </div>

          <div className="flex items-center">
            <EnvelopeIcon className="w-5 h-5 mr-2 text-[#3C4BDC]" />
            <span>{organization.email}</span>
          </div>

          <div className="flex items-center">
            <GlobeAltIcon className="w-5 h-5 mr-2 text-[#3C4BDC]" />
            <a
              href={organization.website}
              className="underline hover:text-[#3C4BDC]"
            >
              {organization.website}
            </a>
          </div>

          <div className="flex items-center">
            <span className="text-sm text-[#3C4BDC]">ISSN</span>
            <span className="ml-2">{organization.issn}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Organization.propTypes = {
  organization: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    issn: PropTypes.string.isRequired,
  }).isRequired,
};

export default Organization;

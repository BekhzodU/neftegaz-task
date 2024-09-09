import PropTypes from "prop-types";

function SectionTitle({ label }) {
  return <h3 className="text-lg font-medium my-4">{label}</h3>;
}

SectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SectionTitle;

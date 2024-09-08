import PropTypes from "prop-types";

const Input = ({ name, placeholder, type = "text", required = true }) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded-lg bg-gray-100 py-3 px-4 text-gray-900 outline-none placeholder-gray-400 sm:text-sm sm:leading-6"
      required={required}
    />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;

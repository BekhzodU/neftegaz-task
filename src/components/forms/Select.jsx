import PropTypes from "prop-types";

const Select = ({ name, options }) => (
  <div>
    <select
      name={name}
      className="w-full rounded-lg bg-gray-100 py-3 px-4 text-gray-900 outline-none placeholder-gray-400 sm:text-sm sm:leading-6"
      required
    >
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
};

export default Select;

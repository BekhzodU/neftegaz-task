import { PlusIcon } from "@heroicons/react/16/solid";
import PropTypes from "prop-types";

function AddButton({ label, onClick }) {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="text-[#2D6D76] mt-2 flex justify-center"
        onClick={onClick}
      >
        <span>{label}</span>
        <PlusIcon className="w-6 h-6 ml-1" />
      </button>
    </div>
  );
}

AddButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddButton;

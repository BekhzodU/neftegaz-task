import Select from "./Select";
import SectionTitle from "./SectionTitle";
import PropTypes from "prop-types";

function Language({ index }) {
  return (
    <div>
      <SectionTitle label="Xorijiy tillarni bilish:" />
      <div className="grid grid-cols-1 gap-4">
        <Select
          name={"language" + index}
          options={["Til", "Option 1", "Option 2"]}
        />
        <div className="grid grid-cols-3 gap-4">
          <Select
            name={"oral" + index}
            options={["Og'zaki", "Option 1", "Option 2"]}
          />
          <Select
            name={"written" + index}
            options={["Yozma", "Option 1", "Option 2"]}
          />
          <Select
            name={"reading" + index}
            options={["O'qish", "Option 1", "Option 2"]}
          />
        </div>
      </div>
    </div>
  );
}

Language.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Language;

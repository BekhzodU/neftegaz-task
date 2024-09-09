import Input from "./Input";
import SectionTitle from "./SectionTitle";
import PropTypes from "prop-types";

function Work({ index }) {
  return (
    <div>
      <SectionTitle label="Mehnat faoliyati:" />
      <div className="grid grid-cols-2 gap-4">
        <Input name={"organizationName" + index} placeholder="Tashkilot nomi" />
        <Input name={"position" + index} placeholder="Lavozimi" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Input
          name={"startMonth" + index}
          placeholder="Boshlangan oy"
          type="number"
        />
        <Input
          name={"startYear" + index}
          placeholder="Boshlangan yil"
          type="number"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Input
          name={"endMonth" + index}
          placeholder="Tugallangan oy"
          type="number"
        />
        <Input
          name={"endYear" + index}
          placeholder="Tugallangan yil"
          type="number"
        />
      </div>
    </div>
  );
}

Work.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Work;

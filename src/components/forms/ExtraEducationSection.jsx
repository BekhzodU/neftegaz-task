import Input from "./Input";
import SectionTitle from "./SectionTitle";
import PropTypes from "prop-types";

function ExtraEducation({ index }) {
  return (
    <div>
      <SectionTitle label="Qo'shimcha ma'lumot (malaka oshirish):" />
      <div className="grid grid-cols-1 gap-4">
        <Input
          name={"extraInstitution" + index}
          placeholder="O'qish muassasasi nomi"
        />
        <Input name={"extraSpecialty" + index} placeholder="Mutaxassislik" />
        <div className="grid grid-cols-2 gap-4">
          <Input
            name={"extraEndMonth" + index}
            placeholder="Tugallangan oy"
            type="number"
          />
          <Input
            name={"extraEndYear" + index}
            placeholder="Tugallangan yil"
            type="number"
          />
        </div>
      </div>
    </div>
  );
}

ExtraEducation.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ExtraEducation;

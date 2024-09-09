import Input from "./Input";
import SectionTitle from "./SectionTitle";
import PropTypes from "prop-types";

function Education({ index }) {
  return (
    <div>
      <SectionTitle label="Ma'lumotingiz:" />
      <div className="grid grid-cols-1 gap-4">
        <Input
          name={"institution" + index}
          placeholder="O'qish muassasasi nomi"
        />
        <div className="grid grid-cols-2 gap-4">
          <Input name={"faculty" + index} placeholder="Fakultet" />
          <Input name={"specialty" + index} placeholder="Mutaxassislik" />
        </div>
        <Input name={"graduationYear" + index} placeholder="Tugallangan yil" />
      </div>
    </div>
  );
}

Education.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Education;

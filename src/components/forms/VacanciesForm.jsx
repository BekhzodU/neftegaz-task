import { useReducer } from "react";
import Input from "./Input";
import Select from "./Select";
import EducationSection from "./EducationSection";
import ExtraEducationSection from "./ExtraEducationSection";
import LanguageSection from "./LanguageSection";
import WorkSection from "./WorkSection";
import AddButton from "./AddButton";
import { groupFieldsByIndex } from "../../utils/helper";

const personalInfoInputs = [
  { name: "surname", placeholder: "Familiya" },
  { name: "name", placeholder: "Ism" },
  { name: "patronymic", placeholder: "Sharif" },
  { name: "birthDay", placeholder: "Tug'ilgan kun", type: "number" },
  { name: "birthMonth", placeholder: "Tug'ilgan oy", type: "number" },
  { name: "birthYear", placeholder: "Tug'ilgan yil", type: "number" },
  { name: "address", placeholder: "Yashash manzili" },
  { name: "phone", placeholder: "Telefon raqam" },
  { name: "email", placeholder: "Elektron pochta", type: "email" },
];

const educationFields = [
  "institution",
  "faculty",
  "specialty",
  "graduationYear",
];
const extraEducationFields = [
  "extraInstitution",
  "extraSpecialty",
  "extraEndMonth",
  "extraEndYear",
];
const languageFields = ["language", "oral", "written", "reading"];
const workFields = [
  "organizationName",
  "position",
  "startMonth",
  "startYear",
  "endMonth",
  "endYear",
];

const initialState = {
  educations: 1,
  extraEducations: 1,
  languages: 1,
  works: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "addEducation":
      return { ...state, educations: state.educations + 1 };
    case "addExtraEducation":
      return { ...state, extraEducations: state.extraEducations + 1 };
    case "addLanguage":
      return { ...state, languages: state.languages + 1 };
    case "addWork":
      return { ...state, works: state.works + 1 };
    default:
      return state;
  }
}

const VacanciesForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());

    const finalData = {
      educations: groupFieldsByIndex(formData, educationFields),
      extraEducations: groupFieldsByIndex(formData, extraEducationFields),
      languages: groupFieldsByIndex(formData, languageFields),
      works: groupFieldsByIndex(formData, workFields),
      ...formData,
    };

    console.log(finalData);
  };

  return (
    <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12 ">
      <form onSubmit={handleSubmit}>
        <div className="bg-white px-4 py-6 shadow-xl rounded-2xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              name="organization"
              options={["Tashkilotni tanlang", "Option 1", "Option 2"]}
            />
            <Select
              name="specialization"
              options={["Mutaxassislikni tanlang", "Option 1", "Option 2"]}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium my-4">{`Shaxsiy ma'lumotlar:`}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {personalInfoInputs.map((el) => (
                <Input
                  key={el.name}
                  name={el.name}
                  placeholder={el.placeholder}
                  type={el.type}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {Array.from({ length: state.educations }, (_, index) => (
                <EducationSection key={index} index={index} />
              ))}
              <AddButton
                label={`O'quv muassasasi qo'shish`}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "addEducation" });
                }}
              />
            </div>
            <div>
              {Array.from({ length: state.extraEducations }, (_, index) => (
                <ExtraEducationSection key={index} index={index} />
              ))}
              <AddButton
                label={`O'quv muassasasi qo'shish`}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "addExtraEducation" });
                }}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {Array.from({ length: state.languages }, (_, index) => (
                <LanguageSection key={index} index={index} />
              ))}
              <AddButton
                label={`Til qo'shish`}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "addLanguage" });
                }}
              />
            </div>
            <div>
              {Array.from({ length: state.works }, (_, index) => (
                <WorkSection key={index} index={index} />
              ))}
              <AddButton
                label={`O'quv muassasasi qo'shish`}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "addWork" });
                }}
              />
            </div>
          </div>
          <div className="mt-6 border-t-2 border-gray-300"></div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium my-4">
                Qachon ishga tushingiz?
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  name="startDate"
                  placeholder="Vaqtni tanlang"
                  type="number"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium my-4">
                {"Bo'sh ish o'rni haqida qayerdan bildingiz?"}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <Input name="source" placeholder="Tanlang" type="number" />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4">
            <div>
              <h3 className="text-lg font-medium my-4">
                Qancha maosh sizni qoniqtiradi?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input name="salary" placeholder="Summa (so'm)" type="number" />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mr-2 w-4 h-4"
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm font-semibold text-[#2D6D76]"
                  >
                    {`Mazkur anketada taqdim etgan ma'lumotlarim to'liq va haqqoniy ekanligini tasdiqlayman`}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg space-x-2">
              <input
                type="checkbox"
                id="recaptcha"
                name="recaptcha"
                className="w-4 h-4"
                required
              />
              <label htmlFor="recaptcha" className="text-sm text-gray-600">
                Men robot emasman
              </label>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1024px-RecaptchaLogo.svg.png"
                className="w-12 h-12"
                alt="reCAPTCHA Logo"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[#2D6D76] py-2 px-6 text-white"
            >
              Yuborish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VacanciesForm;

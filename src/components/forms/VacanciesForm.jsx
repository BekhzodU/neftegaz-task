import { PlusIcon } from "@heroicons/react/16/solid";
import Input from "./Input";
import Select from "./Select";

const VacanciesForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    console.log(formData);
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
              <Input name="surname" placeholder="Familiya" />
              <Input name="name" placeholder="Ism" />
              <Input name="patronymic" placeholder="Sharif" />
              <Input
                name="birthDay"
                placeholder="Tug'ilgan kun"
                type="number"
              />
              <Input
                name="birthMonth"
                placeholder="Tug'ilgan oy"
                type="number"
              />
              <Input
                name="birthYear"
                placeholder="Tug'ilgan yil"
                type="number"
              />
              <Input name="address" placeholder="Yashash manzili" />
              <Input name="phone" placeholder="Telefon raqam" />
              <Input name="email" placeholder="Elektron pochta" type="email" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium my-4">{`Ma'lumotingiz:`}</h3>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  name="institution"
                  placeholder="O'qish muassasasi nomi"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input name="faculty" placeholder="Fakultet" />
                  <Input name="specialty" placeholder="Mutaxassislik" />
                </div>
                <Input name="graduationYear" placeholder="Tugallangan yil" />
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-[#2D6D76] mt-2 flex justify-center"
                  >
                    <span>{`O'quv muassasasi qo'shish`}</span>
                    <PlusIcon className="w-6 h-6 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium my-4">{`Qo'shimcha ma'lumot:`}</h3>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  name="extraInstitution"
                  placeholder="O'qish muassasasi nomi"
                />
                <Input name="extraSpecialty" placeholder="Mutaxassislik" />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="extraEndMonth"
                    placeholder="Tugallangan oy"
                    type="number"
                  />
                  <Input
                    name="extraEndYear"
                    placeholder="Tugallangan yil"
                    type="number"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-[#2D6D76] mt-2 flex justify-center"
                  >
                    <span>{`O'quv muassasasi qo'shish`}</span>
                    <PlusIcon className="w-6 h-6 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium my-4">
                Xorijiy tillarni bilish:
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <Select
                  name="language"
                  options={["Til", "Option 1", "Option 2"]}
                />
                <div className="grid grid-cols-3 gap-4">
                  <Select
                    name="oral"
                    options={["Og'zaki", "Option 1", "Option 2"]}
                  />
                  <Select
                    name="written"
                    options={["Yozma", "Option 1", "Option 2"]}
                  />
                  <Select
                    name="reading"
                    options={["O'qish", "Option 1", "Option 2"]}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-[#2D6D76] mt-2 flex justify-center"
                  >
                    <span>{`Til qo'shish`}</span>
                    <PlusIcon className="w-6 h-6 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium my-4">Mehnat faoliyati:</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input name="organizationName" placeholder="Tashkilot nomi" />
                <Input name="position" placeholder="Lavozimi" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Input
                  name="startMonth"
                  placeholder="Boshlangan oy"
                  type="number"
                />
                <Input
                  name="startYear"
                  placeholder="Boshlangan yil"
                  type="number"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Input
                  name="endMonth"
                  placeholder="Tugallangan oy"
                  type="number"
                />
                <Input
                  name="endYear"
                  placeholder="Tugallangan yil"
                  type="number"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="text-[#2D6D76] mt-2 flex justify-center"
                >
                  <span>{`Mehnat faoliyati qo'shish`}</span>
                  <PlusIcon className="w-6 h-6 ml-1" />
                </button>
              </div>
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

import {
  FaFacebook,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-transparent py-10">
      <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              При цитировании материалов Сайта, включая охраняемые авторские
              произведения, ссылка на Сайт обязательна.
            </p>
            <button className="flex items-center text-gray-700 font-medium text-sm space-x-1">
              <span className="flex items-center">
                <ExclamationCircleIcon className="w-4 h-4 mr-1" /> FAQ
              </span>
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-base font-semibold text-gray-800">Меню</h4>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Журналы
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Статья
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Авторы
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Организации
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Контакт
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-base font-semibold text-gray-800">
              Пресс-служба
            </h4>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Конференция
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Семинар
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Видеотека
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Новости
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-base font-semibold text-gray-800">Контакт</h4>
            <p className="text-sm text-gray-600 space-y-1 flex flex-col">
              <span className="font-semibold">Телефон:</span>
              <span>(+99871) 203-01-01, 242-48-93</span>
            </p>
            <p className="text-sm text-gray-600 space-y-1 flex flex-col">
              <span className="font-semibold">Адрес:</span>
              <span> г. Ташкент, Узбекистан</span>
            </p>
            <p className="text-sm text-gray-600 space-y-1 flex flex-col">
              <span className="font-semibold">E-mail:</span>
              <span> farmkomitet@ssv.uz</span>
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-base font-semibold text-gray-800">
              Социальные сети
            </h4>
            <div className="flex justify-start space-x-4">
              <span className="bg-gray-500 p-2 rounded-full hover:bg-[#3C4BDC]">
                <FaFacebook className="text-white w-4 h-4" />
              </span>
              <span className="bg-gray-500 p-2 rounded-full hover:bg-[#3C4BDC]">
                <FaTelegramPlane className="text-white w-4 h-4" />
              </span>
              <span className="bg-gray-500 p-2 rounded-full hover:bg-[#3C4BDC]">
                <FaInstagram className="text-white w-4 h-4" />
              </span>
              <span className="bg-gray-500 p-2 rounded-full hover:bg-[#3C4BDC]">
                <FaYoutube className="text-white w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

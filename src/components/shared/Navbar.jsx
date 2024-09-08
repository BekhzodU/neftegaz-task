import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ArrowRightEndOnRectangleIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Журналы", href: "products" },
  { name: "Статья", href: "#" },
  { name: "Авторы", href: "#" },
  { name: "Организации", href: "#" },
  { name: "Пресс-служба", href: "#" },
  { name: "Контакт", href: "#" },
  { name: "Bo'sh ish o'rinlari", href: "vacancies" },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-transparent">
      <div className="mx-auto max-w-full ">
        <div className="flex h-16 items-center justify-between rounded-2xl px-4 py-8 my-4 bg-white shadow-xl">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-2 flex items-baseline">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ?? "page"}
                    className="text-[#353437] rounded-md px-2 py-1 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-2">
              <input
                type="text"
                placeholder="Поиск"
                className="block w-2/4 rounded-md bg-gray-300 border-[1px] border-gray-300 py-2 px-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 outline-none"
              />
              <button className="flex justify-center items-center w-1/4 text-sm font-medium">
                Русский
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              <button className="flex justify-center items-center w-1/4 bg-white border-[1px] border-solid border-[#3C4BDC] text-[#3C4BDC] py-2 px-3 rounded-lg text-sm font-medium">
                Войти
                <ArrowRightEndOnRectangleIcon className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <button className="flex justify-center items-center px-3 py-2 text-base font-medium">
            Русский
            <ChevronDownIcon className="w-5 h-5 ml-1" />
          </button>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className="text-[$353437] block rounded-md px-3 py-2 text-base font-medium"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;

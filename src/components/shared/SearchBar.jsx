import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-screen-full py-4">
        <div className="relative flex items-center bg-white rounded-2xl shadow-xl px-6 py-4">
          <input
            type="text"
            placeholder="Поиск"
            className="flex-grow rounded-lg bg-gray-100 border-[1px] border-gray-300 py-2 px-3 pl-7 text-gray-900 outline-none placeholder-gray-400  sm:text-sm sm:leading-6"
          />
          <button className="ml-4 flex items-center justify-center bg-[#3C4BDC] text-white rounded-lg px-4 py-2 font-medium text-sm">
            Журналы
            <ChevronDownIcon className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

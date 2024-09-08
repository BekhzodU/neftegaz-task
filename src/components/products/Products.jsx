import Product from "./Product";
import products from "../../data/products.json";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import Pagination from "../shared/Pagination";

export default function Products() {
  const location = useLocation();
  const isDashboard = location.pathname === "/";

  return (
    <div className="bg-transparent">
      <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12 space-y-10">
        {isDashboard ? (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Популярные журналы
          </h2>
        ) : (
          <div className="flex justify-between max-w-fit text-sm font-medium text-gray-500 space-x-4 ">
            <span className="text-[#3C4BDC] border-b-2 border-[#3C4BDC]">
              Дата
            </span>
            <span>Ключевое слово</span>
            <span>Название журнал</span>
            <span>Организации</span>
            <span>Статья</span>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div className="w-full" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>

        {isDashboard ? (
          <button className="flex justify-center items-center py-3 px-4 text-[#3C4BDC] border-2 border-solid border-[#3C4BDC] bg-white rounded-lg mx-auto">
            Подробнее <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
        ) : (
          <Pagination />
        )}
      </div>
    </div>
  );
}

import Conference from "./Conference";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import conferences from "../../data/conferences.json";

export default function Conferences() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12 space-y-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Планируемые конференции
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 lg:gap-x-4 xl:gap-x-6">
          {conferences.map((conference) => (
            <div className="w-full max-w-sm mx-auto" key={conference.id}>
              <Conference conference={conference} />
            </div>
          ))}
        </div>

        <button className="flex justify-center items-center py-3 px-4 text-[#3C4BDC] border-2 border-solid border-[#3C4BDC] bg-white rounded-lg mx-auto">
          Все конференции <ArrowRightIcon className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}

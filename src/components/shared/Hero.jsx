import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

export default function Hero() {
  const location = useLocation();

  const isDashboard = location.pathname === "/";
  const headingText = isDashboard
    ? "11 ПРИЗНАКОВ ТОГО, ЧТО ПЕРЕД ВАМИ КАРТИНА СЮРРЕАЛИСТОВ"
    : "Результаты поиска";
  const descriptionText = isDashboard
    ? "Полулюди-полурыбы, бесконечные побережья, отвратительные насекомые и человек, разорванный на части"
    : "Главная / Результаты поиска";

  const isVacancyPage = location.pathname === "/vacancies";

  if (isVacancyPage) {
    return (
      <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12 space-y-6">
        <Navbar />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12 space-y-6">
      <Navbar />
      <div className="bg-transparent">
        <div className="mx-auto max-w-screen-full py-6">
          <div className="relative isolate overflow-hidden bg-[#59595a] px-6 py-16 lg:pb-0 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:py-32 lg:text-left lg:max-w-xl">
              {isDashboard ? (
                <>
                  <h2 className="text-3xl font-semibold tracking-wide text-white sm:text-4xl">
                    {headingText}
                  </h2>
                  <p className="mt-6 text-md leading-8 text-gray-300">
                    {descriptionText}
                  </p>
                </>
              ) : (
                <>
                  <p className="mt-6 text-md leading-8 text-gray-300">
                    {descriptionText}
                  </p>
                  <h2 className="text-3xl font-semibold tracking-wide text-white sm:text-4xl">
                    {headingText}
                  </h2>
                </>
              )}
              {isDashboard && (
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <button className="rounded-lg bg-[#3C4BDC] px-6 py-4 text-sm font-semibold text-white shadow-sm">
                    Читать журнал<span aria-hidden="true">→</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}

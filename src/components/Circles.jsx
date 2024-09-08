export default function CircleComponent() {
  const CircleData = [
    { id: 1, value: "5000+", label: "Журналы" },
    { id: 2, value: "120+", label: "Авторы" },
    { id: 3, value: "80+", label: "Организации" },
    { id: 4, value: "200+", label: "Семинары" },
  ];

  return (
    <div className="bg-transparent w-full flex justify-center items-center py-6 overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-center justify-center -space-y-5 md:space-y-0 sm:mx-0 sm:-space-x-0 md:-space-x-10 lg:-space-x-12">
        {CircleData.map((circle) => (
          <div
            key={circle.id}
            className="relative z-0 flex flex-col justify-center items-center rounded-full border-2 border-gray-300 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 text-center bg-transparent hover:border-[#3C4BDC] hover:z-10 transition-all duration-300 ease-in-out group"
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 group-hover:text-[#3C4BDC] transition-colors duration-300 ease-in-out">
              {circle.value}
            </span>
            <span className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-500">
              {circle.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const Pagination = () => {
  return (
    <div className="flex justify-end space-x-1">
      <button className="py-2 px-4 text-white bg-blue-600 rounded-full">
        1
      </button>

      <button className="py-2 px-3 text-black">2</button>
      <button className="py-2 px-3 text-black">3</button>
      <button className="py-2 px-3 text-black">4</button>
      <button className="py-2 px-3 text-black">5</button>
      <button className="py-2 px-3 text-black">6</button>

      <span className="py-2 px-3">...</span>

      <button className="py-2 px-3 text-black">100</button>
    </div>
  );
};

export default Pagination;

import PropTypes from "prop-types";
import {
  CalendarIcon,
  EyeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Product = ({ product }) => {
  return (
    <div
      key={product.id}
      className="group relative shadow-lg rounded-md bg-white w-full"
    >
      <div className="w-full overflow-hidden bg-white lg:aspect-none h-[500px] lg:h-[450px] group-hover:opacity-75">
        <img
          alt={product.name}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex flex-col justify-between px-3 py-4 space-y-4">
        <div className="flex justify-between text-[#2D6D76]">
          <h3 className="text-md">{product.organization}</h3>
          <span className="flex justify-center items-center">
            <EyeIcon className="w-4 h-4 mr-1" />
            {product.views}
          </span>
        </div>
        <h2 className="text-md font-semibold">{product.name}</h2>
        <div className="flex justify-between">
          <span className="flex justify-center items-center text-md text-[#5D5D5F]">
            <CalendarIcon className="w-4 h-4 mr-1" /> {product.date}
          </span>
          <button className="p-3 border-[1px] border-solid border-[#3C4BDC] rounded-full color-[#3C4BDC]">
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;

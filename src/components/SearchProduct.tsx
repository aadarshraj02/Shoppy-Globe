import { IoSearch } from "react-icons/io5";

const SearchProduct = (): JSX.Element => {
  return (
    <div className="flex justify-center mt-2">
      <div className="relative w-full max-w-xs sm:max-w-lg">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 outline-none"
        />
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchProduct;

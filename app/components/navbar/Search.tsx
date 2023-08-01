import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] rounded-full w-full md:w-auto shadow-sm hover:shadow-md py-1 transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm px-6 font-semibold border-x-[1px] flex-1 text-center">
          Any Week
        </div>
        <div className="text-sm flex flex-row text-gray-600 pr-2 pl-6 gap-2 items-center">
          <div className="hidden sm:block">Add Guest</div>

          <div className="bg-rose-500 text-white rounded-full p-[2px]">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

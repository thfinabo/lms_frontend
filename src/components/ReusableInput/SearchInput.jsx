import { FiSearch } from "react-icons/fi";

const SearchInput = ({placeholder,styles}) => {
  return (
    <div className={`${styles} relative min-w-[300px]`}>
        <input type='text' placeholder={placeholder} className='w-full border-2 bg-gray1 px-3 py-3 text-black placeholder:text-black rounded-xl'/>
        <FiSearch className="absolute right-4 top-3" fontSize={'1.5rem'}/>
    </div>
  )
}

export default SearchInput

import { CiSearch } from 'react-icons/ci';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function Header(props) {
    return (
        <div className='flex items-center justify-end right-3 p-5 gap-3 absolute z-50 '>
            <div className='relative  rounded-xl bg-white'>
                <input className='px-10 py-2   focus:outline-none' type="text" placeholder='Tìm kiếm' />
                <CiSearch className='absolute text-2xl top-2 left-2 text-blue-500' />
            </div>
            <button className='flex justify-center  gap-2  rounded-3xl p-2 text-white bg-gradient-to-b sdNavBar  from-[#080d24] via-[#0b1736] to-[#102d63] cursor-pointer'>
                <img className='w-7' src="https://www.vietnamairlines.com/content/dam/vna/icons/languagenav/vn.svg" alt="" />
                <p>VI</p>
            </button>
            <div className='text-white p-2 text-2xl sdNavBar  rounded-2xl bg-gradient-to-b from-[#080d24] via-[#0b1736] to-[#102d63] cursor-pointer'>
                <HiOutlineShoppingCart />
            </div>
        </div>
    );
}

export default Header;
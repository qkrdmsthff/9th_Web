import { FaCartShopping } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

interface RootState {
    cart: {
        amount: number;
    };
}

const Navbar = () => {
    const { amount } = useSelector((state: RootState) => state.cart);

    return (
        <nav className='flex justify-between bg-yellow-400 h-15'>
            <div className="flex text-center items-center font-bold p-4 text-[25px] text-white">
                CHICHI's STORE
            </div>
            <div className='flex gap-4 text-center items-center font-bold p-4 text-[25px] text-white'>
                <FaCartShopping style={{ fontSize: '30px', color: 'white' }} />
                <span>
                    <div>
                        {amount}
                    </div>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
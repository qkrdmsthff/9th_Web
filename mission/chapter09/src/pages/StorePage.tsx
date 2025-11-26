import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from 'react-redux';
import Modal from "../components/Modal";
import { increase, decrease } from "../feature/cartSlice";

interface RootState {
    cart: {
        items: Array<{ id: string; title: string; singer: string; price: string | number; amount: number; img: string }>;
        amount: number;
        total: number;
    };
    modal: {
        isOpen: boolean;
    };
}

const StorePage = () => {
    const { items } = useSelector((state: RootState) => state.cart);
    const { isOpen } = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();

    return (
        <div>
            <Navbar />
            
            {isOpen && <Modal />} 

            <div className="flex flex-col px-6 py-10 max-w-3xl mx-auto">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200">
                        <div className="flex items-center gap-4">
                            <img
                            src={item.img}
                            alt={item.title}
                            className="w-20 h-20 object-cover rounded-md shadow"
                            />

                            <div>
                                <h2 className="text-lg font-semibold"> {item.title} </h2>
                                <p className="text-sm text-gray-600"> {item.singer} </p>
                                <p className="text-md font-bold mt-1"> ₩{Number(item.price).toLocaleString()} </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                            onClick={() => dispatch(increase(item.id))}
                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                +
                            </button>

                            <span className="w-8 text-center font-semibold"> {item.amount} </span>

                            <button
                            onClick={() => dispatch(decrease(item.id))}
                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                -
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default StorePage;
// Modal.tsx (새 파일)

import { useDispatch } from "react-redux";
import { clearCart } from "../feature/cartSlice";
import { closeModal } from "../feature/modalSlice";

const Modal = () => {
    const dispatch = useDispatch();

    const handleConfirm = () => {
        dispatch(clearCart()); 
        dispatch(closeModal());
    };

    const handleCancel = () => {
        dispatch(closeModal());
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-md shadow-lg w-80 h-40 text-center">
                <h4 className="text-xl font-semibold mb-6"> 정말 삭제하시겠습니까 </h4>
                <div className="flex justify-around">
                    <button 
                    onClick={handleConfirm}
                    className="bg-red-500 text-white w-18 px-4 py-2 rounded-md hover:bg-red-600 transition duration-150"
                    >
                        네
                    </button>

                    <button 
                    onClick={handleCancel}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-150"
                    >
                        아니요
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
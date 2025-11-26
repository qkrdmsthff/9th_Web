import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../feature/cartSlice';

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <div className='flex justify-between h-15'>
            <button 
            className='flex flex-1 font-bold text-[20px] text-black items-center justify-center '
            onClick={() => dispatch(clearCart())}
            >
                삭제하기
            </button>
        </div>
    )
}

export default Footer
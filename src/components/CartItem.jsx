import React from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useGlobalContext } from "../context";

function CartItem({ image, name, desc, price, quantity, id }) {
  const { increaseQuantity, decreaseQuantity } = useGlobalContext();

  return (
    <li className='bg-white py-[21px] px-[12px] rounded-[16px] flex w-[821px] justify-between'>
      <div className='bg-[#f3f8fb] w-[268px] h-[203px] grid place-items-center'>
        <img
          className='w-[200px] h-[190px] object-contain'
          src={image}
          alt={name + "image"}
        />
      </div>
      <div className='w-[441px] flex flex-col gap-[9px]'>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='text-[28px] font-bold'>₦ {price.toLocaleString()}</p>
        <p className='text-[20px] text-[#838b9b]'>{desc}</p>
        <div className='flex gap-4 px-3 py-2 w-fit rounded-[27px] text-[18px] font-bold justify-center bg-[#f5f5f5]'>
          <button onClick={() => increaseQuantity(id)}>
            <HiPlus className='size-6' />
          </button>
          <p>{quantity}</p>
          <button onClick={() => decreaseQuantity(id)}>
            <HiMinus className='size-6' />
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

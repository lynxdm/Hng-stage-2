import React from "react";
import { useGlobalContext } from "../context";

function SingleProducts({
  image,
  name,
  desc,
  price,
  setShowCartModal,
  product,
}) {
  const { addToCart } = useGlobalContext();

  return (
    <li className='h-[520px] rounded-[16px] p-2  border-[#d9d9d9] shadow-[0px_4px_10.7px_0px_#1B8F5F08] bg-white flex flex-col items-center gap-3 relative'>
      <div className='grid w-full h-[55%] rounded-[12px] bg-[#F9F9F9] place-items-center'>
        <img
          src={image}
          alt={name + "image"}
          className='size-[250px] object-contain bg-[#F9F9F9]'
        />
      </div>
      <div className='text-center flex flex-col gap-[8px]'>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='text-[#565656] text-[20px]'>{desc}</p>
        <p className='text-[28px] font-bold'>₦ {price.toLocaleString()}</p>
      </div>
      <button
        className='w-[283px] border-2 border-[#d9d9d9] rounded-[13px]  absolute bottom-3 py-[15px]  text-white text-2xl bg-primary'
        onClick={() => {
          addToCart(product);
          setShowCartModal({ img: image, show: true });
        }}
      >
        Add to cart
      </button>
    </li>
  );
}

export default SingleProducts;

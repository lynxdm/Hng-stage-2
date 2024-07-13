import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BackIcon from "../assets/svg/arrow-circle-left.svg?react";
import BankIcon from "../assets/svg/bank.svg?react";
import CardsIcon from "../assets/svg/cards.svg?react";
import MastercardIcon from "../assets/svg/Mastercard-Logo.wine 1.svg?react";
import { useGlobalContext } from "../context";
import CartItem from "../components/CartItem";

function Cart() {
  const { state, clearCart } = useGlobalContext();

  const totalPrice = state.cart.reduce((acc, item) => {
    let itemPrice = item.price * item.quantity;
    acc += itemPrice;
    return acc;
  }, 0);

  if (state.cart.length < 1) {
    return (
      <main className='h-[100vh] w-[100vw] grid place-items-center'>
        <div className='text-center flex flex-col gap-4'>
          <h3 className='text-5xl font-semibold'>Your cart is empty</h3>
          <Link to={"/"} className="bg-primary text-white text-2xl w-fit mx-auto px-8 py-3 rounded-[12px]">Go home</Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className='flex bg-[#F3F8FB] justify-between'>
        <section className='w-[55%] pl-[200px] pt-[153px] pb-[20px]'>
          <Link
            to={"/"}
            className='text-3xl font-semibold flex items-center gap-3 w-fit'
          >
            <BackIcon />
            <p>Back</p>
          </Link>
          <h2 className='text-[28px] text-deep_blue mt-[60px] font-semibold'>
            Carts
          </h2>
          <ul className='flex flex-col gap-4 mt-8'>
            {state.cart.map((cartItem) => {
              return <CartItem key={cartItem.id} {...cartItem} />;
            })}
          </ul>
        </section>
        <section className='font-[500] pr-[200px] w-[45%] bg-white py-[199px] pl-32'>
          <div className='flex flex-col gap-6 '>
            <div>
              <h2 className='text-[28px] font-semibold'>Checkout Process</h2>
              <p className='text-[20px]'>Complete your purchase</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                clearCart();
              }}
            >
              <div className='flex flex-col gap-6'>
                <label htmlFor='checkout_email' className='text-2xl font-[500]'>
                  Email address
                </label>
                <input
                  type='email'
                  name='checkout_email'
                  id='checkout_email'
                  required
                  placeholder='probiotics@gmail.com'
                  className='py-[23px] px-[17px] text-[20px] border border-[#cecece] rounded-[12px]'
                />
                <div>
                  <h3 className='text-2xl font-[500]'>Select payment method</h3>
                  <div className='*:font-[500] *:flex *:flex-col *:justify-center *:items-center *:shadow-[5px_4px_0px_0px_#000000] flex gap-6 mt-4 *:w-[245px] *:h-[128px] *:rounded-[12px] *:border-[0.5px] *:border-black'>
                    <button className='bg-[rgb(184,255,179)]'>
                      <CardsIcon />
                      <p>Debit/Credit card</p>
                    </button>
                    <button className='bg-[#B3F5FF]'>
                      <BankIcon />
                      <p>Bank transfer</p>
                    </button>
                  </div>
                </div>
                <div className='grid text-[20px] grid-cols-2 gap-4'>
                  <div className='col-span-2'>
                    <h3 className='text-2xl mb-2 font-[500]'>Card Details</h3>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='border border-[#cecece] py-[23px] px-[17px] rounded-[12px] w-full'
                      value={"Dangote Banta"}
                    />
                  </div>
                  <div>
                    <label htmlFor='card_number' className='text-[18px]'>
                      Card number
                    </label>
                    <input
                      className='border border-[#cecece] py-[23px] max-w-full pl-[17px] rounded-[12px]'
                      type='text'
                      name='card_number'
                      id='card_number'
                      value={"9473-3322-3546-6543"}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor='card_number' className='text-[18px]'>
                      Expiry date
                    </label>
                    <input
                      className='border border-[#cecece] py-[23px] px-[17px] rounded-[12px]'
                      type='text'
                      value={"02/06"}
                      name='card_number'
                      id='card_number'
                    />
                  </div>
                  <div>
                    <label htmlFor='card_number' className='text-[18px]'>
                      CVV
                    </label>
                    <input
                      className='border border-[#cecece] py-[23px] px-[17px] rounded-[12px] max-w-full'
                      type='password'
                      value={"1234"}
                      name='card_number'
                      id='card_number'
                    />
                  </div>
                  <div className='border flex border-[#cecece] py-[20px] px-[17px] rounded-[12px] self-end items-center'>
                    <p>Mastercard</p>
                    <MastercardIcon />
                  </div>
                  <button
                    className='col-span-2 w-full bg-primary text-white text-2xl py-[20px] rounded-lg'
                    type='submit'
                  >
                    Pay ₦{totalPrice.toLocaleString()}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Cart;

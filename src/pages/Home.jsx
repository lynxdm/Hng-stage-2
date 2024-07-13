import React, { useState } from "react";
import heroImg1 from "../assets/images/hero-image1.png";
import heroImg2 from "../assets/images/hero-image2.png";
import heroImg3 from "../assets/images/hero-image3.png";
import footerImg from "../assets/images/footerImg.png";
import ArrowDown from "../assets/svg/arrow-down.svg?react";
import SearchIcon from "../assets/svg/search-normal.svg?react";
import products from "../data";
import SingleProducts from "../components/SingleProducts";
import Circlecancel from "../assets/svg/circle-cancel.svg?react"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [showCartModal, setShowCartModal] = useState({
    img: "",
    show: false,
  });

  return (
    <>
      <main className='mt-[100px] '>
        <section className='my-[8.5rem] px-[200px] flex items-center justify-between'>
          <div className='w-[580px] flex flex-col gap-8'>
            <h1 className='text-5xl leading-[59.52px] font-semibold'>
              Probiotics for Improved Patient Outcomes
            </h1>
            <p className='text-xl text-secondary'>
              Empowering hospitals with advanced Probiotics designed to support
              patient recovery and well-being. We offer a comprehensive range of
              Probiotics for diverse needs
            </p>
            <div className='*:text-[24px] *:rounded-[16px] *:px-[70px] *:py-[16px] mt-6 flex gap-8'>
              <button className='bg-primary text-white'>Buy Now!</button>
              <button className='border border-[rgb(217,217,217)]'>
                Learn more
              </button>
            </div>
          </div>
          <div className='flex items-end w-fit'>
            <img src={heroImg1} alt='hero image' />
            <img
              src={heroImg2}
              alt='hero image'
              className='-ml-[10rem] -z-10'
            />
            <img src={heroImg3} alt='hero image' className='-ml-[5rem] -z-20' />
          </div>
        </section>
        <section className='relative'>
          <nav className='flex flex-col items-center gap-8 w-fit mx-auto pb-8'>
            <div className='w-[408px] flex justify-between items-center text-[28px]'>
              <button className='font-semibold pb-1 after:w-full relative after:absolute after:bottom-0 after:border-[#222222] after:border-[3.5px] after:left-0 after:rounded-2xl'>
                Products
              </button>
              <button className='flex items-center gap-[6px]'>
                <p>Categories</p>
                <ArrowDown />
              </button>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <label
                htmlFor='products_search'
                className='bg-[#efefef] py-[14px] px-[32px] flex items-center gap-[19px] rounded-[100px] w-[487px]'
              >
                <SearchIcon />
                <input
                  type='text'
                  name='products_search'
                  id='products_search'
                  placeholder='Search for products...'
                  className='placeholder:text-[#A5A5A5] bg-[#efefef] focus:outline-none text-[20px]'
                />
              </label>
            </form>
          </nav>
          <ul
            id="products_section"
            className='grid-cols-4 gap-8 grid px-[200px]'
          >
            {products.map((product, index) => {
              return (
                <SingleProducts
                  {...product}
                  product={product}
                  key={index}
                  setShowCartModal={setShowCartModal}
                />
              );
            })}
          </ul>
          {showCartModal.show && (
            <div className='bg-[rgba(87,121,148,0.7)]  absolute h-full w-full top-0 left-0 grid place-items-center'>
              <div className='bg-white rounded-[28px] p-8 relative w-[510px] h-[573px] flex flex-col items-center gap-4'>
                <button
                  className='absolute top-0 right-0 -translate-y-[120%]'
                  onClick={() => {
                    setShowCartModal({ img: "", show: false });
                  }}
                >
                  <Circlecancel />
                </button>
                <div className='bg-[#F9F9F9] grid place-items-center p-4 border w-[348px] h-[265px] rounded-[12px]  border-[#EAEAEA]'>
                  <img
                    src={showCartModal.img}
                    alt='new cart item image'
                    className='size-[240px] bg-[#F9F9F9] object-contain'
                  />
                </div>
                <div className='w-[422px] text-center flex flex-col gap-2'>
                  <h3 className='text-2xl font-semibold'>Added to cart</h3>
                  <p className='text-[#565656] text-[20px] leading-[24.2px]'>
                    Get ready for epic effects! Biotics with{" "}
                    <span className='italic font-semibold text-[#2CAD31]'>
                      special effects
                    </span>{" "}
                    is now in your cart
                  </p>
                  <div className='flex justify-between font-[500] text-[20px] mt-6'>
                    <button
                      className='py-[13px] px-[19px] bg-primary text-white border-2 border-[#d9d9d9] rounded-[13px]'
                      onClick={() => {
                        setShowCartModal({ img: "", show: false });
                      }}
                    >
                      Continue shopping
                    </button>
                    <Link
                      to={"/cart"}
                      className='border py-[13px] px-[46px] rounded-[13px] border-[#d9d9d9]'
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <section
          style={{ backgroundImage: `url(${footerImg})` }}
          className='text-[#E8E9EB] bg-[rgba(14,24,11,0.7)] mx-[200px] px-16 py-[10rem] rounded-[15px] my-[8.5rem]'
        >
          <div className='w-[460px] flex flex-col gap-4'>
            <h2 className='text-5xl leading-[64.32px]'>
              Organic varieties from the companies
            </h2>
            <p className='text-[20px]'>
              Support patient recovery and well-being with diverse strains
              formulated for specific needs.
            </p>
            <button className='bg-primary text-white px-[85px] py-[16px] mt-4 w-fit rounded-[20px] text-[32px]'>
              Buy Now!
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;

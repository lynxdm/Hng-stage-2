import React from "react";
import Logo from "../assets/svg/logoDark.svg?react";
import { Link } from "react-router-dom";
import GithubIcon from "../assets/svg/github.svg?react"
import FacebookIcon from "../assets/svg/Vectorfacebook.svg?react"
import InstagramIcon from "../assets/svg/Vectorinstagram.svg?react"
import YoutubeIcon from "../assets/svg/Vectoryoutube.svg?react"
import XIcon from "../assets/svg/VectorX.svg?react"


function Footer() {
  return (
    <footer className='px-52 text-2xl bg-primary text-white py-16'>
      <section className='flex justify-between items-start'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='w-[366px] *:w-full flex flex-col gap-4'
        >
          <h3 className='text-2xl'>Sign up for our newsletter</h3>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            className='border border-[rgba(69,69,69,0.45)] bg-[rgba(120,120,120,0.22)] placeholder:text-[16px] text-[20px] placeholder:text-[#a3a3a3] h-[62px] rounded-[7px] px-8'
          />
          <button
            type='submit'
            className='bg-[#1c1c1c] border text-2xl text-[#f2f2f2] border-[#3a3a3a] py-[12px] rounded-[12px]'
          >
            Sign up
          </button>
        </form>
        <div className='flex justify-between w-[706px]'>
          <div className='flex flex-col gap-12'>
            <h3>Product</h3>
            <ul className='text-base *:text-[rgba(255,255,255,0.67)] flex flex-col gap-6'>
              <li>Analytics</li>
              <li>Solution</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className='flex flex-col gap-12'>
            <h3>Marketplace</h3>
            <ul className='text-base *:text-[rgba(255,255,255,0.67)] flex flex-col gap-6'>
              <li>Vendors</li>
              <li>Locations</li>
              <li>Markets</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className='flex flex-col gap-12'>
            <h3>Company</h3>
            <ul className='text-base *:text-[rgba(255,255,255,0.67)] flex flex-col gap-6'>
              <li>About</li>
              <li>Partners</li>
              <li>Businesses</li>
              <li>Certifications</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='mt-48 pb-3 flex items-end justify-between'>
        <div className="flex w-[1125px] justify-between">
            <Link to={"/"}>
              <Logo className='fill-white' />
            </Link>
            <div className="text-base flex gap-16">
              <p>Terms</p>
              <p>Privacy</p>
              <p>© 2024 Afterrave, Inc. All rights reserved</p>
            </div>
        </div>
        <ul className="flex gap-4 items-center *:border *:size-[38px] *:rounded-full *:border-white *:grid *:place-items-center">
            <li>
                <InstagramIcon/>
            </li>
            <li>
                <FacebookIcon/>
            </li>
            <li>
                <XIcon/>
            </li>
            <li>
                <GithubIcon/>
            </li>
            <li>
                <YoutubeIcon/>
            </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;

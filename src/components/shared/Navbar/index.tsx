import React from 'react'
import Link from "next/link";
import Image from "next/image";

import Search from './Search';

import Logo from "/public/images/logo.svg";
import DefaultProfileImage from "/public/images/default-profile.png";

function index() {
  return (
    <div className='shadow-md shadow-black/10 fixed top-0 z-10 w-full'>
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
        <div className="navbar-start">
            {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            </div> */}
            {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse hidden min-[425px]:flex"
            >
                <Image src={Logo} width={300} height={300} alt="logo" />
            </Link>
        </div>
        <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
                <details>
                <summary>Parent</summary>
                <ul className="menu md:menu-horizontal md:min-w-max bg-base-400 rounded transform translate-x-[-43%] translate-y-[2px]" style={{padding:"2rem"}}>
                    <li className='px-7'>
                        <a className='text-xl font-bold menu-title'>Language</a>
                        <ul>
                        <li><a>Javascript</a></li>
                        <li><a>PHP</a></li>
                        <li><a>Python</a></li>
                        </ul>
                    </li>
                    <li className='px-7'>
                        <a className='text-xl font-bold menu-title'>Frontend</a>
                        <ul>
                        <li><a>ReactJs</a></li>
                        <li><a>NextJs</a></li>
                        <li><a>VueJs</a></li>
                        </ul>
                    </li>
                    <li className='px-7'>
                        <a className='text-xl font-bold menu-title'>Backend</a>
                        <ul>
                        <li><a>Laravek</a></li>
                        <li><a>NodeJs</a></li>
                        </ul>
                    </li>
                </ul>
      
                </details>
            </li>
            <li><a>Item 3</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Search />
            <div className="dropdown dropdown-end ml-5 bg-gray-800 rounded-full">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-9 rounded-full">
                        <Image
                            className="w-9 h-9 rounded-full"
                            src={DefaultProfileImage}
                            width={100}
                            height={100}
                            alt="profile"
                        />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default index
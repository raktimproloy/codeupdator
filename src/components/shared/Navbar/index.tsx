'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";

import Search from './search/Search';
import MobileSearch from './search/MobileSearch';
import MobileMenu from './MobileMenu';

import Logo from "/public/images/logo.svg";
import DefaultProfileImage from "/public/images/default-profile.png";

function Index() {
    const [theme, setTheme] = useState("")
    useEffect(() => {
        const localTheme = localStorage.getItem("_theme") || "light"
        setTheme(localTheme)
    }, [])

    const handleTheme = (e: any) => {
        const newTheme = e.target.checked ? "light" : "dark";
        var htmlElement = document.documentElement;
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("_theme", newTheme);
        setTheme(newTheme);  // Update the theme state
    };


  return (
    <>
        <div className='shadow-md fixed top-0 z-10 w-full bg-base-100'>
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Image src={Logo} width={300} height={300} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"} className='text-base hover:bg-inherit hover:text-red-500'>Home</Link></li>
                    <li>
                        <details>
                        <summary className='text-base hover:bg-inherit active:text-red-500 hover:text-red-500'>Category</summary>
                        <ul className="menu md:menu-horizontal md:min-w-max bg-base-400 rounded transform translate-x-[-43%] translate-y-[2px]" style={{padding:"1rem"}}>
                            <li className='pr-7'>
                                <p className='text-lg font-bold menu-title'>Language</p>
                                <ul>
                                <li><Link href={"/category/javascript"}>Javascript</Link></li>
                                <li><Link href={"/category/php"}>PHP</Link></li>
                                <li><Link href={"/category/python"}>Python</Link></li>
                                </ul>
                            </li>
                            <li className='px-7'>
                                <p className='text-lg font-bold menu-title'>Frontend</p>
                                <ul>
                                <li><Link href={"/category/reactjs"}>ReactJs</Link></li>
                                <li><Link href={"/category/nextjs"}>NextJs</Link></li>
                                <li><Link href={"/category/vuejs"}>VueJs</Link></li>
                                </ul>
                            </li>
                            <li className='px-7'>
                                <p className='text-lg font-bold menu-title'>Backend</p>
                                <ul>
                                <li><Link href={"/category/laravel"}>Laravel</Link></li>
                                <li><Link href={"/category/nodejs"}>NodeJs</Link></li>
                                </ul>
                            </li>
                        </ul>
            
                        </details>
                    </li>
                    <li><Link href={"/problem"} className='text-base hover:bg-inherit hover:text-red-500'>Problem</Link></li>
                    <li><Link href={"/toprated"} className='text-base hover:bg-inherit hover:text-red-500'>Top Rated</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <MobileSearch/>
                    {/* Desktop menu */}
                    <Search />
                    <div className="dropdown dropdown-end ml-5 bg-gray-800 rounded-full hidden md:block">
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
                            <div className='pb-4 px-3'>
                            <div className="flex justify-between">
                                Theme
                                <span className="badge">
                                <input
                                    type="checkbox"
                                    className="toggle"
                                    checked={theme === "light"}
                                    onChange={(e) => handleTheme(e)}
                                />
                                </span>
                            </div>
                            </div>
                            <li className='mt-2'>
                            <a className="justify-between">
                                Profile
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=''>
                <MobileMenu/>
            </div>
        </div>
    </>
  )
}

export default Index
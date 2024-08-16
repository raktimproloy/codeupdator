'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import Image from "next/image";

import Search from './search/Search';
import MobileSearch from './search/MobileSearch';
import MobileMenu from './MobileMenu';

import Logo from "/public/images/logo.svg";
import DefaultProfileImage from "/public/images/default-profile.png";
import { AuthFunc } from '@/utils/Auth';
import { useCookies } from 'react-cookie';
import { signOut } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileImage from '../ProfileImage/ProfileImage';
import { usePathname } from 'next/navigation';
import { FetchMainApi } from '@/utils/fetch/clientSideFetchApi';
import { addSetting } from '@/store/redux/slices/settingSlice';
import { addPackage } from '@/store/redux/slices/packageSlice';

function Index() {
    const pathname = usePathname()
    const [cookie, setCookie, removeCookie] = useCookies()
    const profileData = useSelector((state:any) => state.profile)
    const settingData = useSelector((state:any) => state.setting)
    const packageData = useSelector((state:any) => state.package)
    const isAuth = AuthFunc();
    const [theme, setTheme] = useState("")
    const detailsRef = useRef<HTMLDetailsElement | null>(null);
    const profileRef = useRef<HTMLDetailsElement | null>(null);
    const dispatch = useDispatch()
    const [navbarData, setNavbarData] = useState([])
    useEffect(() => {
        const localTheme = localStorage.getItem("_theme") || "light"
        setTheme(localTheme)

        if(Object.keys(settingData).length === 0){
            FetchMainApi({url: "/setting/get", method: "get"})
            .then(res => {
                dispatch(addSetting(res.data.data))
                setNavbarData(JSON.parse(res.data.data.navbar))
            })
            .catch(err => {
                console.log(err)
            })
        }
        if(Object.keys(packageData).length === 0){
            FetchMainApi({url: "/package/get", method: "get"})
            .then(res => {
                dispatch(addPackage(res.data))
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [])

    const handleTheme = (e: any) => {
        window.location.reload();
        const newTheme = e.target.checked ? "light" : "dark";
        var htmlElement = document.documentElement;
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("_theme", newTheme);
        setTheme(newTheme);  // Update the theme state
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
          // Clicked outside the details tag, close it
          detailsRef.current.removeAttribute('open');
        }
        if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
            // Clicked outside the details tag, close it
            profileRef.current.removeAttribute('open');
        }
    };

    useEffect(() => {
    // Add event listener on mount
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
        document.removeEventListener('click', handleClickOutside);
    };
    }, []);

    const handleLinkClick = (event: React.MouseEvent) => {
    // Stop propagation to prevent closing details when clicking on links
    detailsRef.current?.removeAttribute('open');
    };
    const handleProfileClick = (event: React.MouseEvent) => {
    // Stop propagation to prevent closing Profile when clicking on links
    profileRef.current?.removeAttribute('open');
    }
    const handleLogout = () => {
        signOut()
        removeCookie("_token",{path: "/"})
    }


    // Pathname Store
    const [route, setRoute] = useState({
        to: pathname,
        from: pathname,
    });
    useEffect(() => {
        const pathInfo = sessionStorage.getItem("path_info");

        if (pathInfo) {
            const sessionData = JSON.parse(pathInfo);
            setRoute((prev) => ({ to: pathname, from: sessionData.to }));
        }else{
            setRoute((prev) => ({ to: pathname, from: prev.to }));
        }
    }, [pathname]);

    useEffect(() => {
        const newRoute = {
            to: route.to,
            from: route.from,
        };
        sessionStorage.setItem("path_info", JSON.stringify(newRoute))
    }, [route]);
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
                        {
                            navbarData && navbarData.length > 0 && navbarData.map((item:any, index:any) => 
                            {
                                return item.items.length === 0 ?
                                (<li key={index}><Link href={item.slug} className='text-base hover:bg-inherit hover:text-red-500'>{item.title}</Link>
                                </li>)
                                :
                                (<li>
                                    <details ref={detailsRef}>
                                        <summary className='text-base hover:bg-inherit active:text-red-500 hover:text-red-500'>Category</summary>
                                        <ul className="menu px-5 grid grid-cols-4 gap-10 md:min-w-max bg-base-400 rounded transform translate-x-[-43%] translate-y-[2px]" style={{padding:"1.5rem 2rem"}}>
                                            {
                                                item.items.map((child, index) => 
                                                    <li className={`order-${item.order}`} key={index}>
                                                        <p className='text-2xl font-bold menu-title text-[#c7203e]'>{child.menu_name}</p>
                                                        <ul className='grid grid-rows'>
                                                            {
                                                                child.items.map((sub, index) => 
                                                                <li onClick={handleLinkClick} key={index} className={`order-${sub.order}`}><Link href={`/category/${sub.slug}`} className='text-lg'>{sub.title}</Link></li>
                                                                )
                                                            }
                                                        </ul>
                                                    </li>
                                                )
                                            }
                                        </ul>
                        
                                    </details>
                                </li>)
                            }
                        )
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <MobileSearch/>
                    {/* Desktop menu */}
                    <Search />
                    <div className="dropdown dropdown-end ml-5 bg-gray-800 rounded-full hidden md:block">

                    <details ref={profileRef}>
                        <summary className='btn btn-ghost btn-circle avatar'>
                        <div className="w-9 rounded-full">
                            <ProfileImage/>
                        </div>
                        </summary>
                        <ul className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded w-52`}>
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
                            {
                                isAuth ? 
                                <>
                                <li className='mt-2' onClick={handleProfileClick}>
                                <Link href={`/profile/${profileData.username}`} className="justify-between">
                                    Profile
                                </Link>
                                </li>
                                <li onClick={handleProfileClick}><Link href={"/setting"}>Settings</Link></li>
                                <li onClick={(e) => {handleProfileClick(e); handleLogout();}}><Link href={"/"}>Logout</Link></li>
                                </>

                                :
                                <>
                                <li onClick={handleProfileClick}><Link href={"/login"}>Login</Link></li>
                                <li onClick={handleProfileClick}><Link href={"/signup"}>Signup</Link></li>
                                
                                </>

                            }
                        </ul>
                    </details>
                        {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
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
                        <ul tabIndex={0} className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded w-52`}>
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
                            <Link href={"/profile/me"} className="justify-between">
                                Profile
                            </Link>
                            </li>
                            <li><Link href={"/setting"}>Settings</Link></li>
                            <li><Link href={"/"}>Logout</Link></li>
                        </ul> */}
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
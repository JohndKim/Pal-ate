import React from 'react'
import logo from '../images/logo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header1() {
    return (
        <>
            <header className="bg-[#FFF4E2]">
                <div className="flex h-30 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
                    <img
                        alt="pal-ate logo"
                        src={logo}
                        width="169px"
                        height="169px"
                        style={{ marginRight: "3px" }}
                    />

                    <div className="flex items-center justify-end md:justify-between flex items-center gap-6 text-3xl">
                        <Link to="/">
                            <div className="font-orelega dark hover:text-gray-600 transition-colors duration-300">
                                home
                            </div>
                        </Link>
                        <Link to="/profile">
                            <div className="font-orelega dark hover:text-gray-600 transition-colors duration-300">
                                profile
                            </div>
                        </Link>
                        <Link to="/friends">
                            <div className="font-orelega dark hover:text-gray-600 transition-colors duration-300">
                                friends
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
import React from 'react'
import logo from '../images/logo.png'
import camera from '../images/camera.png'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { predict } from '../redux/predictActions'

export default function Header1() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]
        const formData = new FormData()

        formData.append('photo', selectedFile)

        dispatch(predict(formData))
        navigate('/food')
    }

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

                        <fieldset className="w-[828px] rounded-[100px] h-[60px] border-[3px] border-solid border-black flex items-center space-x-4 bg-white">
                            <label htmlFor="Search" className="hidden">Search</label>
                            <span className="flex-shrink-0 pl-2">
                                <button
                                    type="button"
                                    title="search"
                                    className="p-1 focus:outline-none focus:ring"
                                >
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                        className="w-4 h-4 bg-white"
                                    >
                                        <path
                                            d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
                                        ></path>
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="search"
                                name="Search"
                                placeholder="Search up a food!"
                                className="flex-1 py-3 pl-2 pr-3 text-sm rounded-[100px] focus:outline-none bg-white dark:text-gray-800"
                            />

                            <label htmlFor="upload" className="cursor-pointer">
                                <div className="inset-y-0 right-0 flex items-center justify-center w-[50px] h-[50px]">
                                    <img className="w-[30px] h-[30px] object-cover"
                                        alt="Camera"
                                        src={camera}
                                    />
                                </div>
                                <input
                                    id="upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </fieldset>
                    </div>
                </div>
            </header >
        </>
    )
}
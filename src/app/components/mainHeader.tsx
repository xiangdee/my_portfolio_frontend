"use client"
import { faBars, faHamburger, faList, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { createContext, useState } from "react"


type mainHeaderContextType = {
    navOpen : boolean,
}

const mainHeaderContext = createContext<mainHeaderContextType | null>(null)
export  const  MainHeader =() => {
    const [navOpen,setNavOpen] = useState(false)
    const toggleMenu = () => {
        setNavOpen(navOpen ? false : true)
    }
    return (
        <mainHeaderContext.Provider value={null}>
            <div className="relative  before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] ">
                <div className="p-5">
                        <nav className="nav">
                                <div>
                                <h1 className="text-3xl text-primary">Emmanuel</h1>
                                </div>
                                <div className="flex flex-row justify-end">
                                        <div>
                                        <ul className={`${navOpen ? 'visible translate-y-1' : 'invisible '} dropDown`}>
                                            <li><a href={"#home"}>01. Home</a></li>
                                            <li><a href={"#about"}>02. About</a></li>
                                            <li><a href={"#resume"}>03. Resume</a></li>
                                            <li><a href={"#works"}>04. Works</a></li>
                                            <li><a href={"#contact"}>05. Contact</a></li>
                                        </ul>
                                        </div>
                                        <div className="flex flex-row justify-end ml-3 -mt-8 visible md:invisible" onClick={toggleMenu}>
                                            {
                                                navOpen ? 
                                                <FontAwesomeIcon icon={faTimes} size="2x"  className="text=5xl text-primary"/>
                                                :<FontAwesomeIcon icon={faBars} size="2x"  className="text=5xl text-primary"/>
                                            }
                                            
                                        </div>
                                </div>
                        </nav>
                </div>
            </div>
        </mainHeaderContext.Provider>
    )
}
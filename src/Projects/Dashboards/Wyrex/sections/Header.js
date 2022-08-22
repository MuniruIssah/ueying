import React from 'react';
import HeaderSearch from "../components/HeaderSearch";
import {BiPlus} from "react-icons/bi";
import {MdOutlineHistory} from "react-icons/md";
import { FiBell} from "react-icons/fi";
import {CgOptions} from "react-icons/cg"
import {VscQuestion} from "react-icons/vsc";
import {BiChevronDown} from "react-icons/bi";


const Header = () => {
    return (
        <div className="flex justify-between h-20 border-b border-zinc-300 px-10">
            <FirstHeaderSection/>
            <SecondHeaderSection/>
        </div>
    );
};

export default Header;

const FirstHeaderSection=()=>{
    return(
        <div className="flex space-x-5 items-center text-gray-700">
            <button className="flex items-center space-x-2 text-2xl"><BiPlus/><span className="text-base">Create</span></button>
            <button className="flex items-center space-x-2 text-2xl"><MdOutlineHistory/><span className="text-base">History</span></button>
            <HeaderSearch/>
        </div>
    );
}

const SecondHeaderSection=()=>{
    return(
        <div className="flex space-x-10 items-center">
            <button className="bg-black h-10 px-3 text-white flex space-x-2 items-center">
                <span>Wyrex corporation</span>
                <BiChevronDown/></button>
            <FiBell className="text-2xl"/>
            <CgOptions className="text-2xl"/>
            <VscQuestion className="text-3xl"/>
            <div className="h-10 w-10 rounded rounded-full bg-black"></div>
        </div>
    );
}
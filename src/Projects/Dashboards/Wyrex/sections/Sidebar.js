import React from 'react';
import {RiSettingsLine} from "react-icons/ri";
import {AiOutlineArrowRight} from "react-icons/ai";
import {GoFile} from "react-icons/go";
import {TiEquals} from "react-icons/ti";
import {TbArrowUpRightCircle, TbLayoutDashboard, TbWindow} from "react-icons/tb";
import {BiCalendarWeek, BiMinusBack} from "react-icons/bi";
import {HiChevronDoubleLeft, HiChevronDoubleRight} from "react-icons/hi";


const Sidebar = () => {
    return (
        <div className="h-screen bg-black text-gray-400 w-20 flex flex-col justify-between text-2xl border-r border-gray-600/50">
            <div className="h-20 flex items-center justify-center border-b border-gray-600/50 flex flex-col items-center text-4xl">
                <TbLayoutDashboard/>
            </div>
            <div className="flex flex-col flex-1 items-center">
                <div className="flex flex-col space-y-5 py-9 border-b border-gray-600/50">
                    <TbLayoutDashboard/>
                    <BiMinusBack/>
                    <TbWindow/>
                </div>
                <div className="flex flex-col space-y-5 py-10 border-b border-gray-600/50">
                    <HiChevronDoubleLeft/>
                    <HiChevronDoubleRight/>
                </div>
                <div className="flex flex-col space-y-5 py-10 border-b border-gray-600/50">
                    <TbArrowUpRightCircle/>
                    <BiCalendarWeek/>
                    <div className="border border-gray-400 h-6 w-6 rounded rounded-full flex items-center justify-center">
                        <TiEquals className="text-sm"/>
                    </div>
                </div>
                <div className="py-10">
                    <GoFile/>
                </div>
            </div>
            <div className='border-t border-gray-600/50 w-full flex flex-col items-center space-y-5 py-5 '>
                <RiSettingsLine/>
                <AiOutlineArrowRight/>
            </div>
        </div>
    );
};

export default Sidebar;
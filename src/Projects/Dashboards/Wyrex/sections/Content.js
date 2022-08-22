import React from 'react';
import Header from "./Header";
import {NavLink} from "react-router-dom";
import HeaderAndPlusCard from "../components/HeaderAndPlusCard";
import {RiArrowLeftDownLine,RiArrowRightUpLine} from "react-icons/ri";

import {HiChevronDoubleDown,HiChevronDoubleUp} from "react-icons/hi";
import AccountCard from "../components/AccountCard";
import {BiChevronDown} from "react-icons/bi";
import {BsPlusLg} from "react-icons/bs";
import {FiMoreVertical} from "react-icons/fi";
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";
import {TiEquals} from "react-icons/ti";

const Content = () => {
    return (
        <div className="flex-1 w-full h-screen flex flex-col justify-between">
            <Header/>
            <MainContent/>
            <BottomContent/>
        </div>
    );
};

export default Content;

const MainContent=()=>{
    return(
        <div className="w-full px-10 py-8">
            <ContentNavigation/>
            <div className="py-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                <HeaderAndPlusCard title="Total Receivables">
                    <div className="w-full flex justify-between items-center my-5">
                        <span className="text-zinc-700">Total Unpaid Invoices</span>
                        <div className="flex space-x-2 h-10">
                            <div className="bg-emerald-600/50 text-white flex justify-center items-center w-10">5</div>
                            <div className="bg-black text-white flex justify-center items-center px-2">12,450.00 $</div>
                        </div>
                    </div>
                    <div className="flex space-x-1 w-full h-8 border-b border-zinc-300">
                        <div className="w-3/5 bg-emerald-600/50 h-4"></div>
                        <div className="w-2/5 bg-black h-4"></div>
                    </div>
                    <div className="w-full flex mt-3 space-x-1">
                        <div className="flex w-1/2 rounded rounded-md p-3 justify-between items-center bg-emerald-400/10">
                            <div className="flex flex-col">
                                <span className="text-emerald-600/50 font-semibold">Current</span>
                                <span className="text-zinc-800 text-lg font-semibold">7500<span className="text-sm text-zinc-700/70">.00 $</span></span>
                            </div>
                            <RiArrowLeftDownLine className="text-emerald-600/50 text-xl font-semibold"/>
                        </div>
                        <div className="flex w-1/2 rounded rounded-md p-3 justify-between items-center bg-gray-300">
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">Overdue</span>
                                <span className="text-zinc-800 text-lg font-semibold">4950<span className="text-sm text-zinc-700/70">.00 $</span></span>
                            </div>
                            <HiChevronDoubleDown className="text-gray-700 text-xl font-semibold"/>
                        </div>
                    </div>
                </HeaderAndPlusCard>
                <HeaderAndPlusCard title="Total Payable">
                    <div className="w-full flex justify-between items-center my-5">
                        <span className="text-zinc-700">Total Unpaid Bills</span>
                        <div className="flex space-x-2 h-10">
                            <div className="bg-indigo-600/80 text-white flex justify-center items-center w-10">5</div>
                            <div className="bg-black text-white flex justify-center items-center px-2">12,450.00 $</div>
                        </div>
                    </div>
                    <div className="flex space-x-1 w-full h-8 border-b border-zinc-300">
                        <div className="w-2/5 bg-indigo-600/80 h-4"></div>
                        <div className="w-3/5 bg-black h-4"></div>
                    </div>
                    <div className="w-full flex mt-3 space-x-1">
                        <div className="flex w-1/2 rounded rounded-md p-3 justify-between items-center bg-indigo-600/20">
                            <div className="flex flex-col">
                                <span className="text-indigo-600/80 font-semibold">Current</span>
                                <span className="text-zinc-800 text-lg font-semibold">3596<span className="text-sm text-zinc-700/70">.00 $</span></span>
                            </div>
                            <RiArrowRightUpLine className="text-indigo-600/80 text-xl font-semibold"/>
                        </div>
                        <div className="flex w-1/2 rounded rounded-md p-3 justify-between items-center bg-gray-300">
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">Overdue</span>
                                <span className="text-zinc-800 text-lg font-semibold">5038<span className="text-sm text-zinc-700/70">.00 $</span></span>
                            </div>
                            <HiChevronDoubleUp className="text-gray-700 text-xl font-semibold"/>
                        </div>
                    </div>
                </HeaderAndPlusCard>
                <HeaderAndPlusCard title="Account and Cards">
                    <div className="w-full mt-5 flex overflow-scroll space-x-10">
                        <AccountCard title="Pay Card for Invoices" sika='28960.37' noOfHolders={6} color="bg-black" textColor="text-white" moneybg="bg-white/10" />
                        <AccountCard title="Pay Card for Invoices" sika='28960.37' noOfHolders={6} color="bg-indigo-600/60" textColor="text-white" moneybg="bg-white/10" />
                        <AccountCard title="Pay Card for Invoices" sika='28960.37' noOfHolders={6} color="bg-white" textColor="text-gray-700" moneybg="bg-gray-100" />
                    </div>
                </HeaderAndPlusCard>

            </div>
        </div>
    );
}

const BottomContent=()=>{
    return(
        <div className="w-full flex-1 bg-white flex">
            <BottomContent1/>
            <BottomContent2/>
            <BottomContent3/>
        </div>
    );
}

const bottom1List=[
    {
        title:'Belements',
        tasks:94,
        hours:254
    },
    {
        title:'Cube Theory',
        tasks:38,
        hours:167
    },
    {
        title:'Decoded',
        tasks:39,
        hours:96
    },
    {
        title:'Active Fragments',
        tasks:25,
        hours:74
    },
    {
        title:'Westerline',
        tasks:17,
        hours:48
    },
]
const BottomContent1=()=>{
return(
    <div className="flex flex-col px-8 py-5 w-1/3 bg-black h-full">
        <div className="flex justify-between items-center text-white pb-5 border-b border-gray-300/20">
            <span className="opacity-60">Projects</span>
            <div className="flex space-x-2 items-center">
                <FiMoreVertical className="text-xs"/>
                <div className="h-7 w-7 flex justify-center items-center text-white bg-white/20">
                    <BsPlusLg className="text-xs"/>
                </div>
            </div>
        </div>
        <div className="h-60 overflow-scroll">
            {
                bottom1List.map((item,index)=><BottomContent1Item key={index} title={item.title} tasks={item.tasks} hours={item.hours} />)
            }
        </div>

    </div>
);
}

const BottomContent1Item=({title,tasks,hours})=>{
    return(
        <div className="flex items-center justify-between py-4 text-white border-b border-gray-300/30">
            <div className="flex flex-col">
                <span className="font-semibold">{title}</span>
                <span className="opacity-60">{tasks} tasks</span>
            </div>
            <h2 className="text-xl font-semibold">{hours} <span className="opacity-60 text-xs">h</span></h2>
        </div>
    );
}

const BottomContent2=()=>{
    const list=[
        {
            title:'Cash as on 01 Jan 2021',
            titleColor:'text-white',
            sika:"26,500",
            child:<></>
        },
        {
            title:'Incoming',
            sika:"26,500",
            titleColor:'text-gray-200',
            child:<AiFillPlusCircle className="text-xl text-gray-200"/>
        },
        {
            title:'Outgoing',
            titleColor:'text-red-400',
            sika:"26,500",
            child:<AiFillMinusCircle className="text-xl text-red-400"/>
        },
        {
            title:'Cash as on 31 Dec 2021',
            titleColor:'text-orange-100',
            sika:"26,500",
            child: <div className="bg bg-orange-100 h-4 w-4 rounded rounded-full flex items-center justify-center">
                <TiEquals className="text-xs text-black"/>
            </div>
        }

    ]
return(
    <div className="flex flex-col p-8 space-y-6 w-1/3 bg-indigo-600/90 h-full">
        <div className="h-[270px] w-full bg-black overflow-scroll">
            {
                list.map((item,index)=><BottomContent2Item key={index} title={item.title} sika={item.sika} titleColor={item.titleColor}>
                    {item.child}
                </BottomContent2Item>)
            }
        </div>
    </div>
);
}

const BottomContent2Item=({children,title,sika,titleColor})=>{
    return(
        <div className="flex items-center justify-between py-6 text-white border-b border-gray-400/30 px-4">
            <div className="flex flex-col">
                <span className={`font-semibold text-sm ${titleColor} opacity-80`}>{title}</span>
                <span className="text-xl">{sika} <span className="text-xs opacity-60">.00 $</span></span>
            </div>
            {children}
        </div>
    );
}
const BottomContent3=()=>{
return(
    <div className="flex flex-col p-8 space-y-6 w-1/3 bg-white h-full">
        <div className="flex w-full justify-between items-center">
            <h2 className="text-gray-700 text-xl">Cash Flow</h2>
            <button className="bg-black p-2 text-sm text-white flex items-center space-x-2"><span>This Fiscal Year</span> <BiChevronDown/></button>
        </div>
        <div className='flex-1 w-full bg-gray-300 text-gray-700/30 flex items-center justify-center text-xl'>
            Graph
        </div>
    </div>
);
}
const ContentNavigation=()=>{
    const links=[
        {
            path:'dashboard',
            title:'Dashboard'
        },
        {
            path:'r-updates',
            title:'Recent Updates'
        },
    ]

    return(
        <nav className="flex space-x-10 text-2xl">
            {links.map((item,index)=>
                <NavLink
                    key={index}
                    to={item.path}
                    className={({isActive})=>(isActive?"text-zinc-800 font-bold":
                        "text-zinc-500 transition-all ease-in-out origin-center hover:text-zinc-800 hover:font-bold")}

            >{item.title}</NavLink>)}
        </nav>
    );
}
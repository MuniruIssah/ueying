import React from 'react';
import {FiMoreVertical} from "react-icons/fi";

const AccountCard = ({title,sika,noOfHolders,color,textColor,moneybg }) => {
    return (
        <div className={`${color} ${textColor} min-w-[270px] p-3 flex flex-col space-y-5`}>
            <span className="opacity-70 font-semibold">{title}</span>
            <div className={`w-full p-3 rounded rounded-lg ${moneybg} text-2xl`}>{sika}<span className="text-base opacity-60"> USD</span></div>
            <div className="w-full flex  justify-between items-center">
                <FiMoreVertical/>
                <div className="flex items-center space-x-2">
                    <span className="opacity-60 text-sm">Holders</span>
                    <div className="flex -space-x-1">
                        {
                            new Array(noOfHolders).slice(0,2).fill(0).map((_,index)=>
                                <div className="group relative">
                            <span className="w-6 h-6 rounded rounded-full ring-2 ring-black text-white font-bold flex justify-center items-center bg-gray-400 "></span>
                                </div>
                                    )
                        }
                        <span className="relative bg-gray-800 text-sm ring-2 ring-black text-white w-6 h-6 flex justify-center items-center rounded rounded-full">+{noOfHolders-2}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountCard;
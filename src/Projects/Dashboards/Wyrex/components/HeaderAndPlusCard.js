import React from 'react';
import {BsPlusLg} from "react-icons/bs";

const HeaderAndPlusCard = ({children,title}) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center py-5 border-b border-zinc-300">
                <h4 className="text-zinc-500 text-lg">{title}</h4>
                <div className="h-10 w-10 flex justify-center items-center text-white bg-black">
                    <BsPlusLg/>
                </div>
            </div>
            {children}
        </div>
    );
};

export default HeaderAndPlusCard;
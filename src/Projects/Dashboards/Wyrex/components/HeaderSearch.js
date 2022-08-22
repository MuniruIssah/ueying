import React from 'react';
import {FiSearch} from "react-icons/fi";
import {BiChevronDown} from "react-icons/bi";

const HeaderSearch = () => {
    return (
        <div className="flex items-center space-x-2 h-10 bg-white p-3">
            <div className="flex space-x-0.5">
                <FiSearch className="text-lg"/>
                <BiChevronDown/>
            </div>

            <input placeholder="Search in customers" className="flex-1 focus:outline-none" />
        </div>
    );
};

export default HeaderSearch;
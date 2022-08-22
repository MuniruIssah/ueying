import React from 'react';
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import Content from "./sections/Content";

const Wyrex = (props) => {
    return (
        <div className="min-h-screen bg-zinc-200 flex">
            {/*<Header/>*/}
            <Sidebar/>
            <Content/>
        </div>
    );
};

export default Wyrex;
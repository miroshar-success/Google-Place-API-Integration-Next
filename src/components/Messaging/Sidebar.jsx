import React from "react";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";


const Sidebar = ()=>{
    return(
        <div className="border-r border-slate-500 p-4 flex flex-col bg-blue-500" style={{height: "100vh"}}>
            <SearchInput/>
            <div className="divider px-3"/>
            <Conversations/>
        </div>
    )
}

export default Sidebar ;
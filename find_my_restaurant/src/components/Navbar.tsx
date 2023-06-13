import React from "react";
import MenuIcon from '@mui/icons-material/Menu';



export default function Navbar(){
    return (
        <header className="w-full box-border">
            <div className="flex items-center justify-end p-4">
                <MenuIcon sx={{color:"white",fontSize:40}} className="cursor-pointer"/>
            </div>
        </header>
    )

} 
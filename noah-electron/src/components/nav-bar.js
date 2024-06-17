import React from 'react';
import Tabs from './tabs';

const NavBar = () => {
    return (
        //full width, 12px height, flexbox layout, items centered, background is blue from navbar on https://www.figma.com/design/FmAtjhAgL6TJXNo5EjzTaV/Noah-App-Wireframe?node-id=1-2&t=fjnIGAtCx0siswLp-0
        <div className="fixed top-0 w-full h-16 flex items-center justify-between bg-[#5196DA] shadow-md px-4"> 
            <span className="font-kanit font-semibold text-xl ml-4 truncate">Noah - Website Management for The Ark Foundation, Ghana</span>
            
            {/*include a single tabs component to allow for switching of shown content*/}
            <Tabs className="flex"/>
        </div>
    );
};

export default NavBar;
"use client";

import React from "react";

interface MenuItemProps{ 
    label: string;
    onClick?:()=>void;

}

const MenutItem:React.FC<MenuItemProps> = ({label, onClick}) => {

    return(
      <div onClick={onClick} className="px-4 py-3 hover:bg-neutral-100 transition font-normal">
      {label}
      </div>
    )

}


export default MenutItem;
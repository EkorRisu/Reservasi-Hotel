"use client";
import Image from "next/image";
import React from "react";

interface AvatarPorps{
    src: string|null|undefined;
}

const Avatar: React.FC<AvatarPorps> = ({src}) => {
    return(
        <img className="rounded-full" height={30} width={30} alt="Avatar" src={src || "/image/images5.jpeg"}></img>
    )

}

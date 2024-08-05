"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { SlScreenDesktop } from "react-icons/sl";
import { useTheme } from "next-themes";
import Avatar1 from "@/assets/avatars/1.png";
import Image from "next/image";
import { RiNotification2Line } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import { useAppDispatch } from "@/redux/hooks";
import { setsidebarStatus } from "@/redux/slices/public/publicSlice";

const Header = () => {
    const [activetheme, setactivetheme] = useState({
        icon: SlScreenDesktop,
        name: "system",
    });
    const themes = [
        { icon: MdOutlineDarkMode, name: "dark" },
        { icon: FiSun, name: "light" },
        { icon: SlScreenDesktop, name: "system" },
    ];
    const { setTheme } = useTheme();
    const [togleThemDropdaown, settogleThemDropdaown] = useState(false);
    const dispatch = useAppDispatch();
    return (
        <div className="flex justify-between p-4 lg:px-6 lg:py-8 items-center w-full ">
            <div className="flex items-center">
                <MdMenu
                    className="text-3xl lg:hidden "
                    onClick={() =>
                        dispatch(
                            setsidebarStatus("fixed bg-bgColorFade shadow-xl")
                        )
                    }
                />
                <div className="flex gap-4 items-center cursor-pointer">
                    <div className="flex justify-center items-center hover:bg-textColor/10 p-2 rounded-full  ">
                        <FiSearch className="text-2xl cursor-pointer" />
                    </div>
                    <p className="text-textColor/50 hidden lg:flex">Search</p>
                </div>
            </div>
            <div className="flex gap-2 justify-end text-textColor items-center">
                <div className="flex relative">
                    <div
                        className="flex rounded-full p-2 hover:bg-textColor/10 h-fit cursor-pointer"
                        onClick={() => settogleThemDropdaown((prev) => !prev)}
                    >
                        <activetheme.icon className="text-2xl" />
                    </div>
                    {togleThemDropdaown && (
                        <div className="flex absolute  right-0 mt-14 z-50 shadow-xl">
                            <div className="flex w-[10rem]  flex-col bg-bgColorFade rounded-lg shadow-sm overflow-hidden">
                                {themes.map((theme) => {
                                    return (
                                        <div
                                            className={`flex items-center px-3 gap-4 py-2 cursor-pointer capitalize  ${
                                                theme.name === activetheme.name
                                                    ? "bg-secondary/10 text-primary"
                                                    : ""
                                            }`}
                                            key={theme.name}
                                            onClick={() => {
                                                setactivetheme(theme);
                                                setTheme(theme.name);
                                                settogleThemDropdaown(
                                                    (prev) => !prev
                                                );
                                            }}
                                        >
                                            <theme.icon /> <p>{theme.name}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex relative cursor-pointer">
                    <RiNotification2Line className="text-xl" />
                    <div className="absolute h-2 w-2 rounded-full bg-redaccent right-0" />
                </div>
                <div className="flex relative justify-end items-end">
                    <Image
                        src={Avatar1}
                        alt="midas-avatar-one"
                        className="w-10 rounded-full"
                    />
                    <div className="absolute h-3 w-3 border-2 bg-greenaccent rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Header;

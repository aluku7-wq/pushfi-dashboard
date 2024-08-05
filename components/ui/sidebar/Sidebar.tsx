"use client";
import React, { useState } from "react";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IoClose } from "react-icons/io5";
import { setsidebarStatus } from "@/redux/slices/public/publicSlice";
const Sidebar = () => {
    const tabs = ["dashboard", "users", "profile"];
    const [activetab, setactivetab] = useState("dashboard");
    const sidebarstatus = useAppSelector(
        (state) => state.publicStates.sidebarStatus
    );
    console.log(sidebarstatus);
    const dispatch = useAppDispatch();
    return (
        <div
            className={`${sidebarstatus} lg:flex flex-col w-[17rem]  text-textColor  z-50 min-h-screen pr-4 shadow-xl`}
        >
            <div className="flex items-center  p-4 lg:p-8 w-full justify-between">
                <div className="flex gap-4 items-center">
                    <Image src={Logo} alt="midas-logo" className="w-[2rem]" />{" "}
                    <h1 className="text-xl font-bold">Midas</h1>
                </div>
                <IoClose
                    className="text-3xl lg:hidden"
                    onClick={() =>
                        dispatch(setsidebarStatus("hidden bg-transparent"))
                    }
                />
            </div>
            <div className="flex flex-col gap-2">
                {tabs.map((tab) => {
                    return (
                        <div
                            className={`flex gap-6 items-center capitalize px-4 lg:px-8 py-2 cursor-pointer rounded-r-full ${
                                tab === activetab
                                    ? "bg-gradient-to-r from-secondary to-primary text-gray-200"
                                    : "text-textColor"
                            }`}
                            key={tab}
                            onClick={() => setactivetab(tab)}
                        >
                            <div
                                className={`h-3 w-3 border-2 ${
                                    tab === activetab
                                        ? "border-gray-200"
                                        : "border-textColor"
                                }  rounded-full`}
                            />{" "}
                            <p>{tab}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;

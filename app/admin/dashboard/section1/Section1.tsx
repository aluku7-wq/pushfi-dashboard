import React from "react";
import Character1 from "@/assets/illustrations/characters/13.png";
import Character2 from "@/assets/illustrations/characters/14.png";
import Image from "next/image";
import { RiPieChart2Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { RiMacbookLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Section1 = () => {
    return (
        <div className="flex gap-6 w-full flex-col xl:flex-row">
            <div className="flex  gap-12 md:gap-6 flex-col md:flex-row xl:w-full pt-8 lg:py-0">
                <div className="flex bg-bgColorFade h-[10rem] overflow-b-hidden rounded-lg relative items-end p-4 shadow-xl w-full justify-between pb-0">
                    <div className="flex flex-col text-textColor gap-2 lg:gap-2  pb-4">
                        <p>Ratings</p>
                        <div className="flex justify-between items-center w-full">
                            <p className="text-2xl">13k</p>{" "}
                            <div className="text-thin text-greenaccent">
                                +15.6%
                            </div>
                        </div>
                        <button className="p-1 lg:px-2 px-4 text-primary bg-secondary/20 rounded-full text-[00.8rem]">
                            Year of 2024
                        </button>
                    </div>
                    <Image
                        src={Character1}
                        alt="midas"
                        className=" w-[7.5rem] lg:w-[4rem] xl:w-[6rem] 2xl:w-[7.4rem]  bottom-0  mt-[-20%] right-4 "
                    />
                </div>
                <div className="flex bg-bgColorFade h-[10rem] overflow-b-hidden rounded-lg relative items-end p-4  shadow-xl w-full justify-between pb-0">
                    <div className="flex flex-col text-textColor gap-4 pb-4 ">
                        <p>Sessions</p>
                        <div className="flex justify-between items-center w-full">
                            <p className="text-2xl">24.5k</p>{" "}
                            <div className="text-thin text-redaccent">
                                +15.6%
                            </div>
                        </div>
                        <button className="p-1 px-4 text-textColor bg-gray-400/20 rounded-full text-[0.8rem] w-fit">
                            Year of 2024
                        </button>
                    </div>
                    <Image
                        src={Character2}
                        alt="midas"
                        className="w-[6rem] lg:w-[4rem] xl:w-[5rem] 2xl:w-[6rem]  bottom-0  mt-[-20%] right-4 "
                    />
                </div>
            </div>
            <div className="flex grow bg-bgColorFade rounded-lg  p-4 shadow-xl  md:h-[12rem] w-full lg:h-[10rem]">
                <div className="w-full flex flex-col relative  pr-4 gap-8 text-textColor justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-xl">Transactions</h1>
                        <h2 className="">
                            Total 48.5% Growth 😎{" "}
                            <span className="font-normal text-textColor/70">
                                this month
                            </span>
                        </h2>
                    </div>
                    <div className="flex justify-between flex-col md:flex-row gap-4">
                        <div className="flex gap-4 items-center w-full">
                            <div className="flex bg-primary p-2 w-fit h-fit rounded-lg">
                                <RiPieChart2Line className="text-2xl text-gray-200" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-textColor/70">Sales</p>
                                <h2>245k</h2>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center w-full">
                            <div className="flex bg-greenaccent p-2 w-fit h-fit rounded-lg">
                                <GoPeople className="text-2xl text-gray-200" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-textColor/70">Users</p>
                                <h2>12.5k</h2>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center w-full ">
                            <div className="flex bg-yellowaccent p-2 w-fit h-fit rounded-lg">
                                <RiMacbookLine className="text-2xl text-gray-200" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-textColor/70">Product</p>
                                <h2>1.54k</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <HiOutlineDotsVertical className="text-textColor text-2xl cursor-pointer" />
            </div>
        </div>
    );
};

export default Section1;

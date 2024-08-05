import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuWallet } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
// Next Imports
import dynamic from "next/dynamic";
// Import to define marker shape

const AppReactApexCharts = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});
// Third Party Imports
import type { ApexOptions } from "apexcharts";
const SalesOverview = () => {
    const options: ApexOptions = {
        chart: {
            sparkline: { enabled: true },
        },
        grid: {
            padding: {
                left: 20,
                right: 20,
            },
        },
        colors: [
            "rgba(140, 87, 255,1)",
            "rgba(140, 87, 255,0.7)",
            "rgba(140, 87, 255,0.5)",
            "rgba(189, 189, 189,0.2)",
        ],
        stroke: { width: 0 },
        legend: { show: false },
        dataLabels: { enabled: false },
        labels: ["Apparel", "Electronics", "FMCG", "Other Sales"],
        states: {
            hover: {
                filter: { type: "none" },
            },
            active: {
                filter: { type: "none" },
            },
        },
        plotOptions: {
            pie: {
                customScale: 0.9,
                donut: {
                    size: "70%",
                    labels: {
                        show: true,
                        name: {
                            offsetY: 25,
                            fontSize: "0.875rem",
                            color: "gray",
                        },
                        value: {
                            offsetY: -15,
                            fontWeight: 500,
                            fontSize: "24px",
                            formatter: (value) => `${value}k`,
                            color: "gray",
                        },
                        total: {
                            show: true,
                            fontSize: "0.875rem",
                            label: "Weekly Sales",
                            color: "rgb(143, 142, 142)",
                            formatter: (value) =>
                                `${value.globals.seriesTotals.reduce(
                                    (total: number, num: number) => total + num
                                )}k`,
                        },
                    },
                },
            },
        },
        responsive: [
            {
                breakpoint: 1300,
                options: { chart: { height: 257 } },
            },
            {
                breakpoint: 720,
                options: { chart: { height: 276 } },
            },
            {
                breakpoint: 1050,
                options: { chart: { height: 300 } },
            },
        ],
    };
    const salesOverView = [
        { title: "Apparel", amount: " $12,150" },
        { title: "Electronics", amount: "$24,900" },
        { title: "FMCG", amount: "$12,750" },
        { title: "Other Sales", amount: "$50,200" },
    ];
    return (
        <div className="bg-bgColorFade w-full rounded-lg p-4 text-textColor flex flex-col shadow-xl">
            <div className="flex items-center justify-between w-full ">
                <h3 className="font-semibold">Sales Overview</h3>
                <HiOutlineDotsVertical className="text-xl cursor-pointer" />
            </div>
            <div className="flex w-full  h-auto md:h-[16rem] flex-col md:flex-row">
                <div className="flex  h-full items-center justify-center w-full md:w-1/2">
                    <AppReactApexCharts
                        type="donut"
                        height={277}
                        width="100%"
                        series={[12, 25, 13, 50]}
                        options={options}
                    />
                </div>
                <div className="flex w-full md:w-1/2 flex-col">
                    <div className="flex gap-2 w-full border-b-[0.1rem] border-b-textColor/10 h-fit py-6">
                        <div className="flex bg-primary/20 h-fit w-fit p-2 rounded-lg">
                            <LuWallet className="text-primary text-3xl" />
                        </div>
                        <div className="flex text-textColor flex-col ">
                            <p className="text-textColor/80">Number of Sales</p>
                            <p className="font-semibold">$86,400</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        {salesOverView.map((sale, index) => {
                            return (
                                <div className="flex flex-col" key={index}>
                                    <p className="flex items-center text-textColor/80">
                                        <GoDotFill className="text-primary" />
                                        {sale.title}
                                    </p>
                                    <p className="font-semibold">
                                        {sale.amount}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesOverview;

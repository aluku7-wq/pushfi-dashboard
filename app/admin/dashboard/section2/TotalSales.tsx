import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import type { ApexOptions } from "apexcharts";
// Next Imports
import dynamic from "next/dynamic";
const AppReactApexCharts = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const TotalSales = () => {
    const options: ApexOptions = {
        chart: {
            parentHeightOffset: 0,
            toolbar: { show: false },
        },
        tooltip: { enabled: false },
        fill: {
            type: "gradient",
            gradient: {
                opacityTo: 0.2,
                opacityFrom: 1,
                shadeIntensity: 0,
                type: "horizontal",
                stops: [0, 100, 100],
            },
        },
        stroke: {
            width: 6,
            curve: "smooth",
            lineCap: "round",
        },
        legend: { show: false },
        colors: ["rgb(86, 202, 0)"],
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0,
                bottom: -10,
            },
        },
        xaxis: {
            axisTicks: { show: false },
            axisBorder: { show: false },
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            labels: {
                style: {
                    fontSize: "0.9375rem",
                    colors: "gray",
                },
            },
        },
        yaxis: {
            labels: { show: false },
        },
    };
    return (
        <div className="flex flex-col text-textColor bg-bgColorFade rounded-lg p-4 w-full shadow-xl">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h3 className="font-semibold">Total Sales</h3>
                    <p>$21,845</p>
                </div>
                <HiOutlineDotsVertical className="text-xl cursor-pointer" />
            </div>
            <div className="flex">
                <AppReactApexCharts
                    type="line"
                    height={248}
                    width="100%"
                    options={options}
                    series={[
                        {
                            name: "Total Sales",
                            data: [0, 258, 30, 240, 150, 400],
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default TotalSales;

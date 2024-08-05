import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
// Next Imports
import dynamic from "next/dynamic";
// Import to define marker shape

const AppReactApexCharts = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});
// Third Party Imports
import type { ApexOptions } from "apexcharts";
const series = [
    {
        name: "Earning",
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72],
    },
    {
        name: "Expense",
        data: [-145, -80, -60, -180, -100, -60, -85, -75, -100],
    },
];

const RevenueReport = () => {
    const options: ApexOptions = {
        chart: {
            stacked: true,
            parentHeightOffset: 0,
            toolbar: { show: false },
        },
        tooltip: { enabled: false },
        grid: {
            show: false,
            padding: {
                left: -10,
                right: 0,
            },
        },
        legend: {
            offsetY: 6,
            fontSize: "15px",
            markers: {
                strokeWidth: 0, // Remove border
                fillColors: ["rgb(86, 202, 0)", "gray"], // Fill colors
                shape: "circle",
            },
            itemMargin: { horizontal: 9 },
            labels: {
                colors: "gray",
            },
        },
        stroke: {
            width: 3,
            colors: ["rgba(86, 202, 0,.0)"],
        },
        dataLabels: { enabled: false },
        colors: ["rgb(86, 202, 0)", "gray"],
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: "35%",
                borderRadiusApplication: "around",
                borderRadiusWhenStacked: "all",
            },
        },
        states: {
            hover: {
                filter: { type: "none" },
            },
            active: {
                filter: { type: "none" },
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
            ],
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: { show: false },
        },
        responsive: [
            {
                breakpoint: 1350,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 2,
                            columnWidth: "45%",
                        },
                    },
                },
            },
            {
                breakpoint: 1200,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: "50%",
                        },
                    },
                },
            },
            {
                breakpoint: 760,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            columnWidth: "10%",
                        },
                    },
                },
            },

            {
                breakpoint: 640,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            columnWidth: "15%",
                        },
                    },
                },
            },
            {
                breakpoint: 500,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: "28%",
                        },
                    },
                },
            },
            {
                breakpoint: 400,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            columnWidth: "35%",
                        },
                    },
                },
            },
        ],
    };
    return (
        <div className="flex p-4 w-full bg-bgColorFade rounded-lg text-textColor flex-col shadow-xl">
            <div className="flex items-center justify-between w-full ">
                <h3 className="font-semibold">Revenue Report</h3>
                <HiOutlineDotsVertical className="text-xl cursor-pointer" />
            </div>
            <AppReactApexCharts
                type="bar"
                height={238}
                width="100%"
                series={series}
                options={options}
            />
        </div>
    );
};

export default RevenueReport;

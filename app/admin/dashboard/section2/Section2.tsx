import React from "react";
import TotalSales from "./TotalSales";
import RevenueReport from "./RevenueReport";
import SalesOverview from "./SalesOverview";

const Section2 = () => {
    return (
        <div className="flex gap-6 flex-col lg:flex-row">
            <div className="flex w-full gap-6 flex-col md:flex-row">
                <TotalSales />
                <RevenueReport />
            </div>
            <SalesOverview />
        </div>
    );
};

export default Section2;

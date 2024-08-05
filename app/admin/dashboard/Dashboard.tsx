import React from "react";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";

const Dashboard = () => {
    return (
        <div className="p-4 lg:px-6 flex flex-col gap-6">
            <Section1 />
            <Section2 />
        </div>
    );
};

export default Dashboard;

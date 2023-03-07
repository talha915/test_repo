import React from "react";
import LeftMenu from "../../components/leftmenu/LeftMenu";
import BarChart from "../../components/charts/barcharts";
import LineCharts from "../linecharts/linecharts";

const Main = () => {
    return (
        <div>
            <LeftMenu />
            {/* <BarChart /> */}
            <LineCharts />
        </div>
    )
};

export default Main;

import { useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import CalendarComponent from "../components/CalendarComponent";
// import Charts from "../components/Chart";
import LineChartComponent from "../components/chart/LineChartComponent";
import AreaChartComponent from "../components/chart/AreaChartComponent";
import BarChartComponent from "../components/chart/BarChartComponent";
import ComposedChartComponent from "../components/chart/ComposedChartComponent";
import PieChartComponent from "../components/chart/PieChartComponent";
import RadarChartComponent from "../components/chart/RadarChartComponent";
import ScatterChartComponent from "../components/chart/ScatterChartComponent";

import "../styles/chart.scss";

function Home() {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = (year, month) => {
    console.log("Selected month:", month);
    console.log("Selected year:", year);
  };

  // Demo data for charts
  const lineChartData = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  const areaChartData = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  const barChartData = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  const composedChartData = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  const pieChartData = [
    { name: "Category A", value: 400 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 200 },
    { name: "Category D", value: 500 },
  ];

  const radarChartData = [
    { subject: "Math", A: 120, B: 110, fullMark: 150 },
    { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
    { subject: "English", A: 86, B: 130, fullMark: 150 },
    { subject: "Geography", A: 99, B: 100, fullMark: 150 },
    { subject: "Physics", A: 85, B: 90, fullMark: 150 },
    { subject: "History", A: 65, B: 85, fullMark: 150 },
  ];

  const scatterChartData = [
    { x: 10, y: 30 },
    { x: 30, y: 200 },
    { x: 45, y: 100 },
    { x: 50, y: 400 },
    { x: 70, y: 150 },
    { x: 100, y: 250 },
  ];

  return (
    <main className="main-container">
      <div className="calendar-dropdown-container">
        <button className="icon" onClick={toggleCalendar}>
          Calendar
        </button>
        {showCalendar && <CalendarComponent onChangeMonth={handleDateSelect} />}
      </div>
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Server:</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>30204</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Physical Server:</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>3523</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Hypervisor-Esx+Openshift :</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>1562</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Virtual Server:</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>26098</h1>
        </div>
      </div>
      {/*  */}
      {/* Add your charts here */}
      <div className="chart-container">
        <div>
          <h4>Line Chart</h4>
          <LineChartComponent data={lineChartData} />
        </div>

        <div>
          <h4>Area Chart</h4>
          <AreaChartComponent data={areaChartData} />
        </div>

        <div>
          <h4>Bar Chart</h4>
          <BarChartComponent data={barChartData} />
        </div>

        <div>
          <h4>Composed Chart</h4>
          <ComposedChartComponent data={composedChartData} />
        </div>

        <div>
          <h4>Pie Chart</h4>
          <PieChartComponent data={pieChartData} />
        </div>

        <div>
          <h4>Radar Chart</h4>
          <RadarChartComponent data={radarChartData} />
        </div>

        <div>
          <h4>Scatter Chart</h4>
          <ScatterChartComponent data={scatterChartData} />
        </div>
      </div>
    </main>
  );
}

export default Home;

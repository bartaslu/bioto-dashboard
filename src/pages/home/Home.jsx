import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import Chart from "../../components/chartDisplays/Chart";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type ="Users"/>
          <Widget type ="Earnings"/>
          <Widget type ="Users"/>
          <Widget type ="Earnings"/>
        </div>  
         <div className="charts">
            <Featured/>
            <Chart/>
         </div>
      </div>
    </div>
  )
}

export default Home
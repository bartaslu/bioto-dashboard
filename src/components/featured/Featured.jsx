import featured from "./featured.scss"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import EuroIcon from '@mui/icons-material/Euro';

const Featured = () => {

    let price =  0.14;


    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Revenue</h1>
            </div>
            <div className="middle">
                
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={3}/>
                </div>
                <div className="price">
                    <span>Price: </span>
                    <input type="input_price" value={price} />
                </div>
                <div className="revenues">
                    <div className="revenue">
                        <span className="time">This week</span>
                        <span className="wats">4.16 kWh</span>
                        <span className="amount">0.59<EuroIcon/></span>
                    </div>
                    <div className="revenue">
                        <span className="time">This Month</span>
                        <span className="wats">4.16 kWh</span>
                        <span className="amount">12444.38<EuroIcon/></span>
                    </div>
                    <div className="revenue">
                        <span className="time">This Year</span>
                        <span className="wats">105.22 MWh</span>
                        <span className="amount">14730.91<EuroIcon/></span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Featured
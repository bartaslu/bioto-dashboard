import React, {useState} from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import ChartCh from '../../components/chartDisplays/ChartCh';
import "react-datepicker/dist/react-datepicker.css";
import './production.scss';



const Production = () => { 
    const [startDate, setSelectedDate] = useState(new Date());

    return (
    <div className='production'>
        <Sidebar/>
        <div className="productionContainer">
            <Navbar/>
            <div className="productionChart">
                <div className="header">
                    <div className="device">
                        <Select className='deviceSelector' placeholder="DESE TSPI" options={deviceOptions} />
                    </div>
                    <div className="date">
                        <ArrowBackIosNewOutlinedIcon/>
                        <DatePicker className='datePicker' 
                            closeOnScroll={true}
                            selected={startDate} 
                            onChange={date => setSelectedDate(date)}
                            maxDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                        <ArrowForwardIosOutlinedIcon/>
                    </div>
                    <div className="interval">
                        <Select className='intervalSelector' placeholder="Week" options={intervalOptions}/>
                    </div>
                </div>
                <div className="info">
                    <ChartCh/>
                </div>
            </div>
        </div>
    </div>
  )
}

const deviceOptions = [
    { value: 'INVERTER 1', label: 'INVERTER 1' },
    { value: 'INVERTER 2', label: 'INVERTER 2' },
    { value: 'INVERTER 3', label: 'INVERTER 3' }
  ]

const intervalOptions = [
    {value: 'Week', label: ' Week'},
    {value: 'Month', label: ' Month'},
    {value: 'Year', label: ' Year'}
]


export default Production
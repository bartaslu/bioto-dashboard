import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


const Widget = ({type}) => {
  let data;

  // TEST
  const amount = 15000;
  const diff = 20;


  switch(type){
    case "Users":
      data={
        title:"USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className='icon' 
            style = {{
              color:"crimson",
              background:"rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
    break;

    case "Earnings":
      data={
        title:"EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon 
            className="icon"
            style = {{
              color:"green",
              background:"rgba(0, 128, 0, 0.2)"
            }}
          />
        ),
      };
      break;

    default:
      break;
  }



  return (
    <div className='widget'>
        <div className="left">
           <div className="title">{data.title}</div>
           <div className="counter">{data.isMoney && "$"} {amount}</div>
           <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpOutlinedIcon/>
              {diff} {"%"}
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
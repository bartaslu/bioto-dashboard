import './dashboards.scss'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import { Folder } from '@mui/icons-material'
import { FolderOpen } from '@mui/icons-material'
import FindInPageIcon from '@mui/icons-material/FindInPage';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Collapse from 'react-bootstrap/Collapse'

const Dashboards = () => {
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);


  
    return (
    <div className='dashboards'>
        <Sidebar/>
        <div className="dashboards__container">
            <Navbar/>
            <div className="dashboard">
                <div className="title">
                    <h1>Dashboards</h1>
                    <span>Manage dashboards and folders</span>
                </div>
                <div className="box">
                    <div className="table__action-bar">
                        <div className="inputWrapper">
                            <div className="icon">
                                <SearchOutlined/>
                            </div>
                            <input type={"search"} placeholder="Search dashboards by name"/>
                        </div>
                        <button><span>New Dashboard</span></button>
                        <button><span>New Folder</span></button>
                    </div>

                    <div className="dashboard__table">
                        <div className="table__contents">
                            <div className="content">
                                <div className='content__row'>
                                    <div onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                        class="main_row col-md-3" data-toggle="collapse"    data-target="#content">
                                            <input type="checkbox" />
                                            <Folder/>
                                            <span>Šilas</span>
                                            <div className='go_to'>
                                                <hr></hr>
                                                <FindInPageIcon/>
                                                <span>Go to folder</span>
                                            </div>
                                    </div>
                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                            TEST
                                        </div>
                                    </Collapse>
                                </div>
                                <KeyboardArrowDownIcon/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboards
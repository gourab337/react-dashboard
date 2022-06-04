import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../imgs/et-logo.png'

import { SidebarData } from "../../Data/Data.js"
import { UilSignOutAlt } from '@iconscout/react-unicons'


const Sidebar = () => {

    const [selected, setSelected] =useState(0)

    return (
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="IIT-B Dept of ET" />
                <span>eTutor</span>
            </div>

            {/* menu */}
            <div className="menu">
                {SidebarData.map((item, index)=>{
                    return (
                        <div className={selected===index?'menuItem active': 'menuItem'} 
                        key = {index}
                        onClick={()=>setSelected(index)}
                        >
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <UilSignOutAlt/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>"Discover culinary wonders around every corner. From sizzling street food to hot cuisine, embark on a taste adventure with our Explore menu. Let your cravings guide you to unforgettable flavors today!"</p>
         <div className="explore-menu-list">
            {menu_list.map((item,index)=>{   //Maps over the menu_list array to render each menu item dynamically.
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
         </div>
         <hr/>
              
      
    </div>
  )
}

export default ExploreMenu

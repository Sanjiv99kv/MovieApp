import React from 'react'
import { mobileNavigation } from '../constant/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-14 bg-black fixed bottom-0 w-full z-50 p-2'>
       <div className='flex items-center justify-between text-neutral-400'>
        {mobileNavigation.map((nav,index)=>{
            return(
                <NavLink to={nav.href} key={nav.label+"mobileNavigation"+index} className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}>
                    <div className='text-2xl'>
                        {nav.icon}
                    </div>
                    <p className='text-sm'>{nav.label}</p>
                </NavLink>
            )
        })}
       </div>
    </section>
  )
}

export default MobileNavigation

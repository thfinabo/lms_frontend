import { useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

const DashboardLayout = ({children}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='relative overflow-x-hidden'>
      <div className={`fixed sm:left-0 top-0 ${open ? 'left-0' : '-left-[250px]'} overflow-hidden h-[100vh] z-10`}>
        <SideBar />
      </div>
      <div className={`sm:ml-[250px]`}>
        <div>
          <NavBar open={open} setOpen={setOpen} />
        </div>
        <div className='w-[95%] m-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
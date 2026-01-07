import SvgIcon from "@/assests/icons/SvgIcon";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import './AdminMenu.css';

const menus = [
  {
    title: 'Announcement',
    icon: 'anoucement',
    redirect: '/admin/Announcement'
  },
  {
    title: 'Career',
    icon: 'briefcase',
    redirect: '/admin/career'
  },
  {
    title: 'Professions',
    icon: 'remote-job',
    redirect: '/admin/professions'
  },
  // {
  //   title: 'Job Applications',
  //   icon: 'data-entry',
  //   redirect: '/admin/jobapplications'
  // },
]
const AdminMenu = () => {
  const sm = useMediaQuery('(max-width:576px)')
  const pathname = usePathname()
  const [active, setActive] = useState(false)
  const router = useRouter()

  const handleToggle = () => {
    setActive(!active)
  }

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to Logout ?")) {
      sessionStorage.removeItem('authUser')
      router.push('/admin')
    }
  }

  const handleClick = () => {
    if (sm) {
      handleToggle()
    }
  }

  return (
    <Box className={`admin-menu ${active ? 'smActive' : ''}`}>
      <Box className='three-line-menu' onClick={() => handleToggle()}>
        <SvgIcon name={`${active ? 'close' : 'menu-line'}`} className={`${active ? 'active' : ''}`} />
      </Box>
      <Box className={`listItems ${active ? 'smActive' : ''}`}>
        {
          menus.length > 0 && menus.map((item, i) => {
            return (
              <Box className={`navLink ${pathname === item?.redirect ? 'active' : ''} `} key={i}>
                <Link href={item?.redirect} onClick={handleClick}>
                  <Box className='iconBox'>
                    <SvgIcon name={item?.icon} />
                  </Box>
                  <Typography variant="body2" className={`titleText ${active ? 'active' : ''}`}>{item?.title}</Typography>
                </Link>
              </Box>
            )
          })
        }
      </Box>
      <Box className='logout' onClick={handleLogout}>
        <Box className='iconBox'>
          <SvgIcon name={'logout'} />
        </Box>
        <Typography variant="body2" className={`titleText ${active ? 'active' : ''}`}>Logout</Typography>
      </Box>
    </Box>
  )
}

export default AdminMenu
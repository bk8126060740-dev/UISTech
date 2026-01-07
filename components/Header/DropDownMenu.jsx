'use client'
import SvgIcon from "@/assests/icons/SvgIcon";
import { isBrowser } from "@/common/commonfunction";
import { Box, MenuItem, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import './Header.css';

const DropDownMenu = ({ menus, removeHover, index }) => {
    const router = useRouter()
    const pathname = usePathname()
    const [submenuIndex, setSubMenuIndex] = useState(0)

    const subChildMenu = (
        menus[submenuIndex]?.submenuChild && menus[submenuIndex]?.submenuChild
    )

    const handleTop = () => {
        if (isBrowser && window.scrollY > 0) {
            window.scrollTo(0, 0)
        }
    }

    const handleItemClick = useCallback((redirect) => {
        removeHover();
        router.push(redirect);
        handleTop();
    },[]);
    
    useEffect(() => {
        const currentMenuIndex = menus.findIndex(item => item.redirect === pathname);
        setSubMenuIndex(currentMenuIndex !== -1 ? currentMenuIndex : 0);
      }, [pathname, menus]);

    return (
        <>
            <Box className="header-dropdown-hidden-section"></Box>
            {menus.length > 0 && (
                <Box className={`dropDown ${index === 1 ? 'setHeaderResonsive' : 'setServiceResposnive'}`} onMouseLeave={() => removeHover()}>
                    <SvgIcon name='polygon' id='polygonParent' />
                    <Box className='menu-box'>
                        {menus.map((item, i) => {
                            let sub_redirect_ = item.redirect
                            return (
                                <MenuItem
                                    key={i}
                                    className={submenuIndex === i ? "idActive" : ''}
                                    sx={{ padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                                    onMouseEnter={() => setSubMenuIndex(i)}
                                    onClick={() => handleItemClick(sub_redirect_)}
                                >
                                    <SvgIcon name={item?.icon} width={30} height={30} />
                                    <Typography sx={{ textAlign: 'center' }} variant='body2'>{item.name}</Typography>
                                    <SvgIcon name='polygon' id='polygonSvg' />
                                </MenuItem>
                            )
                        })}
                    </Box>
                    <Box className='meuline'></Box>
                    <Box className='dropdown-submenu'>
                        {
                            subChildMenu?.map((subItem, i) => {
                                let sub_child_redirect_ = subItem.redirect
                                return (
                                    <MenuItem
                                        key={i}
                                        sx={{ padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                                        onClick={() => handleItemClick(sub_child_redirect_)}
                                    >
                                        <SvgIcon name={subItem?.icon} width={30} height={30} />
                                        <Typography sx={{ textAlign: 'center' }} variant='body2'>{subItem.name}</Typography>
                                    </MenuItem>
                                )
                            })
                        }
                    </Box>
                </Box>
            )}
        </>
    )
}

export default DropDownMenu
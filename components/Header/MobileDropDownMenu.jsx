'use client'
import SvgIcon from '@/assests/icons/SvgIcon';
import { HeaderNavMobile } from '@/common/commonHeader';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Paragraph, SubHeading6 } from '../commonUiComponents/commonUiComponents';
import Linker from '../Linker';
import './MobileDropDownMenu.css';

const headerText = {
    privacy: "Privacy Policy",
    copywrite: "© 2024 PaymentEase by Evoravo"
}

const MobileDropDownMenu = ({ anchorElNav, data, showdata }) => {
    const router = useRouter()
    const [activeindex, setActiveindex] = useState()
    const [sectionindex, setSectionindex] = useState()
    const [subshow, setSubshow] = useState(false)

    const handleexpand = (page, index) => {
        if (page?.submenu.length > 0) {
            setSectionindex(null)
            setActiveindex(index)
            data(true)
        } else {
            handleClickOnLink(page.redirect)
        }
    }

    const handlesubexpand = (index) => {
        setSectionindex(sectionindex === index ? null : index)
        setSubshow(!subshow)
    }

    const handleClickOnLink = useCallback((path) => {
        anchorElNav(null)
        data(false)
        router.push(path)
    }, [])

    return (
        <Box className="Mobile-dropdown-main-section">
            <Box className="Mobile-dropdown-section">
                <Box>
                    {
                        HeaderNavMobile.map((page, index) => (
                            <Box key={index}>
                                {
                                    !showdata && <Box className={!showdata ? "animate-links" : "animated-links"}>
                                        <Box
                                            className="Mobile-dropdown"
                                            onClick={() => handleexpand(page, index)}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            <SubHeading6 className={activeindex === index && showdata ? 'Mobile-dropdown-h2 active-dropdown-h2' : 'Mobile-dropdown-h2'}>{page.name}</SubHeading6>
                                            {page.childmenu && <SvgIcon name={showdata && activeindex === index ? 'down-arrow' : 'right-arrow'} width={12} height={12} />}
                                        </Box>
                                    </Box>
                                }
                                {showdata && activeindex === index &&
                                    <Box className={showdata ? "animated-sublink" : "animate-sublink"} key={`sub_${index}`}>
                                        <Box className="sublink-title">
                                            <Box onClick={() => handleClickOnLink(page.redirect)} sx={{
                                                cursor: 'pointer'
                                            }}>
                                                <Typography className={'Mobile-dropdown-h2 active-dropdown-h2'} variant='h2'>{page.name}</Typography>
                                            </Box>
                                        </Box>
                                        {
                                            page.submenu.map((item, i) => (
                                                <Box key={i}>
                                                    <Box className="dropdown-sublink-section" onClick={() => handlesubexpand(i)}>
                                                        <Box
                                                            sx={{
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            <Box className="dropdown-sublink">
                                                                <SvgIcon name={item.icon} height={20} width={20} className={sectionindex === i ? "dropdown-sublink-section-svg active-svg" : "dropdown-sublink-section-svg"} />
                                                                <Paragraph className={sectionindex === i ? 'dropdown-sublink-section-h3 active-sublink-h3' : 'dropdown-sublink-section-h3'}>{item.name}</Paragraph>
                                                            </Box>
                                                        </Box>
                                                        {item.submenuChild && <SvgIcon className={sectionindex === i ? "dropdown-sublink-section-svg active-svg" : "dropdown-sublink-section-svg"} name={sectionindex === i ? 'down-arrow' : 'right-arrow'} height={10} width={10} color={'var(--text-grey)'} />}
                                                    </Box>
                                                    {
                                                        sectionindex === i &&
                                                        <Box>
                                                            {
                                                                item.submenuChild.map((items, i) => (
                                                                    <Box key={`sub_child_${i}`} onClick={() => handleClickOnLink(items.redirect)} sx={{
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <Box className="dropdown-sublink-menu-section">
                                                                            <Box className="dropdown-sublink-menu">
                                                                                <Paragraph>{items.name}</Paragraph>
                                                                            </Box>
                                                                            <SvgIcon name={'header-navigation'} height={15} width={15} color={'var(--text-grey)'} />
                                                                        </Box>
                                                                    </Box>
                                                                ))
                                                            }
                                                        </Box>
                                                    }
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                }
                            </Box>
                        ))
                    }
                </Box>
                <Box className="privacy-section">
                    <Linker href={"/privacy_policy"} onClick={() => handleClickOnLink(page.redirect)}>
                        <Paragraph>{headerText.privacy}</Paragraph>
                    </Linker>
                    <Paragraph>{headerText.copywrite}</Paragraph>
                </Box>
            </Box>
        </Box >
    )
}

export default MobileDropDownMenu
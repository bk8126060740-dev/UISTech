import SvgIcon from '@/assests/icons/SvgIcon'
import { Socialmedia } from '@/common/commonSocialMedia'
import { Box, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import Linker from '../Linker'
import './SocialMediaSidebar.css'


const SocialMediaSidebar = () => {
    const mobile = useMediaQuery('(max-width:899px)');
    const [active, setActive] = useState(false)

    const handleActiveSideBar = () => {
        setActive(!active)
    }

    return (
        <Box className={`social-media-sidebar ${mobile && active ? 'active' : ''}`} onClick={handleActiveSideBar}>
            {
                mobile &&
                <Box className='icon-close'>
                    {
                        active ?
                            <SvgIcon name={'close'} onClick={handleActiveSideBar} className='close_icon' />
                            :
                            <SvgIcon name={'show-media'} onClick={handleActiveSideBar} />
                    }
                </Box>
            }
            {
                Socialmedia.length > 0 && Socialmedia.map((media, i) => {
                    return (
                        <Box className={`social-media-icon ${active ? 'activeIcon' : 'icon-none'}`} key={i}>
                            <Linker href={media.redirect} target='_blank'>
                                <Image src={media.image} alt='social-media' priority />
                            </Linker>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default SocialMediaSidebar
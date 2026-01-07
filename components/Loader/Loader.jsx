import { Box } from '@mui/material'
import Image from 'next/image'
import UISPL_LOGO from '../../assests/images/UIS_LOGO_mini.png'
import './Loader.css'

const Loader = () => {
    return (
        <>
            <Box className="loader">
            </Box>
            <Box className='loader_img'>
                <Image src={UISPL_LOGO} alt='loader' priority/>
            </Box>
        </>
    )
}

export default Loader
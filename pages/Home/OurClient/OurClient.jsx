import { commonText } from "@/common/commonText"
import { SubHeading } from "@/components/commonUiComponents/commonUiComponents"
import Linker from "@/components/Linker"
import { Box } from "@mui/material"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import './OurClient.css'

const ourClient = [
    {
        logo: require('../../../assests/images/client-logo-image/client1.png'),
        redirect: ''
    },
    {
        logo: require('../../../assests/images/client-logo-image/client2.png'),
        redirect: ''
    },
    {
        logo: require('../../../assests/images/client-logo-image/client3.png'),
        redirect: ''
    },
    {
        logo: require('../../../assests/images/client-logo-image/client4.png'),
        redirect: ''
    },
    {
        logo: require('../../../assests/images/client-logo-image/client5.png'),
        redirect: ''
    },
    {
        logo: require('../../../assests/images/client-logo-image/client6.png'),
        redirect: ''
    },
    {
        logo: require('../../../assests/images/client-logo-image/client7.png'),
        redirect: ''
    },
    {
        logo: require('../../../assests/images/client-logo-image/client8.png'),
        redirect: ''
    },
    {
        logo: require('../../../assests/images/client-logo-image/client9.png'),
        redirect: ''
    },
    {
        logo: require('../../../assests/images/client-logo-image/client10.png'),
        redirect: ''
    },
    {
        logo: require('../../../assests/images/client-logo-image/client11.png'),
        redirect: ''
    },
]

const OurClient = () => {
    return (
        <Box className='our-clients'>
            <SubHeading>{commonText?.ourClient}</SubHeading>
            <Marquee speed={50} pauseOnHover={true} gradient={false}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: '15px', sm: '50px' },
                        padding: { xs: '10px', sm: '20px' },
                    }}
                    className='wrapper'
                >
                    {ourClient.map((item, i) => (
                        <Box className='client-logo-box' key={i} sx={{ flexShrink: 0 }}>
                            <Linker href={item.redirect}>
                                <Image
                                    src={item.logo}
                                    alt='client company logo'
                                    width={120}
                                    height={60}
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </Linker>
                        </Box>
                    ))}
                </Box>
            </Marquee>
            <Marquee speed={50} pauseOnHover={true} gradient={false} direction="right">
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: '15px', sm: '50px' },
                        padding: { xs: '10px', sm: '12px' },
                    }}

                    className='wrapper'
                >
                    {ourClient.map((item, i) => (
                        <Box className='client-logo-box' key={i} sx={{ flexShrink: 0 }}>
                            <Linker href={item.redirect}>
                                <Image
                                    src={item.logo}
                                    alt='client company logo'
                                    width={120}
                                    height={60}
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </Linker>
                        </Box>
                    ))}
                </Box>
            </Marquee>
        </Box>
    )
}

export default OurClient
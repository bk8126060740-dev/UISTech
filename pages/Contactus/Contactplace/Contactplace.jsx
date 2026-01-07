'use client'
import SvgIcon from '@/assests/icons/SvgIcon'
import { ContainedSpace, Paragraph, SubHeading, SubHeading5, SubHeading6 } from '@/components/commonUiComponents/commonUiComponents'
import { Box, Container, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import mapImage from '../../../assests/images/mapimage.png'
import './Contactplace.css'

const location_details = [
    {
        image: require('../../../assests/images/locations/delhi.png'),
        state: 'DELHI',
        location: 'A-44, 3rd Floor, Connaught Place, Delhi -110001',
        color: '#00AFFF',
        shadowColor: 'rgba(0, 175, 255, 0.09)'
    },
    {
        image: require('../../../assests/images/locations/banglore.png'),
        state: 'BENGALURU',
        location: 'No.112, AKR Tech Park, "A" Block, 7th Mile Hosur Rd, Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068',
        color: '#8CCA01',
        shadowColor: 'rgba(140, 202, 1, 0.09)'
    },
    {
        image: require('../../../assests/images/locations/bhopal.png'),
        state: 'BHOPAL',
        location: 'Cabin No. 202, H.No. 45, Sharma Tower, Rachna Nagar, Bhopal-462023(M.P.)',
        color: '#FEB000',
        shadowColor: 'rgba(254, 176, 0, 0.09)'
    },
    {
        image: require('../../../assests/images/locations/nagapur.png'),
        state: 'NAGPUR',
        location: '202, Pise Complex, Second Floor , 27, Great Nag Road, Near Dhantoli Railway , Over Bridge, Nagpur (Municipal Corporation.), Nagpur (Urban), Nagpur, 440003    ',
        color: '#FF456B',
        shadowColor: 'rgba(255, 69, 107, 0.09)'
    },
]

const LocationBox = ({ image, state, location, color, shadowColor }) => {
    const [hover, setHover] = useState(false)
    const mobile = useMediaQuery('(max-width:1140px)')

    return (
        <Box className='location-box' sx={{
            boxShadow: hover || mobile ? `-5px 5px 20px 0px ${shadowColor}` : '-5px 5px 20px 0px rgba(0, 0, 0, 0.1)',
        }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Box className='location_image' sx={{ backgroundColor: 'var(--text-white)' }}>
                <Image src={image} alt='location' priority />
            </Box>
            <Box sx={{ width: '100%' }} className='boxSize'>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }} className='boxwrap'>
                    <SvgIcon name='location-fill' className='location-fill-icon' style={{ color: color }} />
                    <SubHeading6 sx={{ color: color }}>{state}</SubHeading6>
                </Box>
                <Box className='location-adress'>
                    <Paragraph>{location}</Paragraph>
                </Box>
            </Box>
        </Box>
    )
}
const Contactplace = () => {
    return (
        <Box className='contact-place'>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <Box className='contact_wrapper'>
                        <SubHeading>Our Presence</SubHeading>
                        <Box className='our-location'>
                            <Box className='image_box'>
                                <Image src={mapImage} alt='locate' priority />
                            </Box>
                            <Box className='location-abs'>
                                {
                                    location_details.length > 0 && location_details.map((item, i) => {
                                        return (
                                            <LocationBox
                                                key={i}
                                                image={item?.image}
                                                state={item?.state}
                                                location={item?.location}
                                                color={item?.color}
                                                shadowColor={item?.shadowColor}
                                            />

                                        )
                                    })
                                }
                            </Box>
                        </Box>
                        <Box className='upcoming_location'>
                            <SubHeading5>Current Offices :</SubHeading5>
                            <Paragraph>Delhi, Bengaluru, Patna, Bhopal</Paragraph>
                        </Box>
                        <Box className='upcoming_location'>
                            <SubHeading5>Upcoming Offices :</SubHeading5>
                            <Paragraph>Gurgaon, Lucknow, Mumbai, Hyderabad, Chennai, Kolkata</Paragraph>
                        </Box>
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default Contactplace
import { Box } from '@mui/material'
import Image from 'next/image'
import './CertificationSideBar.css'

const ISOCertificate = [
    { image: require('../../assests/images/iso-certificate/Certificazione-ISO-27001.png') },
    { image: require('../../assests/images/iso-certificate/iso 9001_2015.png') },
    { image: require('../../assests/images/iso-certificate/ISO-45001-Logo.png') },
    { image: require('../../assests/images/iso-certificate/SA8000_2014.png') },
    { image: require('../../assests/images/iso-certificate/Certificate.jpeg') },
]
const CertificationSideBar = () => {
    return (
        <Box className='certificate-sidebar'>
            {
                ISOCertificate.length > 0 && ISOCertificate.map((certificate, i) => {
                    return (
                        <Box className='certificate-icon' key={i}>
                            <Image src={certificate.image} alt='certificate' priority/>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default CertificationSideBar
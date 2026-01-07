'use client'
import { isBrowser, smoothScroller } from "@/common/commonfunction";
import { commonText } from "@/common/commonText";
import { SubHeading } from "@/components/commonUiComponents/commonUiComponents";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Certifications.css';


const ISOCertificate = [
    {image:require('../../../assests/images/iso-certificate/Certificazione-ISO-27001.png')},
    {image:require('../../../assests/images/iso-certificate/iso 9001_2015.png')},
    {image:require('../../../assests/images/iso-certificate/ISO-45001-Logo.png')},
    {image:require('../../../assests/images/iso-certificate/SA8000_2014.png')},
    {image: require('../../../assests/images/iso-certificate/Certificate.jpeg')},
]
const Certifications = () => {

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        swipeToSlide: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        className: "slider variable-width center",
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 769,
                settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true },
            },
        ],
        autoplay: true
    };

    const params = useParams()

    useEffect(() => {
        if (isBrowser) { 
            const hash = window.location.hash
            if (hash === '#ISOCertificate') {
                smoothScroller('ISOCertificate',100)
            }
        }
    },[params])

    return (
        <Box className='certifications' id='ISOCertificate'>
            <Container maxWidth={'xl'}>
                <SubHeading>{commonText?.certifications}</SubHeading>
                <Box className="slider-container">
                    <Slider {...settings}>
                    {ISOCertificate.length > 0 && ISOCertificate.map((iso, index) => (
                        <Box key={index} className='imageBox'>
                            <Image src={iso?.image} alt='iso certificate' priority/>
                        </Box>
                    ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    )
}

export default Certifications

'use client'
import SvgIcon from "@/assests/icons/SvgIcon";
import { Teammember } from "@/common/commonText";
import Linker from "@/components/Linker";
import { ContainedSpace, SubHeading, SubHeading6 } from "@/components/commonUiComponents/commonUiComponents";
import { Box, Container } from "@mui/material";
import Image from 'next/image';
import Slider from "react-slick/lib/slider";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Ourteam.css';

const SocialButton = ({ name, className }) => {
    return (
        <Box className={className}>
            <SvgIcon name={name} />
        </Box>
    )
}

const SlideBtn = (name) => {
    return (
        <Box className={name.className} onClick={name.onClick} aria-label={name.name} >
            <SvgIcon name={name.name} />
        </Box>
    )
}

const Ourteam = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        prevArrow: <SlideBtn name='left-arrow' className="slick-prev" />,
        nextArrow: <SlideBtn name='right-arrow' className="slick-next" />,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <Box sx={{
            backgroundColor: 'var(--bg-lightwhite)',
            overflow: 'hidden'
        }} className='our-team-main'>
            <Box className='ourteam-Text'>
                <SubHeading>{Teammember.ourteam}</SubHeading>
            </Box>
            <Container maxWidth={'xl'}>
                <ContainedSpace>
                    <Slider {...settings}>
                        {Teammember.teammember.map((item) => (
                            <Box className='member-details' key={item.name}>
                                <Box className='member-photo'>
                                    <Image src={item.img} alt='team member' priority width={500} height={500} />
                                    <Box className="member-name">
                                        <SubHeading6>{item.name}</SubHeading6>
                                    </Box>
                                </Box>
                                <Box className='member-media'>
                                    {/* <Linker href={"https://www.facebook.com/uistechpvtltd"} target="_blank">
                                        <SocialButton name={'facebook-fill'} className={'social_icon'} />
                                    </Linker>
                                    <Linker href={"https://www.instagram.com/uis_pvt_ltd/"} target="_blank">
                                        <SocialButton name={'instagram-fill'} className={'social_icon'} />
                                    </Linker>
                                    <Linker href={"https://x.com/i/flow/login?redirect_after_login=%2FUrmilaInternat2"} target="_blank">
                                        <SocialButton name={'twitter-fill'} className={'social_icon'} />
                                    </Linker> */}
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default Ourteam
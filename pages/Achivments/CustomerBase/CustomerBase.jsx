'use client'
import SvgIcon from "@/assests/icons/SvgIcon";
import { ContainedSpace, Paragraph, SubHeading, SubHeading6 } from "@/components/commonUiComponents/commonUiComponents";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './CustomerBase.css';

const review = [
    {
        thumb: require('../../../assests/images/profile_thumb.jpeg'),
        name: 'Zephyrine',
        // companyname: 'Company',
        rating: 5,
        review: 'Urmila International Services offers exceptional service—efficient, reliable, and professional. Their team ensures seamless international solutions. Highly recommend for anyone seeking top-tier support and smooth transactions!'
    },
    {
        thumb: require('../../../assests/images/profile_thumb.jpeg'),
        name: 'Aadhav',
        // companyname: 'Company1',
        rating: 4,
        review: 'Fantastic experience with Urmila International Services! Fast, reliable, and professional support. They make international transactions easy and hassle-free. Highly recommend for anyone needing efficient global solutions.'
    },
]


const SwiperSlider = () => {
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            grid={{
                rows: 1,
                fill: 'row',
            }}
            className="customer_base"
            pagination={true}
            modules={[Pagination]}
        >
            {
                review.length > 0 && review.map((item, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Box className='tesimonial_card'>
                                <Box className='wrapper'>
                                    <Box className='profile_wrapper'>
                                        <Box className='profile_thumb'>
                                            <Image src={item?.thumb} alt="profile" />
                                        </Box>
                                        <Box className='profile_details'>
                                            <Typography variant="h5">{item?.name}</Typography>
                                            <Typography variant="body2">{item?.companyname}</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='rating'>
                                        {
                                            Array(item?.rating || 5).fill('').map((_, i) => {
                                                return (
                                                    <SvgIcon key={i} name={'star-fill'} />
                                                )
                                            })
                                        }
                                    </Box>
                                </Box>
                                <Typography variant="body2" className="review">{item?.review}</Typography>
                            </Box>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}


const CustomerBase = () => {
    const sm = useMediaQuery('(max-width:576px)')
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePagination = (direction) => {
        const totalPages = review.length;
        let newIndex = activeIndex;

        if (direction === 'right' && activeIndex === totalPages - 1) {
            newIndex = 0
        } else if (direction === 'right' && activeIndex < totalPages - 1) {
            newIndex = activeIndex + 1;
        } else if (direction === 'left' && activeIndex === 0) {
            newIndex = totalPages - 1
        } else if (direction === 'left' && activeIndex > 0) {
            newIndex = activeIndex - 1;
        }
        setActiveIndex(newIndex);
    }

    return (
        <Box className='customerBase_testimonial'>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <SubHeading>Customer Base</SubHeading>
                    <Paragraph>100+ clients cutting across Government and Corporate sector in various LOB- EnU, Health, BFSI, Retail and Manufacturing.</Paragraph>
                    {
                        sm ?
                            <SwiperSlider />
                            :
                            <Box className='main-wrapper'>
                                <SvgIcon name='left-arrow' onClick={() => handlePagination('left')} className={'clickArrowd'} />
                                {
                                    review.length > 0 && review.map((item, i) => {
                                        if (activeIndex === i) {
                                            return (
                                                <Box className='tesimonial_card' key={i}>
                                                    <Box className='wrapper'>
                                                        <Box className='profile_wrapper'>
                                                            <Box className='profile_thumb'>
                                                                <Image src={item?.thumb} alt="profile" />
                                                            </Box>
                                                            <Box className='profile_details'>
                                                                <SubHeading6>{item?.name}</SubHeading6>
                                                                <Paragraph>{item?.companyname}</Paragraph>
                                                            </Box>
                                                        </Box>
                                                        <Box className='rating'>
                                                            {
                                                                Array(item?.rating || 5).fill('').map((_, i) => {
                                                                    return (
                                                                        <SvgIcon key={i} name={'star-fill'} />
                                                                    )
                                                                })
                                                            }
                                                        </Box>
                                                    </Box>
                                                    <Paragraph className="review">{item?.review}</Paragraph>
                                                </Box>
                                            )
                                        }
                                    })
                                }
                                <SvgIcon name='right-arrow' onClick={() => handlePagination('right')} className={'clickArrowd'} />
                            </Box>
                    }
                </ContainedSpace>
            </Container>
        </Box >
    )
}

export default CustomerBase;
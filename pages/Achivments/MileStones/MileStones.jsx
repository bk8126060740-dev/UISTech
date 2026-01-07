'use client'
import SvgIcon from '@/assests/icons/SvgIcon';
import { isBrowser, smoothScroller } from '@/common/commonfunction';
import { commonText } from '@/common/commonText';
import { ContainedSpace, Paragraph, SubHeading, SubHeading5 } from '@/components/commonUiComponents/commonUiComponents';
import { Box, Container } from '@mui/material';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './MileStones.css';

const milestoneDetails = [
    {
        icon: 'data-entry',
        year: '2004',
        title: 'Data Entry for BPL',
        desciption: 'Data Entry of citizen credentials across various district of Bihar',
        list: []
    },
    {
        icon: 'secc',
        year: '2008',
        title: 'Secc',
        desciption: 'Surveyor & Data Record Entry',
        list: []
    },
    {
        icon: 'beltron',
        year: '2014',
        title: 'Beltron',
        desciption: '3500 DEOs Deployment',
        list: []
    },
    {
        icon: 'saksham',
        year: '2016',
        title: 'Saksham',
        desciption: 'Technical Manpower',
        list: []
    },
    {
        icon: 'railway',
        year: '2018',
        title: 'Railways',
        desciption: 'High Skilled Manpower',
        list: []
    },
    {
        icon: 'shs',
        year: '2020',
        title: 'Shs',
        desciption: 'Paramedics & General Staff',
        list: []
    },
]


const MileStonesCard = ({ data, index }) => {

    return (
        <Box className='MilstoneCard'>
            <SubHeading>{index < 10 ? '0' + index : index}</SubHeading>
            <Box className='child_card'>
                <Box>
                    <SvgIcon name={data.icon} />
                </Box>
                <SubHeading5>{data.title}</SubHeading5>
                <SubHeading5>{data.year}</SubHeading5>
                <Paragraph>{data.desciption}</Paragraph>
                <Box>
                    {data?.list.length > 0 && data?.list.map((list, i) => {
                        return (
                            <Box className='list' key={i}>
                                <Box className='dot'></Box>
                                <Paragraph>{list}</Paragraph>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

const MileStones = () => {

    const params = useParams()

    useEffect(() => {
        if (isBrowser) {
            const hash = window.location.hash
            if (hash === "#companyJorney") {
                smoothScroller('companyJorney', 130)
            }
        }
    }, [params])

    return (
        <Box className='milestone-main' id='companyJorney'>
            <Container maxWidth='xl' className='milestone-main-container'>
                <SubHeading>{commonText?.milestones}</SubHeading>
                <ContainedSpace>
                    <Box className="milestone-swiper-slider">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={50}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 100,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            pagination={false}
                            modules={[Pagination, Navigation, Autoplay]}
                        >
                            {
                                milestoneDetails.length > 0 && milestoneDetails.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <MileStonesCard data={item} index={i + 1} />
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                    </Box>

                    <Box className="milestone-mobile-card">
                        {
                            milestoneDetails.length > 0 && milestoneDetails.map((item, i) => {
                                return (
                                    <Box className='mileStoneMobileCard'>
                                        <MileStonesCard data={item} index={i + 1} key={i} />
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </ContainedSpace>

            </Container>
        </Box>
    )
}

export default MileStones
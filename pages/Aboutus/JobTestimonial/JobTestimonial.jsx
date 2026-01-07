'use client'
import SvgIcon from '@/assests/icons/SvgIcon'
import { ContainedSpace, Paragraph, SubHeading, SubHeading4 } from '@/components/commonUiComponents/commonUiComponents'
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import './JobTestimonial.css'


const testData = [
    {
        thumnail: require('../../../assests/images/jobTestimonial/testimonial1.jpeg'),
        name: 'Kishore',
        comment: 'I am eternally grateful for Uistech for steering my career in the right direction. I have seen great amounts of personal growth within myself after getting job. Right directions and right mindsets are important and i have learnt both at this company.',
    },
    {
        thumnail: require('../../../assests/images/jobTestimonial/testimonial2.jpeg'),
        name: 'Arun',
        comment: 'Being a skilled student it was important for me to take a step in the right direction for my first job. My very first attempt post signing up on urmila I got job. The experience so far has been life changing in many ways and im thankful for being in such a good position.',
    },
    {
        thumnail: require('../../../assests/images/jobTestimonial/testimonial3.jpeg'),
        name: 'Raj',
        comment: 'A major concern for me used to be my confidence on how to tackle situations within an corporate organization. Upon my joining of the organization i saw personal growth in the right direction that speared me to have a confident mind and skill set,both which are important to stand out in the industry.',
    },
]
const JobTestimonial = () => {
    const [activeIndex, setActiveindex] = useState(1)


    const handlePagination = (direction) => {
        let totalpages = testData.length
        let newIndex = activeIndex

        if (direction === 'right') {
            newIndex = activeIndex + 1 < totalpages ? activeIndex + 1 : 0;
        } else if (direction === 'left') {
            newIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : totalpages - 1;
        }
        setActiveindex(newIndex)
    }
    return (
        <Box className='job-testimonial'>
            <SubHeading>Testimonials</SubHeading>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <Box className='job-testimonial-wrapper'>
                        <SvgIcon name='left-arrow' onClick={() => handlePagination('left')} className='iconNone' />
                        <Box className='testmonial-card'>
                            <SubHeading4>{testData[activeIndex]?.name}</SubHeading4>
                            <Paragraph>{testData[activeIndex]?.comment}</Paragraph>
                            <Box className='thumbnail'>
                                <Box className='no-active-image'>
                                    <Image src={testData[(activeIndex - 1 + testData.length) % testData.length]?.thumnail} alt='thumb' onClick={() => handlePagination('left')} style={{ cursor: 'pointer' }} />
                                </Box>
                                <Box className='active-image'>
                                    <Image src={testData[activeIndex]?.thumnail} alt='thumb' />
                                </Box>
                                <Box className='no-active-image'>
                                    <Image src={testData[(activeIndex + 1) % testData.length]?.thumnail} alt='thumb' onClick={() => handlePagination('right')} style={{ cursor: 'pointer' }} />
                                </Box>
                            </Box>
                        </Box>
                        <SvgIcon name='right-arrow' onClick={() => handlePagination('right')} className='iconNone' />
                    </Box>
                    <Box className="mobile-icon-section">
                        <SvgIcon name='left-arrow' onClick={() => handlePagination('left')} className='mobileicon' />
                        <SvgIcon name='right-arrow' onClick={() => handlePagination('right')} className='mobileicon' />
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default JobTestimonial
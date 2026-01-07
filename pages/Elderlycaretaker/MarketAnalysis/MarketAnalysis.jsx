'use client'
import SvgIcon from '@/assests/icons/SvgIcon';
import { marketAnalysis } from '@/common/OurElderServiceAndAnalysis';
import { ContainedSpace, Paragraph, SubHeading, SubHeading5, SubHeading6 } from '@/components/commonUiComponents/commonUiComponents';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import './MarketAnalysis.css';


const CustomeAccodian = ({ data, openIndex, index , handleClick}) => {
    let isOpen = openIndex === index
    return (
        <Box className='accodian' sx={{
            borderBottom: isOpen ? '2px solid var(--text-primary)' : '2px solid var(--text-grey)',
        }} onClick={handleClick}>
            <Box className='accodian_header'>
                <SubHeading6 className={isOpen ? 'accodian_active':'accodian_deactive'}>{data?.title}</SubHeading6>
                <SvgIcon name={isOpen ? 'minus' : 'plus'} className={isOpen ? 'accodian_active':'accodian_deactive'}/>
            </Box>
            {isOpen && <Box className='accodian_content'>
                <Paragraph>{data?.describe}</Paragraph>
            </Box>}
        </Box>
    )
}
const MarketAnalysis = () => {
    const [openIndex, setOpenIndex] = useState(0)
   
    const handleOpen = (data, index) => {
        setOpenIndex(index)
    }
    return (
        <Box className='market_analysis'>
            <SubHeading>Market Analysis</SubHeading>
            <Container maxWidth="xl">
                <ContainedSpace>
                    <Box className='market_wrapper'>
                        <Box className='detail_part'>
                            <SubHeading5>
                                Comprehensive Insights: Market Size, Regional Dynamics, Technological Innovations, and Staffing Strategies
                            </SubHeading5>
                            {
                                marketAnalysis.length > 0 && marketAnalysis.map((item, i) => {
                                    return <CustomeAccodian
                                        data={item}
                                        index={i}
                                        key={i}
                                        openIndex={openIndex}
                                        handleClick={() => handleOpen(item, i)}
                                    />
                                })
                            }
                        </Box>
                        <Box className='image_part'>
                            <Image src={marketAnalysis[openIndex]['image']} alt='thubnail' priority/>
                        </Box>
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default MarketAnalysis
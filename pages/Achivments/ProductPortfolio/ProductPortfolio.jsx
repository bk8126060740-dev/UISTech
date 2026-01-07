'use client'
import SvgIcon from "@/assests/icons/SvgIcon"
import { Portfolio } from "@/common/commonProductPortfolio"
import { ContainedSpace, Paragraph, SubHeading, SubHeading5 } from "@/components/commonUiComponents/commonUiComponents"
import { Box, Container } from "@mui/material"
import Image from "next/image"
import { useEffect, useState } from "react"
import './ProductPortfolio.css'

const ProductPortfolio = () => {
    const [data, setData] = useState(Portfolio[0])
    const [chunkedPortfolio, setChunkedPortfolio] = useState([]);
    const [index, setIndex] = useState(0)
    let data_ = chunkedPortfolio.length > 0 && chunkedPortfolio[index]

    useEffect(() => {
        const newArray = [];
        for (let i = 0; i < Portfolio.length; i += 3) {
            newArray.push(Portfolio.slice(i, i + 3));
        }
        setChunkedPortfolio(newArray);

    }, [])

    const handleshowData = (item) => {
        setData(item)
    }

    const handlePagination = (direction) => {
        const totalPages = chunkedPortfolio.length;
        let newIndex = index;
        let opendata = chunkedPortfolio[newIndex]

        if (direction === 'right' && index < totalPages - 1) {
            newIndex = index + 1;
            opendata = chunkedPortfolio[newIndex]
        } else if (direction === 'left' && index > 0) {
            newIndex = index - 1;
            opendata = chunkedPortfolio[newIndex]
        }
        if (opendata.length > 0) {
            setData(opendata[0])
        }
        setIndex(newIndex);
    }

    return (
        <Box className='product-portfolio'>
            <SubHeading>Product Portfolio</SubHeading>
            <Container max-width='xl' className="product-container">
                <ContainedSpace sx={{ position: 'relative' }}>
                    <Box className='portfolio-page'>
                        <SvgIcon name='left-arrow' onClick={() => handlePagination('left')} className={`xl-l-arrow ${index > 0 ? 'clickIt' : 'NotClickIt'}`} />
                        <Box className='port01'>
                            <SubHeading5>{data?.title}</SubHeading5>
                            <Box className='port02 mobile-desc'>
                                <Paragraph className="description">{data?.description}</Paragraph>
                            </Box>
                            <Box className='thumb_img'>
                                <Image src={data?.image} alt="thumbnail" priority />
                            </Box>
                        </Box>
                        <Box className='port02'>
                            <Paragraph className="big-screen-desc" variant="body2">{data?.description}</Paragraph>
                            {
                                data_ && data_.length > 0 && data_.map((item, i) => {
                                    let isOpen = item?.id === data?.id
                                    return (
                                        <Box className='portfolio-details-list' key={i} onMouseEnter={() => handleshowData(item)}>
                                            <Box className='vertical-line-section'>
                                                <Box className='vertical-line' sx={{ backgroundColor: isOpen ? 'var(--bg-primary)' : '#D9D9D9' }}></Box>
                                            </Box>
                                            <Box className='wrapper'>
                                                <Box className='icon'>
                                                    <SvgIcon name={item?.icon} style={{ color: isOpen ? 'var(--text-primary)' : 'var(--text-dark)' }} />
                                                </Box>
                                                <Box className='details'>
                                                    <Paragraph sx={{ color: isOpen ? 'var(--text-primary)!important' : 'var(--text-dark)' }}>{item?.subTitle}</Paragraph>
                                                    <Paragraph>{item?.subDecription}</Paragraph>
                                                </Box>
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                        <SvgIcon name='right-arrow' onClick={() => handlePagination('right')} className={`xl-r-arrow ${index < chunkedPortfolio.length - 1 ? 'clickIt' : 'NotClickIt'}`} />
                    </Box>
                    <Box className='left-right-arrow-box'>
                        <SvgIcon name='left-arrow' onClick={() => handlePagination('left')} />
                        <SvgIcon name='right-arrow' onClick={() => handlePagination('right')} />
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default ProductPortfolio
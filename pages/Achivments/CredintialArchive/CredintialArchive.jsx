'use client'
import SvgIcon from '@/assests/icons/SvgIcon'
import { archiveCreaditial } from '@/common/commonArchivmentCredintial'
import { ContainedSpace, Paragraph, SubHeading, SubHeading4, SubHeading5 } from '@/components/commonUiComponents/commonUiComponents'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Container, useMediaQuery } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import Image from 'next/image'
import { useState } from 'react'
import './CredintialArchive.css'

const DrawerOffcanvas = ({ open, data, handleClose }) => {
    let dataDetails = data?.details
    return (
        <Drawer open={open} onClose={handleClose} anchor={'right'}>
            <Box className='CloseIcon'>
                <CloseIcon onClick={handleClose} />
            </Box>
            <Box className="DetailsWithMore offcanvas">
                <SubHeading4>{data?.subheading}</SubHeading4>
                <SubHeading5>{data?.subheading}</SubHeading5>
                {dataDetails && dataDetails.map((detail, index) => (
                    <Paragraph key={index}>{detail}</Paragraph>
                ))}
                {data?.thumbnail && (
                    <Box className="thumb_image">
                        <Image src={data?.thumbnail} alt="Thumbnail" priority />
                    </Box>
                )}
            </Box>
        </Drawer>
    )
}



const CredintialArchive = () => {
    const tablet = useMediaQuery('(max-width:768px)')

    const [detailIndex, setDetailIndex] = useState(0)
    const [mainIndex, setMainIndex] = useState(0)

    const [openDrawer, setOpenDrawer] = useState(false)
    const [DrawerItem, setDrawerItem] = useState(null)

    const handleDetails = (parentIndex, index) => {
        setMainIndex(parentIndex)
        setDetailIndex(index)
    }

    const handleDrawerItem = (item) => {
        if (tablet) {
            setOpenDrawer(true)
            setDrawerItem(item)
        }
    }
    return (
        <Box className='creadintialArchive'>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    {archiveCreaditial.length > 0 && archiveCreaditial.map((item, i) => {
                        const { title, list } = item;
                        const currentItem = list[mainIndex === i ? detailIndex : 0];
                        const allDetails = currentItem?.details || [];
                        const IsActive = (mainIndex === i)
                        return (
                            <Box key={i} className='MainBox'>
                                <SubHeading>{title}</SubHeading>
                                <Box className="wrapperBox">
                                    <Box className="listOfDetails">
                                        {list.map((lst, i1) => (
                                            <SubHeading5
                                                key={i1}
                                                onMouseEnter={() => handleDetails(i, i1)}
                                                onClick={() => handleDrawerItem(lst)}
                                                className={IsActive && detailIndex === i1 ? 'activeP' : ""}
                                            >
                                                <SvgIcon name='menu-anchor-arrow' width={12} height={12} className={IsActive && detailIndex === i1 ? 'activeSpan' : ""} sx={{
                                                    color: 'var(--text-grey)',
                                                }} />
                                                {lst?.subheading}
                                            </SubHeading5>
                                        ))}
                                    </Box>
                                    <Box className="DetailsWithMore">
                                        <SubHeading5>{currentItem?.subheading}</SubHeading5>
                                        {allDetails.map((detail, index) => (
                                            <Paragraph key={index}> {detail}</Paragraph>
                                        ))}
                                        {currentItem?.thumbnail && (
                                            <Box className="thumb_image">
                                                <Image src={currentItem.thumbnail} alt="Thumbnail" priority />
                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </ContainedSpace>
            </Container>
            <DrawerOffcanvas open={openDrawer} data={DrawerItem} handleClose={() => setOpenDrawer(false)} />
        </Box>
    )
}

export default CredintialArchive
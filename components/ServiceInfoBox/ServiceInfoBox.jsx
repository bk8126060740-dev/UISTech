'use client'
import SvgIcon from '@/assests/icons/SvgIcon'
import { isBrowser, smoothScroller } from '@/common/commonfunction'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Paragraph, SubHeading, SubHeading6 } from '../commonUiComponents/commonUiComponents'
import './ServiceInfoBox.css'


const SEE_MORE = 'See Detail'

const DialogService = ({ open, handleClose, data }) => {
    const desk1 = useMediaQuery('(max-width:992px)');
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className='SeviceDialogBox'
            sx={{
                '.MuiPaper-root': {
                    maxWidth: desk1 ? '100%' : '50%',
                    width: '100%'
                }
            }}
        >
            <DialogTitle id="alert-dialog-title">
                {data?.title && data?.title}
            </DialogTitle>
            <DialogContent sx={{
                scrollbarColor: 'var(--text-primary) transparent'
            }}>
                {
                    data.data && data?.data.length > 0 && data.data.map((item, i) => {
                        return (
                            <Box key={i} className='serviceBoxContent'>
                                {item?.heading && <SubHeading6>{item?.heading}</SubHeading6>}
                                {item?.description && <Paragraph className='description'>{item?.description}</Paragraph>}
                                {item?.subdescription && <Paragraph className='description'>{item?.subdescription}</Paragraph>}
                                {item?.list_heading && <Paragraph className='list_heading'>{item?.list_heading}</Paragraph>}
                                {
                                    item?.list && item?.list.length > 0 && item?.list.map((lst, i) => {
                                        return (
                                            <Box className='list' key={i}>
                                                <Box>
                                                    <SvgIcon name='menu-anchor-arrow' />
                                                </Box>
                                                <Box>
                                                    <Paragraph dangerouslySetInnerHTML={{ __html: lst }} sx={{
                                                        'span': {
                                                            color: 'var(--text-primary)'
                                                        }
                                                    }}></Paragraph>
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                                {
                                    item?.stepslist && item?.stepslist.length > 0 && item?.stepslist.map((lst, i) => {
                                        return (
                                            <Box className='list' key={i}>
                                                <Box>
                                                    <SvgIcon name='menu-anchor-arrow' />
                                                </Box>
                                                <Box>
                                                    <Paragraph><span className='lst-title'>{lst.title}</span>{lst.info}</Paragraph>
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                                {item?.conclusion && <Typography variant='body2' className='description'>{item?.conclusion}</Typography>}
                            </Box>
                        )
                    })
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} className='close_dialog_btn'>close</Button>
            </DialogActions>
        </Dialog>
    )
}

const ServiceInfoBox = ({ data, index }) => {
    const sm = useMediaQuery('(max-width:768px)');
    const params = useParams()
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState([])
    const sectionOffsets = {
        house: 180,
        waste: 150,
        security: 170,
        warehouse_services: 150,
        housekeeping: 170,
        disinfection: 170,
        collection: 170,
        hospitality: 170,
        bio: 170,
        disposal: 170,
        fs: 150,
        ps: 150,
        it: 150,
        [`t-nt`]: 150,
        prs: 150
    };

    const handleClickOpen = (index, item) => {
        if (item) {
            setSelected(item)
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (isBrowser) {
            const hash = window.location.hash.slice(1);
            const offset = sectionOffsets[hash];

            if (offset !== undefined) {
                smoothScroller(hash, offset);
            }
        }
    }, [params])

    return (
        <Box className='info_box' id={data?.id} key={index}>
            {data?.title && <SubHeading>{data?.title}</SubHeading>}
            {
                data.data.length > 0 && data.data.map((item, i) => {
                    return (
                        <Box id={item?.id} key={i}>
                            {sm && item?.heading && data?.title !== 'Horticulture Services' && data?.title !== "" && <SubHeading6>{item?.heading}</SubHeading6>}
                            <Box className={`info_details ${data.id === "warehouse_services" ? "row" :
                                data.id === "waste" && i % 2 === 1 ? 'row' : (data.id === "waste" || data.id === "ps" || data.id === "t-nt") && i % 2 !== 1 ? 'row-reverse' :
                                    i % 2 ? 'row-reverse' : index && index % 2 ? 'row-reverse' : ''}`} key={i}>
                                {item?.image &&
                                    <Box className='image_box'>
                                        <Image src={item.image} alt='photo_image' quality={100} priority/>
                                    </Box>
                                }
                                <Box className='info_text'>
                                    {!sm && item?.heading && <SubHeading6>{item?.heading}</SubHeading6>}
                                    {sm && (data?.title === 'Horticulture Services' || data?.title === "") && item?.heading && <SubHeading6 className='horticulture_heading'>{item?.heading}</SubHeading6>}
                                    {data.id !== "horticulture_sub_services" ? item?.description && <Typography variant='body2' className='description'>{item?.description}</Typography> :
                                        <Paragraph className='horiculture-description'>{item?.description}</Paragraph>
                                    }
                                    {item?.subdescription && <Typography variant='body2' className='description'>{item?.subdescription}</Typography>}
                                    {item?.list_heading && <Paragraph variant='body2' className='list_heading'>{item?.list_heading}</Paragraph>}
                                    {
                                        item?.list && item?.list.length > 0 && item?.list.map((lst, i) => {
                                            if (i <= 3) {
                                                return (
                                                    <Box className='list' key={i}>
                                                        <Box>
                                                            <SvgIcon name='menu-anchor-arrow' />
                                                        </Box>
                                                        <Box>
                                                            <Paragraph dangerouslySetInnerHTML={{ __html: lst }}></Paragraph>
                                                        </Box>
                                                    </Box>
                                                )
                                            }
                                        })
                                    }
                                    {
                                        item?.stepslist && item?.stepslist.length > 0 && item?.stepslist.map((lst, i) => {
                                            if (i <= 3) {
                                                return (
                                                    <Box className='list' key={i}>
                                                        <Box>
                                                            <SvgIcon name='menu-anchor-arrow' />
                                                        </Box>
                                                        <Box>
                                                            <Paragraph><span className='lst-title'>{lst.title}</span>{lst.info}</Paragraph>
                                                        </Box>
                                                    </Box>
                                                )
                                            }
                                        })
                                    }
                                    {item?.conclusion && <Typography variant='body2' className='description'>{item?.conclusion}</Typography>}
                                    <Box className='blog_seemore'>
                                        <Typography variant='body2' onClick={() => handleClickOpen(i, data)}>
                                            {SEE_MORE}
                                            <SvgIcon name={'down-arrow'} />
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )
                })
            }
            <DialogService open={open} handleClose={handleClose} data={selected} />
        </Box>
    )
}

export default ServiceInfoBox
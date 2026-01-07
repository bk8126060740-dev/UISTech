'use client'
import SvgIcon from '@/assests/icons/SvgIcon'
import { isBrowser, smoothScroller } from '@/common/commonfunction'
import { Datadigitalization } from '@/common/commonServices'
import { Box, Container, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'
import './DataDigitalization.css'

import { ContainedSpace, Paragraph, SubHeading, SubHeading5, SubHeading6 } from '@/components/commonUiComponents/commonUiComponents'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slider from "react-slick"
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'


const SEE_MORE = 'See Detail'

const DialogBox = ({ open, handleClose, data = [] }) => {
    let dataStep = data?.steps ? data?.steps : data
    let title = data.length > 0 && data[0] !== undefined ? data[0]['Title'] : ''
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className='DialogBox'
            maxWidth='sm'
        >
            <DialogTitle id="alert-dialog-title">
                {(title || data.Title) && <Box className="details_svg">
                    {data.icon && <SvgIcon name={data.icon} height={70} width={70} />}
                    <SubHeading5>{title ? title : data.Title}</SubHeading5>
                </Box>}
            </DialogTitle>
            <DialogContent sx={{
                scrollbarColor: 'var(--text-primary) transparent'
            }}>
                <Box className='Box_details'>
                    {
                        dataStep.length > 0 && dataStep.map((items, i) => (
                            items.info && <Box key={i} className="details_step">
                                <Box>
                                    <SvgIcon name={"steps-arrow"} height={10} width={10} />
                                </Box>
                                <Paragraph>{items.info}</Paragraph>
                            </Box>
                        ))
                    }
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} className='close_dialog_btn'>close</Button>
            </DialogActions>
        </Dialog>
    )
}


const SeeMore = ({ handleClick }) => {
    return (
        <Box className='_seemore'>
            <Typography variant='body2' onClick={handleClick}>
                {SEE_MORE}
                <SvgIcon name={'down-arrow'} />
            </Typography>
        </Box>
    )
}


const DataDigitalization = () => {
    const carouselRef = useRef(null);
    const params = useParams()

    const [open, setOpen] = useState(false);
    const [dialogDetails, setDialogDetails] = useState([])

    const handleClickOpen = (item) => {
        setDialogDetails(item)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (isBrowser) {
            const hash = window.location.hash
            const final = hash ? hash.split('#')[1] : '';
            if (final) {
                const scrollTargetMap = {
                    "digilization": 180,
                    "hrm": 100,
                    "sad": 170,
                    "safeSecu": 100,
                };

                const offset = scrollTargetMap[final] || 170;
                smoothScroller(final, offset);
            }
        }
    }, [params])

    const settings = {
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '60px',
        focusOnSelect: true,
        slidesToShow: 1,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10%',
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '10%',
                },
            },
        ],
    };

    const Card = ({ Title, Info, Stepstitle, img, data }) => {
        return (
            <Box className="hrms-section">
                <Box className="hrms-title-section">
                    <SubHeading>{Title}</SubHeading>
                </Box>
                <Box className="hrms-card-section">
                    <Box className='card-image-main'>
                        <Image alt='card-info' src={img} priority />
                    </Box>
                    <Box className='card-detail-main'>
                        <Paragraph>{Info}</Paragraph>
                        <Box className="hrms-steps-title-section">
                            <Paragraph>{Stepstitle}</Paragraph>
                        </Box>
                        <Box>
                            {
                                data.length > 0 && data.map((item, i) => (
                                    i <= 3 && <Box key={i} className="hrms-steps-section">
                                        <Box>
                                            <SvgIcon name={"steps-arrow"} height={10} width={10} />
                                        </Box>
                                        <Paragraph>{item.info}</Paragraph>
                                    </Box>
                                ))
                            }
                        </Box>
                        {data.length > 4 && <SeeMore handleClick={() => handleClickOpen([{ Title }, ...data])} />}
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <Box className="dd-main-section">
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <Box id="digilization">
                        <Box className="dd-title-section">
                            <Typography variant='h2'>{Datadigitalization.title}</Typography>
                        </Box>

                        <Box className="dd-info-card-section">
                            <Box className="dd-info-image-section">
                                <Image src={Datadigitalization.image} height={430} width={480} alt='card-info' priority />
                            </Box>
                            <Box>
                                <Paragraph>{Datadigitalization.information}</Paragraph>
                            </Box>
                        </Box>

                        <Box className="dd-info-section">
                            <Box className="dd-left-info-section">
                                <SubHeading5>{Datadigitalization.DigitalizeServiceTitle}</SubHeading5>
                                {
                                    Datadigitalization.DigitalizeService.length > 0 && Datadigitalization.DigitalizeService.map((item, i) => (
                                        i <= 3 && <Box key={i} className="dd-steps-section">
                                            <Box>
                                                <SvgIcon name={"steps-arrow"} />
                                            </Box>
                                            <Paragraph>{item.info}</Paragraph>
                                        </Box>
                                    ))
                                }
                                {
                                    Datadigitalization.DigitalizeService.length > 4 &&
                                    <SeeMore handleClick={() => handleClickOpen([{ Title: Datadigitalization.DigitalizeServiceTitle }, ...Datadigitalization.DigitalizeService])} />
                                }
                            </Box>
                            <Box className="dd-info-divider-section">
                                <Divider className='dd-info-divider' />
                            </Box>
                            <Box className="dd-right-info-section">
                                <SubHeading5>{Datadigitalization.AnalyticsServiceTitle}</SubHeading5>
                                <Paragraph className='analytics-service-info'>{Datadigitalization.AnalyticsServiceInfo}</Paragraph>
                                <Paragraph className='steps-title-text'>{Datadigitalization.AnalyticsServiceStepsTitle}</Paragraph>
                                {
                                    Datadigitalization.AnalyticsService.length > 0 && Datadigitalization.AnalyticsService.map((item, i) => (
                                        i <= 3 && <Box key={i} className="dd-steps-section">
                                            <SvgIcon name={"steps-arrow"} />
                                            <Paragraph>{item.info}</Paragraph>
                                        </Box>
                                    ))
                                }
                                {
                                    Datadigitalization.AnalyticsService.length > 4 &&
                                    <SeeMore handleClick={() => handleClickOpen([{ Title: Datadigitalization.AnalyticsServiceTitle }, ...Datadigitalization.AnalyticsService])} />
                                }
                            </Box>
                        </Box>
                    </Box>

                    <Box id="hrm">
                        <Card Title={Datadigitalization.HrmsTitle} img={Datadigitalization.HrmsImage} Info={Datadigitalization.HrmsInfo}
                            Stepstitle={Datadigitalization.HrmsStepTitle} data={Datadigitalization.HrmsSteps} />
                    </Box>

                    <Box id="sad" className="dd-card-marque-section">
                        <Box className="dd-marque-card-img-section">
                            <Image src={Datadigitalization.ServiceTypeImage} width={780} height={650} alt='card-info' priority />
                            <Box className="dd-marque-card">
                                <Marquee
                                    autoFill={true}
                                    speed={100}
                                    pauseOnHover>
                                    {
                                        Datadigitalization.ServicesTypes.length > 0 && Datadigitalization.ServicesTypes.map((item, i) => (
                                            <Box key={i} className="dd-card-section" onClick={() => handleClickOpen(item)}>
                                                <Box className="dd-card-sub-section">
                                                    <SvgIcon name={item.icon} height={40} width={40} />
                                                    <Box>
                                                        <SubHeading6>{item.Title}</SubHeading6>
                                                    </Box>
                                                    <Box sx={{
                                                        height: '162px',
                                                        overflow: 'hidden'
                                                    }}>
                                                        {
                                                            item.steps.length > 0 && item.steps.map((items, i) => (
                                                                <Box key={i} className="dd-marque-card-steps">
                                                                    <Box>
                                                                        <SvgIcon name={"steps-arrow"} height={10} width={10} />
                                                                    </Box>
                                                                    <Paragraph>{items.info}</Paragraph>
                                                                </Box>
                                                            ))
                                                        }
                                                    </Box>
                                                    <Paragraph className='see_more'>{SEE_MORE}</Paragraph>
                                                </Box>
                                            </Box>
                                        ))
                                    }
                                </Marquee>
                            </Box>
                            <Box className="dd-mobile-card-section carouselSlide" ref={carouselRef}>
                                <Slider {...settings}>
                                    {Datadigitalization.ServicesTypes.length > 0 &&
                                        Datadigitalization.ServicesTypes.map((item, i) => (
                                            <Box key={i} className="dd-mobile-card">
                                                <Box className="dd-mobile-info-section" onClick={() => handleClickOpen(item)}>
                                                    <Box>
                                                        <SvgIcon name={item.icon} height={30} width={30} />
                                                    </Box>
                                                    <Box>
                                                        <SubHeading6>{item.Title}</SubHeading6>
                                                    </Box>
                                                    <Box>
                                                        {item.steps.length > 0 &&
                                                            item.steps.slice(0, 1).map((step, idx) => (
                                                                <Box key={idx} className="dd-mobile-card-steps">
                                                                    <Box>
                                                                        <SvgIcon name="steps-arrow" height={8} width={8} />
                                                                    </Box>
                                                                    <Paragraph>{step.info}</Paragraph>
                                                                </Box>
                                                            ))}
                                                    </Box>
                                                    <Paragraph className="see_more">
                                                        {SEE_MORE}
                                                    </Paragraph>
                                                </Box>
                                            </Box>
                                        ))}
                                </Slider>
                            </Box>
                        </Box>
                    </Box>
                    <Box id="safeSecu">
                        <Card Title={Datadigitalization.SecurityTitle} img={Datadigitalization.SecurityImage} Info={Datadigitalization.SecurityInfo}
                            Stepstitle={Datadigitalization.SecurityStepsTitle} data={Datadigitalization.SecuritySteps} />
                    </Box>
                </ContainedSpace>
            </Container>
            <DialogBox open={open} handleClose={handleClose} data={dialogDetails} />
        </Box>
    )
}

export default DataDigitalization
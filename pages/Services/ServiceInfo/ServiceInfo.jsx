'use client'
import SvgIcon from '@/assests/icons/SvgIcon'
import { isBrowser, smoothScroller } from '@/common/commonfunction'
import { healthcareCard } from '@/common/healthcareManagment'
import { houseKeepingService } from '@/common/houseKeppingService'
import { propertyMaintenanceCard } from '@/common/propertyMaintenance'
import { ContainedSpace, Paragraph, SubHeading, SubHeading5 } from '@/components/commonUiComponents/commonUiComponents'
import Linker from '@/components/Linker'
import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import './ServiceInfo.css'

const ServiceInfoBox = dynamic(() => import('@/components/ServiceInfoBox/ServiceInfoBox'))


const LearnMoreBtn = ({ href }) => {
    return (
        <Box className='learn-more-btn'>
            <Linker href={href}>
                <Paragraph>Learn More</Paragraph>
                <SvgIcon name={'right-arrow'} />
            </Linker>
        </Box>
    )
}

const ServiceInfoCard = ({ data, title }) => {
    const sm = useMediaQuery('(max-width:768px)')
    return (
        <Box className='card_main'>
            <SubHeading>{title}</SubHeading>
            <Box className='card-wrapper'>
                <Grid container spacing={3}>
                    {
                        data.length > 0 && data.map((item, i) => {
                            return (
                                <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={i}>
                                    <Box className='health-card'>
                                        <Image src={item?.image} alt='card-info' priority />
                                        <Box className='more_health_details'>
                                            <SubHeading5>{item?.title}</SubHeading5>
                                            <LearnMoreBtn href={item?.redirect} />
                                        </Box>
                                        {sm && <LearnMoreBtn href={item?.redirect} />}
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Box>
    )
}

const ServiceInfo = () => {
    const sm = useMediaQuery('(max-width:768px)')
    const params = useParams()

    useEffect(() => {
        if (isBrowser) {
            const hash = window.location.hash
            if (hash === "#health-care") {
                smoothScroller('health-care', 150)
            } else if (hash === "#propertyMaintenance") {
                smoothScroller('propertyMaintenance', 250)
            }
        }
    }, [params])

    return (
        <Box className='service_info_main'>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    {
                        houseKeepingService.length > 0 && houseKeepingService.map((item, i) => {
                            return (
                                <ServiceInfoBox key={i} data={item} />
                            )
                        })
                    }
                    <Box id='health-care'>
                        <ServiceInfoCard data={healthcareCard} title={"Healthcare Management"} />
                    </Box>

                    <Box id='propertyMaintenance'>
                        <ServiceInfoCard data={propertyMaintenanceCard} title={"Property Maintenance"} />
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default ServiceInfo
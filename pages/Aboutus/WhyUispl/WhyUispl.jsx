'use client'
import SvgIcon from "@/assests/icons/SvgIcon"
import { WHYUISPL } from "@/common/commonAboutus"
import { isBrowser, smoothScroller } from "@/common/commonfunction"
import { commonText } from "@/common/commonText"
import { ContainedSpace, Paragraph, SubHeading } from "@/components/commonUiComponents/commonUiComponents"
import { Box, Container, Grid, Paper } from "@mui/material"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import './WhyUispl.css'


const CardBox = ({ icon, title, description }) => {
    return (
        <Paper height="100%" sx={{
            boxShadow: 'none'
        }} elevation={3} className='cardBox'>
            <Box className='textTitle'>
                <Box className='title'>
                    <SvgIcon name={icon} />
                    <Paragraph>{title}</Paragraph>
                </Box>
            </Box>
            <Paragraph>{description}</Paragraph>
        </Paper>
    )
}
const WhyUispl = () => {
    const params = useParams()

    useEffect(() => {
        if (isBrowser) {
            const hash = window.location.hash
            if (hash === '#whyUISPL') {
                smoothScroller('whyUISPL', 130)
            }
        }
    }, [params])

    return (
        <Box className='why-uispl' id='whyUISPL'>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <SubHeading>{commonText?.Whyuispl}</SubHeading>
                    <Grid container spacing={{ xs: 3, md: 3, xl: 4, lg: 3 }} height="100%">
                        {
                            WHYUISPL.length > 0 && WHYUISPL.map((item, i) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={i} height="100%">
                                        <CardBox
                                            icon={item?.icon}
                                            title={item?.title}
                                            description={item?.describe}
                                        />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default WhyUispl
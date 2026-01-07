'use client'
import SvgIcon from "@/assests/icons/SvgIcon"
import { ContainedSpace, SubHeading, SubHeading5, SubHeading6 } from "@/components/commonUiComponents/commonUiComponents"
import { Box, Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import './ArchivmentCount.css'

const couterDetails = [
    {
        icon: 'founded-on',
        title: 'Founded on',
        count: '2004',
        up: ''
    },
    {
        icon: 'net-worth',
        title: 'Net Worth',
        count: '40',
        up: ' Cr'
    },
    {
        icon: 'resources',
        title: 'Resources',
        count: '37000',
        up: ''
    },
    {
        icon: 'revenue',
        title: 'Annual Revenue',
        count: '720',
        up: ' Cr'
    },
]

const CardCouter = ({ icon, title, count, up }) => {
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        const result = setInterval(() => {
            setCounter((prevCount) => {
                if (prevCount < count) {
                    return prevCount + (count / 2);
                }
                clearInterval(result);
                return prevCount;
            });
        }, 0);
        return () => clearInterval(result);
    }, [count]);

    return (
        <Box className='card-counter-section'>
            <Box className='card-counter'>
                <Box className='topLine'></Box>
                <SvgIcon name={icon} />
                <SubHeading6>{title}</SubHeading6>
                <SubHeading5>{counter} {up && up} +</SubHeading5>
            </Box>
        </Box>
    )
}

const ArchivmentCount = () => {
    return (
        <Box className='archivmentCounter'>
            <SubHeading>Company Overview</SubHeading>
            <Container maxWidth='xl' >
                <ContainedSpace>
                    <Grid container spacing={{ xl: 4, xs: 3 }} sx={{
                        justifyContent: 'center'
                    }}>
                        {couterDetails.length > 0 && couterDetails.map((item, i) => {
                            return (
                                <Grid item xl={3} lg={3} md={3} sm={6} xs={12} key={i}>
                                    <CardCouter
                                        key={i}
                                        icon={item?.icon}
                                        title={item?.title}
                                        count={item?.count}
                                        up={item?.up}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default ArchivmentCount
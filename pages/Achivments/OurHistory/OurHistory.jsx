import SvgIcon from '@/assests/icons/SvgIcon'
import { ContainedSpace, Paragraph, SubHeading, SubHeading6 } from '@/components/commonUiComponents/commonUiComponents'
import { Box, Container, Grid } from '@mui/material'
import './historyStyle.css'

const historyCard = [
    {
        icon: 'data-entry2',
        title: 'Data Entry for Below Poverty Line',
        description: 'Data Entry of citizen credentials across various district of Bihar'
    },
    {
        icon: 'data-digilize',
        title: 'Digitization of Data for Election Commission',
        description: 'Data Digitization for citizens of Bihar spread across different districts of Bihar'
    },
    {
        icon: 'aadhar-seeding',
        title: 'Nrega : e Shakti',
        description: 'AADHAR seeding in Ration Card'
    },
    {
        icon: 'aadhar-enroll',
        title: 'Aadhar Enrollment',
        description: 'AADHAR EC setup and generation  at EC'
    },
    {
        icon: 'consumer',
        title: 'Food & Consumer Protection',
        description: 'AADHAR seeding in Ration Card'
    },

]
const OurHistory = () => {
    return (
        <Box className='our-history'>
            <SubHeading>Our History</SubHeading>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <Box className='history-wrapper'>
                        <Grid container spacing={3} className='history-grid'>
                            {
                                historyCard.length > 0 && historyCard.map((item, i) => {
                                    return (
                                        <Grid item xl={4} lg={4} md={6} xs={12} sm={6} key={i} className='grid-containeer'>
                                            <Box className='historyCard'>
                                                <Box className='card-icon'>
                                                    <SvgIcon name={item?.icon} />
                                                </Box>
                                                <SubHeading6>{item?.title}</SubHeading6>
                                                <Paragraph>{item?.description}</Paragraph>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default OurHistory
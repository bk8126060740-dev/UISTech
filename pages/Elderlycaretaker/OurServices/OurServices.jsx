import SvgIcon from '@/assests/icons/SvgIcon';
import { ourServices } from '@/common/OurElderServiceAndAnalysis';
import { ContainedSpace, Paragraph, SubHeading, SubHeading6 } from '@/components/commonUiComponents/commonUiComponents';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import './OurServices.css';

const OurServices = () => {
    return (
        <Box className="our_services">
            <SubHeading>Our Services</SubHeading>
            <Container maxWidth="xl">
                <ContainedSpace>
                    <Box className='wrapper_services'>
                        {
                            ourServices.length > 0 && ourServices.map((item, i) => {
                                return (
                                    <Box className='our_service_card' key={i}>
                                        <Box className='services_img'>
                                            <Image src={item?.image} alt='services' />
                                        </Box>
                                        <Box className='services_Details'>
                                            <Box>
                                                <SubHeading6>{item?.title}</SubHeading6>
                                                <Paragraph>{item?.describe}</Paragraph>
                                            </Box>
                                            {/* <Box className='learn_more_btn'>
                                                <Paragraph>Learn More</Paragraph>
                                                <SvgIcon name={'keyboard-right'}/>
                                            </Box> */}
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default OurServices
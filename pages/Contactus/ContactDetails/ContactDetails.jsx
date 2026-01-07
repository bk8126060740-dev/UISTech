'use client'
import SvgIcon from '@/assests/icons/SvgIcon'
import { ContainedSpace, Paragraph, SubHeading6 } from '@/components/commonUiComponents/commonUiComponents'
import Linker from '@/components/Linker'
import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import ContactForm from '../ContactForm/ContactForm'
import './ContactDetails.css'

const contactDetails = [
    {
        icon: 'location-fill',
        title: 'Head Office',
        detail: '1st Floor, New Incubation Building, Software Technology Parks of India,Rajeev Nagar Road, Patliputra Colony, Patna- 800013',
        redirect: 'https://maps.app.goo.gl/zBJgHZU2Ze5Yh2vf9'
    },
    {
        icon: 'mail',
        title: 'Email Us',
        detail: 'info@uistech.in',
        redirect: 'mailto:info@uistech.in'
    },
    {
        icon: 'call',
        title: 'Call Us',
        detail: '0612-2540193',
        redirect: 'tel:0612-2540193'
    },
    {
        icon: 'whatsapp',
        title: 'Whatsapp',
        detail: '9153913748',
        redirect: 'https://api.whatsapp.com/send?phone=9153913748'
    },
]
const ContactDetails = () => {
    const sm = useMediaQuery("(max-width:768px)");
    return (
        <>
            <Box className='contact_details'>
                <Container maxWidth='xl'>
                    <ContainedSpace>
                        <Grid container spacing={3}>
                            {contactDetails.length > 0 && contactDetails.map((v, i) => {
                                return (
                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={9.7} key={i}>
                                        <Linker href={v?.redirect} target='_blank'>
                                            <Box className='contact_box'>
                                                <SvgIcon name={v?.icon} />
                                                <SubHeading6>{v?.title}</SubHeading6>
                                                <Paragraph>{v?.detail}</Paragraph>
                                                <SvgIcon name={'right-line-arrow'} className='show-arrow' />
                                            </Box>
                                        </Linker>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </ContainedSpace>
                </Container>
            </Box>
            <Box className='map_contactus_main'>
                <Container maxWidth='xl'>
                    <ContainedSpace>
                        <Box className='map_contact_wrapper'>
                            <Box className='map_area'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7194.540672644253!2d85.0973506!3d25.6291518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed582524b19a6d%3A0x33a3cdd3f2c21a32!2sUrmila%20International%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1727933767315!5m2!1sen!2sin"
                                    width={'200%'}
                                    height={sm ? 250 : '130%'}
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </Box>
                            {/* <Box className='contactform'>
                                <ContactForm formtype={"contactus"} />
                            </Box> */}
                        </Box>
                    </ContainedSpace>
                </Container>
            </Box>
        </>
    )
}

export default ContactDetails
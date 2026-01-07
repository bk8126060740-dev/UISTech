'use client'

import SvgIcon from '@/assests/icons/SvgIcon';
import { commonSocialMedia } from '@/common/commonSocialMedia';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Divider, Typography, useMediaQuery } from "@mui/material";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import logo from '../../assests/images/Footerlogo.png';
import Linker from '../Linker';
import { ContainedSpace, Paragraph, SubHeading5, SubHeading6 } from '../commonUiComponents/commonUiComponents';
import "./Footer.css";

// Footer Text
const FooterText = {
    Services: "Services",
    Quicklinks: "Quick Links",
    Contactus: "Contact us",
    Copywrite: "© 2024 Design and Maintained by UISPL.",
    privacypolicy: "Privacy Policy"
}

// Services Links
const ServiceLinks = [
    { name: "Elderly Care Taker Services", redirect: '/elderlycaretaker' },
    { name: "Contractual (Flexi) staffing", redirect: "/humanresources#fs" },
    { name: "Permanent Recruitment", redirect: "/humanresources#ps" },
    { name: "IT staffing", redirect: "/humanresources#it" },
    { name: "Technical and Non-Technical Staffing", redirect: "/humanresources#t-nt" },
    { name: "Payroll Management", redirect: "/humanresources#prs" },
    { name: "Data Digitization", redirect: "/informationtechnology#digilization" },
    { name: "HRMS Solutions", redirect: "/informationtechnology#hrm" },
    { name: "Software and app development", redirect: "/informationtechnology#sad" },
    { name: "Security and surveillance network", redirect: "/informationtechnology#safeSecu" },
    { name: "Housekeeping and cleaning services", redirect: "/integratedfacility#house" },
    { name: "Waste Managements And Hospitality", redirect: "/integratedfacility#waste" },
    { name: "Healthcare Management", redirect: "/integratedfacility#health-care" },
    { name: "Security and safety services", redirect: "/integratedfacility#security" },
    { name: "Property Maintenance", redirect: "/integratedfacility#propertyMaintenance" },
    { name: "Warehouse Management Services", redirect: "/propertymaintence#warehouse_services" }
];

// Quick Links
const Quicklinks = [
    { name: 'Gallery', redirect: '/gallery' },
    { name: 'Career', redirect: '/career' },
    { name: 'Contact Us', redirect: '/contactus' }
];

// Contact us links
const Contact = [
    { name: "Head Office", address: "1st Floor, New Incubation Building, Software Technology Parks of India, Rajeev Nagar Road, Patliputra Colony,<br/>Patna- 800013", icon: "location-fill", redirect: "https://maps.app.goo.gl/RaMJwaeiHytWqEF18" },
    { name: "Corporate Office", address: "A-44, 3rd Floor, Connaught Place,<br/>Delhi -110001", icon: "location-fill", redirect: "https://maps.app.goo.gl/oorjeEGRtL3HnCB79" },
    { name: "info@uistech.in", icon: "mail-fill", redirect: "mailto:info@uistech.in" },
    { name: "0612-2540193", icon: "call-fill", redirect: "tel:0612-2540193" }
];

// Social Icon Button 
const SocialButton = ({ name, redirect }) => (
    <Linker href={redirect} target='_blank'>
        <Box className="Footer-Social-button-section">
            <Box className='Footer-Social-btn'>
                <SvgIcon name={name} />
            </Box>
        </Box>
    </Linker>
);

const FooterAccordion = ({ name, data, handleClick }) => {
    const [expandedState, setExpandedState] = useState({ [name]: false });

    const handleChange = (accordionName) => {
        setExpandedState(prev => ({ ...prev, [accordionName]: !prev[accordionName] }));
    };

    return (
        <Box className="Footer-mobile-accordians-section">
            <Accordion
                className="Footer-mobile-accordians"
                elevation={0}
                expanded={expandedState[name]}
                onChange={() => handleChange(name)}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="mobile-accordians-icon" />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="accordians-summary"
                >
                    <Typography className="mobile-accordians-summary">{name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {data.map(item => (
                        <Box key={item.name} className="mobile-accordians-btn" onClick={() => handleClick(item.redirect, item.address && 'location')}>
                            <Box className="accordians-btn">
                                {name === "Contact us" && <SvgIcon name={item.icon} height={12} width={12} />}
                                {item.name}
                            </Box>
                            {item.address && <Typography className="accordian-address" dangerouslySetInnerHTML={{ __html: item.address }}></Typography>}
                        </Box>
                    ))}
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

const TitleName = ({ href, name }) => {
    return (
        <Box className='footer_title'>
            <Linker href={href}>
                <SubHeading5>{name}</SubHeading5>
            </Linker>
            <Divider className='footer_title_divider' />
        </Box>
    )
}

const FooterLogoSection = () => {
    return (
        <>
            <Box className="Footer-logo-section">
                <Image src={logo} alt="web-logo" width={283} height={73} priority />
            </Box>
            <Box className='Social-Icons'>
                {['facebook', 'instagram', 'twitter', 'youtube'].map(platform => (
                    <SocialButton key={platform} name={`${platform}-fill`} redirect={commonSocialMedia[platform]} />
                ))}
            </Box>
        </>
    )
}

const Footer = () => {
    const router = useRouter();
    const disktop1 = useMediaQuery('(max-width:1260px)')

    const handleClick = useCallback((redirect, val) => {
        if (val && val === 'location') {
           window.open(redirect, '_blank');
        } else {
            router.push(redirect);
        }
    }, []);

    return (
        <Box className="Footer-section">
            <Container maxWidth="xl">
                <ContainedSpace>
                    <Box className="Footer-sub-section">
                        {/* Logo Section */}
                        {!disktop1 &&
                            <Box className="footer_part">
                                <FooterLogoSection />
                            </Box>
                        }

                        {/* Links Section */}
                        <Box className="footer_part">
                            <TitleName href={'/services'} name={FooterText.Services} />
                            {ServiceLinks.map(item => (
                                <Box key={item.name} className="Footer-Service-links">
                                    <Button onClick={() => handleClick(item.redirect)} className='Footer-Service-btn'>
                                        {item.name}
                                    </Button>
                                </Box>
                            ))}
                        </Box>

                        <Box className="footer_part">
                            <TitleName href={''} name={FooterText.Quicklinks} />
                            {Quicklinks.map(item => (
                                <Box key={item.name} className="Footer-Service-links">
                                    <Button onClick={() => handleClick(item.redirect)} className='Footer-Service-btn'>
                                        {item.name}
                                    </Button>
                                </Box>
                            ))}
                        </Box>

                        <Box className="footer_part">
                            <TitleName href={''} name={FooterText.Contactus} />
                            {Contact.map(item => (
                                <Box key={item.name} className="Footer-Contact-us-link-section" onClick={() => handleClick(item.redirect, item.address && 'location')}>
                                    <Box className='Footer-contact-us-btn'>
                                        <SvgIcon name={item.icon} width={22} height={22} />
                                        {
                                            item.icon?.includes('location') ?
                                                <SubHeading6>{item.name}</SubHeading6>
                                                :
                                                <Paragraph>{item.name}</Paragraph>

                                        }
                                    </Box>
                                    {item.address && <Paragraph className="Footer-address" dangerouslySetInnerHTML={{ __html: item.address }}></Paragraph>}
                                </Box>
                            ))}
                            {disktop1 &&
                                <FooterLogoSection />
                            }
                        </Box>
                    </Box>

                    {/* Footer Mobile */}
                    <Divider className='Footer-middle-divider' />
                    <Box className="Footer-mobile-links">
                        <FooterAccordion name={FooterText.Services} data={ServiceLinks} handleClick={handleClick} />
                        <FooterAccordion name={FooterText.Quicklinks} data={Quicklinks} handleClick={handleClick} />
                        <FooterAccordion name={FooterText.Contactus} data={Contact} handleClick={handleClick} />
                        <Box className="mobile-last-accordian">
                            <Linker href="/privacy_policy">
                                <Paragraph>{FooterText.privacypolicy}</Paragraph>
                            </Linker>
                        </Box>
                    </Box>

                    {/* Footer Bottom */}
                    <Box className="Footer-last-section">
                        <Box className="Footer-copywrite-section">
                            <Paragraph>{FooterText.Copywrite}</Paragraph>
                        </Box>
                        <Box className="Footer-Privacy-btn-section">
                            <Linker href="/privacy_policy">
                                <Box className="Footer-Privacy-btn">{FooterText.privacypolicy}</Box>
                            </Linker>
                        </Box>
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}
export default Footer
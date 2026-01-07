'use client'
import SvgIcon from "@/assests/icons/SvgIcon"
import { commonText } from "@/common/commonText"
import { ContainedSpace, Paragraph, SubHeading, SubHeading6 } from "@/components/commonUiComponents/commonUiComponents"
import Linker from "@/components/Linker"
import { Box, Button, Container, Grid, Tab, Tabs } from "@mui/material"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import './AllServices.css'

const allServeces = [
    {
        id: 1,
        image: require('../../../assests/images/AllServices/elderly.jpg'),
        type: 'hospital',
        details: 'Elderly Care Taker Services',
        redirect: '/elderlycaretaker'
    },
    {
        id: 2,
        image: require('../../../assests/images/AllServices/houseKeepin1.png'),
        type: 'housekeeping',
        details: 'Housekeeping and Cleaning Services',
        redirect: '/integratedfacility#housekeeping'
    },
    {
        id: 3,
        image: require('../../../assests/images/AllServices/houseKeepin2.png'),
        type: 'housekeeping',
        details: 'Cleaning, Sanitation, and Disinfection Services',
        redirect: '/integratedfacility#disinfection'
    },
    {
        id: 4,
        image: require('../../../assests/images/AllServices/houseKeepin5.jpg'),
        type: 'housekeeping',
        details: 'Collection and Disposal Waste Management Servicess',
        redirect: '/integratedfacility#collection'
    },
    {
        id: 5,
        image: require('../../../assests/images/AllServices/houseKeepin4.png'),
        type: 'housekeeping',
        details: 'Waste Management and Hospitality',
        redirect: '/integratedfacility#hospitality'
    },
    {
        id: 6,
        image: require('../../../assests/images/AllServices/houseKeepin3.png'),
        type: 'housekeeping',
        details: 'Bio-Medical Waste Management Service',
        redirect: '/integratedfacility#bio'
    },
    {
        id: 7,
        image: require('../../../assests/images/AllServices/houseKeepin6.png'),
        type: 'housekeeping',
        details: 'Garbage Collection and Disposal Service for Municipal Sewage Waste',
        redirect: '/integratedfacility#disposal'
    },
    {
        id: 8,
        image: require('../../../assests/images/AllServices/managment1.png'),
        type: 'managment',
        details: 'Security and safety services',
        redirect: '/integratedfacility#security'
    },
    {
        id: 9,
        image: require('../../../assests/images/AllServices/managment6.png'),
        type: 'hospital',
        details: 'Our Healthcare Management Services include',
        redirect: '/healthcare#service_managment'
    },
    {
        id: 10,
        image: require('../../../assests/images/AllServices/managment4.png'),
        type: 'hospital',
        details: 'Healthcare Human Resource Outsourcing Service',
        redirect: '/healthcare#health_resource'
    },
    {
        id: 11,
        image: require('../../../assests/images/AllServices/hospital1.png'),
        type: 'hospital',
        details: 'Healthcare Sanitation Service',
        redirect: '/healthcare#sanitation'
    },
    {
        id: 12,
        image: require('../../../assests/images/AllServices/managment2.png'),
        type: 'managment',
        details: 'Property Maintenance',
        redirect: '/propertymaintence#property_managment'
    },
    {
        id: 13,
        image: require('../../../assests/images/AllServices/managment5.png'),
        type: 'managment',
        details: 'Horticulture Services',
        redirect: '/propertymaintence#horticulture_services'
    },
    {
        id: 14,
        image: require('../../../assests/images/AllServices/managment3.png'),
        type: 'managment',
        details: 'Warehouse Management Services',
        redirect: '/propertymaintence#warehouse_services'
    },
]
const AllServices = () => {
    const [data, setData] = useState(allServeces || [])
    const [tabs, setTabs] = useState(0)

    const handleTabs = (e, newValue) => {
        setTabs(newValue)
        let arr = []
        switch (newValue) {
            case 0:
                arr = allServeces
                break;
            case 1:
                arr = allServeces.filter((v, i) => v.type === 'managment')
                break;
            case 2:
                arr = allServeces.filter((v, i) => v.type === 'housekeeping')
                break;
            case 3:
                arr = allServeces.filter((v, i) => v.type === 'hospital')
                break;

            default:
                break;
        }
        setData(arr)
    }
    return (
        <Box className='comprehensive_services'>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <SubHeading>{commonText?.technologyServices}</SubHeading>
                    <Box className='services_tabs'>
                        <Tabs value={tabs} onChange={handleTabs}>
                            <Tab label="All" value={0} />
                            <Tab label="Management" value={1} />
                            <Tab label="Housekeeping" value={2} />
                            <Tab label="Hospitality" value={3} />
                        </Tabs>
                    </Box>
                    <AnimatePresence>
                        <Box className='gallery_details'>
                            <Grid container spacing={2.5} className="gridd">
                                {
                                    data.length > 0 && data.map((item, i) => {
                                        return (
                                            <Grid item xl={3} lg={3} md={4} sm={6} xs={6} key={i} className="grid-container">
                                                <motion.div className='serviceCard' key={item.id}
                                                    layout
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.5 }}>
                                                    <Image src={item?.image} alt={item?.type} priority />
                                                    <Box className='details'>
                                                        <Paragraph>{item?.details}</Paragraph>
                                                        <Linker href={item?.redirect}>
                                                         <Paragraph className="view_more">
                                                            View More
                                                         </Paragraph>
                                                        </Linker>
                                                    </Box>
                                                    <Linker href={item?.redirect} className='learn-more'>
                                                        <Paragraph>Learn more</Paragraph>
                                                        <Box className='svgBg'>
                                                            <SvgIcon name='right-arrow' />
                                                        </Box>
                                                    </Linker>
                                                </motion.div>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </AnimatePresence>
                    <Box className='more-btn'>
                        <Linker href={"/integratedfacility"}>
                            <Button className='viewAllServices'>
                                <span>View All Services</span>
                                <Box className='svgBg'>
                                    <SvgIcon name='right-arrow' />
                                </Box>
                            </Button>
                        </Linker>
                        <Linker href={"/integratedfacility"}>
                            <SubHeading6>View All Services</SubHeading6>
                        </Linker>
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default AllServices
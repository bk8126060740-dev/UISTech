'use client'
import SvgIcon from "@/assests/icons/SvgIcon"
import { elderlyText } from "@/common/elderlyCaretaker"
import { ContainedSpace, Paragraph, SubHeading, SubHeading5, SubHeading6 } from "@/components/commonUiComponents/commonUiComponents"
import {
    Box,
    Container,
    Divider,
    useMediaQuery
} from "@mui/material"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"
import './Elderlycaretaker.css'

const GetInTouch = dynamic(() => import("./GetInTouch/GetInTouch"))
const MarketAnalysis = dynamic(() => import("./MarketAnalysis/MarketAnalysis"))
const OurServices = dynamic(() => import("./OurServices/OurServices"))


const Elderlycaretaker = () => {

    const [activeindex, setActiveindex] = useState(2)
    const [serviceindex, setServiceindex] = useState()

    const handlehover = (id) => {
        setActiveindex(id)
    }

    const servicehover = (id) => {
        setServiceindex(id)
    }

    const mobile = useMediaQuery('(max-width: 1023px)')

    return (
        <Box className="ect-main-section">
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <Box className="ect-appointment-card-section">
                        {
                            elderlyText.Appointmentcard.length > 0 && elderlyText.Appointmentcard.map((item, i) => (
                                <Box key={i} className={mobile && item.id % 2 === 0 ? "ect-active-appointment-card" : mobile && item.id % 2 === 1 ? "ect-appointment-card" : activeindex === item.id ? "ect-active-appointment-card" : "ect-appointment-card"} onMouseOver={() => handlehover(item.id)} onMouseOut={() => setActiveindex(activeindex)} >
                                    <Box className={activeindex === item.id ? "ect-sub-active-appointment-card" : "ect-sub-appointment-card"}>
                                        <SvgIcon name={item.icon} />
                                        <SubHeading5>{item.title}</SubHeading5>
                                        <Paragraph>{item.info}</Paragraph>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>

                    <Box className="ect-service-section">
                        <Box>
                            <SubHeading>{elderlyText.Servicetitle}</SubHeading>
                            <Paragraph>{elderlyText.Servicedescription}</Paragraph>
                        </Box>
                        <Box className="ect-service-card-section">
                            {
                                elderlyText.Servicecard.length > 0 && elderlyText.Servicecard.map((item) => (
                                    <Box className={serviceindex === item.id ? "ect-service-card ect-active-service-card" : "ect-service-card"} onMouseOver={() => servicehover(item.id)} onMouseOut={() => setServiceindex()} key={item.id}>
                                        {!mobile && <Box className={`ect-service-divider-normal ${serviceindex === item.id && "ect-service-divider"}`}>
                                        </Box>}
                                        <Box className="ect-service-info">
                                            <SvgIcon name={item.icon} height={50} width={50} />
                                            <SubHeading6>{item.title}</SubHeading6>
                                            <Paragraph>{item.info}</Paragraph>
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>

                    <Box className="ect-chooseus-section">
                        <SubHeading>{elderlyText.chooseustitle}</SubHeading>
                        <Box className="ect-chooseus-sub-section">
                            <Box className="ect-image-box">
                                <Box className="ect-ds-img">
                                    <Image src={require('../../assests/images/elderly-caretaker/ds.png')} alt="ect-ds" />
                                </Box>
                                <Image src={elderlyText.chooseusimage} alt="elder care" priority />
                            </Box>
                            <Box className="ect-info-box">
                                <SubHeading5>{elderlyText.chooseusdesc}</SubHeading5>
                                <Paragraph>{elderlyText.chooseusinfo}</Paragraph>
                                {
                                    elderlyText.chooseussteps.length > 0 && elderlyText.chooseussteps.map((items) => (
                                        <Box className="ect-steps-section" key={items.id}>
                                            <Box className="ect-steps-icon-section">
                                                <Box className="ect-steps-icon">
                                                    <SvgIcon name={items.icon} />
                                                </Box>
                                                {items.id !== 4 ? <Divider className="ect-steps-divider" orientation="vertical" /> : ""}
                                            </Box>
                                            <Box>
                                                <SubHeading6>{items.title}</SubHeading6>
                                                <Paragraph>{items.info}</Paragraph>
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                </ContainedSpace>
            </Container>
            <OurServices />
            <MarketAnalysis />
            <GetInTouch />
        </Box>
    )
}

export default Elderlycaretaker
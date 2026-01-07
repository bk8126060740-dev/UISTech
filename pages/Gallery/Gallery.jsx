'use client'
import { ContainedSpace } from "@/components/commonUiComponents/commonUiComponents"
import { Box, Button, Container, useMediaQuery } from "@mui/material"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import "./Gallery.css"
// import videoSrc from '../../assests/images/Gallery/1.mp4';

const AllImages = [
    // {
    //     id: 0,
    //     image: videoSrc,
    //     type: "Other"
    // },
    {
        id: 1,
        image: require('../../assests/images/Gallery/img1.png'),
        type: "Event"
    },
    {
        id: 2,
        image: require('../../assests/images/Gallery/img2.png'),
        type: "Event"
    },
    {
        id: 3,
        image: require('../../assests/images/Gallery/img3.png'),
        type: "Event"
    },
    {
        id: 4,
        image: require('../../assests/images/Gallery/img4.png'),
        type: "Other"
    },
    {
        id: 5,
        image: require('../../assests/images/Gallery/img5.png'),
        type: "Other"
    },
    {
        id: 6,
        image: require('../../assests/images/Gallery/img6.png'),
        type: "Event"
    },
    {
        id: 7,
        image: require('../../assests/images/Gallery/img7.png'),
        type: "Other"
    },
    {
        id: 8,
        image: require('../../assests/images/Gallery/img4.png'),
        type: "Other"
    },
    {
        id: 9,
        image: require('../../assests/images/Gallery/img9.png'),
        type: "Other"
    },
    {
        id: 10,
        image: require('../../assests/images/Gallery/img10.png'),
        type: "Event"
    },
    {
        id: 11,
        image: require('../../assests/images/Gallery/img11.png'),
        type: "Other"
    },
    {
        id: 12,
        image: require('../../assests/images/Gallery/img12.png'),
        type: "Event"
    },
]

const ButtonText = [
    {
        id: 1,
        Title: "All"
    },
    {
        id: 2,
        Title: "Events"
    },
    {
        id: 3,
        Title: "Others"
    }
]

const Gallery = () => {
    const [data, setData] = useState(AllImages)

    const filterotherimages = AllImages.filter((item) => item.type === "Other")
    const filtereventimages = AllImages.filter((item) => item.type === "Event")
    const mobile = useMediaQuery('(max-width: 1023px)')
    const [activeindex, setActiveindex] = useState(1)

    const handleDatachange = (id) => {
        if (id === 1) {
            setData(AllImages)
            setActiveindex(1)
        } else if (id === 2) {
            setData(filtereventimages)
            setActiveindex(2)
        } else if (id === 3) {
            setData(filterotherimages)
            setActiveindex(3)
        }
    }

    return (
        <Box className="Gallery-Main-section">
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <Box className="Gallery-btn-section">
                        {
                            ButtonText.length > 0 && ButtonText.map((item, i) => (
                                <Button key={i} className={activeindex === item.id ? "Gallery-active-btn Gallery-btn" : "Gallery-btn"} onClick={() => handleDatachange(item.id)}>{item.Title}</Button>
                            ))
                        }
                    </Box>
                    <AnimatePresence>
                        <Box className="Gallery-img-section">
                            {
                                data.length > 0 && data.map((item, index) => {
                                    return (
                                        <Box className='imageBox'>
                                            {/* {index === 0 ?
                                                <video width="100%" height="100%" autoPlay loop={true} style={{objectFit: 'cover'}} controls>
                                                    <source src={videoSrc} type="video/mp4" width="100%" height="100%" />
                                                    Your browser does not support the video tag.
                                                </video>
                                                :  */}
                                                <Image alt="gallery-img" src={item.image} />
                                                {/* } */}
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </AnimatePresence>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default Gallery
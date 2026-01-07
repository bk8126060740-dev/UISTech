'use client'
import SvgIcon from "@/assests/icons/SvgIcon";
import { commonText } from "@/common/commonText";
import { slideBoxText } from "@/common/HomeJson";
import { ContainedSpace, Paragraph, SubHeading3 } from "@/components/commonUiComponents/commonUiComponents";
import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import './FirstSlideSection.css';


const FirstSlideSection = ({AnnouncementData}) => {
  const router = useRouter()
  const [slideIndex, setSlideIndex] = useState(0)
  const [mouseHover, setMouseHover] = useState(false)
  const [sliderText, setSliderText] = useState({
    fullForm: slideBoxText[0]?.fullform,
    shortForm: slideBoxText[0]?.shortform,
    image: slideBoxText[0]?.image.default?.src,
  })

  const handleSlide = (index) => {
    setMouseHover(true)
    setSlideIndex(index)
  }

  useEffect(() => {
    setSliderText({
      fullForm: slideBoxText[slideIndex]?.fullform,
      shortForm: slideBoxText[slideIndex]?.shortform,
      image: slideBoxText[slideIndex]?.image.default?.src,
    });
  }, [slideIndex, slideBoxText]);

  useEffect(() => {
    if (!mouseHover) {
      const result = setInterval(() => {
        setSlideIndex((prevSlide) => (prevSlide + 1) % slideBoxText.length);
      }, 3000)
      return () => clearInterval(result);
    }
  }, [slideBoxText.length, mouseHover]);

  return (
    <Box className='slideMain' sx={{
      '&::before': {
        backgroundImage: `url(${sliderText?.image})`
      },
    }}>
      <Box className='upperCover'></Box>
      <Container maxWidth='xl'>
        <ContainedSpace>
          <Box className='slideText'>
            <Box className='shortText'>
              <Typography variant="h1">{sliderText?.shortForm}</Typography>
            </Box>
            <Box className='fullForm'>
              <Typography variant="h4">{sliderText?.fullForm}</Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            margin: { xl: '0 0 60px 0', md: '0 0 40px 0' }
          }} className='gapping'>
            {
             slideBoxText && slideBoxText.length > 0 && slideBoxText.map((item, i) => {
                return (
                  <Box className='slideBox' key={item?.icon} onMouseEnter={() => handleSlide(i)} onMouseLeave={() => setMouseHover(false)}>
                    <SvgIcon name={item?.icon} />
                    <Box className='slideBoxText'>
                      {item.linkText.length > 0 && item.linkText.map((link, i) => {
                        return (
                          <Box className='link' key={i}>
                            <Paragraph className='link-text' onClick={() => router.push(link?.redirect)}>{link?.text}</Paragraph>
                          </Box>
                        )
                      })}
                    </Box>
                  </Box>
                )
              })
            }
          </Box>
        </ContainedSpace>
      </Container>
      {AnnouncementData && AnnouncementData.length > 0 &&
        <Box className='wearehire'>
          <SubHeading3>{commonText?.Announcement} :-</SubHeading3>
          <Box className='slider-name'>
            <Marquee speed={100}>
              {
               AnnouncementData && AnnouncementData.length > 0 && AnnouncementData.map((item, i) => {
                  return (
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 20px',
                      gap: { xl: '40px', xs: '15px' }
                    }} key={i}>
                      <Paragraph>
                        <SvgIcon name='Anoucement' /> {item?.description}
                      </Paragraph>
                    </Box>
                  )
                })
              }
            </Marquee>
          </Box>
        </Box>
      }
    </Box>
  )
}

export default FirstSlideSection
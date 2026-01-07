import { commonText } from '@/common/commonText'
import { ContainedSpace, Paragraph, SubHeading } from '@/components/commonUiComponents/commonUiComponents'
import Linker from '@/components/Linker'
import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import welcome_Image from '../../../assests/images/welcomeFrame.png'
import './WelcomeSection.css'

const WelcomeSection = () => {
  return (
    <Box className='welcome_main'>
      <Container maxWidth='xl'>
        <ContainedSpace>
          <Box className='wrapper'>
            <SubHeading className={'welcome_mobile_title'}>
              {commonText?.welcome}
            </SubHeading>
            <Box className="welcome_img_section">
              <Box className="welcome_img">
                <Image src={welcome_Image} alt='welcome' priority />
              </Box>
            </Box>
            <Box className='welcome_description'>
              <SubHeading>
                {commonText?.welcome}
              </SubHeading>
              <Box className='line' sx={{ marginBottom: '30px' }}></Box>
              <Paragraph>{commonText?.wecomedescription}</Paragraph>
              <Box className="mobile_welcome_btn">
                <Box className='welcome_btn_section'>
                  <Linker href={"/contactus"}>
                    <Button className='welcome_contact_btn'>{commonText?.contact}</Button>
                  </Linker>
                </Box>
              </Box>
            </Box>
          </Box>
        </ContainedSpace>
      </Container>
    </Box>
  )
}

export default WelcomeSection
import { commonText } from '@/common/commonText'
import { ContainedSpace, Paragraph, SubHeading } from '@/components/commonUiComponents/commonUiComponents'
import { Box } from '@mui/material'
import './AboutInfo.css'

const AboutInfo = () => {
    return (
        <ContainedSpace sx={{
            zIndex: 1
        }}>
            <Box className='about-info'>
                <Box className='info-box'>
                    <SubHeading>{commonText?.aboutus}</SubHeading>
                    <Paragraph>{commonText?.aboutusInfo}</Paragraph>
                    <Paragraph>{commonText?.aboutusDesc}</Paragraph>
                    <Paragraph>{commonText?.aboutusMoreInfo}</Paragraph>
                </Box>
            </Box>
        </ContainedSpace>
    )
}

export default AboutInfo
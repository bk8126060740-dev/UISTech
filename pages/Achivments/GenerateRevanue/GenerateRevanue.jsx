import SvgIcon from '@/assests/icons/SvgIcon'
import { bussinessModal, revanue, revanueDetails } from '@/common/commonRevanue'
import { ContainedSpace, Paragraph, SubHeading, SubHeading5, SubHeading6 } from '@/components/commonUiComponents/commonUiComponents'
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import './GenerateRevanue.css'

const GenerateRevanue = () => {
    return (
        <Box className='generate-revanue'>
            <Container maxWidth="xl">
                <ContainedSpace>
                    <Box className='revanue-wrapper'>
                        <Box className='revanue_part_1'>
                            <SubHeading5>{revanue?.title}</SubHeading5>
                            <Paragraph>{revanue?.description}</Paragraph>
                            <Box className='box_wrapper'>
                                {
                                    revanueDetails.length > 0 && revanueDetails.map((item, i) => {
                                        return (
                                            <Box className='revaue-details-card' key={i}>
                                                <SvgIcon name={item?.icon} />
                                                <SubHeading6>{item?.title}</SubHeading6>
                                                <Paragraph>{item?.description}</Paragraph>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                        <Box className='revanue_part_2_mobile'>
                            <Box className='revanue_part_2'>
                                <Box className='dot_frame'>
                                    <Image src={require('../../../assests/images/dotframe.png')} alt='dot frame' />
                                </Box>
                                <Box className="revanueCard1">
                                    <SubHeading5>{bussinessModal?.title}</SubHeading5>
                                    <Paragraph>{bussinessModal?.details}</Paragraph>
                                    <Box className='pinCount'>
                                        <SubHeading>{bussinessModal?.numberOfCount}
                                            <SvgIcon name='design-up-arrow' />
                                        </SubHeading>
                                        <Paragraph>PIN Codes Outreach</Paragraph>
                                    </Box>
                                    <Box className='customized_approch'>
                                        <Box className='approch_icon'>
                                            <SvgIcon name={'approch'} />
                                        </Box>
                                        <Box className='conrtent_text'>
                                            <SubHeading6>Customized Approach</SubHeading6>
                                            <Paragraph>Unique solutioning for every client .</Paragraph>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default GenerateRevanue
'use client'
import SvgIcon from '@/assests/icons/SvgIcon'
import { Privacy } from '@/common/commonPrivacy'
import { ContainedSpace, Paragraph, SubHeading, SubHeading3, SubHeading6 } from '@/components/commonUiComponents/commonUiComponents'
import { Box, Container, Divider } from '@mui/material'
import Image from 'next/image'
import './Privacypolicy.css'

const Privacypolicy = () => {

    const FirstSection = ({ img, title, info, height, width }) => {
        return (
            <Box className="Privacy-FirstSection-card-section">
                <Box className='image_Box'>
                    <Image alt='card-info' src={img} height={height} width={width} priority className='!max-h-[570px] !max-w-[350]' />
                </Box>
                <Box className="Mobile-title-section">
                    <SubHeading>{title}</SubHeading>
                </Box>
                <Box className="Privacy-FirstSection-card-info">
                    <SubHeading3>{title}</SubHeading3>
                    <Divider className={title === "Information Collection and Use" ? 'FirstSection-card-divider FirstSection-collection-card-divider' : 'FirstSection-card-divider'} />
                    <Paragraph>{info}</Paragraph>
                </Box>
            </Box>
        )
    }

    const InfoSection = ({ title, info }) => {
        return (
            <Box className="Privacy-info-text">
                <SubHeading3>{title}</SubHeading3>
                <Paragraph dangerouslySetInnerHTML={{ __html: info }}></Paragraph>
            </Box>
        )
    }

    const StepSection = ({ text }) => {
        return (
            <>
                <Box>
                    <SvgIcon name={"steps-arrow"} height={10} width={10} />
                </Box>
                <Paragraph>{text}</Paragraph>
            </>
        )
    }

    return (
        <Box className="Privacy-main-section">
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <Box className="privacy-card-section">
                        <FirstSection img={Privacy.privacyimg} height={470} width={350} title={Privacy.privacytitle} info={Privacy.privacyinfo} />
                    </Box>

                    <Box className="collection-card-section">
                        <FirstSection img={Privacy.collectionimg} height={570} width={350} title={Privacy.collectiontitle} info={Privacy.collectioninfo} />
                    </Box>

                    <Box className="Privacy-info-section">
                        {
                            Privacy.MoreInfo.length > 0 && Privacy.MoreInfo.map((item, i) => (
                                <InfoSection key={i} title={item.Title} info={item.Info} />
                            ))
                        }
                    </Box>

                    <Box className="Sharing-info-section">
                        <SubHeading>{Privacy.sharingtitle}</SubHeading>
                        <Paragraph>{Privacy.sharinginfo}</Paragraph>
                        {
                            Privacy.sharingsteps.length > 0 && Privacy.sharingsteps.map((list, i) => (
                                <Box key={i} className="Sharing-list-section">
                                    <StepSection text={list} />
                                </Box>
                            ))
                        }
                    </Box>

                    <Box className="Using-info-section">
                        <Box className="Using-text-info-section">
                            {
                                Privacy.Infosteps.length > 0 && Privacy.Infosteps.map((item, i) => (
                                    <Box key={i}>
                                        <SubHeading3>{item.Title}</SubHeading3>
                                        <Box className="Using-steps-section">
                                            <Paragraph>
                                                <span>{Privacy.storage}</span>
                                                <span>{item.Storage}</span>
                                            </Paragraph>
                                        </Box>
                                        <Box className="Using-steps-section">
                                            <Paragraph>
                                                <span>{Privacy.camera}</span>
                                                <span>{item.Camera}</span>
                                            </Paragraph>
                                        </Box>
                                        <Box className="Using-steps-section">
                                            <Paragraph>
                                                <span>{Privacy.record}</span>
                                                <span>{item.Recordaudio}</span>
                                            </Paragraph>
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box className="Using-steps-info-section">
                            <Paragraph>{Privacy.howweusestepstitle}</Paragraph>
                            <Box>
                                {
                                    Privacy.howweuselist.length > 0 && Privacy.howweuselist.map((list, i) => (
                                        <Box key={i} className="Using-steps">
                                            <StepSection text={list} />
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>

                    <Box className="Other-info-section">
                        <SubHeading3>{Privacy.otherprovision}</SubHeading3>
                        <Box>
                            <SubHeading6>{Privacy.acceptancetitle}</SubHeading6>
                            <Box className="Other-info-steps-section">
                                <StepSection text={Privacy.acceptanceinfo} />
                            </Box>
                        </Box>
                    </Box>

                    <Box className="Contact-us-section">
                        <InfoSection title={Privacy.contactustitle} info={Privacy.contactusinfo} />
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default Privacypolicy
'use client'
import { HrService } from "@/common/HrService"
import { ContainedSpace } from "@/components/commonUiComponents/commonUiComponents"
import ServiceInfoBox from "@/components/ServiceInfoBox/ServiceInfoBox"
import { Box, Container } from "@mui/material"
import './Humanresourcemanagement.css'

const Humanresourcemanagement = () => {
    return (
        <Box className='hrInfo'>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    {
                        HrService.length > 0 && HrService.map((items, i) => {
                            return (
                                <ServiceInfoBox data={items} key={i} />
                            )
                        })
                    }
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default Humanresourcemanagement
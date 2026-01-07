'use client'
import { healthcareManagment } from '@/common/healthcareManagment'
import { ContainedSpace } from '@/components/commonUiComponents/commonUiComponents'
import { Box, Container } from '@mui/material'
import dynamic from 'next/dynamic'
import './HealthManagment.css'

const ServiceInfoBox = dynamic(() => import('@/components/ServiceInfoBox/ServiceInfoBox'))

const HealthManagment = () => {
    return (
        <Box className='health_managment'>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    {
                        healthcareManagment.length > 0 && healthcareManagment.map((item, i) => {
                            return <ServiceInfoBox data={item} key={i} index={i} />
                        })
                    }
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default HealthManagment
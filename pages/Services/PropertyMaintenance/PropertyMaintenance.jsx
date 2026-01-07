import { propertyMaintenance } from "@/common/propertyMaintenance"
import { ContainedSpace } from "@/components/commonUiComponents/commonUiComponents"
import { Box, Container } from "@mui/material"
import dynamic from "next/dynamic"
import './PropertyMaintenance.css'

const ServiceInfoBox = dynamic(() => import('@/components/ServiceInfoBox/ServiceInfoBox'))

const PropertyMaintenance = () => {
    return (
        <Box className="property-maintenance">
            <Container maxWidth='xl'>
                <ContainedSpace>
                    {
                        propertyMaintenance.length > 0 && propertyMaintenance.map((item, i) => {
                            return <ServiceInfoBox data={item} key={i} index={i} />
                        })
                    }
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default PropertyMaintenance
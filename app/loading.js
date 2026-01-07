import Loader from "@/components/Loader/Loader";
import { Box } from "@mui/material";

const Loading = () => {
    return (
        <Box sx={{
            width:'100%',
            height:'100vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>
           <Loader/>
        </Box>
    )
}

export default Loading
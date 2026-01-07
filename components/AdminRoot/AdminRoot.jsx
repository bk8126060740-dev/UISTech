import AdminMenu from "@/pages/AdminPages/AdminMenu/AdminMenu";
import { Box } from "@mui/material";
import './AdminRoot.css';

const AdminRoot = ({ children }) => {
    return (
        <Box className='admin-root'>
            <AdminMenu />
            <Box>{children}</Box>
        </Box>
    )
}

export default AdminRoot
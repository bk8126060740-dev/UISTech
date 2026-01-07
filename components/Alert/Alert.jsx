'use client'
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

const AlertMessage = ({ open, handleClose, action, message, success, vertical = 'top', horizontal = 'right' }) => {
    return (
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={2000} onClose={handleClose} action={action}>
            {open && <Alert variant="filled" severity={success ? 'success' : 'error'}>{message}</Alert>}
        </Snackbar>
    );
};

export default AlertMessage;
'use client'
import { deleteJobApplicationData, fetchJobApplicationData } from '@/common/adminApi/jobapplicationsApi';
import AdminTable from '@/components/AdminRoot/AdminTable/AdminTable';
import AlertMessage from '@/components/Alert/Alert';
import useAlert from '@/hook/useAlert';
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './AdminJobApplications.css';
import { adminMsg } from '@/common/adminApi/adminMessages';

const headerData = [
    { title: '', keyName: 'action' },
    { title: 'Name', keyName: 'name' },
    { title: 'Email', keyName: 'email' },
    { title: 'Mobile Number', keyName: 'mobileNumber' },
    { title: 'Apply For Post', keyName: 'applyPost' },
    { title: 'State', keyName: 'state' },
    { title: 'Experience', keyName: 'experience' },
    { title: 'Current Employer', keyName: 'currentemployer' },
    { title: 'Expertise', keyName: 'expertise' },
    { title: 'Qualification', keyName: 'qualification' },
    { title: 'Resume', keyName: 'resumefile' },
];
const AdminJobApplications = () => {
    const small = useMediaQuery('(max-width:768px)')
    const { alert, showAlert } = useAlert()
    const [jobApplicationData, setApplicationData] = useState([])
    const [fetching, setFetching] = useState(false)
    const [open, setOpen] = useState(false)
    const [preview, setPreview] = useState([])

    const handleClose = () => {
        setOpen(false)
        setPreview([])
    }

    useEffect(() => {
        getApplications()
    }, []);

    const getApplications = async () => {
        setFetching(true)
        try {
            let response = await fetchJobApplicationData()
            if (response.success) {
                setApplicationData(response.data);
            } else {
                showAlert(response.message, false);
            }
        } catch (error) {
            showAlert(adminMsg?.serverError, false)
        } finally {
            setFetching(false);
        }
    }

    const handleDelete = async (data) => {
        if (window.confirm("Are you sure you want to delete this Job Aplication?")) {
            try {
                const response = await deleteJobApplicationData(data?.id);
                if (response.success) {
                    showAlert(response.message, true)
                    getApplications()
                } else {
                    showAlert(response.message, false)
                }
            } catch (error) {
                showAlert(adminMsg?.serverError, false)
            }
        }
    };

    const handleDetailsShow = (data) => {
        setPreview([data]);
        setOpen(true)
    }

    return (
        <Box className='AllJobApplications'>
            <Box className='application_text'>
                <Typography variant='h3'>All Job Applications</Typography>
            </Box>
            {
                fetching ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                        <CircularProgress size={'20px'} />
                    </Box>
                    : jobApplicationData.length === 0 ?
                        <Typography variant="h6" sx={{ textAlign: 'center', padding: '20px' }}>
                            No Job Applications available.
                        </Typography>
                        :
                        <Box sx={{ padding: '20px 0' }}>
                            <AdminTable
                                data={jobApplicationData}
                                headRow={headerData}
                                handleDelete={handleDelete}
                                handleDetailsShow={handleDetailsShow}
                                type={'file'}
                            />
                        </Box>

            }

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    '.MuiPaper-root': {
                        width: '100%',
                        maxWidth: small ? '100%' : '50%'
                    }
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant='h3' className='modalTitle'>{preview.length > 0 ? `${`${preview[0]?.name}'s `} Details` : 'Cadidate Details' }</Typography>
                </DialogTitle>
                <DialogContent>
                    {
                        preview.length > 0 && preview.map((item, i) => {
                            return (
                                headerData && headerData.length > 0 && headerData.map((row, i) => {
                                    if (row?.keyName !== 'action') {
                                        return (
                                            <Box className='data_preview' key={row?.keyName}>
                                                <Typography variant='h6'>{row?.title}</Typography>
                                                {
                                                    row?.keyName === 'resumefile' ?
                                                        <Link href={item[row?.keyName]} target='_blank'>{item[row?.keyName]}</Link>
                                                        :
                                                        <Typography variant='body2'>{item[row?.keyName]}</Typography>
                                                }
                                            </Box>
                                        )
                                    }
                                })
                            )
                        })
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>

            <AlertMessage open={alert.open} message={alert.message} success={alert.success} />
        </Box>
    )
}

export default AdminJobApplications
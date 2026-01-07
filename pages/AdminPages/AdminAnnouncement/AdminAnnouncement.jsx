// 'use client';
// import { adminMsg } from '@/common/adminApi/adminMessages';
// import { deleteAnnouncementData, fetchAnnouncementData, postAnnouncementData, updateAnnouncementData } from '@/common/adminApi/announcementApi';
// import AdminTable from '@/components/AdminRoot/AdminTable/AdminTable';
// import FormModal from '@/components/AdminRoot/modalForm/FormModal';
// import AlertMessage from '@/components/Alert/Alert';
// import { CustomizeBtn } from '@/components/commonUiComponents/commonUiComponents';
// import useAlert from '@/hook/useAlert';
// import Reduxprovider from '@/redux/ReduxProvider';
// import { Box, CircularProgress, Typography } from '@mui/material';
// import { useEffect, useState } from 'react';
// import './AdminAnnouncement.css';

// const headerData = [
//     { title: '', keyName: 'action' },
//     { title: 'Description', keyName: 'description' },
// ];

// const AdminAnnouncement = () => {
//     const [announcementData, setAnnouncementData] = useState([]);
//     const { alert, showAlert } = useAlert()
//     const [loading, setLoading] = useState(false);
//     const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
//     const [fetching, setFetching] = useState(false);
//     const [open, setOpen] = useState(false);
//     const [description, setDescription] = useState('');
//     const [errors, setErrors] = useState({});
//     const [showDetails, setShowDetails] = useState(false)

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => {
//         setOpen(false);
//         resetForm();
//         setShowDetails(false)
//     };

//     const handleDetailsShow = (data) => {
//         setDescription(data?.description);
//         handleOpen()
//         setShowDetails(true)
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         setFetching(true);
//         try {
//             const response = await fetchAnnouncementData();
//             if (response.success) {
//                 setAnnouncementData(response.data || []);
//             } else {
//                 showAlert(response.message, false)
//             }
//         } catch (error) {
//             showAlert(adminMsg?.serverError, false);
//         } finally {
//             setFetching(false);
//         }
//     };

//     const handleFormSubmit = async () => {
//         if (!description.trim()) {
//             showAlert('Description is required', false);
//             return;
//         }

//         const payload = { description };
//         setLoading(true);

//         try {
//             let response;
//             if (currentAnnouncement) {
//                 response = await updateAnnouncementData(currentAnnouncement.id, payload);
//             } else {
//                 response = await postAnnouncementData(payload);
//             }
//             if (response.success) {
//                 showAlert(response.message, true)
//             } else {
//                 showAlert(response.message, false)
//             }
//             resetForm();
//             fetchData();
//         } catch (error) {
//             showAlert(adminMsg?.serverError, false)
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (data) => {
//         if (window.confirm(`Are you sure you want to delete this ${data?.id} data?`)) {
//             try {
//                 setLoading(true);
//                 const response = await deleteAnnouncementData(data?.id);
//                 if (response.status === 200) {
//                     showAlert(response.message, true)
//                     fetchData();
//                 } else {
//                     showAlert(response.message, false)
//                 }
//             } catch (error) {
//                 showAlert(adminMsg?.serverError, false)
//             } finally {
//                 setLoading(false);
//             }
//         }
//     };

//     const handleEdit = (announcement) => {
//         setCurrentAnnouncement(announcement);
//         setDescription(announcement.description);
//         setOpen(true);
//     };

//     const resetForm = () => {
//         setCurrentAnnouncement(null);
//         setDescription('');
//         setOpen(false);
//         setErrors({});
//     };

//     return (
//         <Box className='anouncement_page'>
//             <Box className="anouncement-head">
//                 <Typography variant="h3">All Announcements</Typography>
//                 <CustomizeBtn title='Add Announcement' onClick={handleOpen} />
//             </Box>

//             {fetching ? (
//                 <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
//                     <CircularProgress />
//                 </Box>
//             ) : announcementData && announcementData.length === 0 ? (
//                 <Typography variant="h6" sx={{ textAlign: 'center', padding: '20px' }}>
//                     No announcements available.
//                 </Typography>
//             ) : (
//                 <Box sx={{ padding: '20px 0' }}>
//                     <AdminTable
//                         data={announcementData || []}
//                         headRow={headerData}
//                         handleEdit={handleEdit}
//                         handleDelete={handleDelete}
//                         handleDetailsShow={handleDetailsShow}
//                     />
//                 </Box>
//             )}
         
//          <Reduxprovider>
//             <FormModal
//                 open={open}
//                 handleClose={handleClose}
//                 formdata={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 handleSubmit={handleFormSubmit}
//                 isEditing={currentAnnouncement ? true : false}
//                 errors={errors}
//                 handleDetailsShow={handleDetailsShow}
//                 loading={loading}
//                 showDetails={showDetails}
//                 type='announcement'
//             />
//          </Reduxprovider>
//             <AlertMessage open={alert.open} message={alert.message} success={alert.success} />
//         </Box>
//     );
// };

// export default AdminAnnouncement;
export default function AdminAnnouncement() {
  return null;
}

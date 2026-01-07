'use client'
import { adminMsg } from "@/common/adminApi/adminMessages"
import { deleteProfessionData, fetchProfessionData, postProfessionData, updateProfessionData } from "@/common/adminApi/professionTypesApi"
import AdminTable from "@/components/AdminRoot/AdminTable/AdminTable"
import FormModal from "@/components/AdminRoot/modalForm/FormModal"
import AlertMessage from "@/components/Alert/Alert"
import { CustomizeBtn } from "@/components/commonUiComponents/commonUiComponents"
import useAlert from "@/hook/useAlert"
import Reduxprovider from "@/redux/ReduxProvider"
import { Box, CircularProgress, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import './AdminProfessionType.css'

const headerData = [
    { title: '', keyName: 'action' },
    { title: 'Profession Title', keyName: 'professiontitle' },
    { title: 'Profession Key Name', keyName: 'professionkeyname' },
];

const formInput = [
    { label: 'Profession Title', keyName: 'professionTitle' },
    { label: 'Profession Key Name', keyName: 'professionKeyname' },
]

const AdminProfessionType = () => {
    const { alert, showAlert } = useAlert()
    const [open, setOpen] = useState(false)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showDetails, setShowDetails] = useState(false)
    const [professionForm, setProfessionForm] = useState({ professionTitle: '', professionKeyname: '' })
    const [professionData, setProfessionData] = useState([])

    // const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(true)
        setProfessionForm({
            professionTitle: '',
            professionKeyname: ''
        })
        setShowDetails(false)
    }
    const handleClose = () => {
        setOpen(false);
        resetForm();
        setShowDetails(false);
    }


    useEffect(() => {
        fetchData();
    }, []);

    const resetForm = () => {
        setProfessionForm({
            professionTitle: '',
            professionKeyname: ''
        })
        setErrors({})
        setIsEditing(false);
    };

    const fetchData = async () => {
        setFetching(true);
        try {
            const response = await fetchProfessionData();
            if (response.status === 200) {
                // await dispatch(getProfessionTypes(response.data))
                setProfessionData(response.data || []);
            } else {
                showAlert(response.message, false)
            }
        } catch (error) {
            showAlert(adminMsg?.serverError, false)
        } finally {
            setFetching(false);
        }
    };

    const handleFormChange = (e, key) => {
        setProfessionForm(prev => ({ ...prev, [key]: e.target.value }))
        setErrors(prev => ({ ...prev, [key]: '' }));
    }

    const handleDetailsShow = (data) => {
        setProfessionForm({
            id: data?.id,
            professionTitle: data?.professiontitle,
            professionKeyname: data?.professionkeyname
        });
        setOpen(true)
        setShowDetails(true)
    }

    const handleEdit = (data) => {
        setShowDetails(false)
        setProfessionForm({
            id: data?.id,
            professionTitle: data?.professiontitle,
            professionKeyname: data?.professionkeyname
        });
        setIsEditing(true);
        setOpen(true)
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;
        formInput.forEach(field => {
            const value = professionForm[field.keyName];
            if (!value || (typeof value === 'string' && value.trim() === '')) {
                newErrors[field.keyName] = `${field.label} is required`;
                isValid = false;
            }
        });
        setErrors(newErrors);
        return isValid;
    }

    const handleFormSubmit = async () => {
        if (!validateForm()) {
            return
        }
        setLoading(true);
        try {
            const payload = {
                professionTitle: professionForm?.professionTitle,
                professionKeyname: professionForm?.professionKeyname
            };

            let response;
            if (isEditing) {
                response = await updateProfessionData(professionForm.id, payload);
            } else {
                response = await postProfessionData(payload);
            }

            if (response.success) {
                showAlert(response.message, true)
                fetchData();
            } else {
                showAlert(response.message, false)
            }
            handleClose();
        } catch (error) {
            showAlert(adminMsg?.serverError, false);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (data) => {
        if (window.confirm("Are you sure you want to delete this Profession?")) {
            try {
                const response = await deleteProfessionData(data?.id);
                if (response.success) {
                    showAlert(response.message, true)
                    fetchData();
                } else {
                    showAlert(response.message, false)
                }
            } catch (error) {
                showAlert(adminMsg?.serverError, false);
            }
        }
    };

    return (
        <Box className='profession_type'>
            <Box className="head-part">
                <Typography variant="h3">All Profession Types</Typography>
                <CustomizeBtn title='Add Types' onClick={handleOpen} />
            </Box>
            {
                fetching ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                        <CircularProgress />
                    </Box> :
                    professionData && professionData.length === 0 ?
                        <Typography variant="h6" sx={{ textAlign: 'center', padding: '20px' }}>
                            No Profession available.
                        </Typography>
                        :
                        <Box sx={{ padding: '20px 0' }}>
                            <AdminTable
                                data={professionData || []}
                                headRow={headerData}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                                handleDetailsShow={handleDetailsShow}
                            />
                        </Box>
            }
            <Reduxprovider>
                <FormModal
                    open={open}
                    handleClose={handleClose}
                    onChange={handleFormChange}
                    handleSubmit={handleFormSubmit}
                    formdata={professionForm}
                    loading={loading}
                    isEditing={isEditing}
                    errors={errors}
                    showDetails={showDetails}
                    allJobType = {professionData || []}
                    type='professiontype'
                />
            </Reduxprovider>
            <AlertMessage open={alert.open} message={alert.message} success={alert.success} />
        </Box>
    )
}

export default AdminProfessionType;
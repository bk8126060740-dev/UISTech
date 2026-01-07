'use client';
import { adminMsg } from "@/common/adminApi/adminMessages";
import { deleteCareerData, fetchCareerData, postCareerData, updateCareerData } from "@/common/adminApi/careerApi";
import { fetchProfessionData } from "@/common/adminApi/professionTypesApi";
import AdminTable from "@/components/AdminRoot/AdminTable/AdminTable";
import FormModal from "@/components/AdminRoot/modalForm/FormModal";
import AlertMessage from "@/components/Alert/Alert";
import { CustomizeBtn } from "@/components/commonUiComponents/commonUiComponents";
import useAlert from "@/hook/useAlert";
import Reduxprovider from "@/redux/ReduxProvider";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import './AdminCareerPage.css';

const headerData = [
    { title: '', keyName: 'action' },
    { title: 'Job Title', keyName: 'jobtitle' },
    { title: 'Company Name', keyName: 'companyname' },
    { title: 'Experience (Y)', keyName: 'experience' },
    { title: 'Vacancy', keyName: 'active_vacancy' },
    { title: 'Location', keyName: 'location' },
    { title: 'Jobs Type', keyName: 'work_type' },
    { title: 'Work Details', keyName: 'work_details' },
];

const formInput = [
    { label: "Job Vacancies", keyName: "jobVacancies" },
    { label: "Company Name", keyName: "companyName" },
    { label: "Work Experience", keyName: "workExperience" },
    { label: "Count of Vacancy", keyName: "activeVacancy" },
    { label: "Location", keyName: "location" },
    { label: "Select Work Type", keyName: "workType" },
    { label: "Job Description", keyName: "description", }
]

const AdminCareerPage = () => {
    const [careers, setCareers] = useState([]);
    const [open, setOpen] = useState(false);
    const [careerForm, setCareerForm] = useState({
        jobVacancies: '',
        companyName: '',
        workExperience: '',
        location: '',
        workType: '',
        description: '',
        activeVacancy: ''
    });
    const { alert, showAlert } = useAlert()
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({})
    const [showDetails, setShowDetails] = useState(false)
    const [professionData, setProfessionData] = useState([])

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        resetForm();
        setShowDetails(false)
    };

    const handleDetailsShow = (data) => {
        setCareerForm({
            id: data.id,
            jobVacancies: data.jobtitle,
            companyName: data.companyname,
            workExperience: data.experience,
            location: data.location,
            workType: data.work_type,
            description: data.work_details,
            activeVacancy: data?.active_vacancy
        });
        handleOpen()
        setShowDetails(true)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchProfetionTypeData = async () => {
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

    const fetchData = async () => {
        setFetching(true);
        try {
            const response = await fetchCareerData();
            if (response.status === 200) {
                setCareers(response.data || []);
                await fetchProfetionTypeData()
            } else {
                showAlert(response.message, false)
            }
        } catch (error) {
            showAlert(adminMsg?.serverError, false);
        } finally {
            setFetching(false);
        }
    };

    const handleFormChange = (e, key) => {
        const value = e.target.value;
        setCareerForm(prev => ({ ...prev, [key]: value }));
        setErrors(prev => ({ ...prev, [key]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;
        formInput.forEach(field => {
            const value = careerForm[field.keyName];
            if (field.keyName !== 'companyName' && (!value || (typeof value === 'string' && value.trim() === ''))) {
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
                jobtitle: careerForm?.jobVacancies,
                companyname: careerForm?.companyName || '',
                experience: careerForm?.workExperience,
                location: careerForm?.location,
                work_details: careerForm?.description,
                work_type: careerForm?.workType,
                active_vacancy: String(careerForm?.activeVacancy)
            };

            let response;
            if (isEditing) {
                response = await updateCareerData(careerForm.id, payload);
            } else {
                response = await postCareerData(payload);
            }

            if (response.success) {
                showAlert(response.message, true)
                fetchData();
            } else {
                showAlert(response.message, false)
            }

            handleClose();
        } catch (error) {
            showAlert(adminMsg?.serverError, false)
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setCareerForm({
            jobVacancies: '',
            companyName: '',
            workExperience: '',
            location: '',
            workType: '',
            description: '',
            activeVacancy: ''
        });
        setErrors({})
        setIsEditing(false);
    };

    const handleEdit = (data) => {
        setShowDetails(false)
        setCareerForm({
            id: data.id,
            jobVacancies: data.jobtitle,
            companyName: data.companyname,
            workExperience: data.experience,
            location: data.location,
            workType: data.work_type,
            description: data.work_details,
            activeVacancy: data?.active_vacancy
        });
        setIsEditing(true);
        handleOpen();
    };

    const handleDelete = async (data) => {
        if (window.confirm("Are you sure you want to delete this career?")) {
            try {
                const response = await deleteCareerData(data?.id);
                if (response.success) {
                    showAlert(response.message, true)
                    fetchData();
                } else {
                    showAlert(response.message, false)
                }
            } catch (error) {
                showAlert(adminMsg?.serverError, false)
            }
        }
    };

    return (
        <Box className="career-page-main">
            <Box className="career-head">
                <Typography variant="h3">All Careers</Typography>
                <CustomizeBtn title='Add Career' onClick={handleOpen} />
            </Box>
            {fetching ?
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <CircularProgress />
                </Box>
                : careers && careers.length === 0 ?
                    <Typography variant="h6" sx={{ textAlign: 'center', padding: '20px' }}>
                        No careers available.
                    </Typography>
                    :
                    <Box sx={{ padding: '20px 0' }}>
                        <AdminTable
                            data={careers || []}
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
                    formdata={careerForm}
                    loading={loading}
                    isEditing={isEditing}
                    errors={errors}
                    allJobType={professionData || []}
                    showDetails={showDetails}
                    type='career'
                />
            </Reduxprovider>
            <AlertMessage open={alert.open} message={alert.message} success={alert.success} />
        </Box>
    );
};

export default AdminCareerPage;

import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Typography, useMediaQuery } from "@mui/material"
import './FormModal.css'

const form = [
    {
        label: "Job Vacancies",
        placeholder: "Hiring for Job Vacancies",
        type: "text",
        keyName: "jobVacancies",
        inputType: "input"
    },
    {

        label: "Company Name",
        placeholder: "Enter Company Name",
        type: "text",
        keyName: "companyName",
        inputType: "input"
    },
    {

        label: "Work Experience",
        placeholder: "Select Your Work Experience",
        type: "text",
        keyName: "workExperience",
        inputType: "select"
    },
    {

        label: "Location",
        placeholder: "Add Job Locations",
        type: "text",
        keyName: "location",
        inputType: "input"
    },
    {

        label: "Count of Vacancy",
        placeholder: "Add Count of Vacancy",
        type: "number",
        keyName: "activeVacancy",
        inputType: "input"
    },
    {

        label: "Select Work Type",
        placeholder: "Choose Work Type",
        type: "text",
        keyName: "workType",
        inputType: "select"
    },
    {
        label: "Job Description",
        placeholder: "Provide Job Description",
        type: "text",
        keyName: "description",
        inputType: "textarea"
    }
]
const form2 = [
    {
        label: "Description",
        placeholder: "Add Your Job Discriptions",
        type: "text",
        keyName: "description",
        inputType: "textarea"
    }
]
const form3 = [
    {
        label: "Profession Title Name",
        placeholder: "Add Profession Title Name",
        type: "text",
        keyName: "professionTitle",
        inputType: "input"
    },
    {

        label: "Profession Key Name",
        placeholder: "Add Profession Key Name",
        type: "text",
        keyName: "professionKeyname",
        inputType: "input"
    },
]

const workexperience = [
    { title: 'Freshers', value: 'freshers' },
    { title: 'less then 1 year', value: '< 1' },
    { title: '1 year', value: '1' },
    { title: '2 year', value: '2' },
    { title: '3 year', value: '3' },
    { title: '4 year', value: '4' },
    { title: '5 year', value: '5' },
    { title: 'More then 5 year', value: '5+' },
]

const FormModal = ({ open, handleClose, onChange, formdata, handleSubmit, isEditing, errors, type, loading, showDetails, allJobType }) => {
    const small = useMediaQuery('(max-width:768px)')
    // const allJobType = useSelector(professionState)
    let modalForm = (type === 'career' ? form : type === 'professiontype' ? form3 : form2)
    const jobtype = allJobType?.map(item => ({
        title: item.professiontitle,
        value: item.professionkeyname
    }));

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                '.MuiPaper-root': {
                    width: '100%',
                    maxWidth: small ? '100%' : '60%'
                }
            }}
        >
            <DialogTitle id="alert-dialog-title">
                {
                    isEditing ? "Update Detail" : !isEditing && showDetails ? 'View Detail' : "Add Detail"
                }
            </DialogTitle>
            <DialogContent>
                <Box className='wrapperbox'>
                    {
                        modalForm.length > 0 && modalForm.map((item, i) => {
                            let options = item?.keyName === 'workExperience' ? workexperience : jobtype
                            let value = (type === 'career' || type === 'professiontype') ? formdata[item?.keyName] : formdata
                            let error = errors[item?.keyName]
                            return (
                                <Box className={`input-field ${item?.inputType === 'textarea' && 'textareaBox'}`} key={i}>
                                    <label>{item?.label}</label>
                                    {
                                        item?.inputType === 'input' ?
                                            <input type={item?.type} placeholder={item?.placeholder} value={value} onChange={(e) => onChange(e, item?.keyName)} disabled={showDetails} />
                                            : item?.inputType === 'select' ?
                                                <select value={value} className="selectInput" onChange={(e) => onChange(e, item?.keyName)} disabled={showDetails}>
                                                    <option value={''}>{item?.placeholder}</option>
                                                    {options.map((option, idx) => (
                                                        <option key={idx} value={option.value}>
                                                            {option.title}
                                                        </option>
                                                    ))}
                                                </select>
                                                :
                                                <textarea type={item?.type} placeholder={item?.placeholder} rows={7} value={value} onChange={(e) => onChange(e, item?.keyName)} disabled={showDetails} />

                                    }
                                    {errors && <Typography variant="body2" color="error">{error}</Typography>}
                                </Box>
                            )
                        })
                    }
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                {
                    !showDetails &&
                    <Button onClick={handleSubmit} disabled={loading}>
                        {loading && <CircularProgress />}
                        {isEditing ? "Update" : "Add"}
                    </Button>
                }
            </DialogActions>
        </Dialog>
    )
}

export default FormModal
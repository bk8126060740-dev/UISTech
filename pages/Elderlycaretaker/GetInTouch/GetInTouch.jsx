import SvgIcon from '@/assests/icons/SvgIcon';
import { isNumber } from '@/common/commonfunction';
import { ContainedSpace, Paragraph, SubHeading, SubHeading3, SubHeading6 } from '@/components/commonUiComponents/commonUiComponents';
import Linker from '@/components/Linker';
import { Close } from '@mui/icons-material';
import { Box, Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './GetInTouch.css';


const touch_details = [
    {
        icon: 'world',
        name: 'www.uistech.in',
        redirect: 'https://uistech.in/'
    },
    {
        icon: 'location-fill',
        name: 'STPI, patna Bihar 800013',
        redirect: 'https://maps.app.goo.gl/PYgz6Q6VHRhdzbaA8'
    },
    {
        icon: 'call-fill',
        name: '0612-2540193',
        redirect: 'tel:0612-2540193'
    },
    {
        icon: 'mail-fill',
        name: 'info@uistech.in',
        redirect: 'mailto:info@uistech.in'
    },
]

const getinTouchInputs = [
    { label: 'Your Name', type: 'text', state: 'name', lead: '' },
    { label: 'Email Address', type: 'email', state: 'email', lead: '' },
    { label: 'Phone Number', type: 'tel', state: 'mobileNumber', lead: '' },
    { label: 'Message', type: 'text', state: 'message', lead: '' }
];


const InputField = ({ label, value, onChange, error, state, lead, isError }) => {

    const handleNumber = (e, state) => {
        if (state === 'mobileNumber' && !isNumber(e)) {
            e.preventDefault();
        }
    }
    return (
        <TextField
            label={label}
            value={value}
            multiline={label === "Message"}
            onChange={(e) => onChange(e.target.value, state)}
            error={!!error}
            helperText={error}
            InputProps={{
                endAdornment: value && (
                    <Close
                        onClick={() => onChange('', state)}
                        style={{ cursor: 'pointer', color: 'var(--text-primary)' }}
                    />
                ),
            }}
            variant="standard"
            className='form-field'
            onKeyPress={(e) => handleNumber(e, state)}
        />
    )
}

const GetInTouch = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (value, input) => {
        setFormData(prev => ({ ...prev, [input]: value }));
        if (errors[input]) {
            setErrors(prev => ({ ...prev, [input]: '' }));
        }
    }

    const validateForm = (changedInput, changedValue) => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        getinTouchInputs.forEach(({ label, state }) => {
            const value = formData[state] || (state === changedInput ? changedValue : '');
            if (!value) {
                newErrors[state] = `${label} is required.`;
            } else if (state === 'email' && !emailRegex.test(value)) {
                newErrors[state] = `Please enter a valid email address.`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Form submitted successfully", formData);
            setFormData({})
        }
    }
    return (
        <Box className='getinTouch'>
            <Container maxWidth="xl">
                <ContainedSpace>
                    <Box className='contact_wrapper'>
                        <Box className='part_01'>
                            <SubHeading3>Contact US</SubHeading3>
                            <SubHeading>Get in Touch</SubHeading>
                            <Box className='mobile-wrapper'>
                                {
                                    touch_details.length > 0 && touch_details.map((item, i) => {
                                        return (
                                            <Box className='contact-details' key={i}>
                                                <Box className='contact_icon'>
                                                    <SvgIcon name={item?.icon} />
                                                </Box>
                                                <SubHeading6>
                                                    <Linker href={item?.redirect} target='_blank'>{item?.name}</Linker>
                                                </SubHeading6>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                        <Box className='part_02'>
                            <Box className='form_tab'>
                                <SubHeading6>Sent a Message</SubHeading6>
                                <Paragraph>Your loved ones deserve the best care, and we’re committed to providing it.</Paragraph>
                                {
                                    getinTouchInputs.length > 0 && getinTouchInputs.map((item, i) => {
                                        return (
                                            <InputField
                                                key={i}
                                                label={item.label}
                                                value={formData[item.state] || ''}
                                                onChange={handleChange}
                                                error={errors[item.state]}
                                                state={item?.state}
                                                lead={item?.lead}
                                            />
                                        )
                                    })
                                }
                                <Button variant='contain' onClick={() => handleSubmit()}>Send Message</Button>
                            </Box>
                        </Box>
                    </Box>
                </ContainedSpace>
            </Container>
        </Box>
    )
}

export default GetInTouch
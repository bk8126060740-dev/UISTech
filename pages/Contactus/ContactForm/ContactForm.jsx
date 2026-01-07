'use client';

import { isNumber } from '@/common/commonfunction';
import { states } from '@/common/StateBox';
import { Paragraph } from '@/components/commonUiComponents/commonUiComponents';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import './ContactForm.css';

/* ================== FORM CONFIG ================== */
const ApplyForJob = [
  { label: 'First Name', type: 'text', state: 'firstName' },
  { label: 'Last Name', type: 'text', state: 'lastName' },
  { label: 'Father Name', type: 'text', state: 'fatherName' },
  { label: 'Date of Birth', type: 'text', state: 'dob' },

  {
    label: 'Gender',
    type: 'select',
    state: 'gender',
    options: [
      { label: 'Male', value: 14 },
      { label: 'Female', value: 15 },
      { label: 'Other', value: 16 }
    ]
  },

  { label: 'Email', type: 'text', state: 'email' },
  { label: 'Mobile Number', type: 'tel', state: 'mobileNumber' },
  { label: 'Post Applying For', type: 'text', state: 'applyPost' },
  { label: 'State', type: 'dropdown', state: 'state' },
  { label: 'Experience', type: 'text', state: 'experience' },
  { label: 'Current Employer Name', type: 'text', state: 'currentEmployer' },
  { label: 'Address', type: 'text', state: 'address' },
  { label: 'Postal Code', type: 'text', state: 'postalCode' },
  { label: 'Area of Expertise', type: 'text', state: 'areaOfExpertise' },
  { label: 'Qualification', type: 'text', state: 'qualification' },
  { label: 'Upload Resume', type: 'file', state: 'resume' }
];

/* ================== FILE INPUT ================== */
const UploadField = ({ title, error, onChange, state }) => {
  const pdfRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      alert('Only PDF files allowed');
      return;
    }

    setFileName(file.name);
    onChange(file, state);
  };

  return (
    <Box className="pdfinputField">
      <Typography variant="body2">{title} (PDF)</Typography>

      <Box className="pdf-input-section">
        <Box className="pdf-input" onClick={() => pdfRef.current.click()}>
          <label className="pdf-input-label">
            {fileName || 'No File Chosen'}
          </label>
          <input
            ref={pdfRef}
            type="file"
            accept=".pdf"
            hidden
            onChange={handleFileChange}
          />
        </Box>

        <Box className="pdf-input-btn" onClick={() => pdfRef.current.click()}>
          <Paragraph>Choose File</Paragraph>
        </Box>
      </Box>

      {error && <Paragraph sx={{ color: 'red' }}>{error}</Paragraph>}
    </Box>
  );
};

/* ================== MAIN FORM ================== */
const ContactForm = ({ jobname, onSubmit, loading }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (jobname) {
      setFormData((prev) => ({ ...prev, applyPost: jobname }));
    }
  }, [jobname]);

  const handleChange = (value, field) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    ApplyForJob.forEach(({ label, state }) => {
      const value = formData[state];

      if (!value) {
        newErrors[state] = `${label} is required`;
        return;
      }

      if (state === 'firstName' && !/^[A-Za-z ]+$/.test(value)) {
        newErrors[state] = 'First name should contain only alphabets';
      }

      if (state === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
        newErrors[state] = 'Enter a valid email';
      }

      if (state === 'mobileNumber' && !/^[0-9]{10}$/.test(value)) {
        newErrors[state] = 'Enter 10 digit mobile number';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    onSubmit(formData);
  };

  return (
    <Box className="Apply-form">
      {ApplyForJob.map((item, i) => (
        <Box key={`${item.state}-${i}`} className="apply-field-wrapper">

          {item.type === 'file' ? (
            <UploadField
              title={item.label}
              error={errors[item.state]}
              onChange={handleChange}
              state={item.state}
            />
          ) : item.type === 'dropdown' ? (
            <Box className="inputField">
              <Typography variant="body2">{item.label}</Typography>
              <FormControl fullWidth error={!!errors[item.state]}>
                <Select
                  value={formData[item.state] || ''}
                  onChange={(e) => handleChange(e.target.value, item.state)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>Select State</MenuItem>
                  {states.map((s) => (
                    <MenuItem key={s.value} value={s.value}>
                      {s.title}
                    </MenuItem>
                  ))}
                </Select>
                {errors[item.state] && (
                  <FormHelperText>{errors[item.state]}</FormHelperText>
                )}
              </FormControl>
            </Box>
          ) : item.type === 'select' ? (
            <Box className="inputField">
              <Typography variant="body2">{item.label}</Typography>
              <FormControl fullWidth error={!!errors[item.state]}>
                <Select
                  value={formData[item.state] || ''}
                  onChange={(e) => handleChange(e.target.value, item.state)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>Select Gender</MenuItem>
                  {item.options.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors[item.state] && (
                  <FormHelperText>{errors[item.state]}</FormHelperText>
                )}
              </FormControl>
            </Box>
          ) : (
            <Box className="inputField">
              <Typography variant="body2">{item.label}</Typography>
              <TextField
                fullWidth
                value={formData[item.state] || ''}
                onChange={(e) => handleChange(e.target.value, item.state)}
                error={!!errors[item.state]}
                helperText={errors[item.state]}
                InputProps={{ readOnly: item.state === 'applyPost' }}
                sx={item.state === 'applyPost' ? { backgroundColor: '#f5f5f5' } : {}}
              />
            </Box>
          )}
        </Box>
      ))}

      <Button variant="outlined" onClick={handleSubmit} disabled={loading}>
        {loading ? <CircularProgress size={20} /> : 'Submit'}
      </Button>
    </Box>
  );
};

export default ContactForm;

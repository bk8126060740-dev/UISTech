'use client'
import { adminMsg } from '@/common/adminApi/adminMessages';
import AlertMessage from '@/components/Alert/Alert';
import { CustomizeBtn } from '@/components/commonUiComponents/commonUiComponents';
import useAlert from '@/hook/useAlert';
import { Box, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from '../../../assests/images/Logo.png';
import './AdminLogin.css';

const AdminLogin = ({ type }) => {
    const router = useRouter();
    const { alert, showAlert } = useAlert()
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [openForgetPassword, setOpenForgetPassword] = useState(false)
    const [searchParams, setSearchParams] = useState({ token: '', userId: '' })
    const isResetPassword = (type === 'resetpassword')

    const resetForm = () => {
        setUserId('')
        setPassword('')
        setConfirmPassword('')
        setEmail('')
        setSearchParams({ token: '', userId: '' })
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            const userId = urlParams.get('userId');
            setSearchParams({ token, userId })
        }
        // fetchAdminData()
        // handleCeateAdmin()
    }, []);

    const fetchAdminData = () => {
        try {
            axios.get('/api/auth').then((res) => {
                if (res.data.success === true) {
                    console.log(res, 'fetch data');

                }

            }).catch((error) => {
                let msg = error.response.data?.message || error.message
                showAlert(msg, false);
            })
        } catch (error) {
            // let msg = error.response.data?.message || error.message
            showAlert(adminMsg?.serverError, false);
            console.error('fetch error:', error);
        }
    }

    const handleCeateAdmin = async () => {
        try {
            if (!userId || !password) {
                showAlert('Please enter both User ID and Password.', false);
                return;
            }
            const payload = {
                userId,
                password
            }
            axios.post('/api/auth', payload).then((res) => {
                if (res.data.success === true) {
                    showAlert(res.data.message, true)
                    resetForm()
                    // localStorage.setItem('authUser', JSON.stringify(true))
                    // router.push('/admin/dashboard');
                }

            }).catch((error) => {
                let msg = error.response.data?.message || error.message
                showAlert(msg, false);
            })
        } catch (error) {
            console.error('Login error:', error);
            // let msg = error.response.data?.message || error.message
            showAlert(adminMsg?.serverError, false);
        }
    };

    const handleChange = (val, key) => {
        showAlert(false, '', false);
        if (key === 'userId') {
            setUserId(val)
        } else if (key === 'password') {
            setPassword(val)
        } else if (key === 'confirmPassword') {
            setConfirmPassword(val)
        } else {
            setEmail(val)
        }
    }

    const handleLogin = () => {
        try {
            if (!userId || !password) {
                showAlert('Please enter both User ID and Password.', false);
                return;
            }
            const payload = {
                userId,
                password
            }
            setLoading(true)
            axios.post('/api/auth/login', payload).then((res) => {
                if (res.data.success === true) {
                    let user = {
                        ...res.data.data,
                        isAuthenticated: true
                    }
                    showAlert(res.data.message, true);
                    resetForm()
                    setLoading(false)
                    sessionStorage.setItem('authUser', JSON.stringify(user))
                    router.push('/admin/announcement');
                }

            }).catch((error) => {
                let msg = error.response.data?.message || error.message
                showAlert(msg, false);
                setLoading(false)
            })
        } catch (error) {
            // let msg = error.response.data?.message || error.message
            showAlert(adminMsg?.serverError, false);
            setLoading(false)
        }
    }

    const handleToggle = () => {
        setUserId('')
        setPassword('')
        setConfirmPassword('')
        setEmail('')
        setSearchParams({ token: '', userId: '' })
        showAlert(false, '', false)
        setOpenForgetPassword(!openForgetPassword)
    }

    const handleForgotPassWord = () => {
        try {
            if (!userId || !email) {
                showAlert('Please enter both User ID and Email.', false)
                return;
            }
            const payload = {
                userId,
                email
            }
            setLoading(true)
            axios.post('/api/auth/forgotpassword', payload).then((res) => {
                if (res.data.success === true) {
                    showAlert(res.data.message, true)
                    resetForm()
                    setLoading(false)
                }

            }).catch((error) => {
                let msg = error.response.data?.message || error.message
                showAlert(msg, false);
                setLoading(false)
            })
        } catch (error) {
            // let msg = error.response.data?.message || error.message
            showAlert(adminMsg?.serverError, false);
            console.error('Send Mail error:', error);
            setLoading(false)
        }
    }

    const handleSubmitChangePassWord = () => {
        try {
            if (!password || !confirmPassword) {
                showAlert('Please enter both Password and Confirm Password.', false)
                return;
            }

            if (password !== confirmPassword) {
                showAlert('Password and Confirm Password are not Same.', false)
                return;
            }
            const payload = {
                userId: searchParams?.userId,
                token: searchParams?.token,
                password,
                confirmPassword
            }
            setLoading(true)
            axios.post('/api/auth/resetpassword', payload).then((res) => {
                if (res.data.success === true) {
                    showAlert(res.data.message, true)
                    resetForm()
                    router.push('/admin')
                    setLoading(false)
                }

            }).catch((error) => {
                let msg = error.response.data?.message || error.message
                showAlert(msg, false);
                setLoading(false)
            })
        } catch (error) {
            // let msg = error.response.data?.message || error.message
            showAlert(adminMsg?.serverError, false);
            console.error('Send Mail error:', error);
            setLoading(false)
        }
    }

    const buttonText = openForgetPassword ? 'Send' : isResetPassword ? 'Submit' : 'Login';
    const handleClick = openForgetPassword ? handleForgotPassWord : isResetPassword ? handleSubmitChangePassWord : handleLogin;
    return (
        <Box className='admin-main'>
            <Box className='admin-login'>
                <Box className='logoImage'>
                    <Image src={logo} unoptimized alt='logoWeb' />
                </Box>

                {!isResetPassword && <TextField
                    label="User ID"
                    variant="outlined"
                    value={userId}
                    onChange={(e) => handleChange(e.target.value, 'userId')}
                />}
                {openForgetPassword && !isResetPassword ?
                    <TextField
                        label="Email Id"
                        type='email'
                        variant="outlined"
                        value={email}
                        onChange={(e) => handleChange(e.target.value, 'email')}
                    />
                    :
                    <>
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => handleChange(e.target.value, 'password')}
                        />
                        {isResetPassword && <TextField
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            value={confirmPassword}
                            onChange={(e) => handleChange(e.target.value, 'confirmPassword')}
                        />}
                    </>
                }
                {!isResetPassword && <Box className='forgetPassWord'>
                    <Typography variant='body2' onClick={handleToggle}>{!openForgetPassword ? 'Forgot Password' : 'Back To Login'}</Typography>
                </Box>}
                <CustomizeBtn sx={{ width: '100%' }} onClick={handleClick} title={buttonText} loading={loading} disabled={loading} />
            </Box>
            <AlertMessage open={alert.open} message={alert.message} success={alert.success} />
        </Box>
    );
};

export default AdminLogin;
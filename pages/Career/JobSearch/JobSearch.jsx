'use client'
import SvgIcon from '@/assests/icons/SvgIcon';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import './JobSearch.css';

const JobSearch = ({onSearch, closeData}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };
    
    const handleSearchValue = () => {
      onSearch(searchValue)
    }

    return (
        <Box className='job-search'>
            <Box className='job-search-main'>
                <Box className='wrapper'>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '40px',
                        width:'100%'
                    }} className='gapping'>
                        <SvgIcon name='search' />
                        <FormControl sx={{ width: '100%', backgroundColor: 'var(--bg-white)' }} variant="filled" className='form_control'>
                            {!searchValue && <InputLabel htmlFor="filled-adornment-password">Job Title And Keyword</InputLabel>}
                            <FilledInput
                                id="filled-adornment-password"
                                type={'text'}
                                value={searchValue}
                                onChange={handleInputChange}
                                endAdornment={
                                    searchValue && (
                                        <InputAdornment position="end" sx={{
                                            background: 'transparent'
                                        }}>
                                            <IconButton
                                                onClick={() => {closeData(),setSearchValue('')}}
                                                edge="end"
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }
                            />
                        </FormControl>
                    </Box>
                    <Box>
                        <Button variant="contained" className='search-btn' onClick={handleSearchValue}>Search</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default JobSearch
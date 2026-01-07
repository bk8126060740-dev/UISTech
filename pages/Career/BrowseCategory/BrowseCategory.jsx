import SvgIcon from '@/assests/icons/SvgIcon';
import { jobCategoryIcons } from '@/common/browserCategory';
import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import './BrowseCategory.css';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import JobsDetails from './JobsDetails/JobsDetails';

import { ContainedSpace, Paragraph, SubHeading } from '@/components/commonUiComponents/commonUiComponents';
import { Close } from '@mui/icons-material';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

const BrowseCategory = ({ searchJob, jobCategory }) => {
    const [activeIndex, setActiveIndex] = useState(6)
    let checkLimit = 6
    const [modalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState(null)

    const [showCategory, setShowCategory] = useState([])

    const handleModalOpen = (item) => {
        // setData(item)
        setData(item?.data)
        setModalOpen(true)
    }

    const handleCloseModal = () => setModalOpen(false)

    const handleCategory = () => {
        if (activeIndex === checkLimit) {
            setActiveIndex(jobCategory.length)
        } else {
            setActiveIndex(checkLimit)
        }
    }

    useEffect(() => {
        if (searchJob) {
            let newArr = jobCategory.filter((item) => item.professiontitle.toLowerCase().includes(searchJob.toLowerCase()))
            // let newArr = jobCategory.filter((item) => item.jobTitle.toLowerCase().includes(searchJob.toLowerCase()))
            setShowCategory(newArr)
        } else {
            let jobAll = jobCategory.filter((item) => item.data.length > 0)
            setShowCategory(jobAll)
            // setShowCategory(jobCategory)
        }
    }, [searchJob])

    return (
        showCategory.length > 0 &&
        <Box className='browse_by_category'>
            <SubHeading>Browse by category</SubHeading>
            <Container maxWidth='xl'>
                <ContainedSpace>
                    <Grid container spacing={3}>
                        {
                            showCategory.length > 0 && showCategory.map((item, i) => {
                                if (activeIndex > i) {
                                    return (
                                        <Grid item xl={4} lg={4} md={4} xs={12} sm={6} key={i}>
                                            <Box className='category_card' onClick={() => handleModalOpen(item)}>
                                                {jobCategoryIcons && <Box className='category_icon'>
                                                    <SvgIcon name={jobCategoryIcons[i]?.icon} />
                                                </Box>}
                                                {/* <Box className='category_content'>
                                                    <Paragraph>{item?.jobTitle}</Paragraph>
                                                    <Paragraph>{item?.activeVacancy} Active Jobs</Paragraph>
                                                </Box> */}
                                                <Box className='category_content'>
                                                    <Paragraph>{item?.professiontitle}</Paragraph>
                                                    <Paragraph>{item?.data?.length} Active Jobs</Paragraph>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    )
                                }
                            })
                        }
                    </Grid>
                    {showCategory.length > checkLimit && <Box className='more_category'>
                        <Button variant='outlined' onClick={handleCategory}>
                            See {activeIndex === checkLimit ? 'More' : 'Less'} Category
                            <SvgIcon name={'down-arrow'} className={activeIndex === checkLimit ? '' : 'show-less'} />
                        </Button>
                    </Box>}
                </ContainedSpace>
            </Container>
            <JobModal
                open={modalOpen}
                handleClose={handleCloseModal}
                data={data}
            />
        </Box>
    )
}

export default BrowseCategory


const JobModal = ({ open, handleClose, data }) => {
    const desk1 = useMediaQuery('(max-width:1336px)');
    const desk2 = useMediaQuery('(max-width:992px)');
    const mobile = useMediaQuery('(max-width:576px)');

    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchValue = () => {
        console.log('SearchValue', searchValue);
        setSearchValue('')
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                '.MuiPaper-root': {
                    overflow: 'unset',
                    borderRadius: "15px",
                    maxWidth: desk2 ? '100%' : desk1 ? '70%' : '50%',
                    width: '100%',
                    margin: mobile && '12px'
                }
            }}
        >
            <DialogTitle id="job-dialog-title">
                <Box className='close_btn'>
                    <Close
                        onClick={handleClose}
                        style={{ cursor: 'pointer' }}
                    />
                </Box>
                <Typography variant='h5' className='modal-title'>{data?.jobTitle}</Typography>
                <Box className='search_box'>
                    <Box className='input_box'>
                        <TextField
                            fullWidth
                            label="Search Your Job Keywords"
                            variant="standard"
                            value={searchValue}
                            onChange={(e) => handleInputChange(e)}
                            InputProps={{
                                endAdornment: searchValue && (
                                    <Close
                                        onClick={() => setSearchValue('')}
                                        style={{ cursor: 'pointer', color: 'var(--text-primary)' }}
                                    />
                                ),
                            }}
                        />
                    </Box>
                    <Box className='icon_box' onClick={() => handleSearchValue()}>
                        <SvgIcon name={'search'} style={{ cursor: 'pointer' }} />
                    </Box>
                </Box>

            </DialogTitle>
            <DialogContent id='job-content-body' sx={{
                scrollbarColor: 'var(--text-primary) transparent'
            }}>
                <JobsDetails jobtype={data?.jobTitle} data={data} searchValue={searchValue} />
                {/* <JobsDetails jobtype={data?.jobTitle} searchValue={searchValue} /> */}
            </DialogContent>
            <DialogActions></DialogActions>
        </Dialog>
    )
}
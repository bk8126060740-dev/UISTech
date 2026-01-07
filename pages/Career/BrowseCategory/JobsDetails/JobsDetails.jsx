import SvgIcon from "@/assests/icons/SvgIcon"
import { Paragraph, SubHeading6 } from "@/components/commonUiComponents/commonUiComponents"
import ApplyforJob from "@/components/modal/ApplyforJob"
import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import './JobsDetails.css'


const json = [
    {
        jobtitle: 'Project Research Scientist ( Non Medical )',
        requirement: 'Freshers',
        category: 'Research',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Qualification & Experience:',
                list: [
                    `Doctorate/M. tech in relevant subject Candidate should have 1st class PG degree or BTech in CS/IT graduation of 4 yrs along with 2yrs experience in 2yrs R&D / teaching.`,
                ]
            },
            {
                title: 'Maximum Age Limit :40 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Lab Technician',
        requirement: '5 Years',
        category: 'Medical',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Qualification & Experience:',
                list: [
                    `12th in science + diploma ( MLT/DMLT) or 3 yrs graudate in MLT/Life science 5 Year Experience in labwork/health field work.`,
                ]
            },
            {
                title: 'Maximum Age Limit :38 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Research Scientist-I (NON MEDICAL)',
        requirement: '2 Years',
        category: 'Research',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `Post graduation / M.Sc.in Biotechnology / Microbiliogy / Biochemistry / Molecular Biology subjects.`,
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `Two Years work exp in cellular immunology / PBMCs / Cell line culture / invitro drug sensitivity assays`,
                ]
            },
            {
                title: 'Desired Qualification :',
                list: [
                    `Experience of in silico proteomics cell culture / cellular immunology / in - vitro drug sensitivity assays`,
                ]
            },
            {
                title: 'Maximum Age Limit :35 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Research Consultant',
        requirement: 'working experience in the malaria/ infectious disease field&Lab work.',
        category: 'Research',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `Ph.D. in Clinical Reasearch/ Infectious diseases(preferably malaria)field with published Papers. Or Retired government employee with requisite education qualification with pay band Rs.156600-39100 + GP6600/- at the time of retirement`,
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `working experience in the malaria/ infectious disease field&Lab work.`,
                ]
            },
            {
                title: 'Desired Qualification :',
                list: [
                    `Experience in Malaria research with clinical & molecular aspects.`,
                ]
            },
            {
                title: 'Maximum Age Limit :70 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Research Scientist-I (NON MEDICAL)',
        requirement: 'health research',
        category: 'Research',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `Post Graduate Degree in Life Sciences subject`,
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `Experience in health research`,
                ]
            },
            {
                title: 'Desired Qualification :',
                list: [
                    `Experience in health research`,
                ]
            },
            {
                title: 'Maximum Age Limit :35 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Tech Support II',
        requirement: 'Freshers',
        category: 'Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Desired Qualification',
                list: [
                    'Experience in diagnostic/health related field work',
                ]
            },
            {
                title: 'Maximum Age Limit :30 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Research Scientist I (Medical)-Medical officer/Medical Coordinator',
        requirement: 'Freshers',
        category: 'Medical',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `MBBS`,
                ]
            },
            {
                title: 'Maximum Age Limit :35 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Techical III (Project Technical officer)',
        requirement: 'Freshers',
        category: 'Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `3 yrs Graduate degree in Relevant subject + 3 years post graduate experience OR PG in relevent subject`,
                ]
            },
            {
                title: 'Maximum Age Limit :35 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Nurse - I',
        requirement: 'Freshers',
        category: 'Medical',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `2YRS Auxiliary Nursew & Midwife (ANM) course`,
                ]
            },
            {
                title: 'Maximum Age Limit :25 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Technical Support II (Lab Technician)',
        requirement: '5 Years',
        category: 'Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `12th in Science +Diploma (MLT/DMLT)`,
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `Five years experience in related subject`,
                ]
            },
            {
                title: 'Maximum Age Limit :30 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Technical support I (Field Assistant)',
        requirement: '2 Years',
        category: 'Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `10th +Diploma (MLT/DMLT)`,
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `Two years experience in releveant subject`,
                ]
            },
            {
                title: 'Maximum Age Limit :28 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Technical Support III',
        requirement: 'Virology Lab',
        category: 'Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `3YRS Graduate in relevant subject+3YRS after graduate experience OR PG in relevant subject(Microbiology/Biotechnology/virlogy/Life Sciences)`,
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `Experience in Virology Lab work`,
                ]
            },
            {
                title: 'Desired Qualification :',
                list: [
                    `M.Sc. In Microbiology/Biotechnology/virology/LifeScience`,
                    'Experience in virology related works'
                ]
            },
            {
                title: 'Maximum Age Limit :25 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Research Scientist-I (NON MEDICAL)',
        requirement: 'virology diagnosis and research',
        category: 'Research',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `1st class PG degree including integrated PG degrees OR For Engineering /IT/CS-1st class graduate degree of 4 yrs`,
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `Experience in virology diagnosis and research`,
                ]
            },
            {
                title: 'Desired Qualification :',
                list: [
                    `Doctorate or M.Tech degree in relevant subject/engineering subject with 1st class AND 2 yrs R&D/teaching experience in relevant subject`,
                ]
            },
            {
                title: 'Maximum Age Limit :40 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Lab Technician',
        requirement: '5 Years',
        category: 'Medical',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `12th in science+diploma(MLT/DMLT) OR 3 yrs graduate in MLT/life science subjects + 5 YRS labwork/health field work exp in relevant subject`,
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `5 YRS labwork in virology`,
                ]
            },
            {
                title: 'Maximum Age Limit :38 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Research Scientist II - Non Medical',
        requirement: '3 Years',
        category: 'Research',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `PG in Biochem/Biotech/Microbio/life sciences/zoology`,
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `3 yrs work exp after PG or PhD`,
                ]
            },
            {
                title: 'Desired Qualification :',
                list: [
                    `handle project independently and work exp in visceral leishmaniasis or parasitic disease is required. Molecular bio., cell biology,diagnostic markers,protein expression and purification,ELISA, blotting, bioinformatics tools techniques are req. Maintenance and working experience of team handling`,
                ]
            },
            {
                title: 'Maximum Age Limit :40 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Research Scientist-I (NON MEDICAL)',
        requirement: 'Freshers',
        category: 'Research',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `PG in Biochem/Biotech/Microbio/life sciences/zoology`,
                ]
            },
            {
                title: 'Desired Qualification :',
                list: [
                    `handle project independently and work exp in visceral leishmaniasis or parasitic disease is required. Molecular bio., cell biology,diagnostic markers,protein expression and purification,ELISA, blotting, bioinformatics tools techniques are req. Maintenance and working experience of team handling`,
                ]
            },
            {
                title: 'Maximum Age Limit :35 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Technical Support III',
        requirement: '3 Years',
        category: 'Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `3 yrs Graduate specialization in Biochem/Biotech/Microbio/life sciences/zoology OR PG in Biochem/Biotech/Microbio/life sciences/zoology`,
                ]
            },
            {
                title: 'Desired Qualification :',
                list: [
                    `3 yrs work exp in bio lab related in parasitic disease is required. Molecular bio., cell biology,diagnostic markers,protein expression and purification,ELISA, blotting, bioinformatics tools techniques`,
                ]
            },
            {
                title: 'Maximum Age Limit :35 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Tech Support II',
        requirement: '5 Years',
        category: 'Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `12th in Science+ Diploma (MLT/DMLT/Engineering or equivalent)`,
                    `3 yrs Graduate specialization in Biochem/Biotech/Microbio/life sciences/zoology`
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `5yrs exp in relevant subject( bio science lab/research lab/clinical lab)`,
                    `2 yrs work exp in bio science lab/research lab/clinical lab`
                ]
            },
            {
                title: 'Desired Qualification :',
                list: [
                    `2 yrs work exp in bio science lab/research lab/clinical lab`,
                ]
            },
            {
                title: 'Maximum Age Limit :30 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'Project Technical Support I',
        requirement: '1+ Years',
        category: 'Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Educational Qualification :',
                list: [
                    `10th + Diploma (MLT/DMLT/ITI or Equivalent )`,
                    `3 yrs Graduate specialization in Biochem/Biotech/Microbio/life sciences/zoology`
                ]
            },
            {
                title: 'Mandatory Experience :',
                list: [
                    `2 yrs work exp in bio science lab/research lab/clinical lab`,
                    `1 YRS work exp in bio science lab/research lab/clinical lab`
                ]
            },
            {
                title: 'Desired Qualification :',
                list: [
                    `More than 1 yrs work exp in bio science lab/research lab/clinical lab`,
                ]
            },
            {
                title: 'Maximum Age Limit :28 Years',
                list: [
                    'Interested Candidates can share their resume on hiring_uis@uistech.in',
                ]
            },
        ]
    },
    {
        jobtitle: 'IT BOY',
        requirement: 'Freshers',
        category: 'Non-Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Qualification & Experience:',
                list: [
                    `Atleast 10th Pass from any recognized institution/board and experience of working in Govt instution`,
                ]
            },
            {
                title: 'Category as per Bihar Labour Law Provisions:',
                list: [
                    `Skilled`,
                ]
            }
        ]
    },
    {
        jobtitle: 'STP (Sewage Treatment Plan) Operator',
        requirement: 'Freshers',
        category: 'Non-Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Qualification & Experience:',
                list: [
                    `Atleast 10th Pass from any recognized institution/board and experience of operating Sewage Treatment Plant`,
                ]
            },
            {
                title: 'Category as per Bihar Labour Law Provisions:',
                list: [
                    `Skilled`,
                ]
            }
        ]
    },
    {
        jobtitle: 'Gardner (Mali)',
        requirement: 'Freshers',
        category: 'Non-Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Qualification & Experience:',
                list: [
                    `Atleast 10th Pass from any recognized institution/board and experience of working as gardner`,
                ]
            },
            {
                title: 'Category as per Bihar Labour Law Provisions:',
                list: [
                    `Semi Skilled`,
                ]
            }
        ]
    },
    {
        jobtitle: 'Sweeper (Safaikarmi)',
        requirement: 'Freshers',
        category: 'Non-Technology',
        location: 'Bihar',
        activeJobs: '306',
        details: [
            {
                title: 'Qualification & Experience:',
                list: [
                    `Functional Literacy and experience working as sweeper in any institutions.`,
                ]
            },
            {
                title: 'Category as per Bihar Labour Law Provisions:',
                list: [
                    `Unskilled`,
                ]
            }
        ]
    },
]


const RequireList = ({ icon, text }) => {
    return (
        <Box className='job-list-use'>
            <SvgIcon name={icon} />
            <Paragraph>{text}</Paragraph>
        </Box>
    )
}

const RequireBullets = ({ data }) => {
    let title = data
    // let title = data?.title
    let list = data?.list
    return (
        <Box className='job-bullets'>
            <Paragraph>{title}</Paragraph>
            {/* <ul>
                {
                    list.map((lst, i) => {
                        return (
                            <li key={i}>{lst}</li>
                        )
                    })
                }
            </ul> */}
        </Box>
    )
}

const ViewBtn = ({ type, handleClick }) => {

    return (
        type === 'less' ?
            <Box className='jobs-view' onClick={handleClick} sx={{
                color: 'var(--text-grey)'
            }}>
                <Typography variant="body2">View Less</Typography>
                <SvgIcon name={'down-arrow'} className='rotate-icon' style={{ color: 'var(--text-grey)' }}></SvgIcon>
            </Box>
            :
            <Box className='jobs-view' onClick={handleClick} sx={{
                color: 'var(--text-primary)'
            }}>
                <Typography variant="body2">View More</Typography>
                <SvgIcon name={'down-arrow'} style={{ color: 'var(--text-primary)' }}></SvgIcon>
            </Box>
    )
}

const JobsDetails = ({ data, jobtype, searchValue }) => {
    const sm = useMediaQuery('(max-width:768px)')
    const esm = useMediaQuery('(max-width:350px)')

    const [activeIndex, setActiveIndex] = useState(null)
    const [activeData, setActiveData] = useState(null)
    const [showData, setData] = useState([])

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (item) => {
        setActiveData(item)
        setOpenModal(true)
    };
    const handleCloseModal = () => setOpenModal(false);

    const handleView = (index) => {
        setActiveIndex(index)
    }

    useEffect(() => {
        setData(data)
    }, [data]);

    useEffect(() => {
        let newArr = data?.filter((item) => item.jobtitle.toLowerCase().includes(searchValue.toLowerCase()))
        setData(newArr)
    }, [searchValue, data]);


    return (
        <Box className='apply-jobs-main'>
            {
                showData.length > 0 && showData.map((item, i) => {
                    return (
                        <>
                            {jobtype === item?.category && <Box className='job-card' key={i}>
                                <Box className='job-wrapper'>
                                    <Box className='jobs-details'>
                                        <SubHeading6>{item?.jobtitle}</SubHeading6>
                                        <Box className='requirement'>
                                            {/* <RequireList icon='briefcase' text={`${item?.requirement}`} /> */}
                                            {/* <RequireList icon='job-briefcase' text={`${item?.activeJobs} Active Jobs`} /> */}
                                            <RequireList icon='briefcase' text={`${item?.experience} ${item?.experience !== 'freshers' ? ' Year':''}`} />
                                            <RequireList icon='location-fill' text={item?.location} />
                                            <RequireList icon='job-briefcase' text={`${item?.active_vacancy} Active Jobs`} />
                                            {
                                                !sm && activeIndex !== i && <ViewBtn type='more' handleClick={() => handleView(i)} />
                                            }
                                        </Box>
                                        {activeIndex === i &&
                                            <>
                                            <RequireBullets data={item?.work_details} key={i} />
                                                {/* <Box className='required-bullets'>
                                                    {
                                                        item?.details.length > 0 && item?.details.map((item, i) => {
                                                            return (
                                                                // <RequireBullets data={item?.work_details} key={i} />
                                                                <RequireBullets data={item} key={i} />
                                                            )
                                                        })
                                                    }
                                                </Box> */}
                                                {!sm && <ViewBtn type='less' handleClick={() => handleView(null)} />}
                                            </>
                                        }

                                    </Box>
                                </Box>
                                {
                                    sm ?
                                        <Box sx={{
                                            display: "flex",
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            width: '100%',
                                            flexWrap: esm && 'wrap',
                                            padding: '0px 0 0 '
                                        }}>
                                            {
                                                activeIndex === i ?
                                                    <ViewBtn type='less' handleClick={() => handleView(null)} />
                                                    :
                                                    <ViewBtn type='more' handleClick={() => handleView(i)} />
                                            }
                                            <Box className='jobs-btn'>
                                                <Button variant="contained" onClick={() => handleOpenModal(item)}>Apply Now</Button>
                                            </Box>
                                        </Box>
                                        :
                                        <Box className='jobs-btn'>
                                            <Button variant="contained" onClick={() => handleOpenModal(item)}>Apply Now</Button>
                                        </Box>

                                }
                            </Box>}
                        </>
                    )
                })
            }
            <ApplyforJob open={openModal} handleClose={handleCloseModal} title={jobtype} subtitle={activeData?.jobtitle} />
        </Box>
    )
}

export default JobsDetails
'use client'

import SvgIcon from '@/assests/icons/SvgIcon'
import { latestJobIcon } from '@/common/latestJob'
import { ContainedSpace, Paragraph, SubHeading, SubHeading6 } from '@/components/commonUiComponents/commonUiComponents'
import ApplyforJob from '@/components/modal/ApplyforJob'
import { Box, Button, Container, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import './LatestJobPost.css'
import Link from 'next/link'

const Details = ({ icon, text }) => (
  <Box className='job-list-use'>
    <SvgIcon name={icon} />
    <Paragraph>{text}</Paragraph>
  </Box>
)

const LatestJobPost = ({ searchJob, latestJob = [] }) => {
  const [openModal, setOpenModal] = useState(false)
  const [title, setTitle] = useState('')
  const [showJobs, setShowJobs] = useState([])

  useEffect(() => {
    setShowJobs(latestJob)
  }, [latestJob])

  useEffect(() => {
    if (searchJob) {
      setShowJobs(
        latestJob.filter(job =>
          job?.Title?.toLowerCase().includes(searchJob.toLowerCase())
        )
      )
    } else {
      setShowJobs(latestJob)
    }
  }, [searchJob, latestJob])

  return (
    <Box className='latest_job_post'>
      <Container maxWidth='xl'>
        <ContainedSpace>
          <SubHeading>Latest Jobs Post</SubHeading>

          <Paragraph>
            {searchJob && showJobs.length === 0
              ? 'Search Result Not Found'
              : latestJob.length === 0
              ? 'Posts are Not Available'
              : (
                <>
                  Explore the newest opportunities.
                  &nbsp;
                  <Link href="/jobpost">
                    <Button variant="contained" size="small">
                      View All Jobs
                    </Button>
                  </Link>
                </>
              )}
          </Paragraph>

          <Grid container spacing={3}>
            {showJobs
              .sort((a, b) => new Date(b.CreatedDate) - new Date(a.CreatedDate))
              .map((item, i) => {
                if (i >= 12) return null

                const desc = item?.Description || ''
                const Experience = item?.ExperienceMin
                const ExperienceMax = item?.ExperienceMax
                const shortDesc =
                  desc.length > 140 ? desc.slice(0, 140) + '...' : desc

                return (
                  <Grid item xl={4} lg={4} md={6} sm={6} xs={12} key={item.JobId}>
                    <Box className='job_card'>
                      <Box className='iconWithApply'>
                        <SvgIcon name={latestJobIcon[i % latestJobIcon.length]?.icon} />
                        <Button
                          variant='outlined'
                          onClick={() => {
                            setTitle(item.Title)
                            setOpenModal(true)
                          }}
                        >
                          Apply Now
                        </Button>
                      </Box>

                      <SubHeading6>{item.Title}</SubHeading6>

                      <Box className='job-details'>
                        <Details
                          icon='briefcase'
                          text={
                            item.ExperienceMin !== null
                              ? `${item.ExperienceMin} - ${item.ExperienceMax} Years`
                              : 'Experience Not Specified'
                          }
                        />

 




 
                        <Details icon='location-fill' text={item.Location} />  
                      </Box>

                      <Details
                        icon='job-briefcase'
                        text={`${item.NoOfPosition} Open Positions`}
                      />

                      <Paragraph>{shortDesc}</Paragraph>
                    </Box>
                  </Grid>
                )
              })}
          </Grid>
        </ContainedSpace>
      </Container>

      <ApplyforJob
        open={openModal}
        handleClose={() => setOpenModal(false)}
        subtitle={title}
        modal="applyForJob"
      />
    </Box>
  )
}

export default LatestJobPost

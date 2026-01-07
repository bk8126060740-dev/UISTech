'use client'

import Loading from "@/app/loading"
import { adminMsg } from "@/common/adminApi/adminMessages"
import { fetchCareerData } from "@/common/adminApi/careerApi"
import AlertMessage from "@/components/Alert/Alert"
import BreadCrumsSlide from "@/components/BreadCrumsSlide/BreadCrumsSlide"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import careerBg from '../../assests/images/career-bg.jpg'

const JobSearch = dynamic(() => import("./JobSearch/JobSearch"))
const LatestJobPost = dynamic(() => import("./LatestJobPost/LatestJobPost"))

const Career = () => {
    const [searchjob, setSearchjob] = useState('')
    const [jobData, setJobData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [alert, setAlert] = useState({
        open: false,
        success: false,
        message: '',
    })

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await fetchCareerData()
            if (response.success) {
                setJobData(response.data || [])
            } else {
                setAlert({
                    open: true,
                    success: false,
                    message: response.message,
                })
            }
        } catch (error) {
            console.error('Error fetching Career:', error)
            setAlert({
                open: true,
                success: false,
                message: adminMsg?.serverError,
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleSearchValue = (value) => {
        setSearchjob(value)
    }

    const handleAlertClose = () => {
        setAlert({
            open: false,
            success: false,
            message: '',
        })
    }

    if (isLoading) return <Loading />

    return (
        <>
            <BreadCrumsSlide
                icon="career"
                image={careerBg}
                title="Career"
                description="Join our team and grow with us. Explore exciting opportunities where your skills and passion can make an impact in shaping the future."
            />

            {jobData.length > 0 && (
                <JobSearch
                    onSearch={handleSearchValue}
                    closeData={() => setSearchjob('')}
                />
            )}

            <LatestJobPost
                searchJob={searchjob}
                latestJob={jobData}
            />

            <AlertMessage
                open={alert.open}
                success={alert.success}
                message={alert.message}
                onClose={handleAlertClose}
            />
        </>
    )
}

export default Career

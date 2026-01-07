'use client'
import { Box } from '@mui/material';
import './VideoSection.css';

const videoId = '6Ul1JI4Iz-4'
const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${0}&end=${30}&autoplay=1&mute=1&loop=1&playlist=6Ul1JI4Iz-4&controls=0&cc_load_policy=0&vq=hd1080`;

const VideoSection = () => {
    return (
        <Box className='video_main'>
            <iframe
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                allow="autoplay; encrypted-media"
            />
        </Box>
    )
}

export default VideoSection
import React from 'react';
import { Box, Typography } from '@mui/material';
import './AcademicAchievement.css';

const AcademicAchievement = () => {
    const timelineData = [
        { title: 'Brief', month: 'January', description: 'Brief description for January.' },
        { title: 'Research', month: 'February', description: 'Brief description for February.' },
        { title: 'Discover', month: 'March', description: 'Brief description for March.' },
        { title: 'Design', month: 'April', description: 'Brief description for April.' },
        { title: 'Testing', month: 'May', description: 'Brief description for May.' },
        { title: 'Launch & Feedback', month: 'June', description: 'Brief description for June.' },
    ];

    return (
        <Box 
        sx={{
            backgroundColor: '#0a0a23', 
            padding:10
        }}>
            {/* DCN Journey Timeline */}
            <Typography variant="h3" sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 3 }}>DCN Journey Timeline</Typography>
            <Box 
                sx={{ 
                    position: 'relative', 
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 20,
                    width: '100%',
                    padding: '20px 0 200px 0'
                }}>
                <div className='timeline-container'>
                    {timelineData.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <div className="month">{item.month}</div>
                                <p>{item.description}</p>
                            </div>
                            <div className="timeline-dot" style={{ top: '50%' }} />
                        </div>
                    ))}
                </div>

                <div className="timeline-line"></div>
            </Box>
        </Box>
    );
};

export default AcademicAchievement;

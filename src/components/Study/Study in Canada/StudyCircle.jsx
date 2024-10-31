import React, { useState, useEffect } from 'react';
import { VictoryPie } from 'victory';
import './StudyCircle.css';
import CircleLogo from '../../../Assets/Pages/Study Permit/CircleLogo.png';
export default function StudyCircle() {
    const data = [
        { x: "Top Education", y: 1, color: '#FF6384' },
        { x: "Research\nOpportunities", y: 1, color: '#36A2EB' },
        { x: "Quality Living", y: 1, color: '#FFCE56' },
        { x: "Work Flexibility", y: 1, color: '#4BC0C0' },
        { x: "Cultural Diversity", y: 1, color: '#9966FF' },
        { x: "Global\nRecognition", y: 1, color: '#FF9F40' }
    ];

    const [dimensions, setDimensions] = useState({
        size: 350,
        innerRadius: 70,
        labelRadius: 100,
        fontSize: 13
    });


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setDimensions({
                    size: 500,
                    innerRadius: 130,
                    labelRadius: 170,
                    fontSize: 16
                });
            } else {
                setDimensions({
                    size: 350,
                    innerRadius: 90,
                    labelRadius: 110,
                    fontSize: 13
                });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='study-circle-container'>
            <div className='study-circle-header'>Why should you Study in Canada?</div>
            <div className='study-circle-circle-inner-container'>
                <img className="study-circle-logo" src={CircleLogo} />
                <svg width={dimensions.size} height={dimensions.size} className="study-circle-svg-container">
                    <circle cx={dimensions.size / 2} cy={dimensions.size / 2} r={70} fill="#C21111"
                        className="study-circle-inner-circle" />
                    <VictoryPie
                        standalone={false}
                        width={dimensions.size + 70} height={dimensions.size + 70}
                        innerRadius={dimensions.innerRadius}
                        data={data}
                        colorScale={data.map(segment => segment.color)}
                        labelRadius={dimensions.labelRadius}
                        labelPlacement="perpendicular"
                        style={{
                            labels: { fill: "white", fontSize: dimensions.fontSize, fontWeight: "bold" },
                        }}
                        padAngle={({ datum }) => 3}
                        origin={{ x: dimensions.size / 2, y: dimensions.size / 2 }}
                    />
                </svg>
            </div>
            <div className='study-cirlce-description study-cirlce-description-1'>
                <div className='study-circle-description-header'>Global Recognition: </div>
                <div className='study-circle-description-text'> Canadian qualifications are globally respected, enhancing career prospects worldwide.</div>
            </div>
            <div className='study-cirlce-description study-cirlce-description-2'>
                <div className='study-circle-description-header'>Cultural Diversity: </div>
                <div className='study-circle-description-text'> Interact with diverse cultures in Canada, fostering personal growth and understanding.</div>
            </div>
            <div className='study-cirlce-description study-cirlce-description-3'>
                <div className='study-circle-description-header'>Work Flexibility:</div>
                <div className='study-circle-description-text'>Work part-time while studying and explore full-time opportunities during breaks for valuable experience.</div>
            </div>
            <div className='study-cirlce-description study-cirlce-description-4'>
                <div className='study-circle-description-header'>Quality Living: </div>
                <div className='study-circle-description-text'>Enjoy a high standard of living with excellent healthcare, natural beauty, and recreational activities in Canada.</div>
            </div>
            <div className='study-cirlce-description study-cirlce-description-5'>
                <div className='study-circle-description-header'>Research Opportunities:</div>
                <div className='study-circle-description-text'> Engage in cutting-edge research projects at Canadian institutions, contributing to innovation and learning.</div>
            </div>
            <div className='study-cirlce-description study-cirlce-description-6'>
                <div className='study-circle-description-header'>Top Education:</div>
                <div className='study-circle-description-text'>Canada offers top-ranked universities and colleges with diverse programs for quality education..</div>
            </div>

        </div>
    );
}

import React, { useState } from 'react';
import './OnboardingTwo.css';
import onboardTwo from '../../assets/onboardtwo.png'; 
import logo from '../../assets/logo.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import avarta from '../../assets/onboardavarta.png';

const OnboardingTwo = () => {
    const navigate = useNavigate();

    const [selectedAudience, setSelectedAudience] = useState(null);

    const audience = [
        { id: 1, value: 'My team at work' },
        { id: 2, value: 'Superior(s) at work' },
        { id: 3, value: 'My classmates in school' },
        { id: 4, value: 'Customers or clients' },
        { id: 5, value: 'groups of 50+ people' },
        { id: 6, value: 'Other audience' },
    ];

    const handleAudienceSelection = (id) => {
        setSelectedAudience(id);
    };

    const savePublicSpeakingAreas = () => {
        if (selectedAudience !== null) {
            const selectedArea = audience.find(area => area.id === selectedAudience);
            console.log(selectedArea);
            navigate('/practice');
        } else {
            // Handle case where no audience is selected
            console.log("Please select an audience");
        }
    };

    return (
        <div className='onboard'>
            <div className="first-col">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="flex-column2 full-width">
                    <div className="flex-row">
                        <div className="active-blue twenty-grey"></div>
                        <div className="twenty-grey active-blue"></div>
                    </div>
                    <p>2 of 2</p>
                </div>

                <div className="flex-column2">
                    <h2>Who is your main audience when giving presentations?</h2>
                </div>
                <div className="flex-column2">
                    {audience.map((area) => (
                        <div
                            key={area.id}
                            className={`flex-row-space audience ${selectedAudience === area.id ? "light-blue-bd" : "greybd"}`}
                            onClick={() => handleAudienceSelection(area.id)}
                        >
                            <div className="flex-row">
                                <img src={avarta} alt="avarta" />
                                <label>{area.value}</label>
                            </div>
                            <FaArrowRight />
                        </div>
                    ))}
                </div>
                <div className="flex-row-space">
                    <NavLink to="/onboarding-one" btn-link>
                        <FaArrowLeft /> Back
                    </NavLink>
                    <button className='btn' onClick={savePublicSpeakingAreas}>
                        Continue <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="second-col">
                <img src={onboardTwo} alt="onboardOne" />
            </div>
        </div>
    );
};

export default OnboardingTwo;
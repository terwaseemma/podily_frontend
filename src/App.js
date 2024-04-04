import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin';
import OnboardingOne from './Pages/first_onboard/OnboardingOne';
import OnboardingTwo from './Pages/second_onboard/OnboardingTwo';
import Pathways from './Pages/pathways/Pathways';
import Practice from './Pages/practice/Practice';
import posthog from 'posthog-js'

posthog.init('phc_9Jj1Y5ehniCBiv7txH2OJCPvS1qIH5u6W4fjiwof9GI', { api_host: 'https://app.posthog.com' })

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding-one" element={<OnboardingOne />} />
        <Route path="/onboarding-two" element={<OnboardingTwo />} />
        <Route path="/pathways" element={<Pathways />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;

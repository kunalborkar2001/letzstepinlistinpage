import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./LandingPage.css"
import { Link } from 'react-router-dom';

import Navbar from '../../Components/Navbar/Navbar'


const LandingPage = () => {


  return (
    <>
      <Navbar showLogo />
      <div className="LandingPage">
        <h1 className='LandingHeading'>Get What you Love !</h1>
        <div className="allCatagories">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/banquet" ><Paper className='homePaper banquet' elevation={3} ><h2>Banquet</h2></Paper></Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/fitness" ><Paper className='homePaper fitness' elevation={3} ><h2>Fitness</h2></Paper></Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/educationinstitute" ><Paper className='homePaper education' elevation={3} ><h2>Education</h2></Paper></Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/hotels" ><Paper className='homePaper hotel' elevation={3} ><h2>Hotel</h2></Paper></Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/coworkingspaces" ><Paper className='homePaper coworking' elevation={3} ><h2>Co Working</h2></Paper></Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/realestate" ><Paper className='homePaper realestate' elevation={3} ><h2>Real Estate</h2></Paper></Link>
          </Box>
        </div>
      </div>
    </>
  )
}

export default LandingPage;

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import InputBox from '../../Components/InputBox/InputBox';
import ListCard from '../../Components/ListCard/ListCard';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BottomDrawer from '../../Components/BottomDrawer/BottomDrawer';
import Rating from '@mui/material/Rating';
import './Home.css';
import ToggleSwitch from '../../Components/ToggleSwitch/ToggleSwitch';
import { Typography } from '@mui/material';
import DealsCarousel from '../../Components/DealsCarousel/DealsCarousel';

const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className='Home'>
            <div className='HomeLeft'>
                <img className='companyLogo' src="https://www.letzstepin.com/logo13.png" alt="letzstepin" />
                <div className='BigImg'>
                    <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="kuanl" />
                </div>
                <div className='BigHead'>
                    <h1>Old jersey road 14 Lorem ipsum dolor sit.</h1>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab variant="extended" className='contact'>
                            <ConnectWithoutContactIcon sx={{ mr: 1 }} fontSize="small" />
                            Contact
                        </Fab>
                    </Box>

                </div>
                <div className="subText">
                    <p>Appartment</p>
                    <p>|</p>
                    <p>By Robbin Josson</p>
                    <div className="heart">
                        <Checkbox color='secondary' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </div>
                </div>

                <Rating name="read-only" value={4} readOnly />

                <div className='buyMore'>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab variant="extended" className='more' onClick={toggleDrawer}>
                            <ExpandMoreIcon sx={{ mr: 1 }} fontSize="small" />
                            More
                        </Fab>
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab variant="extended" className='buy'>
                            <ShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                            Buy
                        </Fab>
                    </Box>

                </div>
                <div className='right'>
                    <div className='locationCombine'>
                        <div className='location'>
                            <h1><EditLocationAltIcon />Location</h1>
                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
                            <h3>441904</h3>
                        </div>
                        <div className='iFrame'>
                            <iframe src="https://www.google.com/maps/embed?pb=!4v1707572363883!6m8!1m7!1sCAoSK0FGMVFpcE1oWFlGcFBtZXRTc29JM0N1WHNIcm5VNkprSDA5MTBNak1lVkE.!2m2!1d18.6228354!2d73.7583772!3f303.09356239173!4f-2.197604200057924!5f0.4000000000000002"
                                height='300'
                                width='400'
                                style={{ border: "0", borderRadius: "12px" }}
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title='none'
                                className='iframe'

                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className='HomeRight'>
                <div className='topDeals'>
                    <h1 className='topDealsHeading'>Top Deals</h1>
                    <DealsCarousel />
                    <div className='toggleSwitcher'>
                        <Typography component="legend" variant="button" fontSize="small">Updates</Typography>
                        <ToggleSwitch />
                    </div>
                </div>
                <div className='ListNav'>
                    <InputBox />
                </div>
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
            </div>
            {/* Render the BottomDrawer component */}
            <BottomDrawer open={isDrawerOpen} onClose={toggleDrawer} />
        </div>
    );
};

export default Home;

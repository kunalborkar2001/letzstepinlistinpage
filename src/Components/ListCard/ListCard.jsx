// ListCard.js
import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import './ListCard.css';

const ListCard = ({ listImage, ListName, ListPrice, onClick, action }) => {
    return (
        <div className="ListCard" onClick={onClick}>
            <div className="left">
                <img src={listImage} alt="kunalborkar2001@gmai.com" />
            </div>
            <div className="right">
                <h1>{ListName}</h1>
                <div className="subText">
                    <p>Appartment</p>
                    <p>|</p>
                    <p>By Robbin Josson</p>
                </div>
                <div className="details">
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li className="price">₹{ListPrice}</li>
                    </ul>
                </div>
                <div className='buttons'>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab variant="extended" className='contact' size="small" >
                            <ConnectWithoutContactIcon sx={{ mr: 1 }} fontSize="small" />
                            Contact
                        </Fab>
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 }, }}>
                        <Fab variant="extended" className='buy' size="small" >
                            <ShoppingCartIcon sx={{ mr: 1, }} fontSize="small" />
                            {action}
                        </Fab>
                    </Box>
                </div>
            </div>
            <div className="heart">
                <Checkbox color='secondary' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>
        </div>
    );
};

export default ListCard;

import React from 'react';
import Drawer from '@mui/material/Drawer';
import MasonryImageList from '../../Components/BigImageList/BigImageList';
import SocialNetwork from '../../Components/SocialNetwork/SocialNetwork';
import './BottomDrawer.css';

export default function BottomDrawer({ open, onClose }) {
  return (
    <div className='BottomDrawer'>
      <Drawer
        anchor={'bottom'}
        open={open}
        onClose={onClose}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className='drawerContent'>
          <div style={{ display: "flex", flexDirection: "row" , alignItems : "center"}}>
            <div className='masonryImageListContainer'>
              <MasonryImageList />
            </div>
            <div className='description'>
              <h2>Description</h2>
              <p>Lorem ipsum dolor sit amet,<br />
               consectetur adipiscing elit. Nulla tincidunt <br />
                purus nec ante tristique, vitae finibus magna bibendum.</p>
            </div>
          </div>
          <div className='social'>
            <SocialNetwork />
          </div>
        </div>
      </Drawer>
    </div>
  );
}

import './IntroDivider.css'

import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import amenitiesIcon from '../../Assets/amenities.png'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import deskBell from '../../Assets/desk-bell.png'
import lounge from '../../Assets/lounge.png'
import swiming from '../../Assets/swimming-pool.png'
import Tooltip from '@mui/material/Tooltip';

export default function IntroDivider({ name, icon, description }) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {icon}
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          {description}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Services
        </Typography>
        <Stack direction="row" spacing={1}>
          
          <Breadcrumbs aria-label="breadcrumb">
            <Tooltip title="Wifi" placement="top" style={{ zIndex: 999 }}>
              <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
              >
                <img className='DiverIcons' src={amenitiesIcon} sx={{ mr: 0.5 }} fontSize="inherit" alt='kunalborkar2001@gmail.com'/>
              </Typography>
            </Tooltip>
            <Tooltip title="Food" placement="top" style={{ zIndex: 999 }}>
              <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
              >
                <img className='DiverIcons' src={deskBell} sx={{ mr: 0.5 }} fontSize="inherit" alt='kunalborkar2001@gmail.com'/>

              </Typography>
            </Tooltip>

            <Tooltip title="Dining" placement="top" style={{ zIndex: 999 }}>
              <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
              >
                <img className='DiverIcons' src={lounge} sx={{ mr: 0.5 }} fontSize="inherit" alt='kunalborkar2001@gmail.com'/>

              </Typography>
            </Tooltip>

            <Tooltip title="Poll" placement="top" style={{ zIndex: 999 }}>
              <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
              >
                <img className='DiverIcons' src={swiming} sx={{ mr: 0.5 }} fontSize="inherit" alt='kunalborkar2001@gmail.com'/>
              </Typography>
            </Tooltip>
          </Breadcrumbs>
        </Stack>
      </Box>
    </Card>
  );
}

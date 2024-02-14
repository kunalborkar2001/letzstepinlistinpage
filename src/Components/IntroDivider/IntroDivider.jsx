import './IntroDivider.css';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Tooltip from '@mui/material/Tooltip';

export default function IntroDivider({ name, icon, description, amenitiesIcon, facilitiesIcon }) {
  const [iconsData, setIconsData] = useState([]);

  // Move the conditional logic to useEffect hook
  useEffect(() => {
    if (name === "Amenities") {
      setIconsData(amenitiesIcon);
    }
    if (name === "Facilities") {
      setIconsData(facilitiesIcon);
    }
  }, [name, amenitiesIcon, facilitiesIcon]);

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
            {iconsData.map((icon, index) => (
              <Tooltip key={index} title={name} placement="top" style={{ zIndex: 999 }}>
                <Typography
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="text.primary"
                >
                  <img className='DiverIcons' src={icon} sx={{ mr: 0.5 }} fontSize="inherit" alt='kunalborkar2001@gmail.com'/>
                </Typography>
              </Tooltip>
            ))}
          </Breadcrumbs>
        </Stack>
      </Box>
    </Card>
  );
}

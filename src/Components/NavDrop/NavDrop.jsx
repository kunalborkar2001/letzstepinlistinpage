import './NavDrop.css'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

export default function NavDrop() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Catagory</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Catagory"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Banquet"}><Link style={{ textDecoration: "none", color: "inherit" }} to='/banquet'>Banquet</Link></MenuItem>
                <MenuItem value={"Hotels"}><Link style={{ textDecoration: "none", color: "inherit" }} to='/hotels'>Hotels</Link></MenuItem>
                <MenuItem value={"Education Institute"}><Link style={{ textDecoration: "none", color: "inherit" }} to='/educationinstitute'>Education Institute</Link></MenuItem>
                <MenuItem value={"Co-working"}><Link style={{ textDecoration: "none", color: "inherit" }} to='/coworkingspaces'>Co-working</Link></MenuItem>
                <MenuItem value={"Fitness"}><Link style={{ textDecoration: "none", color: "inherit" }} to='/fitness'>Fitness</Link></MenuItem>
                <MenuItem value={"Real Estate"}><Link style={{ textDecoration: "none", color: "inherit" }} to='/realestate'>Real Estate</Link></MenuItem>

            </Select>
        </FormControl>
    );
}
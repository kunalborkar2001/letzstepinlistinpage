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
                <Link style={{ textDecoration: "none", color: "inherit" }} to='/banquet'><MenuItem value={"Banquet"}>Banquet</MenuItem></Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to='/hotels'><MenuItem value={"Hotels"}>Hotels</MenuItem></Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to='/educationinstitute'><MenuItem value={"Education Institute"}>Education Institute</MenuItem></Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to='/coworkingspaces'><MenuItem value={"Co-working"}>Co-working</MenuItem></Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to='/fitness'><MenuItem value={"Fitness"}>Fitness</MenuItem></Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to='/realestate'><MenuItem value={"Real Estate"}>Real Estate</MenuItem></Link>

            </Select>
        </FormControl>
    );
}
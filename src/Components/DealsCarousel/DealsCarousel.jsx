import "./DealsCarousel.css"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function DealsCarousel() {
    return (
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
            <Link to='/fitness' style={{textDecoration : "none", color : "inherit"}}>
                <Paper elevation={3} className="paper">
                    <h2>20% <span style={{ color: "green" }} >OFF</span></h2>
                    <p>At Fitness</p>
                </Paper>
            </Link>

            <Link to='/hotels' style={{textDecoration : "none", color : "inherit"}}>
                <Paper elevation={3} className="paper1" >
                    <h2>40% <span style={{ color: "green" }} >OFF</span></h2>
                    <p>on Hotel booking</p>
                </Paper>
            </Link>

            <Link to='/banquet' style={{textDecoration : "none", color : "inherit"}}>
                <Paper elevation={3} className="paper" >
                    <h2>35% <span style={{ color: "green" }} >OFF</span></h2>
                    <p>On Banquet</p>
                </Paper>
            </Link>


            <Link to='/coworkingspaces' style={{textDecoration : "none", color : "inherit"}}>
                <Paper elevation={3} className="paper">
                    <h2>25% <span style={{ color: "green" }} >OFF</span></h2>
                    <p>on Working Spaces</p>
                </Paper>
            </Link>

            <Link to='/realestate' style={{textDecoration : "none", color : "inherit"}}>
                <Paper elevation={3} className="paper1" >
                    <h2>46% <span style={{ color: "green" }} >OFF</span></h2>
                    <p>on Real-Estates booking</p>
                </Paper>
            </Link>

            <Link to='/educationinstitute' style={{textDecoration : "none", color : "inherit"}}>
                <Paper elevation={3} className="paper" >
                    <h2>12% <span style={{ color: "green" }} >OFF</span></h2>
                    <p>Education Institutes</p>
                </Paper>
            </Link>
        </Box >
    );
}

export default DealsCarousel;

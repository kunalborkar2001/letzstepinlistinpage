import "./DealsCarousel.css"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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
            <Paper elevation={3} className="paper">
                <h2>20% <span style={{ color: "green" }} >OFF</span></h2>
                <p>At Fitness</p>
            </Paper>

            <Paper elevation={3} className="paper1" >
                <h2>40% <span style={{ color: "green" }} >OFF</span></h2>
                <p>on Hotel booking</p>
            </Paper>

            <Paper elevation={3} className="paper" >
                <h2>35% <span style={{ color: "green" }} >OFF</span></h2>
                <p>On Banquet</p>
            </Paper>

        </Box>
    );
}

export default DealsCarousel;

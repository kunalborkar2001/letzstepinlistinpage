import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./ListCard.css"

const ListCard = () => {
    return (
        <div className="ListCard">
            <div className="left">
                <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=800" alt="kunalborkar2001@gmai.com" />
            </div>
            <div className="right">
                <h1>Old jersey road 14 Lorem ipsum dolor sit.</h1>
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
                        <li className="price">$20,000</li>
                    </ul>
                </div>
                <div className='buttons'>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>

                        <Fab variant="extended" className='contact'>
                            <ConnectWithoutContactIcon sx={{ mr: 1 }} />
                            Contact
                        </Fab>
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 },  }}>

                        <Fab variant="extended" className='buy'>
                            <ShoppingCartIcon sx={{ mr: 1, }} />
                            Buy
                        </Fab>
                    </Box>
                </div>
            </div>
            <div className="heart">
                <Checkbox color='secondary' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>
        </div>
    )
}

export default ListCard

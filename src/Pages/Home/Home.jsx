import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import InputBox from '../../Components/InputBox/InputBox'
import ListCard from '../../Components/ListCard/ListCard'
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <div className='HomeLeft'>
                <img className='companyLogo' src="https://www.letzstepin.com/logo13.png" alt="letzstepin" />
                <div className='BigImg'>
                    <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="kuanl" />
                </div>
                <div className='BigHead'>
                    <h1>
                        Old jersey road 14 Lorem ipsum dolor sit.
                    </h1>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>

                        <Fab variant="extended" className='contact'  >
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
                <div>
                </div>
            </div>
            <div className='HomeRight'>
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
        </div>
    )
}

export default Home
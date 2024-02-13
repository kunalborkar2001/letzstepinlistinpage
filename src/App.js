import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import { hotelData } from './Data/Hotels'
import { fitnessData } from './Data/Fitness';
import { banquetData } from "./Data/Banquet";
import { coworkingSpaceData } from "./Data/CoWorking";
import { realEstateData } from "./Data/RealEstate";
import { educationInstituteData } from "./Data/EducationInstitute";

import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path='/hotels' element={<Home Data={hotelData} />} />
        <Route path='/fitness' element={<Home Data={fitnessData} />} />
        <Route path='/banquet' element={<Home Data={banquetData} />} />
        <Route path='/coworkingspaces' element={<Home Data={coworkingSpaceData} />} />
        <Route path='/realestate' element={<Home Data={realEstateData} />} />
        <Route path='/educationinstitute' element={<Home Data={educationInstituteData} />} />
      </Routes>
    </div>
  );
}

export default App;

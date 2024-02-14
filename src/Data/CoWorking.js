import icon1 from '../Assets/amenities/amenities.png'
import icon2 from '../Assets/amenities/amenities1.png'
import icon3 from '../Assets/amenities/amenities2.png'
import icon4 from '../Assets/amenities/amenities3.png'
import icon5 from '../Assets/amenities/amenities4.png'
import icon6 from '../Assets/amenities/amenities5.png'
import icon7 from '../Assets/amenities/amenities6.png'
import icon8 from '../Assets/amenities/amenities7.png'

let coWorking1 = 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y28lMjB3b3JraW5nfGVufDB8fDB8fHww'
let coWorking2 = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y28lMjB3b3JraW5nfGVufDB8fDB8fHww'
let coWorking3 = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y28lMjB3b3JraW5nfGVufDB8fDB8fHww'
let coWorking4 = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y28lMjB3b3JraW5nfGVufDB8fDB8fHww'
let coWorking5 = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y28lMjB3b3JraW5nfGVufDB8fDB8fHww'
let coWorking6 = 'https://images.unsplash.com/photo-1520881363902-a0ff4e722963?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D'
let coWorking7 = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D'
let coWorking8 = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D'
let coWorking9 = 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D'
let coWorking10 = 'https://images.unsplash.com/photo-1522071901873-411886a10004?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D'


export const coworkingSpaceData =  [
    {
        "image_url": coWorking1,
        "name": "TechHub",
        "location": "789 Oak Avenue, Somewhereville, USA",
        "price": 350,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Conference rooms, Coffee & snacks, 24/7 access",
        "facilities": "Shared kitchen, Printing services, Lounge area",
        "amenitiesIcon": [icon2, icon3, icon4, icon1],
      "facilitiesIcon": [icon5, icon7, icon6, icon8]
    },
    {
        "image_url": coWorking2,
        "name": "Innovate CoLab",
        "location": "456 Elm Street, Anytown, USA",
        "price": 200,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Meeting rooms, Refreshments, Flexible memberships",
        "facilities": "Quiet zones, Event spaces, Mail handling",
        "amenitiesIcon": [icon3, icon1, icon2, icon4],
      "facilitiesIcon": [icon6, icon5, icon8, icon7]
    },
    {
        "image_url": coWorking3,
        "name": "Startup Central",
        "location": "101 Pine Street, Metro City, USA",
        "price": 280,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Lounge area, Snack bar, Networking events",
        "facilities": "Shared workspace, Private phone booths, Bike storage",
        "amenitiesIcon": [icon1, icon4, icon3, icon2],
      "facilitiesIcon": [icon8, icon5, icon7, icon6]
    },
    {
        "image_url": coWorking4,
        "name": "TechNest",
        "location": "222 Maple Avenue, Downtown, USA",
        "price": 400,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Conference rooms, Coffee & snacks, 24/7 access",
        "facilities": "Shared kitchen, Printing services, Lounge area",
        "amenitiesIcon": [icon4, icon1, icon3, icon2],
      "facilitiesIcon": [icon7, icon5, icon8, icon6]
    },
    {
        "image_url": coWorking5,
        "name": "Digital Den",
        "location": "777 Cedar Lane, Suburbia, USA",
        "price": 250,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Meeting rooms, Refreshments, Flexible memberships",
        "facilities": "Quiet zones, Event spaces, Mail handling",
        "amenitiesIcon": [icon3, icon4, icon2, icon1],
      "facilitiesIcon": [icon8, icon7, icon5, icon6]
    },
    {
        "image_url": coWorking6,
        "name": "Creative Hub",
        "location": "888 Walnut Drive, Riverside, USA",
        "price": 450,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Lounge area, Snack bar, Networking events",
        "facilities": "Shared workspace, Private phone booths, Bike storage",
        "amenitiesIcon": [icon2, icon4, icon1, icon3],
      "facilitiesIcon": [icon6, icon8, icon5, icon7]
    },
    {
        "image_url": coWorking7,
        "name": "InnoSpace",
        "location": "321 Birch Street, Midtown, USA",
        "price": 370,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Conference rooms, Coffee & snacks, 24/7 access",
        "facilities": "Shared kitchen, Printing services, Lounge area",
        "amenitiesIcon": [icon1, icon4, icon3, icon2],
      "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
        "image_url": coWorking8,
        "name": "TechPark",
        "location": "555 Pinecone Boulevard, Countryside, USA",
        "price": 220,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Meeting rooms, Refreshments, Flexible memberships",
        "facilities": "Quiet zones, Event spaces, Mail handling",
        "amenitiesIcon": [icon3, icon2, icon4, icon1],
      "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": coWorking9,
        "name": "CodeCamp",
        "location": "999 Oakwood Avenue, Lakeside, USA",
        "price": 430,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Lounge area, Snack bar, Networking events",
        "facilities": "Shared workspace, Private phone booths, Bike storage",
        "amenitiesIcon": [icon4, icon2, icon3, icon1],
      "facilitiesIcon": [icon7, icon8, icon5, icon6]
    },
    {
        "image_url": coWorking10,
        "name": "InnoHub",
        "location": "444 Chestnut Lane, Harbor City, USA",
        "price": 320,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Conference rooms, Coffee & snacks, 24/7 access",
        "facilities": "Shared kitchen, Printing services, Lounge area",
        "amenitiesIcon": [icon1, icon2, icon4, icon3],
      "facilitiesIcon": [icon5, icon8, icon6, icon7]
    },
    {
        "image_url": coWorking1,
        "name": "Startup Studio",
        "location": "777 Spruce Street, Mountainside, USA",
        "price": 270,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Meeting rooms, Refreshments, Flexible memberships",
        "facilities": "Quiet zones, Event spaces, Mail handling",
        "amenitiesIcon": [icon3, icon1, icon4, icon2],
      "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": coWorking2,
        "name": "Digital Oasis",
        "location": "666 Willow Drive, Coastal Town, USA",
        "price": 190,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Lounge area, Snack bar, Networking events",
        "facilities": "Shared workspace, Private phone booths, Bike storage",
        "amenitiesIcon": [icon1, icon4, icon2, icon3],
      "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": coWorking3,
        "name": "Innovate Haven",
        "location": "888 Elmwood Avenue, Riverside, USA",
        "price": 390,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Conference rooms, Coffee & snacks, 24/7 access",
        "facilities": "Shared kitchen, Printing services, Lounge area",
        "amenitiesIcon": [icon2, icon3, icon1, icon4],
      "facilitiesIcon": [icon7, icon6, icon8, icon5]
    },
    {
        "image_url": coWorking4,
        "name": "CodeCampus",
        "location": "111 Cedar Avenue, Bay City, USA",
        "price": 460,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Meeting rooms, Refreshments, Flexible memberships",
        "facilities": "Quiet zones, Event spaces, Mail handling",
        "amenitiesIcon": [icon4, icon3, icon1, icon2],
      "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": coWorking5,
        "name": "Creative Loft",
        "location": "222 Oak Lane, Lakeside, USA",
        "price": 280,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Lounge area, Snack bar, Networking events",
        "facilities": "Shared workspace, Private phone booths, Bike storage",
        "amenitiesIcon": [icon1, icon4, icon2, icon3],
      "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
        "image_url": coWorking6,
        "name": "TechVille",
        "location": "333 Maple Street, Suburbia, USA",
        "price": 370,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Conference rooms, Coffee & snacks, 24/7 access",
        "facilities": "Shared kitchen, Printing services, Lounge area",
        "amenitiesIcon": [icon1, icon2, icon4, icon3],
      "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
        "image_url": coWorking7,
        "name": "Startup Station",
        "location": "777 Birch Lane, Downtown, USA",
        "price": 330,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Meeting rooms, Refreshments, Flexible memberships",
        "facilities": "Quiet zones, Event spaces, Mail handling",
        "amenitiesIcon": [icon1, icon3, icon4, icon2],
      "facilitiesIcon": [icon7, icon6, icon8, icon5]
    },
    {
        "image_url": coWorking8,
        "name": "InnoNest",
        "location": "444 Pine Street, Coastal Town, USA",
        "price": 290,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Lounge area, Snack bar, Networking events",
        "facilities": "Shared workspace, Private phone booths, Bike storage",
        "amenitiesIcon": [icon4, icon1, icon2, icon3],
      "facilitiesIcon": [icon6, icon5, icon7, icon8]
    },
    {
        "image_url": coWorking9,
        "name": "TechDen",
        "location": "999 Walnut Avenue, Harbor City, USA",
        "price": 230,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Conference rooms, Coffee & snacks, 24/7 access",
        "facilities": "Shared kitchen, Printing services, Lounge area",
        "amenitiesIcon": [icon2, icon4, icon1, icon3],
      "facilitiesIcon": [icon5, icon8, icon7, icon6]
    },
    {
        "image_url": coWorking10,
        "name": "Creative Corner",
        "location": "666 Elm Lane, Mountainside, USA",
        "price": 420,
        "type": "Co-Working Space",
        "action": "Book",
        "amenities": "High-speed Wi-Fi, Meeting rooms, Refreshments, Flexible memberships",
        "facilities": "Quiet zones, Event spaces, Mail handling",
        "amenitiesIcon": [icon4, icon3, icon1, icon2],
      "facilitiesIcon": [icon8, icon6, icon5, icon7]
    }
];
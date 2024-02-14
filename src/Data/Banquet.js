import icon1 from '../Assets/amenities/amenities.png'
import icon2 from '../Assets/amenities/amenities1.png'
import icon3 from '../Assets/amenities/amenities2.png'
import icon4 from '../Assets/amenities/amenities3.png'
import icon5 from '../Assets/amenities/amenities4.png'
import icon6 from '../Assets/amenities/amenities5.png'
import icon7 from '../Assets/amenities/amenities6.png'
import icon8 from '../Assets/amenities/amenities7.png'

let  banquet1 = "https://images.unsplash.com/photo-1572319663329-ac47c4efdef0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFucXVldHxlbnwwfHwwfHx8MA%3D%3D"
let  banquet2 = 'https://images.unsplash.com/photo-1561593367-66c79c2294e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbnF1ZXR8ZW58MHx8MHx8fDA%3D'
let  banquet3 = 'https://plus.unsplash.com/premium_photo-1661774645265-ce387923cb5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbnF1ZXR8ZW58MHx8MHx8fDA%3D'
let  banquet4 = 'https://images.unsplash.com/photo-1542665952-14513db15293?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbnF1ZXR8ZW58MHx8MHx8fDA%3D'
let  banquet5 = 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbnF1ZXR8ZW58MHx8MHx8fDA%3D'
let  banquet6 = 'https://images.unsplash.com/photo-1484156818044-c040038b0719?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFucXVldHxlbnwwfHwwfHx8MA%3D%3D'
let  banquet7 = 'https://images.unsplash.com/photo-1624763149686-1893acf73092?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFucXVldHxlbnwwfHwwfHx8MA%3D%3D'
let  banquet8 = 'https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFucXVldHxlbnwwfHwwfHx8MA%3D%3D'
let  banquet9 = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFucXVldHxlbnwwfHwwfHx8MA%3D%3D'
let  banquet10 = 'https://plus.unsplash.com/premium_photo-1661405720585-d2a451c77724?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFucXVldHxlbnwwfHwwfHx8MA%3D%3D'
// import icon9 from '../Assets/amenities/amenities8.png'


export const banquetData = [
    {
      "image_url": banquet1,
      "name": "Elegant Ballroom",
      "location": "789 Oak Avenue, Somewhereville, USA",
      "price": 3500,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Exquisite decorations, Professional staff, State-of-the-art audiovisual equipment",
      "facilities": "Spacious Dance Floor, Luxurious Bridal Suite, Outdoor Patio Area",
      "amenitiesIcon": [icon2, icon3, icon4, icon1],
      "facilitiesIcon": [icon5, icon7, icon6, icon8]
    },
    {
      "image_url": banquet2,
      "name": "Grand Hall",
      "location": "456 Elm Street, Anytown, USA",
      "price": 1500,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Elegant decor, On-site catering, High-quality sound system",
      "facilities": "Banquet tables, Dance floor, Bar area",
      "amenitiesIcon": [icon3, icon1, icon2, icon4],
      "facilitiesIcon": [icon6, icon5, icon8, icon7]
    },
    {
      "image_url": banquet3,
      "name": "Seaside Banquet",
      "location": "101 Pine Street, Metro City, USA",
      "price": 2800,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Oceanfront views, Outdoor ceremony space, Gourmet catering options",
      "facilities": "Spacious ballroom, Patio seating, Bridal suite",
      "amenitiesIcon": [icon1, icon4, icon3, icon2],
      "facilitiesIcon": [icon8, icon5, icon7, icon6]
    },
    {
      "image_url": banquet4,
      "name": "Mountain View Banquet",
      "location": "222 Maple Avenue, Downtown, USA",
      "price": 4200,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Scenic mountain views, Customizable lighting, Experienced event planners",
      "facilities": "Grand ballroom, Outdoor terrace, Private dressing rooms",
      "amenitiesIcon": [icon4, icon1, icon3, icon2],
      "facilitiesIcon": [icon7, icon5, icon8, icon6]
    },
    {
      "image_url": banquet5,
      "name": "Urban Elegance",
      "location": "777 Cedar Lane, Suburbia, USA",
      "price": 2900,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Modern decor, Flexible event spaces, Full-service catering",
      "facilities": "Contemporary ballroom, Lounge area, Audiovisual equipment",
      "amenitiesIcon": [icon3, icon4, icon2, icon1],
      "facilitiesIcon": [icon8, icon7, icon5, icon6]
    },
    {
      "image_url": banquet6,
      "name": "Riverside Celebration",
      "location": "888 Walnut Drive, Riverside, USA",
      "price": 4800,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Scenic riverfront views, Outdoor ceremony space, Gourmet cuisine",
      "facilities": "Spacious banquet hall, Outdoor patio, Bridal suite",
      "amenitiesIcon": [icon2, icon4, icon1, icon3],
      "facilitiesIcon": [icon6, icon8, icon5, icon7]
    },
    {
      "image_url": banquet7,
      "name": "Cityscape Banquet",
      "location": "321 Birch Street, Midtown, USA",
      "price": 3700,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Panoramic city views, Elegant decor, Full-service event planning",
      "facilities": "Versatile event spaces, Rooftop terrace, Modern audiovisual equipment",
      "amenitiesIcon": [icon1, icon4, icon3, icon2],
      "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
      "image_url": banquet8,
      "name": "Tranquil Retreat",
      "location": "555 Pinecone Boulevard, Countryside, USA",
      "price": 2000,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Peaceful countryside setting, Outdoor ceremony space, Customized menus",
      "facilities": "Rustic banquet hall, Outdoor gazebo, Bridal changing room",
      "amenitiesIcon": [icon3, icon2, icon4, icon1],
      "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
      "image_url": banquet9,
      "name": "Lakeside Oasis",
      "location": "999 Oakwood Avenue, Lakeside, USA",
      "price": 4300,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Spectacular lakeside views, Outdoor ceremony space, Fine dining options",
      "facilities": "Elegant banquet hall, Lakeside terrace, Bridal suite",
      "amenitiesIcon": [icon4, icon2, icon3, icon1],
      "facilitiesIcon": [icon7, icon8, icon5, icon6]
    },
    {
      "image_url": banquet10,
      "name": "Harbor Lights Banquet",
      "location": "444 Chestnut Lane, Harbor City, USA",
      "price": 3200,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Scenic harbor views, Flexible event spaces, Professional staff",
      "facilities": "Spacious ballroom, Harborfront patio, Bridal suite",
      "amenitiesIcon": [icon1, icon2, icon4, icon3],
      "facilitiesIcon": [icon5, icon8, icon6, icon7]
    },
    {
      "image_url": banquet1,
      "name": "Mountain Ridge Banquet",
      "location": "777 Spruce Street, Mountainside, USA",
      "price": 2500,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Picturesque mountain setting, Customizable decor, Personalized service",
      "facilities": "Mountain-view ballroom, Outdoor terrace, Bridal suite",
      "amenitiesIcon": [icon3, icon1, icon4, icon2],
      "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
      "image_url": banquet2,
      "name": "Coastal Banquet Hall",
      "location": "666 Willow Drive, Coastal Town, USA",
      "price": 1700,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Ocean-inspired decor, Fresh seafood menu, Beachfront location",
      "facilities": "Spacious banquet hall, Outdoor patio, Bridal dressing room",
      "amenitiesIcon": [icon1, icon4, icon2, icon3],
      "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
      "image_url": banquet3,
      "name": "Riverside Banquet Resort",
      "location": "888 Elmwood Avenue, Riverside, USA",
      "price": 3900,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Tranquil riverside setting, Elegant event spaces, Gourmet cuisine",
      "facilities": "Versatile banquet rooms, Outdoor terrace, Bridal suite",
      "amenitiesIcon": [icon2, icon3, icon1, icon4],
      "facilitiesIcon": [icon7, icon6, icon8, icon5]
    },
    {
      "image_url": banquet4,
      "name": "Bayfront Ballroom",
      "location": "111 Cedar Avenue, Bay City, USA",
      "price": 4500,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Breathtaking bay views, Sophisticated decor, Customizable menus",
      "facilities": "Expansive ballroom, Waterfront patio, Private bridal room",
      "amenitiesIcon": [icon4, icon3, icon1, icon2],
      "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
      "image_url": banquet10,
      "name": "Lakefront Celebration",
      "location": "222 Oak Lane, Lakeside, USA",
      "price": 2600,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Picturesque lake views, Customized event planning, Fine dining options",
      "facilities": "Beautiful banquet hall, Lakefront patio, Bridal suite",
      "amenitiesIcon": [icon1, icon4, icon2, icon3],
      "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
      "image_url": banquet7,
      "name": "Suburban Serenity",
      "location": "333 Maple Street, Suburbia, USA",
      "price": 3700,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Tranquil suburban setting, Elegant decor, Professional event coordination",
      "facilities": "Spacious banquet room, Outdoor garden, Bridal suite",
      "amenitiesIcon": [icon1, icon2, icon4, icon3],
      "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
      "image_url": banquet2,
      "name": "Downtown Delight",
      "location": "777 Birch Lane, Downtown, USA",
      "price": 3200,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Vibrant downtown location, Modern event spaces, Customized menus",
      "facilities": "Contemporary banquet hall, Rooftop terrace, Bridal suite",
      "amenitiesIcon": [icon1, icon3, icon4, icon2],
      "facilitiesIcon": [icon7, icon6, icon8, icon5]
    },
    {
      "image_url": banquet3,
      "name": "Coastal Comfort",
      "location": "444 Pine Street, Coastal Town, USA",
      "price": 2800,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Relaxed coastal ambiance, Fresh seafood cuisine, Beachfront setting",
      "facilities": "Spacious banquet hall, Ocean-view terrace, Bridal suite",
      "amenitiesIcon": [icon4, icon1, icon2, icon3],
      "facilitiesIcon": [icon6, icon5, icon7, icon8]
    },
    {
      "image_url": banquet4,
      "name": "Harbor Hideaway",
      "location": "999 Walnut Avenue, Harbor City, USA",
      "price": 2200,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Secluded harbor location, Elegant decor, Personalized service",
      "facilities": "Intimate banquet hall, Harbor-view patio, Bridal suite",
      "amenitiesIcon": [icon2, icon4, icon1, icon3],
      "facilitiesIcon": [icon5, icon8, icon7, icon6]
    },
    {
      "image_url": banquet8,
      "name": "Mountainside Manor",
      "location": "666 Elm Lane, Mountainside, USA",
      "price": 4000,
      "type": "Banquet",
      "action": "Book",
      "amenities": "Scenic mountain backdrop, Elegant event spaces, Gourmet cuisine",
      "facilities": "Mountain-view ballroom, Outdoor terrace, Bridal suite",
      "amenitiesIcon": [icon4, icon3, icon1, icon2],
      "facilitiesIcon": [icon8, icon6, icon5, icon7]
    }
  ]
  
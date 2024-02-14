import icon1 from '../Assets/amenities/amenities.png'
import icon2 from '../Assets/amenities/amenities1.png'
import icon3 from '../Assets/amenities/amenities2.png'
import icon4 from '../Assets/amenities/amenities3.png'
import icon5 from '../Assets/amenities/amenities4.png'
import icon6 from '../Assets/amenities/amenities5.png'
import icon7 from '../Assets/amenities/amenities6.png'
import icon8 from '../Assets/amenities/amenities7.png'

let hotel1 = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww'
let hotel2 = 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
let hotel3 = 'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
let hotel4 = 'https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
let hotel5 = 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
let hotel6 = 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
let hotel7 = 'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'
let hotel8 = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww'
let hotel9 = 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww'
let hotel10 = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww'
let hotel11 = 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D'


export const hotelData = [
    {
        "image_url": hotel2,
        "name": "Luxury Palace",
        "location": "789 Oak Avenue, Somewhereville, USA",
        "price": 3500,
        "type": "hotel",
        "action": "Book",
        "amenities": "Spa, Pool, Restaurant, Gym",
        "facilities": "Concierge, Room service, WiFi, Parking",
        "amenitiesIcon": [icon2, icon3, icon4, icon1],
        "facilitiesIcon": [icon5, icon7, icon6, icon8]
    },
    {
        "image_url": hotel1,
        "name": "Grand Resort",
        "location": "456 Elm Street, Anytown, USA",
        "price": 1500,
        "type": "hotel",
        "action": "Book",
        "amenities": "Beach access, Tennis court, Bar, Fitness center",
        "facilities": "Conference rooms, Laundry service, Shuttle service, 24-hour reception",
        "amenitiesIcon": [icon3, icon1, icon2, icon4],
        "facilitiesIcon": [icon6, icon5, icon8, icon7]
    },
    {
        "image_url": hotel3,
        "name": "Seaside Retreat",
        "location": "101 Pine Street, Metro City, USA",
        "price": 2800,
        "type": "hotel",
        "action": "Book",
        "amenities": "Ocean view rooms, Spa, Restaurant, Kids club",
        "facilities": "Business center, Room service, Bicycle rental, Valet parking",
        "amenitiesIcon": [icon1, icon4, icon3, icon2],
        "facilitiesIcon": [icon8, icon5, icon7, icon6]
    },
    {
        "image_url": hotel4,
        "name": "Mountain Lodge",
        "location": "222 Maple Avenue, Downtown, USA",
        "price": 4200,
        "type": "hotel",
        "action": "Book",
        "amenities": "Ski-in/ski-out, Hot tub, Fireplace, Barbecue area",
        "facilities": "Ski storage, Pet-friendly rooms, WiFi, Airport shuttle",
        "amenitiesIcon": [icon4, icon1, icon3, icon2],
        "facilitiesIcon": [icon7, icon5, icon8, icon6]
    },
    {
        "image_url": hotel5,
        "name": "Urban Escape",
        "location": "777 Cedar Lane, Suburbia, USA",
        "price": 2900,
        "type": "hotel",
        "action": "Book",
        "amenities": "City view rooms, Rooftop terrace, Lounge, Fitness center",
        "facilities": "Parking garage, Laundry facilities, Free breakfast, WiFi",
        "amenitiesIcon": [icon3, icon4, icon2, icon1],
        "facilitiesIcon": [icon8, icon7, icon5, icon6]
    },
    {
        "image_url": hotel6,
        "name": "Riverside Retreat",
        "location": "888 Walnut Drive, Riverside, USA",
        "price": 4800,
        "type": "hotel",
        "action": "Book",
        "amenities": "Riverfront views, Kayak rentals, Pool, Restaurant",
        "facilities": "Concierge, Room service, Business center, Airport transfer",
        "amenitiesIcon": [icon2, icon4, icon1, icon3],
        "facilitiesIcon": [icon6, icon8, icon5, icon7]
    },
    {
        "image_url": hotel7,
        "name": "City Lights Inn",
        "location": "321 Birch Street, Midtown, USA",
        "price": 3700,
        "type": "hotel",
        "action": "Book",
        "amenities": "City skyline views, Rooftop bar, Fitness center, Spa",
        "facilities": "Meeting rooms, Room service, Parking, WiFi",
        "amenitiesIcon": [icon1, icon4, icon3, icon2],
        "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
        "image_url": hotel8,
        "name": "Tranquil Haven",
        "location": "555 Pinecone Boulevard, Countryside, USA",
        "price": 2000,
        "type": "hotel",
        "action": "Book",
        "amenities": "Countryside views, Outdoor pool, Garden, Restaurant",
        "facilities": "Event space, Bicycle rental, Library, WiFi",
        "amenitiesIcon": [icon3, icon2, icon4, icon1],
        "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": hotel9,
        "name": "Lakeside Lodge",
        "location": "999 Oakwood Avenue, Lakeside, USA",
        "price": 4300,
        "type": "hotel",
        "action": "Book",
        "amenities": "Lakefront views, Boat rentals, Fishing dock, Lakeside restaurant",
        "facilities": "Marina, Lakeside pool, Spa services, Free parking",
        "amenitiesIcon": [icon4, icon2, icon3, icon1],
        "facilitiesIcon": [icon7, icon8, icon5, icon6]
    },
    {
        "image_url": hotel10,
        "name": "Harbor View Hotel",
        "location": "444 Chestnut Lane, Harbor City, USA",
        "price": 3200,
        "type": "hotel",
        "action": "Book",
        "amenities": "Harbor views, Beach access, Seafood restaurant, Outdoor terrace",
        "facilities": "Event space, Concierge, Room service, WiFi",
        "amenitiesIcon": [icon1, icon2, icon4, icon3],
        "facilitiesIcon": [icon5, icon8, icon6, icon7]
    },
    {
        "image_url": hotel11,
        "name": "Mountain Retreat",
        "location": "777 Spruce Street, Mountainside, USA",
        "price": 2500,
        "type": "hotel",
        "action": "Book",
        "amenities": "Mountain views, Hiking trails, Campfire area, Alpine restaurant",
        "facilities": "Ski storage, Gift shop, Pet-friendly rooms, WiFi",
        "amenitiesIcon": [icon3, icon1, icon4, icon2],
        "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": hotel3,
        "name": "Coastal Comfort",
        "location": "666 Willow Drive, Coastal Town, USA",
        "price": 1700,
        "type": "hotel",
        "action": "Book",
        "amenities": "Coastal views, Beach access, Surfing lessons, Seafood restaurant",
        "facilities": "Poolside bar, Fitness center, Business center, Parking",
        "amenitiesIcon": [icon1, icon4, icon2, icon3],
        "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": hotel6,
        "name": "Riverside Resort",
        "location": "888 Elmwood Avenue, Riverside, USA",
        "price": 3900,
        "type": "hotel",
        "action": "Book",
        "amenities": "Riverside views, Boat rentals, Pool, Riverside restaurant",
        "facilities": "Concierge, Room service, Event space, Free WiFi",
        "amenitiesIcon": [icon2, icon3, icon1, icon4],
        "facilitiesIcon": [icon7, icon6, icon8, icon5]
    },
    {
        "image_url": hotel8,
        "name": "Bayfront Inn",
        "location": "111 Cedar Avenue, Bay City, USA",
        "price": 4500,
        "type": "hotel",
        "action": "Book",
        "amenities": "Bayfront views, Marina access, Waterfront restaurant, Outdoor pool",
        "facilities": "Conference rooms, Concierge, Room service, WiFi",
        "amenitiesIcon": [icon4, icon3, icon1, icon2],
        "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": hotel10,
        "name": "Lakefront Lodge",
        "location": "222 Oak Lane, Lakeside, USA",
        "price": 2600,
        "type": "hotel",
        "action": "Book",
        "amenities": "Lakefront views, Fishing pier, Lakeside restaurant, Lakeside pool",
        "facilities": "Boat rentals, Marina, Spa, Free parking",
        "amenitiesIcon": [icon1, icon4, icon2, icon3],
        "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
        "image_url": hotel11,
        "name": "Suburban Suites",
        "location": "333 Maple Street, Suburbia, USA",
        "price": 3700,
        "type": "hotel",
        "action": "Book",
        "amenities": "Suburban views, Outdoor pool, Fitness center, Barbecue area",
        "facilities": "Business center, Laundry facilities, Free breakfast, WiFi",
        "amenitiesIcon": [icon1, icon2, icon4, icon3],
        "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
        "image_url": hotel6,
        "name": "Downtown Digs",
        "location": "777 Birch Lane, Downtown, USA",
        "price": 3200,
        "type": "hotel",
        "action": "Book",
        "amenities": "Downtown views, Urban garden, Fitness center, Rooftop bar",
        "facilities": "Meeting rooms, Room service, Valet parking, WiFi",
        "amenitiesIcon": [icon1, icon3, icon4, icon2],
        "facilitiesIcon": [icon7, icon6, icon8, icon5]
    },
    {
        "image_url": hotel11,
        "name": "Coastal Comfort",
        "location": "444 Pine Street, Coastal Town, USA",
        "price": 2800,
        "type": "hotel",
        "action": "Book",
        "amenities": "Coastal views, Beach access, Seafood restaurant, Outdoor pool",
        "facilities": "Event space, Concierge, Room service, WiFi",
        "amenitiesIcon": [icon4, icon1, icon2, icon3],
        "facilitiesIcon": [icon6, icon5, icon7, icon8]
    },
    {
        "image_url": hotel5,
        "name": "Harbor Hideaway",
        "location": "999 Walnut Avenue, Harbor City, USA",
        "price": 2200,
        "type": "hotel",
        "action": "Book",
        "amenities": "Harbor views, Beach access, Watersports rentals, Harborfront restaurant",
        "facilities": "Spa services, Fitness center, Business center, Parking",
        "amenitiesIcon": [icon2, icon4, icon1, icon3],
        "facilitiesIcon": [icon5, icon8, icon7, icon6]
    },
    {
        "image_url": hotel8,
        "name": "Mountainside Manor",
        "location": "666 Elm Lane, Mountainside, USA",
        "price": 4000,
        "type": "hotel",
        "action": "Book",
        "amenities": "Mountain views, Hiking trails, Alpine restaurant, Outdoor pool",
        "facilities": "Event space, Concierge, Room service, WiFi",
        "amenitiesIcon": [icon4, icon3, icon1, icon2],
        "facilitiesIcon": [icon8, icon6, icon5, icon7]
    }
];

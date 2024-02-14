import icon1 from '../Assets/amenities/amenities.png'
import icon2 from '../Assets/amenities/amenities1.png'
import icon3 from '../Assets/amenities/amenities2.png'
import icon4 from '../Assets/amenities/amenities3.png'
import icon5 from '../Assets/amenities/amenities4.png'
import icon6 from '../Assets/amenities/amenities5.png'
import icon7 from '../Assets/amenities/amenities6.png'
import icon8 from '../Assets/amenities/amenities7.png'

let fitness1 = "https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D"
let fitness2 = "https://images.unsplash.com/photo-1679679008578-e3b6406bdb47?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D"
let fitness3 = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
let fitness4 = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
let fitness5 = "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
let fitness6 = "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
let fitness7 = "https://plus.unsplash.com/premium_photo-1672280783572-4a254a8e71d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
let fitness8 = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
let fitness9 = "https://images.unsplash.com/photo-1535743686920-55e4145369b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
let fitness10 = "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"


export const fitnessData = [
    {
        "image_url": fitness1,
        "name": "Muscle Haven",
        "location": "789 Oak Avenue, Somewhereville, USA",
        "price": 3500,
        "type": "fitness",
        "action": "Book",
        "amenities": "Personal training, Group classes, Cardio equipment, Strength machines",
        "facilities": "Locker rooms, Showers, Sauna, Juice bar",
        "amenitiesIcon": [icon2, icon3, icon4, icon1],
        "facilitiesIcon": [icon5, icon7, icon6, icon8]

    },
    {
        "image_url": fitness2,
        "name": "FitZone X",
        "location": "456 Elm Street, Anytown, USA",
        "price": 1500,
        "type": "fitness",
        "action": "Book",
        "amenities": "Yoga studio, Pilates classes, Indoor cycling, Functional training area",
        "facilities": "Steam room, Towel service, Smoothie bar, Massage therapy",
        "amenitiesIcon": [icon3, icon1, icon2, icon4],
        "facilitiesIcon": [icon6, icon5, icon8, icon7]
    },
    {
        "image_url": fitness3,
        "name": "Peak Performance Palace",
        "location": "101 Pine Street, Metro City, USA",
        "price": 2800,
        "type": "fitness",
        "action": "Book",
        "amenities": "Sports performance training, HIIT workouts, Swimming pool, Cross-training area",
        "facilities": "Physiotherapy clinic, Nutrition counseling, Pro shop, Lounge area",
        "amenitiesIcon": [icon1, icon4, icon3, icon2],
        "facilitiesIcon": [icon8, icon5, icon7, icon6]
    },
    {
        "image_url": fitness4,
        "name": "Iron Temple",
        "location": "222 Maple Avenue, Downtown, USA",
        "price": 4200,
        "type": "fitness",
        "action": "Book",
        "amenities": "Powerlifting platforms, Strongman equipment, Boxing ring, Climbing wall",
        "facilities": "Protein bar, Ice bath, Physiotherapy room, WiFi lounge",
        "amenitiesIcon": [icon4, icon1, icon3, icon2],
        "facilitiesIcon": [icon7, icon5, icon8, icon6]
    },
    {
        "image_url": fitness5,
        "name": "Eternal Fitness",
        "location": "777 Cedar Lane, Suburbia, USA",
        "price": 2900,
        "type": "fitness",
        "action": "Book",
        "amenities": "Treadmills, Elliptical trainers, Free weights, Group fitness studio",
        "facilities": "Massage chairs, Nutrition bar, WiFi zone, Childcare center",
        "amenitiesIcon": [icon3, icon4, icon2, icon1],
        "facilitiesIcon": [icon8, icon7, icon5, icon6]
    },
    {
        "image_url": fitness6,
        "name": "Powerhouse Arena",
        "location": "888 Walnut Drive, Riverside, USA",
        "price": 4800,
        "type": "fitness",
        "action": "Book",
        "amenities": "Olympic lifting platforms, Functional fitness area, Indoor track, Boxing area",
        "facilities": "Sports therapy clinic, Healthy cafe, Lounge area, Retail store",
        "amenitiesIcon": [icon2, icon4, icon1, icon3],
        "facilitiesIcon": [icon6, icon8, icon5, icon7]
    },
    {
        "image_url": fitness7,
        "name": "Elite Fitness Club",
        "location": "321 Birch Street, Midtown, USA",
        "price": 3700,
        "type": "fitness",
        "action": "Book",
        "amenities": "Basketball court, Volleyball court, Racquetball court, Indoor soccer field",
        "facilities": "Pro shop, Snack bar, Childcare center, Meeting rooms",
        "amenitiesIcon": [icon1, icon4, icon3, icon2],
        "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
        "image_url": fitness8,
        "name": "Champion Fitness",
        "location": "555 Pinecone Boulevard, Countryside, USA",
        "price": 2000,
        "type": "fitness",
        "action": "Book",
        "amenities": "Cardio theater, Functional training area, Group exercise studio, Yoga classes",
        "facilities": "Steam room, Protein shake bar, WiFi lounge, Retail store",
        "amenitiesIcon": [icon3, icon2, icon4, icon1],
        "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": fitness9,
        "name": "FlexZone Gym",
        "location": "999 Oakwood Avenue, Lakeside, USA",
        "price": 4300,
        "type": "fitness",
        "action": "Book",
        "amenities": "HIIT classes, Strength training area, Cardio machines, Spin studio",
        "facilities": "Massage therapy, Nutrition counseling, Sauna, Lounge area",
        "amenitiesIcon": [icon4, icon2, icon3, icon1],
        "facilitiesIcon": [icon7, icon8, icon5, icon6]
    },
    {
        "image_url": fitness10,
        "name": "Body Evolution",
        "location": "444 Chestnut Lane, Harbor City, USA",
        "price": 3200,
        "type": "fitness",
        "action": "Book",
        "amenities": "Weight machines, Cardio equipment, Group fitness classes, Personal training",
        "facilities": "Smoothie bar, Yoga studio, Stretching area, WiFi lounge",
        "amenitiesIcon": [icon1, icon2, icon4, icon3],
        "facilitiesIcon": [icon5, icon8, icon6, icon7]
    },
    {
        "image_url": fitness5,
        "name": "Strength Central",
        "location": "777 Spruce Street, Mountainside, USA",
        "price": 2500,
        "type": "fitness",
        "action": "Book",
        "amenities": "Barbell training, Powerlifting area, CrossFit workouts, Kettlebell classes",
        "facilities": "Sauna, Nutrition bar, Massage therapy, Lounge area",
        "amenitiesIcon": [icon3, icon1, icon4, icon2],
        "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": fitness3,
        "name": "Fit4Life",
        "location": "666 Willow Drive, Coastal Town, USA",
        "price": 1700,
        "type": "fitness",
        "action": "Book",
        "amenities": "Zumba classes, TRX training, Circuit training, Boot camp",
        "facilities": "Jacuzzi, Juice bar, Sports massage, WiFi lounge",
        "amenitiesIcon": [icon1, icon4, icon2, icon3],
        "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": fitness2,
        "name": "Gymfinity",
        "location": "888 Elmwood Avenue, Riverside, USA",
        "price": 3900,
        "type": "fitness",
        "action": "Book",
        "amenities": "Indoor pool, Basketball court, Indoor track, Spinning studio",
        "facilities": "Smoothie bar, Sauna, Massage therapy, WiFi lounge",
        "amenitiesIcon": [icon2, icon3, icon1, icon4],
        "facilitiesIcon": [icon7, icon6, icon8, icon5]
    },
    {
        "image_url": fitness7,
        "name": "CrossFit Central",
        "location": "111 Cedar Avenue, Bay City, USA",
        "price": 4500,
        "type": "fitness",
        "action": "Book",
        "amenities": "CrossFit workouts, Olympic lifting area, Gymnastics training, Rowing machines",
        "facilities": "Pro shop, Protein shake bar, Lounge area, WiFi zone",
        "amenitiesIcon": [icon4, icon3, icon1, icon2],
        "facilitiesIcon": [icon6, icon8, icon7, icon5]
    },
    {
        "image_url": fitness5,
        "name": "Pump & Run",
        "location": "222 Oak Lane, Lakeside, USA",
        "price": 2600,
        "type": "fitness",
        "action": "Book",
        "amenities": "Weightlifting platforms, Cardio area, Boxing equipment, Group classes",
        "facilities": "Steam room, Smoothie bar, Massage therapy, WiFi lounge",
        "amenitiesIcon": [icon1, icon4, icon2, icon3],
        "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
        "image_url": fitness6,
        "name": "Fitness Fusion",
        "location": "333 Maple Street, Suburbia, USA",
        "price": 3700,
        "type": "fitness",
        "action": "Book",
        "amenities": "Functional training, Yoga classes, Pilates studio, Kickboxing area",
        "facilities": "Healthy cafe, Nutrition counseling, Massage therapy, WiFi zone",
        "amenitiesIcon": [icon1, icon2, icon4, icon3],
        "facilitiesIcon": [icon7, icon8, icon6, icon5]
    },
    {
        "image_url": fitness7,
        "name": "Core Strength",
        "location": "777 Birch Lane, Downtown, USA",
        "price": 3200,
        "type": "fitness",
        "action": "Book",
        "amenities": "Core conditioning, Bodyweight exercises, Stability training, Abs classes",
        "facilities": "Smoothie bar, Sauna, Massage therapy, WiFi lounge",
        "amenitiesIcon": [icon1, icon3, icon4, icon2],
        "facilitiesIcon": [icon7, icon6, icon8, icon5]
    },
    {
        "image_url": fitness8,
        "name": "Xtreme Fitness",
        "location": "444 Pine Street, Coastal Town, USA",
        "price": 2800,
        "type": "fitness",
        "action": "Book",
        "amenities": "Boot camp, High-intensity workouts, Strength training, Circuit classes",
        "facilities": "Protein shake bar, Juice bar, Lounge area, WiFi zone",
        "amenitiesIcon": [icon4, icon1, icon2, icon3],
        "facilitiesIcon": [icon6, icon5, icon7, icon8]
    },
    {
        "image_url": fitness9,
        "name": "Endurance Emporium",
        "location": "999 Walnut Avenue, Harbor City, USA",
        "price": 2200,
        "type": "fitness",
        "action": "Book",
        "amenities": "Endurance training, Marathon coaching, Triathlon preparation, Cycling classes",
        "facilities": "Steam room, Smoothie bar, Massage therapy, WiFi lounge",
        "amenitiesIcon": [icon2, icon4, icon1, icon3],
        "facilitiesIcon": [icon5, icon8, icon7, icon6]
    },
    {
        "image_url": fitness10,
        "name": "GymOasis",
        "location": "666 Elm Lane, Mountainside, USA",
        "price": 4000,
        "type": "fitness",
        "action": "Book",
        "amenities": "Fitness assessment, Personalized workouts, Group fitness classes, Nutrition counseling",
        "facilities": "Healthy cafe, Sauna, Massage therapy, WiFi zone",
        "amenitiesIcon": [icon4, icon3, icon1, icon2],
        "facilitiesIcon": [icon8, icon6, icon5, icon7]
    }
];

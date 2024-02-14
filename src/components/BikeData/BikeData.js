import PCX from "../../assets/PCX.png";
import Tmax from "../../assets/Tmax.png";
import XADV from "../../assets/XADV.png";
import Xmaxx from "../../assets/Xmaxx.png";
import DirtBikeKawasaki from "../../assets/Dirt-Bike-Kawasaki.png";
import Harley from "../../assets/Harley-Davidson.png";
import HondaWave from "../../assets/Honda-wave.png";
import DirtKtm from "../../assets/KTM-450-DirtBike.png";
import PCXRed from "../../assets/PCX-honda.png";
import PCXWhite from "../../assets/PCX-White.png";
import Nmax from "../../assets/Yamaha-Nmax.png";

const BikeData = [
  {
    imageSrc: PCX,
    bikeName: "PCX",
    description:
      "The PCX is a sleek and stylish scooter known for its fuel efficiency and smooth ride. It's powered by a 150cc engine, offering a perfect balance of performance and economy. With its comfortable seating and ample storage space, the PCX is ideal for urban commuting and short trips around town.",
    price: 350,
    cc: 150,

    seatHeight: "760mm",
    wheelbase: "1310mm",
    engineType: "Liquid-cooled, 4-stroke, SOHC, single-cylinder",
    cylinderArrangement: "Single cylinder",
    maxHorsepower: "11.1 kW (15.1 PS) @ 8000 rpm",
    lubricationSystem: "Force-feed lubrication, wet sump",
    engineOilCapacity: "1.0 L",
    fuelTankCapacity: "6.6 L",
    steeringAngle: "N/A",
    brakeFront: "Hydraulic disc brake",
    brakeBack: "Hydraulic disc brake",
    headlight: "LED",
    turnSignalLightFront: "LED",
    maxSpeed: "100km/h",
  },
  {
    imageSrc: Tmax,
    bikeName: "Tmax",
    description:
      "The Tmax is a high-performance maxi-scooter designed for both urban commuting and longer journeys. It boasts a powerful 530cc engine, delivering exceptional acceleration and top speed. With its advanced features and comfortable riding position, the Tmax offers riders the perfect blend of power, comfort, and agility for conquering city streets and highways alike.",
    price: 1400,
    cc: 530,

    seatHeight: "800mm",
    wheelbase: "1580mm",
    engineType: "Liquid-cooled, 4-stroke, DOHC, twin-cylinder",
    cylinderArrangement: "Twin cylinder",
    maxHorsepower: "32.0 kW (43.5 PS) @ 6750 rpm",
    lubricationSystem: "Dry sump",
    engineOilCapacity: "3.4 L",
    fuelTankCapacity: "15 L",
    steeringAngle: "N/A",
    brakeFront: "Hydraulic dual disc brake",
    brakeBack: "Hydraulic single disc brake",
    headlight: "LED",
    turnSignalLightFront: "LED",
    maxSpeed: "180 km/h",
  },
  {
    imageSrc: Xmaxx,
    bikeName: "Xmax",
    description:
      "The Xmax is a high-performance maxi-scooter designed for both urban commuting and longer journeys. It features a responsive 250cc engine, providing ample power for navigating through traffic and cruising on highways. With its spacious under-seat storage and ergonomic design, the Xmax offers riders a comfortable and enjoyable riding experience wherever they go.",
    price: 700,
    cc: 250,

    seatHeight: "795mm",
    wheelbase: "1575mm",
    engineType: "Liquid-cooled, 4-stroke, SOHC, single-cylinder",
    cylinderArrangement: "Single cylinder",
    maxHorsepower: "15.3 kW (20.8 PS) @ 7250 rpm",
    lubricationSystem: "Wet sump",
    engineOilCapacity: "1.6 L",
    fuelTankCapacity: "13 L",
    steeringAngle: "30°",
    brakeFront: "Hydraulic single disc brake",
    brakeBack: "Hydraulic single disc brake",
    headlight: "LED",
    turnSignalLightFront: "LED",
    maxSpeed: "160 km/h",
  },
  {
    imageSrc: XADV,
    bikeName: "XADV",
    description:
      "The XADV is a versatile adventure bike that combines the performance of a motorcycle with the practicality of a scooter. Equipped with a robust 750cc engine, it's capable of tackling both on-road and off-road adventures with ease. The XADV features long-travel suspension, rugged tires, and advanced rider aids, making it the perfect choice for exploring new horizons and conquering challenging terrain.",
    price: 1300,
    cc: 750,

    seatHeight: "820mm",
    wheelbase: "1590mm",
    engineType: "Liquid-cooled, 4-stroke, SOHC, twin-cylinder",
    cylinderArrangement: "Twin cylinder",
    maxHorsepower: "55 kW (75 PS) @ 6750 rpm",
    lubricationSystem: "Wet sump",
    engineOilCapacity: "4.2 L",
    fuelTankCapacity: "13.1 L",
    steeringAngle: "27°",
    brakeFront: "Hydraulic single disc brake",
    brakeBack: "Hydraulic single disc brake",
    headlight: "LED",
    turnSignalLightFront: "LED",
    maxSpeed: "190 km/h",
  },
  {
    imageSrc: DirtBikeKawasaki,
    bikeName: "Dirt Bike Kawasaki",
    description:
      "The Kawasaki dirt bike is a true off-road machine built for adrenaline-fueled adventures. Powered by a high-performance 450cc engine, it offers explosive acceleration and precise handling in the toughest conditions. With its rugged chassis, adjustable suspension, and aggressive styling, the Kawasaki dirt bike is ready to conquer any trail or motocross track with confidence.",
    price: 900,
    cc: 450,

    seatHeight: "955mm",
    wheelbase: "1485mm",
    engineType: "Liquid-cooled, 4-stroke, DOHC, single-cylinder",
    cylinderArrangement: "Single cylinder",
    maxHorsepower: "37.3 kW (50.7 PS) @ 9500 rpm",
    lubricationSystem: "Forced lubrication, wet sump",
    engineOilCapacity: "1.6 L",
    fuelTankCapacity: "6.2 L",
    steeringAngle: "N/A",
    brakeFront: "Hydraulic disc brake",
    brakeBack: "Hydraulic disc brake",
    headlight: "Halogen",
    turnSignalLightFront: "Bulb",
    maxSpeed: "150 km/h", // Added max speed
  },
  {
    imageSrc: Harley,
    bikeName: "Harley-Davidson",
    description:
      "The Harley-Davidson is an iconic American motorcycle known for its timeless design and legendary performance. With a massive 1140cc engine at its heart, it delivers thunderous torque and a commanding presence on the open road. The Harley-Davidson features classic styling, advanced technology, and customizable options, making it a symbol of freedom and adventure for riders worldwide.",
    price: 1400,
    cc: 1140,

    seatHeight: "680mm",
    wheelbase: "1540mm",
    engineType: "Air-cooled, Evolution®, V-Twin",
    cylinderArrangement: "V-Twin",
    maxHorsepower: "70.3 kW (95 PS) @ 5250 rpm",
    lubricationSystem: "Dry sump",
    engineOilCapacity: "3.3 L",
    fuelTankCapacity: "13.2 L",
    steeringAngle: "34°",
    brakeFront: "Hydraulic disc brake",
    brakeBack: "Hydraulic disc brake",
    headlight: "LED",
    turnSignalLightFront: "LED",
    maxSpeed: "180 km/h", // Added max speed
  },
  {
    imageSrc: HondaWave,
    bikeName: "Honda Wave",
    description:
      "The Honda Wave is a popular underbone motorcycle known for its reliability and fuel efficiency. It's equipped with a responsive 110cc engine, providing smooth acceleration and excellent fuel economy. With its lightweight design and agile handling, the Honda Wave is the perfect choice for daily commuting and short trips around town, offering riders an enjoyable and hassle-free riding experience.",
    price: 200,
    cc: 110,

    seatHeight: "765mm",
    wheelbase: "1350mm",
    engineType: "Liquid-cooled, 4-stroke, SOHC, 4-valve",
    cylinderArrangement: "Single cylinder",
    maxHorsepower: "11.1 kW (15.1 PS) @ 8000 rpm",
    lubricationSystem: "Force-feed lubrication, wet sump",
    engineOilCapacity: "1.0 L",
    fuelTankCapacity: "6.6 L",
    steeringAngle: "N/A",
    brakeFront: "Hydraulic disc brake",
    brakeBack: "Hydraulic disc brake",
    headlight: "Bulb",
    turnSignalLightFront: "Bulb",
    maxSpeed: "100 km/h", // Added max speed
  },
  {
    imageSrc: DirtKtm,
    bikeName: "Dirt bike KTM",
    description:
      "The KTM 450 dirt bike is a championship-winning machine built for extreme off-road riding. Featuring a powerful 450cc engine and lightweight chassis, it offers unmatched agility and control on the most demanding trails. With its high-performance components, including suspension, brakes, and engine, the KTM 450 dirt bike sets the benchmark for off-road performance and durability, making it the weapon of choice for professional riders and enthusiasts alike.",
    price: 800,
    cc: 450,

    seatHeight: "960mm",
    wheelbase: "1480mm",
    engineType: "Liquid-cooled, 4-stroke, SOHC, single-cylinder",
    cylinderArrangement: "Single cylinder",
    maxHorsepower: "36 kW (49 PS) @ 9000 rpm",
    lubricationSystem: "Pressure lubrication with 2 oil pumps",
    engineOilCapacity: "1.95 L",
    fuelTankCapacity: "8.5 L",
    steeringAngle: "63.5°",
    brakeFront: "Hydraulic disc brake",
    brakeBack: "Hydraulic disc brake",
    headlight: "Halogen",
    turnSignalLightFront: "Halogen",
    maxSpeed: "160 km/h", // Added max speed
  },
  {
    imageSrc: PCXRed,
    bikeName: "PCX Red",
    description:
      "The PCX Red is a variant of the popular PCX scooter known for its vibrant color and stylish design. Powered by a reliable 150cc engine, it delivers responsive performance and excellent fuel efficiency. With its sleek bodywork and comfortable ergonomics, the PCX Red stands out from the crowd while offering riders a convenient and enjoyable mode of transportation for urban commuting and leisurely rides.",
    price: 350,
    cc: 150,

    seatHeight: "760mm",
    wheelbase: "1310mm",
    engineType: "Liquid-cooled, 4-stroke, SOHC, single-cylinder",
    cylinderArrangement: "Single cylinder",
    maxHorsepower: "11.1 kW (15.1 PS) @ 8000 rpm",
    lubricationSystem: "Force-feed lubrication, wet sump",
    engineOilCapacity: "1.0 L",
    fuelTankCapacity: "6.6 L",
    steeringAngle: "N/A",
    brakeFront: "Hydraulic disc brake",
    brakeBack: "Hydraulic disc brake",
    headlight: "LED",
    turnSignalLightFront: "LED",
    maxSpeed: "120 km/h", // Added max speed
  },
  {
    imageSrc: PCXWhite,
    bikeName: "PCX White",
    description:
      "The PCX White is a variant of the PCX scooter featuring a clean and elegant white color scheme. Equipped with a responsive 150cc engine, it offers smooth acceleration and nimble handling in urban traffic. With its spacious storage compartments and advanced features, including LED lighting and digital instrumentation, the PCX White combines style, comfort, and practicality for discerning riders looking for a premium commuting experience.",
    price: 350,
    cc: 150,

    seatHeight: "760mm",
    wheelbase: "1310mm",
    engineType: "Liquid-cooled, 4-stroke, SOHC, single-cylinder",
    cylinderArrangement: "Single cylinder",
    maxHorsepower: "11.1 kW (15.1 PS) @ 8000 rpm",
    lubricationSystem: "Force-feed lubrication, wet sump",
    engineOilCapacity: "1.0 L",
    fuelTankCapacity: "6.6 L",
    steeringAngle: "N/A",
    brakeFront: "Hydraulic disc brake",
    brakeBack: "Hydraulic disc brake",
    headlight: "LED",
    turnSignalLightFront: "LED",
    maxSpeed: "120 km/h", // Added max speed
  },
  {
    imageSrc: Nmax,
    bikeName: "Nmax Yamaha",
    description:
      "The Nmax Yamaha is a premium scooter known for its sporty design and advanced features. Powered by a refined 155cc engine, it delivers impressive performance and fuel efficiency on city streets and highways. With its sleek bodywork, comfortable seating, and sophisticated electronics, including ABS and traction control, the Nmax offers riders a thrilling and confidence-inspiring riding experience, perfect for daily commuting and weekend getaways.",
    price: 400,
    cc: 155,

    seatHeight: "765mm",
    wheelbase: "1350mm",
    engineType: "Liquid-cooled, 4-stroke, SOHC, 4-valve",
    cylinderArrangement: "Single cylinder",
    maxHorsepower: "11.1 kW (15.1 PS) @ 8000 rpm",
    lubricationSystem: "Force-feed lubrication, wet sump",
    engineOilCapacity: "1.0 L",
    fuelTankCapacity: "6.6 L",
    steeringAngle: "N/A",
    brakeFront: "Hydraulic disc brake",
    brakeBack: "Hydraulic disc brake",
    headlight: "LED",
    turnSignalLightFront: "LED",
    maxSpeed: "140 km/h", // Added max speed
  },
];

export default BikeData;

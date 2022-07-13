import aloe2PlantImg from '../images/plant4.png';
import palmImg from '../images/plant3.png';
import cactusImg from '../images/plant6.png';
import calatheaImg from '../images/calathea.jpg';

export const PROMOTIONS = [
    {
        id: 0,
        name: 'Aloe2 Plant',
        image: aloe2PlantImg,
        featured: true,
        description:
            'Beneficial plants have uses for the skin or as food'
    },
    {
        id: 1,
        name: 'Palm Plant',
        image: palmImg,
        featured: false,
        description:
            'Floor Plants are tall plants'
    },
    {
        id: 2,
        name: 'Cactus Plant',
        image: cactusImg,
        featured: false,
        description: `Hanging Plants can be hung by a window or outside`
    },
    {
        id: 3,
        name: 'Calathea Plant',
        image: calatheaImg,
        featured: false,
        description:
            'Outdoor Plants are large and wold need to be placed outside'
    }
];

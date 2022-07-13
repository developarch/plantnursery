import aloePlantImg from '../images/aloe.jpg';
import fiddleLeafImg from '../images/fiddle-leaf-fig.jpg';
import pothosImg from '../images/pothos.jpg';
import calatheaImg from '../images/calathea.jpg';

export const PLANTS = [
    {
        id: 0,
        name: 'Aloe Plant',
        image: aloePlantImg,
        elevation: 1233,
        featured: false,
        description:
            'Edible Plants'
    },
    {
        id: 1,
        name: 'Fiddle Leaf Fig ',
        image: fiddleLeafImg,
        elevation: 877,
        featured: false,
        description:
            'Floor Plants'
    },
    {
        id: 2,
        name: 'Pothos',
        image: pothosImg,
        elevation: 2901,
        featured: false,
        description:
            'Hanging Plants'
    },
    {
        id: 3,
        name: 'Calathea',
        image: calatheaImg,
        elevation: 42,
        featured: true,
        description:
            "Outdoor Plants"
    }
];

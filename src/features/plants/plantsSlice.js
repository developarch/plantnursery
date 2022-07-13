import { PLANTS } from '../../app/shared/PLANTS';

export const selectAllPlants = () => {
    return PLANTS;
};

export const selectPlantById = (id) => {
    return PLANTS.find((plant) => plant.id === parseInt(id));
};

export const selectFeaturedPlant = () => {
    return PLANTS.find((plant) => plant.featured);
};

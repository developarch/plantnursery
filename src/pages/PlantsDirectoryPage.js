import { Container } from 'reactstrap';
import PlantsList from '../features/plants/PlantsList';
import SubHeader from '../components/SubHeader';

const PlantsDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current="Directory" />
            <PlantsList />
        </Container>
    );
};

export default PlantsDirectoryPage;
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectPlantById } from '../features/plants/plantsSlice';
import PlantDetail from '../features/plants/PlantDetail';
import SubHeader from '../components/SubHeader';
import CommentsList from '../features/comments/CommentsList';

const PlantDetailPage = () => {
    const { plantId } = useParams();
    const plant = selectPlantById(plantId);

    return (
        <Container>
            <SubHeader current={plant.name} detail= {true}/>
            <Row>
                <PlantDetail plant={plant} />
                <CommentsList plantId={plantId} />

            </Row>
        </Container>
    );
};

export default PlantDetailPage;
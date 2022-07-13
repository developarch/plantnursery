import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';


const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Us' />
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Beginning</h3>
                    <p>
                        We started with a few plants in our own backyard and have since grown to 
                        a local location with a full plant nursery. 
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>Facts At a Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>March 2, 2005</dd>
                                <dt className='col-6'>No. of Plants</dt>
                                <dd className='col-6'>218</dd>
                                <dt className='col-6'>No. of Reviews</dt>
                                <dd className='col-6'>3518</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>14</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>
                                “A society grows great when old men plant trees in whose shade they shall never sit.”
                                </p>
                                <footer className='blockquote-footer'>
                                Greek Proverb,{' '}
                                    <cite title='Source Title'>
                                        "The Man Who Planted Trees" - Jean Giono 
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;

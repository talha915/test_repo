import { Container, Row, Col, Button } from 'reactstrap';
import LeftMenu from '../../components/leftmenu/LeftMenu';
import Logo from '../../components/logo/logo';
import { connectDb, param1, param2, param3, whisperHeading } from '../../constants/constant';
import '../../styles/logo.scss';
import Slider from '../../components/slider/slider';

function DataWhisperer() {
    return (
        <Container>
            <Row>
                <Col md={2} sm={2} xs={2}>
                    <LeftMenu />
                </Col>
                <Col md={8} sm={8} xs={8}>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <Logo heading={whisperHeading} />
                        </Col>
                        <Container>
                            <Col md={{ size: 12}} sm={{ size: 12}} xs={{ size: 12}} className="container-style">

                            </Col>
                        </Container>
                    </Row>
                </Col>
                <Col md={2} sm={2} xs={2}>
                    <Row>
                        <Col md={{ size: 12 }} sm={{ size: 12 }} xs={{ size: 12 }}>
                            <Button className="btn-style">
                                {connectDb}
                            </Button>
                        </Col>
                        <Col md={{ size: 12 }} sm={{ size: 12 }} xs={{ size: 12 }} className="container-style">
                            <div className='padding-top'>
                                {param1}<Slider />
                            </div>
                            <div className='padding-top'>
                                {param2}<Slider />
                            </div>
                            <div className='padding-top'>
                                {param3}<Slider />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default DataWhisperer;
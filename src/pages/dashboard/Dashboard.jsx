import React from 'react';
import LeftMenu from '../../components/leftmenu/LeftMenu';
import Logo from '../../components/logo/logo';
import HorizontalBarChart from '../../components/charts/horizontalbar';
import PieChart from '../../components/charts/PieChart';
import { Container, Row, Col } from 'reactstrap';
import { dashboardHeading } from '../../constants/constant';


function Dashboard() {
    return (
        <Container>
            <Row>
                <Col md={2} sm={2} xs={2}>
                    <LeftMenu />
                </Col>
                <Col md={8} sm={8} xs={8}>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <Logo heading={dashboardHeading} />
                        </Col>
                        <Container>
                            <Row>
                                <Col md={6} sm={6} xs={6}>
                                    <HorizontalBarChart />
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    <PieChart />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={6} xs={6}>
                                    Donut Chart
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    Scatter Chart
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;
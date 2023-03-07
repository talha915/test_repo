import React from "react";
import { Alert, Row, Col } from "reactstrap";
import '../../styles/logo.scss';

function Logo(props) {
    return (
        <Row>
            <Col md={12} sm={12}>
                <Alert color="dark" style={{ backgroundColor: '#000' }}>
                    <h6 className="logo-heading">
                        {props.heading}
                    </h6>
                </Alert>
            </Col>
        </Row>
    )
}

export default Logo;
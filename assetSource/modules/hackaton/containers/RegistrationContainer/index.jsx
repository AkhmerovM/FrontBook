import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { Button, Col, Form } from 'react-bootstrap';

function mapStateToProps (state) {
    return {
        // postList: selectPostData(state)
    };
}
function mapDispatchToProps () {
    return {
    };
}

class Registration extends Component {
    render () {
        return (
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Label>LAl</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        );
    }
}
const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps())(Registration);
export { RegistrationContainer };

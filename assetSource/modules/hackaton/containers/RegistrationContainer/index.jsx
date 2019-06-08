import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

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
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps())(Registration);
export { RegistrationContainer };

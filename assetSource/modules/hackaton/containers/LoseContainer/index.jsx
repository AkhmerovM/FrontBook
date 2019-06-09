import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { selectHumanData } from 'modules/hackaton/selectors';
import { getPeople } from 'modules/hackaton/actions';

function mapStateToProps (state) {
    return {
        humanList: selectHumanData(state)
    };
}
function mapDispatchToProps () {
    return {
        getPeople
    };
}

class Lose extends Component {
    componentDidMount () {
    }
    renderHuman (human) {
        return (
            <div className="lose-container__data">
                <div className="lose-container__photo">
                    <img src="/img/girl.png" alt="" />
                    <div></div>
                </div>
                <div className="lose-container__info">
                    <div className="lose-container__form-data">
                        {Object.keys(human).map((key) => {
                            return (
                                <div className="lose-container__row">
                                    <Form.Row>
                                        <Col>
                                            <Form.Label>{key}</Form.Label>
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder={key} value={human[key]} />
                                        </Col>
                                    </Form.Row>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
    render () {
        const { humanList } = this.props;
      console.log(humanList)
      // const humanList = [{ name: 'asdasdsadsa asdsad asd' }];
        return (
            <div className="lose-container">
                <div className="lose-container__name">Карточка пропавшего</div>
                <Form>

                    {humanList.map(this.renderHuman)}
                </Form>
            </div>
        );
    }
}
const LoseContainer = connect(mapStateToProps, mapDispatchToProps())(Lose);
export { LoseContainer };

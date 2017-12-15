import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }

    render()  {
        return (
            <div>
                This is the fucking feature!
                <div className='alert alert-success'>
                    <strong>Message : </strong> {this.props.message}
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.messageReducer.message
    }
}

export default connect(mapStateToProps,actions)(Feature);
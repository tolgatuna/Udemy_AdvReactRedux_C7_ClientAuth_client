import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class SignOut extends Component {
    componentWillMount() {
        this.props.singOutUser();
    }


    render() {
        return (
          <div>Sorry to see you again... </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, actions)(SignOut)
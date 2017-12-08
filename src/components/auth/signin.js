import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignIn extends Component {

    handleFormSubmit({email, password}) {
        console.log(email, password);
        this.props.signInUser({email, password});
    }

    render() {
        const {handleSubmit, fields: {email, password}} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email :</label>
                    <input type="text" {...email} className="form-control"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password :</label>
                    <input type="password" {...password} className="form-control"/>
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, null, actions)(SignIn);
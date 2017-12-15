import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {

    handleFormSubmit(formProps) {
        this.props.signUpUser(formProps);
    }

    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Opps!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email :</label>
                    <input type="text" {...email} className="form-control"/>
                    {email.touched && email.error && <div className="error">{email.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Password :</label>
                    <input type="password" {...password} className="form-control"/>
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password :</label>
                    <input type="password" {...passwordConfirm} className="form-control"/>
                    {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
                </fieldset>
                {
                    this.renderAlert()
                }
                <button action="submit" className="btn btn-primary">Sign Up!</button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    Object.keys(formProps).forEach(key => {
        if(!formProps[key]) {
            errors[key] = 'Please enter a ' + key;
        }
    });

    if(formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must match'
    }

    return errors;
}

function mapStateToProps({auth : {error}}) {
    return {
        errorMessage: error
    }
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
}, mapStateToProps, actions)(SignUp);
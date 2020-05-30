import _ from 'lodash';
import React ,{Component}from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import formFields from './formFields';
import validateEmails from '../../utils/validateEmails';

class  SurveyForm extends Component {
 renderFields() {
    return _.map(formFields, ({ label, name }) => {
	      return (
	        <Field
	          key={name}
	          component={SurveyField}
	          type="text"
	          label={label}
	          name={name}
	        />
	      );
    });
  }
render (){
  return (
    <div>
       <form onSubmit={this.props.handleSubmit( this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
          		Cancel
          	 <i className="material-icons right">done</i>
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
          		Next
          	 <i className="material-icons right">done</i>
          </button>
       </form>

    </div>

    );
  }
}
function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');
  // errors.emails = validateEmails(values.emails || '');
  if(!values.title){
  	errors.title = 'You must provide a title';
  }
 if(!values.subject){
  	errors.subject = 'You must provide a subject';
  }
  if(!values.body){
  	errors.body = 'You must provide a body';
  }

 return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
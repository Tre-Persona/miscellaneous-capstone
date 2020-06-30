import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

const Questions = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleCheckbox">Are there clearly posted signs?</Label>
        <div>
          <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Yes" />
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="No" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Do the signs have Braille</Label>
        <div>
          <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Yes" />
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="No" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Is the trail 5ft wide, minimum?</Label>
        <div>
          <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Yes" />
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="No" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Is the surface hard packed? (i.e. less than one inch of loos sand)</Label>
        <div>
          <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Yes" />
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="No" />
        </div>
      </FormGroup>
    </Form>
  );
}

export default Questions;

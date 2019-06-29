import React from "../../node_modules/react";
import { Container } from "../components/Grid";
import APIDEMO from '../img/APIDemo.png'
import {  Input, FormBtn } from "../components/Form";
//Budget your trip widget

function Result() {
  
  return (
    <Container fluid>
     
           <Input
                name="country"
                placeholder="What country would you like to travel to?"
              />
             <FormBtn
              
              >
                Submit 
              </FormBtn>
              <img src={APIDEMO} />


    </Container>
  );
}
export default Result;

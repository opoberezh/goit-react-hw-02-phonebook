import styled from 'styled-components';
import {Form, Field, } from 'formik';

export const Styleform = styled(Form)`

display: flex;
flex-direction: column;
max-width: 300px;
padding: 10px; 
gap: 10px;
`;

export const HeroTitleStyled = styled.h1`
margin: 20px 0 0 20px;
text-shadow: 3px 3px 3px rgba(0,0,0,0.55);
`;

export const StyledField = styled(Field)`
margin-left: 20px;
padding: 4px; 
border: 2px solid;
border-radius: 4px;
box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.55);
&:focus,
&:hover,
&:active {
  border: 2px solid blue;
  background: transparent;
  outline: transparent;
}
`;

export const StyledLabel = styled.p`
font-size: 18px;
font-weight: 500;
margin: 20px 0 0 20px;

`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

export const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 30px;
  margin: 10px 0 0 35px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid;
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.55);
  cursor: pointer;
  background: transparent;

  &:focus,
  &:hover {
    border: 1px solid ;
    background: #DCDCDC;
    color: black;

  }
`;


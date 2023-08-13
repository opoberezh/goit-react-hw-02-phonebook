import styled from 'styled-components';
import {Form, Field, } from 'formik';

export const Styleform = styled(Form)`

display: flex;
flex-direction: column;
max-width: 150px;
padding: 10px; 
gap: 10px;
`;

export const StyledField = styled(Field)`
margin-left: 20px;
padding: 4px; 
`;

export const StyledLabel = styled.p`
font-size: 18px;
font-weight: 500;
margin: 20px 0 0 20px;
}
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;


import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    // padding: 10px; 
    gap: 10px;
`;


export const ListStyled = styled.ul`

  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 15px;
`;

export const ItemStyled = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

  padding: 10px;  
  gap: 15px;
`;

export const DeleteButton = styled.button`

  width: 75px;
//   margin: 10px 0 0 20px;
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
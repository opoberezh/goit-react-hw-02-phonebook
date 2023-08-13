import {WrapperFilter, TitleStyled, TextStyledFilter, InputStyled} from './Filter.styled'

export const ContactsFilter = ({ value, onChange }) => {
    return (
      <WrapperFilter>
        <TitleStyled>Contacts</TitleStyled>
        <TextStyledFilter>Find contacts by name</TextStyledFilter>
        <InputStyled 
          type="text"
          value={value}
          onChange={evt => onChange(evt.target.value)}
        ></InputStyled>
      </WrapperFilter>
    );
  };
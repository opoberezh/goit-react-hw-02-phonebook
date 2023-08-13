import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
// import { nanoid } from "nanoid";


export class App extends Component {
  state ={
    contacts: [],
     name: ''
  }

addContact = newContact => {
  console.log(newContact)
}
 render(){
  return (
    <div>
     <h1>PhoneBook</h1>
   <ContactForm onAdd={this.addContact} />
     <h2>Contacts</h2>
     
   
     </div>
  )   
 }

}
  
  







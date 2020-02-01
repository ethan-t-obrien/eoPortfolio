import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false,
      buttonText: 'Submit'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  resetForm = () => {
    this.setState({
      name: '',
      emaile: '',
      message: '',
      buttonText: 'Message Sent'
    })
  }

  handleSubmit(event){
    event.preventDefault();
   
    this.setState({
      buttonText: '..sending'
    })

      let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }

      axios.post('API_URI', data)
      .then( res => {
        this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent')
      })
  }


  resetForm() {
    this.setState({name: '', email: '', message: ''})
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }



  render() {
    return (
   <body>
     <div className="home">
      <h1>Contact Me</h1>
       <div className="contact">
         <form onSubmit={this.handleSubmit} method="POST">
            <input type="text" 
            className="formControl"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            placeholder="Name.."/>

            <input type="text" 
            className="formControl"
            value={this.state.email}
            onChange={this.handleChange}
            aria-describedby="emailHelp"
            name="email"
            placeholder="Email.."/>

            <input type="text" 
            className="formControl"
            value={this.state.message}
            onChange={this.handleChange}
            id="message"
            name="message"
            placeholder="Your message.."/>

            <button type="submit" value="Submit" className="btn"> { this.state.buttonText}
            </button>
            </form>
       </div>
     </div>
   </body>
    )
  }
}

export default Contact
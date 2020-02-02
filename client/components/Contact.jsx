import React from 'react'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  handleSubmit(event){
    event.preventDefault();
   
    var template_params = {
      "reply_to": this.state.email,
      "from_name": this.state.name,
      "to_name": "Ethan",
      "message_html": this.state.message
   }
   
   var service_id = "default_service";
   var template_id = "template_1Sjl26az";
   emailjs.send(service_id, template_id, template_params)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Success')
   }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send')
   })
   this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: ''
    })
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

            <input type="submit" value="Submit" className="btn"/> 
            </form>
       </div>
     </div>
   </body>
    )
  }
}

export default Contact
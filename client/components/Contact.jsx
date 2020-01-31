import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    this.setState({name: '', email: '', message: ''})
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
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
            name="email"
            placeholder="Email.."/>
            <input type="text" 
            className="formControl"
            value={this.state.mail}
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
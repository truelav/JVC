import React, { Component } from 'react';
import axios from 'axios'
import './contact.css'

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return(
      <section className="contactSection">
        <div className="contactContainer">
          <div className="productTopHeaderContainer">
            <h2>Contact Us</h2>
          </div>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="LearnMoreButton">Submit</button>
          </form>
        </div>
      </section>
    );
  }

  onNameChange(event){
    this.setState({name: event.target.value})
  }

  onEmailChange(event){
    this.setState({email: event.target.value})
  }

  onMessageChange(event){
    this.setState({message: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state)
  }
}

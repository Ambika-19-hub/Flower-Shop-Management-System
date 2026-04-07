import React, { Component } from "react";
class Adoption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      pet: props.pet || "", 
      reason: "",
      errors: {},
      submitted: false
    };
  }
  validate = () => {
    const errors = {};
    if (!this.state.name) errors.name = "Full name is required";
    if (!this.state.email || !this.state.email.includes("@")) errors.email = "Enter a valid email";
    if (!this.state.phone || this.state.phone.length < 10) errors.phone = "Enter a valid phone number";
    if (!this.state.pet) errors.pet = "Please select a pet";
    if (!this.state.reason) errors.reason = "Please tell us why you want to adopt";
    return errors;
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      this.setState({ submitted: true, errors: {} });
    } else {
      this.setState({ errors });
    }
  };
  render() {
    const container = {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "10px",
      maxWidth: "500px",
      margin: "auto",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    };
    const input = { width: "100%", padding: "10px", marginTop: "10px", borderRadius: "5px", border: "1px solid #ccc" };
    const errorStyle = { color: "red", fontSize: "12px", marginBottom: "5px" };
    const buttonStyle = {
      marginTop: "15px",
      padding: "12px",
      backgroundColor: "#27ae60",
      color: "white",
      border: "none",
      borderRadius: "5px",
      width: "100%"
    };
    return (
      <div style={container}>
        <h2>Adoption Application</h2>
        <p>Fill in your details and we'll connect you with your perfect match.</p>
        {this.state.pet && <p style={{ fontWeight: "bold" }}>Selected Pet: {this.state.pet}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" style={input} onChange={this.handleChange} />
          <p style={errorStyle}>{this.state.errors.name}</p>
          <input type="email" name="email" placeholder="Email Address" style={input} onChange={this.handleChange} />
          <p style={errorStyle}>{this.state.errors.email}</p>
          <input type="text" name="phone" placeholder="Phone Number" style={input} onChange={this.handleChange} />
          <p style={errorStyle}>{this.state.errors.phone}</p>
          <select name="pet" value={this.state.pet} style={input} onChange={this.handleChange}>
            <option value="">— Select a pet —</option>
            <option>Tom</option>
            <option>Max</option>
            <option>Bella</option>
            <option>Jimmy</option>
          </select>
          <p style={errorStyle}>{this.state.errors.pet}</p>
          <textarea
            name="reason"
            placeholder="Why do you want to adopt?"
            style={input}
            onChange={this.handleChange}
          />
          <p style={errorStyle}>{this.state.errors.reason}</p>
          <button type="submit" style={buttonStyle}>
            Submit Application
          </button>
        </form>
        {this.state.submitted && (
          <p style={{ marginTop: "15px", color: "green" }}>Application Submitted Successfully!</p>
        )}
      </div>
    );
  }
}
export default Adoption;
import React, { Component } from "react";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      flower: props.flower || "",
      message: "",
      errors: {},
      submitted: false
    };
  }

  validate = () => {
    const errors = {};

    if (!this.state.name) errors.name = "Full name is required";
    if (!this.state.email || !this.state.email.includes("@"))
      errors.email = "Enter a valid email";
    if (!this.state.phone || this.state.phone.length < 10)
      errors.phone = "Enter a valid phone number";
    if (!this.state.flower) errors.flower = "Please select a flower";
    if (!this.state.message)
      errors.message = "Please add a message or instructions";

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
      backgroundColor: "#fff0f6",
      padding: "30px",
      borderRadius: "10px",
      maxWidth: "500px",
      margin: "auto",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    };

    const input = {
      width: "100%",
      padding: "10px",
      marginTop: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc"
    };

    const errorStyle = {
      color: "red",
      fontSize: "12px",
      marginBottom: "5px"
    };

    const buttonStyle = {
      marginTop: "15px",
      padding: "12px",
      backgroundColor: "#e84393",
      color: "white",
      border: "none",
      borderRadius: "5px",
      width: "100%"
    };

    return (
      <div style={container}>
        <h2>Flower Order Form </h2>
        <p>Fill in your details and we’ll deliver your favorite flowers.</p>

        {this.state.flower && (
          <p style={{ fontWeight: "bold" }}>
            Selected Flower: {this.state.flower}
          </p>
        )}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            style={input}
            onChange={this.handleChange}
          />
          <p style={errorStyle}>{this.state.errors.name}</p>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            style={input}
            onChange={this.handleChange}
          />
          <p style={errorStyle}>{this.state.errors.email}</p>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            style={input}
            onChange={this.handleChange}
          />
          <p style={errorStyle}>{this.state.errors.phone}</p>

          <select
            name="flower"
            value={this.state.flower}
            style={input}
            onChange={this.handleChange}
          >
            <option value="">— Select a flower —</option>
            <option>Rose </option>
            <option>Lily </option>
            <option>Lotus </option>
            <option>Tulip </option>
          </select>
          <p style={errorStyle}>{this.state.errors.flower}</p>

          <textarea
            name="message"
            placeholder="Special message or delivery instructions"
            style={input}
            onChange={this.handleChange}
          />
          <p style={errorStyle}>{this.state.errors.message}</p>

          <button type="submit" style={buttonStyle}>
            Place Order 
          </button>
        </form>

        {this.state.submitted && (
          <p style={{ marginTop: "15px", color: "green" }}>
            Order Placed Successfully! 
          </p>
        )}
      </div>
    );
  }
}

export default Order;
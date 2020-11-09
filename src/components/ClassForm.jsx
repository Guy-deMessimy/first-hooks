import React from "react";

class ClassForm extends React.Component {
  state = {
    name: "",
    email: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name, this.state.email);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, email } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Mary"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="mary.poppins@disney.fr"
            onChange={this.handleChange}
            name="email"
            value={email}
          />
          <br />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ClassForm;

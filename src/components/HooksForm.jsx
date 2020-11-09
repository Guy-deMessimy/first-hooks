import React from "react";

function Login () {

const [form, setValues] = React.useState({
    name: "",
    email: ""
  });

const printValues = (e) => {
  e.preventDefault();
   console.log(form.name, form.email);
};

const updateField = (e) => {
  setValues({
    ...form,
    [e.target.name]:e.target.value
  });
}; 

    return (
      <div className="App">
        <form onSubmit={printValues}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Mary"
            value={form.name}
            onChange={updateField}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="mary.poppins@disney.fr"
            onChange={updateField}
            name="email"
            value={form.email}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  };

export default Login;
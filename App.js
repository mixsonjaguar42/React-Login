import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { uuidv4 } from "./uuidv4.js";

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            lastName: "",
            firstName: "",
            email: "",
            password1: "",
            password2: "",
            password: "",
            message: "",
            users: [],
            editMessage: "",
            isEdit: false,
            modalOpen: false,
            loginForm: false
        }
    }
// let bcrypt = dcodeIO.bcrypt;
 handleInput = (e) => {
  let { name, value } = e.target;
  this.setState({
    ...this.state,
    [name]: value,
  });
};
/*
const setInputValues = () =>{
  inputs.forEach(input => {
    let name = input.getAttribute("name")
    input.addEventListener("input", handleInput)
    input.value = state[name]
})
}
setInputValues()
*/
// stateSet = (...args) => {
//   if (typeof args[0] === "object") {
//     let newState = args[0];
//     let prevState = this.state;
//     return (state = Object.assign({}, prevState, newState));
//   } else if (typeof args[0] === "function") {
//     return (function (condition) {
//       let newState = args[0](condition);
//       return stateSet(newState);
//     })(state);
//   } else {
//     console.error("State must be a type Object or a function");
//   }
// };
// //%%%%for demo only - can delete these two%%%%%%%
// // stateSet({
// //   ...state,
// //   name: "Fred",
// // });
// // console.log(state);
// // stateSet((prevState) => {
// //   console.log(prevState);
// //   return {
// //     ...state,
// //     detective: !prevState.detective,
// //   };
// // });
// //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  handleRegister = (e) => {
//   e.preventDefault();
//   if (this.state.password1 === this.state.password2) {
//     if (this.state.users.filter((email) => email === this.state.email).length < 1) {
//       let newUser = {};
//       newUser.firstName = this.state.firstName;
//       newUser.lastName = this.state.lastName;
//       newUser.id = uuidv4();
//       newUser.email = this.state.email;
//       newUser.loggedIn = true;
//       newUser.password = bcrypt.hashSync(this.state.password1, 10);
//       this.setState({
//         ...this.state,
//         users: [newUser, ...this.state.users],
//         firstName: "",
//         lastName: "",
//         email: "",
//         password1: "",
//         password2: "",
//         message: "",
//         loggedIn: true,
//         modalOpen: false,
//       });
//       render();
//       return;
//     } else {
//       this.setState({
//         message: "This email is already in the database",
//       });
//       render();
//       return;
//     }
//   } else {
//     this.setState({
//       ...this.state,
//       message: "The passwords do not match",
//     });
//     render();
//     return;
//   }
// };
// // registrationForm.addEventListener("submit", handleRegister);
//  handleLogin = (e) => {
//   e.preventDefault();
//   let user = this.state.users.filter((user) => user.email === this.state.email)[0];
//   if (!user) {
//     this.state.message =
//       "This email was not found, please enter another or register";
//     render();
//     return;
//   } else if (!bcrypt.compareSync(state.password, user.password)) {
//     this.setState({
//       ...this.state,
//       message: "There was a problem with the password",
//     });
//     render();
//     return;
//   } else if (bcrypt.compareSync(state.password, user.password)) {
//     this.setState({
//       ...this.state,
//       loggedIn: true,
//       message: "",
//       email: "",
//       password: "",
//       modalOpen: false,
//     });
//     user.loggedIn = this.state.loggedIn;
//     render();
//     return;
//   } else {
//     setState({
//       ...this.state,
//       message: "There was a problem",
//     });
//     render();
//     return;
//   }
// };
// // loginForm.addEventListener("submit", handleLogin);
// handleMessage = () => {
//   if (this.state.message !== "") {
//     messageH3.innerText = "";
//     messageH3.innerText = this.state.message;
//     return;
//   } else {
//     messageH3.innerText = this.state.message;
//   }
// };
//  handleFormToggle = () => {
//  this.setState((prevState) => {
//     return {
//       ...this.state,
//       loginForm: !prevState.loginForm,
//     };
//   });
//   render();
//   return;
// };
//  checkFormStatus = () => {
//   if (this.state.loginForm) {
//     loginFormDiv.classList.add("hidden");
//     registrationFormDiv.classList.remove("hidden");
//     formBtn.innerText = "";
//     formBtn.innerText = "LOGIN";
//   } else {
//     loginFormDiv.classList.remove("hidden");
//     registrationFormDiv.classList.add("hidden");
//     formBtn.innerText = "";
//     formBtn.innerText = "REGISTER";
//   }
// };
// // formBtn.addEventListener("click", handleFormToggle);
//  handleModalToggle = () => {
//   this.setState((prevState) => {
//     return {
//       ...this.state,
//       modalOpen: !prevState.modalOpen,
//       loginForm: false
//     };
//   });
//   render();
//   return;
// };
// // loginRegisterBtn.addEventListener("click", handleModalToggle);
// // closeModalBtn.addEventListener("click", handleModalToggle);
//  checkModalStatus = () => {
//   if (!this.state.modalOpen) {
//     modalDiv.classList.add("hidden");
//     //modalDiv.classList.remove("modal-display")
//   } else {
//     modalDiv.classList.remove("hidden");
//     //modalDiv.classList.add("modal-display");
//   }
// };
// checkModalStatus()
//  handleLoggout = (id) => {
//   let statusChanged = this.state.users.map((user) => {
//     if (user.id === id) {
//       user.loggedIn = false;
//     }
//     return user;
//   });
//   this.setState({
//     ...this.state,
//     users: statusChanged,
//   });
//   render();
//   return;
// };
//  handleDeleteUser = (id) => {
//   let oneLessUser = this.state.users.filter((user) => user.id !== id);
//   this.setState({
//     ...this.state,
//     users: oneLessUser,
//   });
//   render();
//   return;
// };
//  handleToggleEdit = (id) => {
//   let user = this.state.users.filter((user) => user.id === id)[0];
//   this.setState({
//     id: user.id,
//     firstName: user.firstName,
//     lastName: user.lastName,
//     email: user.email,
//     isEdit: true,
//     modelOpen: false,
//     editMessage: ""
//   });
//   render();
//   return;
// };
//  handleEditUser = (e) => {
//   e.preventDefault();
//  //check email
//  let offLimits = this.state.users.filter(user => user.email === this.state.email && user.id !== this.state.id)
//  if(offLimits.filter(user => user.email === this.state.email).length > 0){
//    //will need to make dynamic message under the form
//    this.setState({
//      ...this.state,
//      editMessage: "This email is already in use, please chose another",
//    });
//    render();
//    return;
//   } else {
//     let youveChanged = this.state.users.map((user) => {
//       if (user.id === this.state.id) {
//         user.firstName = this.state.firstName;
//         user.lastName = this.state.lastName;
//         user.email = this.state.email;
//       }
//       return user;
//     });
//     this.setState({
//       ...this.state,
//       users: youveChanged,
//       firstName: "",
//       lastName: "",
//       email: "",
//       id: "",
//       editMessage: "",
//       isEdit: false,
//     });
//     render();
//     return;
//   }
// };
//  makeList = () => {
//   listDiv.innerHTML = "";
//   let ul = document.createElement("ul");
//   state.users.forEach((user) => {
//     let li = document.createElement("li");
//     //if statement to find out if editing
//     //if editing will have to make a dynamic form
//     //form will need a message div to recieve any edit messages
//     li.innerHTML = `<h4>${user.firstName} ${user.lastName}</h4> STATUS: ${
//       user.loggedIn ? "LOGGED IN" : "LOGGED OUT"
//     }`;
//     //here append buttons for logging out,  deleting and editing user
//     //also remember that here you have access to user.id so can set eventListeners for functions that require an id
//     ul.append(li);
//   });
//   listDiv.append(ul);
// };
//  render = () => {
//   checkFormStatus();
//   checkModalStatus();
//   handleMessage();
//   makeList();
//   //setInputValues()
// };
    render() {
        return (
            <h1>This is Bananas</h1>
        )
    }
}


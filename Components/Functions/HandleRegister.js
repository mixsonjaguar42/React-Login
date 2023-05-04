

const HandleRegister = (e) => {
    e.preventDefault();
    if (state.password1 === state.password2) {
      if (state.users.filter((email) => email === state.email).length < 1) {
        let newUser = {};
        newUser.firstName = state.firstName;
        newUser.lastName = state.lastName;
        newUser.id = uuidv4();
        newUser.email = state.email;
        newUser.loggedIn = true;
        newUser.password = bcrypt.hashSync(state.password1, 10);
        setState({
          ...state,
          users: [newUser, ...state.users],
          firstName: "",
          lastName: "",
          email: "",
          password1: "",
          password2: "",
          message: "",
          loggedIn: true,
          modalOpen: false,
        });
        render();
        return;
      } else {
        setState({
          message: "This email is already in the database",
        });
        render();
        return;
      }
    } else {
      setState({
        message: "The passwords do not match",
      });
      render();
      return;
    }
  };

  export default HandleRegister
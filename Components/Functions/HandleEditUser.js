

export default HandleEditUser = (props)=>{
    props.e.preventDefault();
    //check email
    let offLimits = props.state.users.filter(user => user.email === props.state.email && user.id !== props.state.id)
    if(offLimits.filter(user => user.email === props.state.email).length > 0){
      //will need to make dynamic message under the form
      props.setState({
        ...props.state,
        editMessage: "This email is already in use, please chose another",
      });
      render();
      return;
     } else {
       let youveChanged = props.state.users.map((user) => {
         if (user.id === props.state.id) {
           user.firstName = props.state.firstName;
           user.lastName = props.state.lastName;
           user.email = props.state.email;
         }
         return user;
       });
       props.setState({
         ...props.state,
         users: youveChanged,
         firstName: "",
         lastName: "",
         email: "",
         id: "",
         editMessage: "",
         isEdit: false,
       });
       render();
       return;
     }
}
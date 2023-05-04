

export default  HandleToggleEdit = (props) => {
    let user = props.state.users.filter((user) => user.id === props.id)[0];
    props.setState({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isEdit: true,
      modelOpen: false,
      editMessage: ""
    });
    return;
  };
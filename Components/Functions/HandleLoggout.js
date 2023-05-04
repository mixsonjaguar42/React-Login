


export default HandleLoggout = (props) => {
    let statusChanged = props.state.users.map((user) => {
      if (user.id === props.id) {
        user.loggedIn = false;
      }
      return user;
    });
    props.setState({
      ...props.state,
      users: statusChanged,
    });
    return;
  };
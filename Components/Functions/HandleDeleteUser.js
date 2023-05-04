


export default HandleDeleteUser =(props)=>{
    let oneLessUser = props.state.users.filter((user) => user.id !== props.id);
  props.setState({
    ...this.statestate,
    users: oneLessUser,
  });
  return;
}



export default function MakeList(props) {
    return (
        <ul className="list">
            {props.users.forEach(user => {
              <li key={user.id}><h4>{user.firstName}{user.lastName}</h4> STATUS:{
                user.loggedIn ? "LOGGED IN" : "LOGGED OUT"}
            </li>
            })}
        </ul>
    )
}
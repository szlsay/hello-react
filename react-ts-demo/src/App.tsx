import UserList from "./UserList"
function App() {
  // const users = [
  //   {id: 0, name: 'st0'},
  //   {id: 1, name: 'st1'},
  //   {id: 2, name: 'st2'},
  //   {id: 3, name: 'st3'}
  // ]
  return (
    <>
    <UserList></UserList>
      {/* {users.map(user => {
        const {id, name} = user
        return <div key={id}>{name}</div>
      })} */}
    </>
  )
}

export default App
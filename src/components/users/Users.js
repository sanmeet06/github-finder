import React, {useContext, Component } from 'react';
import Useritems from"./Useritems";
import Spinner from "../layout/Spinner"
import GitContext from "../../context/github/gitContext"
 const Users=()=> {
     const gitContext=useContext(GitContext)
     const{users,loading}=gitContext;
     if(loading){
        return <Spinner/>
     }else{
        return (
            <div style={userstyle}>
            {users.map(user=>(
                <Useritems key={user.id} user={user}/>
            ))}
            </div>
        )
     }
      
  
}
const userstyle={
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gridGap:"1rem",
}

export default Users

import React, { useContext,useState} from 'react'
import GitContext from "../../context/github/gitContext"

const Search =()=> {
    const gitContext=useContext(GitContext);
    const[text,setText]=useState('')

   const onChange=(e)=>{
        setText(e.target.value);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        gitContext.searchUsers(text);
        setText('');
    }
        return (
            <div>
                <form onSubmit={onSubmit}className="form">
                    <input type="text"  onChange={onChange}value={text}
                     placeholder="search users" />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {gitContext.users.length>0 &&(
                <button className="btn btn-light btn-block" 
                onClick={gitContext.clearUsers}>Clear</button>
                )}
            </div>
        )
    
}
export default Search;
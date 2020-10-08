import React, {useContext, useEffect,Fragment } from 'react'
import { Link } from 'react-router-dom';
import GitContext from "../../context/github/gitContext"
import Repos from "../repos/Repos";

const  User =({match})=> {
    const gitContext=useContext(GitContext)
    const{getUserRepos,repos,user,getUser,loading}=gitContext
   useEffect(()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
   },[])

        const{name,avatar_url,html_url,followers,company,
        following,blog,location,bio,public_repos,login
        ,public_gists}=user;
      
        return (
            <Fragment>
                <Link className="btn btn-light" to="/">Back to search</Link>
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="" className="round-img" style={{width:"150px"}}/>
                       <p>{name}</p>
                    <p>Location:{location}</p>
                    </div>
                    <div>
                    {bio &&(<Fragment>
                        <h3>Bio</h3>
                    <p>{bio}</p>
                    </Fragment>)}
                    <a href={html_url} className="btn btn-dark my-1">Visit my github profile</a>
                    <ul>
                        <li>
                    {login &&(<Fragment>
                        <h6>Username:{login}</h6>
                    </Fragment>)}
                    </li>
                    <li>
                    {blog &&(<Fragment>
                        <h6>Blog:{blog}</h6>
                    </Fragment>)}
                    </li>
                    <li>
                    {company &&(<Fragment>
                        <h6>Website:{company}</h6>
                    </Fragment>)}
                    </li>
                    </ul>
                   </div> 
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-primary">Following: {following}</div>
                    <div className="badge badge-primary">Public repos: {public_repos}</div>
                    <div className="badge badge-primary">Public gists: {public_gists}</div>
                </div>
                <Repos repos={repos}/>
            </Fragment>
        )
    
}
export default User;
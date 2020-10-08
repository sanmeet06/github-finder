import React, {useReducer} from "react";
import axios from "axios";
import GitContext from "./gitContext";
import GitReducer from "./gitReducer";
import {SEARCH_USERS,SET_LOADING,GET_USER,CLEAR_USERS,GET_REPOS} from "../type"

const GitState=(props)=>{
    const initialstate={
        users:[],
        repos:[],
        user:{},
        loading:false,

    }
    let githubClientId;
    let githubClientSecret;
    if(process.env.NODE_ENV!=='production'){
        githubClientId=process.env.REACT_APP_CLIENT_ID;
        githubClientSecret=process.env.REACT_APP_CLIENT_SECRET;
    }else{
        githubClientId=process.env.CLIENT_ID;
        githubClientSecret=process.env.CLIENT_SECRET;
    }
    const searchUsers=async(text)=>{
        setLoading();
          const res= await axios.get(`https://api.github.com/search/users?q=${text}&
          client_id=${githubClientId}&client_secret=${githubClientSecret}`);
          console.log(res);
          dispatch({
              type:SEARCH_USERS,
              payload:res.data.items,
          })
      }
      const clearUsers=()=>{
        dispatch({
            type:CLEAR_USERS
        })
        // setLoading();
    
      }
      const getUser=async (usern)=>{
        setLoading();
        const res= await axios.get(`https://api.github.com/users/${usern}?
        client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        dispatch({
            type:GET_USER,
            payload:res.data,
        })
      }
      const getUserRepos=async (usern)=>{
        setLoading();
        const res= await axios.get(`https://api.github.com/users/${usern}/repos?per_page=5&sort=created:asc&
        client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        dispatch({
            type:GET_REPOS,
            payload:res.data
        })
      }
      const setLoading=()=>{
          dispatch({type:SET_LOADING})
          }

const[state,dispatch]=useReducer(GitReducer,initialstate);
return <GitContext.Provider
value={{
    users:state.users,
    user:state.user,
    loading:state.loading,
    repos:state.repos,
    searchUsers,
    clearUsers,
    getUser,
    getUserRepos
}}

>
{props.children}
</GitContext.Provider>
}

export default GitState;
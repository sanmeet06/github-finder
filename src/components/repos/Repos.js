import React from 'react'
import  Repositems  from './Repositems'

 const Repos = ({repos}) => {
    return (
        repos.map(repo=><Repositems repo={repo} key={repo.id}/>)
    )
}
export default Repos;
import React from 'react'
import Repos from "./Repos"
const Repositems = ({repo}) => {
    return (
        <div className="card">
            <h3>
    <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}
export default Repositems;
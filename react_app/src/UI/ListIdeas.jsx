import React, { useState, useEffect } from "react";
import PostService from '../API/PostService'
import Idea from "./Idea";
import '../styles/ListIdeas.css'
import Button from 'react-bootstrap/Button';


function ListIdeas(props) {
    const [ideas, setIdeas] = useState([])

    function LoadIdeas(){
        setIdeas(PostService.getIdeasAll())
    }
    // useEffect(() => {
    //     LoadIdeas()}, []
    // LoadIdeas()
    console.log(typeof(ideas))
    // if (ideas.length === 0) {
    //     return <p>Нет никаких идей</p>
    // }

    return (
        <div className="page">
            <Button className="btn_getIdeas" onClick={LoadIdeas}></Button>
            {ideas.map(idea => <Idea 
                autor={idea.autor}
                body={idea.body}
                previw={idea.previw}
                rubrics={idea.rubrics}
                title={idea.title}
            />)}
            <h1>fghh</h1>
        </div>
    )
}

export default ListIdeas
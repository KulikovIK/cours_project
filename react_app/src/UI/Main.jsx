import React, { useEffect, useState } from "react"
import Filter from './Filter'
import Idea from "./Idea";
import { getIdeas } from "../API/PostService";


function Main() {
    const [ideas, setIdeas] = useState([])

    useEffect(() => {
        const resa = getIdeas()
        resa.then( res => {
            setIdeas(res)
        })
        .catch(err => {
            console.log(err)}
        )
      }, [setIdeas]);

    if (ideas.length === 0) {return <div>Нет идей</div> }
    
    return (
        <div className="container-md mt-5 idea-list">
            <div className="row justify-content-center align-items-top">
            <Filter val={ideas}/>
            <div className="col">
                {ideas.map(idea =>
                     <div className="page">
                        <Idea 
                            key={idea.preview}
                            autor={idea.autor}
                            title={idea.title}
                            rubrics={idea.rubrics}
                            body={idea.body}
                            preview={idea.preview}/>
                        </div>
                    )};
                </div>
            </div>
        </div>
        ) 
}
export default Main
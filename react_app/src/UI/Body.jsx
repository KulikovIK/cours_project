import React, { useEffect, useState } from "react"
import PostService from "../API/PostService"
import Filter from './Filter'
import Idea from "./Idea"

function Body() {
    const [ideas, setIdeas] = useState([])
    console.log('rrrrrrrrrrrrrrr')
    useEffect(() => {
        const all_ideas = PostService.getIdeasAll()
        setIdeas(all_ideas)

    }, [])
    console.log('r2222222222222rrrrrrrrrrrrrr')
    console.log(ideas.results)
    if (ideas.length === 0) {
        return <div>Нет идей</div>
    }

        return (
            <div className="container-md mt-5 idea-list">
                <div className="row justify-content-center align-items-top">
                <Filter/>
                
                    {ideas.map(idea =>
                        <div className="col">
                            <Idea 
                                autor={idea.autor}
                                title={idea.title}
                                rubrics={idea.rubrics}
                                body={idea.body}
                                preview={idea.preview}/>
                        </div>
                        )};
                </div>
            </div>

            )
        
    };
export default Body
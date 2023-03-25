import React from "react"
import Filter from './Filter'
import Idea from "./Idea"

function Body() {

    return (
        <div className="container-md mt-5 idea-list">
            <div className="row justify-content-center align-items-top">
            <Filter/>
                <div className="col">
                    <Idea/>
                </div>
            </div>
        </div>

        )
    }

export default Body
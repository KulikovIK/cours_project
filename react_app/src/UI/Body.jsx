import React from "react"
import Filter from './Filter'
import Idea from "./Idea"

function Body() {

    return (
        <div class="container-md mt-5 idea-list">
            <div class="row justify-content-center align-items-top">
            <Filter/>
                <div class="col">
                    <Idea/>
                </div>
            </div>
        </div>

        )
    }

export default Body
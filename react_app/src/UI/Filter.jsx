import React from "react"
import Rudiobutton from "./Rudiobutton"

function Title() {

    return (

        <div class="col-md-3 d-none d-md-block">
            <h3>Фильтр</h3>
            <form class="row g-3">
                <div class="col">
                    <Rudiobutton value='Python'/>
                    <Rudiobutton value='JavaScript'/>
                    <button type="submit" class="btn mainButton mb-3">Фильтровать</button>
                </div>
            </form>

        </div>
        )
    }

export default Title
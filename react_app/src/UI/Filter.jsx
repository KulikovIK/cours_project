import React from "react"
import { Button } from "../components/Button";
import Rudiobutton from "./Rudiobutton"

function Title() {

    return (

        <div className="col-md-3 d-none d-md-block">
            <h3>Фильтр</h3>
            <form className="row g-3">
                <div className="col">
                    <Rudiobutton value='Python'/>
                    <Rudiobutton value='JavaScript'/>
                    <Button params={{text:"Фильтровать", type:"submit", styles:"mainButton"}}/>
                </div>
            </form>

        </div>
        )
    }

export default Title;
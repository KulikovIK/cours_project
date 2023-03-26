import React from "react"
import { Button } from "./button/Button"

function Title() {

    return (

        <nav className="navbar sticky-top navbar-light bg-light mb-3 border-bottom border-primary">
        <div className="container-fluid">


            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Главная</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">Мой кабинет</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Профиль</a></li>
                        <li><a className="dropdown-item" href="#">Мои идеи</a></li>
                        <li><a className="dropdown-item" href="#">Что-то ещё</a></li>
                        <li><a className="dropdown-item" href="#">Выход</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#" src="">Wiki</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Выход</a>
                </li>
            </ul>


            <form className="d-flex">
                <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"></input>
                <Button text="Поиск" type="submit" styles="mainButton"/>
            </form>

            <Button text="Войти в систему" type="button" styles="mainButton"/>

        </div>
        </nav>
        )
    }

export default Title;
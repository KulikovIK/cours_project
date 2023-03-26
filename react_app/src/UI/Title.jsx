import React from "react"
import { Button } from "./button/Button"
import { Link, Outlet } from "react-router-dom";

function Title() {
    return (
        <div className="container-md site-container">
            <nav className="navbar sticky-top navbar-light bg-light mb-3 border-bottom border-primary">
                <div className="container-fluid">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="lk/" className="nav-link">Личный кабинет</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="register/" className="nav-link">Регистрация</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Выход</a>
                        </li>
                    </ul>


                    <form className="d-flex">
                        <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <Button text="Поиск" type="submit" styles="mainButton" />
                    </form>

                    <Button text="Войти в систему" type="button" styles="mainButton" />

                </div>
            </nav>
            <div className="container-md mt-5 idea-list">
                <Outlet />
            </div>
        </div>

    )
}

export default Title;
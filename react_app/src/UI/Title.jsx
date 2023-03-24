import React from "react"

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
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Выход</a>
                </li>
            </ul>


            <form className="d-flex">
                <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"></input>

                <button className="btn mainButton" type="submit">Поиск</button>
            </form>


            <button type="button" className="btn mainButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Войти в систему
            </button>

        </div>
        </nav>
        )
    }

export default Title
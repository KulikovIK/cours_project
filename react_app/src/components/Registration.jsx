import React from "react";
import { Button } from "../UI/button/Button";

export const Registration = () => {
    return (
        <div className="container-md mt-5">
            <div className="row justify-content-center align-items-top">
                <div className="col-8">

                    <form>

                        <div className="form-file">
                            <input type="file" className="form-file-input btn btn-outline-primary" id="customFile"/>
                        </div>

                        <div className="mb-3">
                            <label for="inputFirsName" className="form-label">Имя</label>
                            <input type="text" className="form-control" id="inputFirsName" placeholder="Введите Ваше имя"/>
                        </div>

                        <div className="mb-3">
                            <label for="inputLastName" className="form-label">Фамилия</label>
                            <input type="text" className="form-control" id="inputLastName"
                                placeholder="Введите Вашу фамилию"/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Имя</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Введите Ваше имя"/>
                        </div>

                        <div className="mb-3">
                            <label for="inputEmail" className="form-label">Адрес почты</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"
                                placeholder="Ваш@email.com"/>
                            <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="inputPassword" className="form-label">Пароль</label>
                            <input type="password" className="form-control" id="inputPassword"/>
                            <div id="passwordHelpBlock" className="form-text">
                                Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры и не должен
                                содержать пробелов, специальных символов или эмодзи.
                            </div>
                        </div>

                        <Button type="submit" text="Зарегистрироваться" styles="mainButton"/>
                    </form>
                </div>
            </div>
        </div>
    );
};
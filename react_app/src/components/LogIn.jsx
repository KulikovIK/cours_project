import React from "react";

const LogIn = ({togleVisable}) => {
    return (
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Войдите в систему</h5>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Логин или email</label>
                            <input type="email" className="form-control" id="examplepreview1" aria-describedby="emailHelp"
                                placeholder="Введите логин или email"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Пароль</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                placeholder="Введите пароль"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label">Запомнить меня</label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary"
                                data-bs-dismiss="modal" onClick={togleVisable}>Закрыть</button>
                            <button type="button" className="btn mainButton">Войти</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default LogIn;
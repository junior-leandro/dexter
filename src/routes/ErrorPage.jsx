import React from "react";
import errorImage from '../../src/assets/img/error-404.png'
import './errorPage.css'

const ErrorPage = () => {
    return(
        <div className="error">
            <img src={errorImage} alt="imagem de erro"/>
            <p>ERROR - Page Not Found</p>
        </div>
    )
}

export default ErrorPage
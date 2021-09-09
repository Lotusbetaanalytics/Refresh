import React from 'react'
import Component from '../About/component'
import Banner from '../Banner'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <>
        <Banner  Title="Login"/>
        <Component title="Login">
        <form>
                
                <div className="row">
                    <div className="col-md-12 form-group">
                        <input type="text" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="col-md-12 form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="col-md-3 form-group">
                    <input type="submit" className="form-control btn-warning" value="Login" />
                    </div>
                </div>
            </form>
        </Component>
        <Footer />
        </>
    )
}

export default Login

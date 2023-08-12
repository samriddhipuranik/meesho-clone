import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../../Redux/Reducers/authSlice';

const Login = () => {


    const [getForm, setForm] = useState({
        email: '',
        password: ''
    })

    const { email, password } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setForm({
            ...getForm,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (email === getForm.email && password === getForm.password) {
            dispatch(login(getForm));
            navigate('/');
        } else {
            alert("password is wrong")
        }

    }
    return (
        <div className='d-flex justify-content-center align-items-center Form-body'>
            <div className="row ">
                <div className="form-content">
                    <form>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" name='email' onChange={onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" name='password' onChange={onChangeHandler} />
                        </div>

                        {/* <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Submit</button> */}
                        <button type="submit" className="btn " onClick={onSubmitHandler}>Submit</button>
                    </form>
                </div>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default Login

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { register } from '../../Redux/Reducers/authSlice';
import './style.css'

const Register = () => {
    const navigate = useNavigate();



    const [getForm, setForm] = useState({
        username: '',
        email: '',
        password: '',
    })

    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setForm({
            ...getForm,
            [e.target.name]: e.target.value
        })
    }
    const onhandleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(getForm));
        navigate('/login')

    }
    return (
        <div className='d-flex justify-content-center align-items-center Form-body'>
            <div className="row">
                <div className="form-content">
                    <form>
                        <div className="form-group">
                            <label >User Name</label>
                            <input type="text" className="form-control" placeholder="Enter email" name='username' onChange={onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" name='email' onChange={onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" name='password' onChange={onChangeHandler} />
                        </div>

                        <button type="submit" className="btn" onClick={onhandleSubmit}>Submit</button>
                    </form>
                </div>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default Register

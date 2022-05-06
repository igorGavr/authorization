import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {userService} from "../../services";
import {authActions} from "../../redux";

const AuthForm = () => {
    const {register, handleSubmit} = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        pathname === '/register' ? setIsLogin(false) : setIsLogin(true)
    }, [pathname])

    const submit = async (user) => {
        console.log('submit')
        try {
            console.log('submit')
            // якщо в нас не логінація, то ми реєструємо нового Юзера
            if (!isLogin) {
                await userService.create(user)
                //після того як ми зареєструвалися робимо navigate на Login
                navigate('/login')
            }else {
                await dispatch(authActions.login({user}))
            }
        }catch (e) {

        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
            </form>
            <button>{isLogin ? 'login' : 'register'}</button>
            <div>

            </div>

        </div>


    );
};

export {AuthForm};
import React, { useContext } from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { login, me } from '../services/user.service';
import loginSchema from './login-schema';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';
import './Login.scss';

export default function Login() {
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    async function submit(values) {
        try {
            const { token } = await login(values);
            localStorage.setItem('token', token);
            const loggedUser = await me();
            setUser(loggedUser);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="Main">
            <div className="login">
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={submit}>
                    <Form>
                        <div>
                            Username <Field className="input" name="username" placeholder="Username..." />
                            <ErrorMessage component="div" className="error" name="username" />
                        </div>
                        <div>
                            Password <Field className="input" type="password" name="password" placeholder="Password..." />
                            <ErrorMessage component="div" className="error" name="password" />
                        </div>
                        <div>
                            <button type="submit">Log in</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}



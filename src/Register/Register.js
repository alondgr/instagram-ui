import { Field, Formik, Form, ErrorMessage} from 'formik';
import { useHistory } from 'react-router';
import { register } from '../services/user.service';
import registerSchema from './register-schema';
import './Register.scss'




export default function Register() {
    const history = useHistory();

    async function submit(values) {
        try {
            const user = await register(values);
            history.push('/login');
            console.log(user);
            console.log('GOOD')
        } catch (e) {
            console.log(e);
            console.log('??')
        }
    }
    return (
        <div className="Main">
            <div className="register">
                <Formik
                    initialValues={{ name: '', username: '', email: '', password: '' }}
                    validationSchema={registerSchema}
                    onSubmit={submit}>
                    <Form>
                        <div>
                            Name <Field className="input" name="name" placeholder="Name..." />
                            <ErrorMessage component="div" className="error" name="name" />
                        </div>
                        <div>
                            Username <Field className="input" name="username" placeholder="Username..." />
                            <ErrorMessage component="div" className="error" name="username" />
                        </div>
                        <div>
                            Email <Field className="input" type="email" name="email" placeholder="email@email.com..." />
                            <ErrorMessage component="div" className="error" name="email" />
                        </div>
                        <div>
                            Password <Field className="input" type="password" name="password" placeholder="Password..." />
                            <ErrorMessage component="div" className="error" name="password" />
                        </div>
                        <div>
                            <button type="submit">Register</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

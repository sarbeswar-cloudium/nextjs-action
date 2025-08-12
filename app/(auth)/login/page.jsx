import Header from '../../components/header';
import LoginForm from './_components/LoginForm';


const Login = () => {
    

    return (
        <>
        <div className="bg-white">
            <Header />

            <div className="">
                <LoginForm></LoginForm>
            </div>
        </div>
    </>
    )
}

export default Login;
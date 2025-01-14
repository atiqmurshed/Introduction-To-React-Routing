import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oppss !!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2>Page not found</h2>
                    <p>go back where you from</p>
                    <Link to='/'><button>Go Back Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
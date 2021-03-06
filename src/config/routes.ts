import IRoute from "../interfaces/route";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import HomePage from "../pages/home";
import RecipeSender from "../pages/shared/RecipeSender";




const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: true
    },

    {
        path: '/register',
        exact: true,
        component: RegisterPage,
        name: 'Register Page',
        protected: false
    },

    {
        path: '/login',
        exact: true,
        component: LoginPage,
        name: 'Login Page',
        protected: false
    },

    {
        path: '/new-recipe',
        exact: true,
        component: RecipeSender,
        name: 'Add Recipe Page',
        protected: false
    },


]

export default routes
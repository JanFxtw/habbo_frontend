import AjaxRequest from '@/class/AjaxRequest';

const url = process.env.VUE_APP_API_URL;

const loginUser = userData => new AjaxRequest(`${url}authentication/login.php`)
    .expectJson()
    .post({
        userData
    });

const logoutUser = () => new AjaxRequest(`${url}authentication/logout.php`)
    .expectJson()
    .post();

const loginState = () => new AjaxRequest(`${url}authentication/loginState.php`)
    .expectJson()
    .post();

export {
    loginUser, logoutUser, loginState
};

import AjaxRequest from '@/class/AjaxRequest';

const url = process.env.VUE_APP_API_URL;

const loginUser = userData => new AjaxRequest(`${url}login.php`)
    .expectJson()
    .post({
        action: 'login',
        userData
    });

const logoutUser = () => new AjaxRequest(`${url}logout.php`)
    .expectJson()
    .post();

const loginState = () => new AjaxRequest(`${url}loginState.php`)
    .expectJson()
    .post({
        action: 'loginState'
    });

export {
    loginUser, logoutUser, loginState
};

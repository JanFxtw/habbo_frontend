import AjaxRequest from '@/class/AjaxRequest';

const url = process.env.VUE_APP_API_URL;

const getUserData = userData => new AjaxRequest(`${url}userData/getUserData.php`)
    .expectJson()
    .post({userData});

const getUserHistory = userData => new AjaxRequest(`${url}userData/getUserHistory.php`)
    .expectJson()
    .post({userData});

export {
    getUserData, getUserHistory
};

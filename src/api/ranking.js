import AjaxRequest from '@/class/AjaxRequest';

const url = process.env.VUE_APP_API_URL;

const getRankingList = () => new AjaxRequest(`${url}ranking/getRankingList.php`)
    .expectJson()
    .post();

const getUserList = () => new AjaxRequest(`${url}ranking/getUserList.php`)
    .expectJson()
    .post();

const addPoints = userData => new AjaxRequest(`${url}ranking/addPoints.php`)
    .expectJson()
    .post({userData});

export {
    getRankingList, getUserList, addPoints
};

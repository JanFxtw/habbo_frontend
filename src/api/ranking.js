import AjaxRequest from '@/class/AjaxRequest';

const url = process.env.VUE_APP_API_URL;

const getRankingList = () => new AjaxRequest(`${url}ranking/getRankingList.php`)
    .expectJson()
    .post();

const getUserList = () => new AjaxRequest(`${url}ranking/getUserList.php`)
    .expectJson()
    .post();

const getUserRanking = id => new AjaxRequest(`${url}ranking/userRanking.php`)
    .expectJson()
    .post({
        id
    });

export {
    getRankingList, getUserRanking, getUserList
};

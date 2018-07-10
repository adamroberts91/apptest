import axios from 'axios';

const ROOT_URL = 'https://dimbbxpg58.execute-api.eu-west-2.amazonaws.com/sms_app_credit_check_stage/check-credit?'

export const SMSC_LOGIN = 'SMSC_LOGIN';

export function smscLogin(username, password) {
    const url = `${ROOT_URL}username=${username}&password=${password}`
    const request = axios.get(url)
        .then

}
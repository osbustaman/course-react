import { getLogin } from "../js/getLogin";

export const useFechLogin = (data) => {

    const getFechLogin = async () => {

        const { username, password } = data;
        const isLogin = await getLogin({ username, password });
        if (isLogin.status) {
            window.location.href = '/panel-control';
        }else{
            return isLogin;
        }
    }

    return {
        getFechLogin
    }
}

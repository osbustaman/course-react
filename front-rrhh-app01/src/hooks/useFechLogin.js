import { getLogin } from "../js/getLogin";

export const useFechLogin = (data) => {

    const getFechLogin = async () => {

        const { username, password } = data;
        const { status, ok } = await getLogin({ username, password });
        return status
    }

    return {
        getFechLogin
    }
}

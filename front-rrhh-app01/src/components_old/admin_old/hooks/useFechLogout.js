import { getLogout } from "../js/getLogout";

export const useFechLogout = () => {

    const getFechLogout = async () => {

        const isLogout = await getLogout();
        if (isLogout.status) {
            return true;
        }else{
            return false;
        }
    }

    return {
        getFechLogout
    }
}

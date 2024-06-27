import { getUserData } from "../js/getUserData";

export const useUserData = () => {

    const get_UserData = async () => {
        const dataUser = await getUserData();
        return dataUser;
    }

    return {
        get_UserData
    }
}
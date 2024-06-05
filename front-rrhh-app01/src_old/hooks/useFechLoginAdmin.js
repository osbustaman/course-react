
import { getLogin } from '../../js/getLogin';

export const usesFechLoginAdmin = ({user, pass}) => {

    //console.log(`${user} == ${pass}`);

    const get_data = async () => {
        const new_data = await getLogin(category);

    }



    const user_id = 1;
    const name_id = 'admin';

    return {
        user_id,
        name_id
    }
}

import { useState } from "react";

export const useFechLogin = (data) => {

    console.log(data)

    const [isLogin, setIsLogin] = useState(false);

    return {
        isLogin
    }
}

import axios from "axios";

class LoginService {
    setSessionStorage(user) {
        sessionStorage.setItem("authenticatedUser", user);
    }

    getSessionStorage() {
        sessionStorage.getItem("authenticatedUser");
    }

    removedSessionStorage() {
        sessionStorage.removeItem("authenticatedUser");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser");
        if(user===null) return false;
        return true;
    }

    registerUser(login)
    {
        return axios.post(`http://localhost:8888/user/registerUser`,login);
    }
}

export default new LoginService()
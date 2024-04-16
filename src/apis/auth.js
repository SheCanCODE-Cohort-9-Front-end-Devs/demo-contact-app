import axios from "axios";
const API = import.meta.env.VITE_BASE_API;

export const SignIn = (signInData) => {
    return axios.post(`${API}/auth/signin`, signInData)
        .then((response) => {
            return response.data;
            // The response is structured like this
            // {
            //     "user": {
            //       "firstName": "string",
            //       "lastName": "string",
            //       "email": "string"
            //     },
            //     "token": "string"
            //   }
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export const SignUp = (signUpData) => {
    return axios.post(`${API}/auth/signup`, signUpData)
        .then((response) => {
            return response.data;
            // The response is structured like this:
            // {
            //     "message": "Account created!"
            //   }
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};
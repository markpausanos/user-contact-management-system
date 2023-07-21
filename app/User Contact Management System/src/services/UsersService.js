import axios from "axios";
import config from "./config";

const BASE_URL = `${config.API_URL}/Users`;
const REFRESH_TOKEN_URL = `${BASE_URL}/Tokens/Refresh`;

const UsersService = {
	login: (user) => axios.post(`${BASE_URL}/Login`, user),
	register: (user) => axios.post(`${BASE_URL}/Register`, user),
	refreshToken: (userTokenRequest) =>
		axios.post(REFRESH_TOKEN_URL, userTokenRequest),
	updatePassword: (userUpdatePassword) =>
		axios.put(`${BASE_URL}`, userUpdatePassword),
	updateDetails: (userUpdateDetails) =>
		axios.put(`${BASE_URL}/Details`, userUpdateDetails),
};

export default UsersService;

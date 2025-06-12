import ky from "ky";
import {API_URL} from "../../../config.ts";
import {UserType} from "../../../types/UserType.ts";

// Pobranie informacji o zalogowanym użytkowniku
export const getMe = async () => {
    return ky.get(`${API_URL}/user/me`, {
        credentials: "include"
    }).json<UserType>();
}
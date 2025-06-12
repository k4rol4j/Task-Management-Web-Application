import {ToDoFormValues} from "../../../types/ToDoFormValues.ts";
import ky from "ky";
import {ToDoType} from "../../../types/ToDoType.ts";
import {API_URL} from "../../../config.ts";


export const createTodo = async (data: ToDoFormValues) => {
    return ky.post(`${API_URL}/todo`, {json: data, credentials: "include"}).json<ToDoType>();
}
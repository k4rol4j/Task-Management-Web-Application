import {ToDoType} from "../../../types/ToDoType.ts";
import ky from "ky";

export const listTodo = async () => {
    return ky.get('${API_URL}/todo', {credentials: "include"}).json<ToDoType[]>();
}
import {useEffect, useState} from "react";
import {SimpleGrid} from "@mantine/core";
import {ToDoType} from "../../types/ToDoType";
import {ToDoListItem} from "./ToDoListItem";
import {listTodo} from "./api/todo.ts";

export const ToDoList = () => {
    const [data, setData] = useState<ToDoType[]>([]);

    useEffect(() => {
        listTodo().then((response) => setData(response));
    }, []);

    return (
        <div style={{width: "100%"}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map((item) => <ToDoListItem key={item.id} item={item} />)}
            </SimpleGrid>
        </div>
    );
};

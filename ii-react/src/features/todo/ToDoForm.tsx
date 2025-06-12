import {useToDoForm} from "./hooks/useToDoForm.ts";
import {ToDoFormValues} from "../../types/ToDoFormValues.ts";
import {Button, Checkbox, Group, Paper, Stack, Textarea, TextInput} from "@mantine/core";
import {createTodo} from "./api/create-todo.ts";

export const ToDoForm = () => {
    const form = useToDoForm();

    const handleSubmit = async (vals: ToDoFormValues) => {
        try {
            await createTodo(vals);
        }catch (e){
            console.error(e);
        }
    }

    return (
        <Paper shadow="xs" p="xl">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={"lg"}>
                    <TextInput
                        withAsterisk
                        label="Tytuł"
                        placeholder="Tytuł todo"
                        {...form.getInputProps("title")}
                    />
                    <Textarea withAsterisk label="Treść"
                              placeholder="Treść todo"{...form.getInputProps('content')}>
                    </Textarea>

                    <Checkbox
                        label="Wykonane"
                        {...form.getInputProps("done", {type: "checkbox"})}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Wyślij</Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    )
}
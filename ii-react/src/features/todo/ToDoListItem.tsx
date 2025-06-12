import {ToDoType} from "../../types/ToDoType";
import {FC, memo} from "react";
import {Card, Image, Text, Checkbox} from "@mantine/core";

interface ToDoListItemProps {
    item: ToDoType;
}

export const ToDoListItem: FC<ToDoListItemProps> = memo(({item}) => {
    return (
        <Card
            shadow="sm"
            style={{
                border: item.done ? "2px solid rgba(0, 128, 0, 0.8)" : "1px solid #ccc",
                backgroundColor: item.done ? "#d4edda" : "white",
            }}
        >
            <Card.Section>
                <Image
                    src="https://placehold.co/400x200"
                    height={200}
                    alt="Task Image"
                />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
                {item.title}
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
                {item.content}
            </Text>

            <Checkbox
                label="Wykonane"
                checked={item.done}
                readOnly
                mt="md"
            />
        </Card>
    );
});
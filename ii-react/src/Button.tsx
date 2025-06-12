import {FC} from "react";

type ButtonProps = {
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({onClick}) => {
    return (
        <button onClick={onClick}>OK</button>
    )
}
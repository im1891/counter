import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";


type DefaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PropsType = DefaultButtonType
export const Button: React.FC<PropsType> = (props) => {




    return (
        <button
            {...props}>
        </button>

    )
}
import React from 'react';

export type ButtonType = {
    onClickAdd: () => void
}

const Button = (props: ButtonType) => {
    return (
        <div>
            <button onClick={props.onClickAdd}>+</button>
        </div>
    );
}

export default Button;

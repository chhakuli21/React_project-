import React from 'react';

export default function Alert({ Alert }) {
    return (
        Alert && ( <
            div className = { `alert alert-${Alert.type} alert-dismissible fade show` }
            role = "alert" >
            <
            strong > { Alert.msg } < /strong> <
            button type = "button"
            className = "btn-close"
            data_bs_dismiss = "alert"
            aria_label = "Close" > < /button> <
            /div>
        )
    );
}
import { ToastOptions, toast as t } from "react-toastify";

import Icon from "../../assets/icons/success_alert.svg?react";
import ErrorIcon from "../../assets/icons/toast_error.svg?react";
export const toast = (message: string, options?: ToastOptions) => {
    t(message, {
        className: "toast-custom",
        position: "bottom-center",
        icon: (props) => props.type === 'error' ? <ErrorIcon/> : <Icon/>,
        ...options,
    });
};

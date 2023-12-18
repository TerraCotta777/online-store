import { Box, Typography } from "@mui/material";
import { Component, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    errorInfo: string;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: "",
        };
    }

    componentDidCatch(error: Error) {
        this.setState({ hasError: true, errorInfo: error.message });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <Box
                    sx={{
                        // flex: 1,
                        // width: "100%",
                        // height: "100%",
                        // minWidth: "200px",
                        // minHeight: "200px",
                        // display: "flex",
                        // justifyContent: "center",
                        // alignItems: "center",
                        // flexDirection: "column",
                    }}
                >
                    <Typography>
                        Тут произошла ошибка! Попробуйте перезайти или обновить
                        страницу
                    </Typography>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.error.main,
                        }}
                    >
                        {this.state.errorInfo}
                    </Typography>
                </Box>
            );
        }

        return this.props.children;
    }
}

import React, { useState } from "react";
import Box from "@mui/material/Box";

import { BaseInput } from "../molecules/BaseInput";
import { BaseButton } from "../atoms/BaseButton";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
export const LoginContainer = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        onLogin(username, password);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <form>
                <BaseInput
                    label="Username"
                    variant="outlined"
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                />
                <BaseInput
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    sx={{ marginTop: 2 }}
                />
                <BaseButton
                    variant={"contained"}
                    color={"primary"}
                    onClick={handleLogin}
                    text={"Login"}
                    sx={{ textAlign: "center", marginTop: 3 }}
                />
            </form>
        </Box>
    );
};
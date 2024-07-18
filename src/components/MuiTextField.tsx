import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import ToggleIcon from "material-ui-toggle-icon";

export const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>(
    "Don't share your password"
  );

  const handleShowPassword = (showPassword: boolean) => {
    setShowPassword(!showPassword);
  };

  const handleTextChanged = (text: string) => {
    if (text === "najm") {
      setIsError(false);
      setHelperText("Don't share your password");
    } else if (text !== "" && text !== "najm") {
      setIsError(true);
      setHelperText("Password not correct");
    } else {
      setIsError(false);
      setHelperText("Don't share your password");
    }
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField variant="outlined" label="Name"></TextField>
        <TextField variant="filled" label="Name"></TextField>
        <TextField variant="standard" label="Name"></TextField>
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          required
          label="Mot de passe"
          variant="outlined"
          helperText="Veuillez renseigner ce champ"
          type="password"
          error
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Password"
          variant="outlined"
          helperText={helperText}
          type={showPassword ? "text" : "password"}
          error={isError}
          onChange={(e) => handleTextChanged(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  disableRipple
                  onClick={() => handleShowPassword(showPassword)}
                >
                  <ToggleIcon
                    on={showPassword}
                    onIcon={<VisibilityIcon />}
                    offIcon={<VisibilityOffIcon />}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
};

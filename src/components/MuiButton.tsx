import {
  Button,
  ButtonGroup,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Stack } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const MuiButton = () => {
  const [format, setFormat] = useState<string>();
  const handleClickFormat = (clikedFormat: string) => {
    setFormat(clikedFormat);
  };

  console.log(format);

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="/">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="error" size="large">
          error
        </Button>
        <Button variant="contained" color="inherit">
          inherit
        </Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="warning" size="small">
          warning
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="info"
          startIcon={<SendIcon />}
          disableElevation
        >
          info
        </Button>
        <Button
          variant="contained"
          color="info"
          endIcon={<SendIcon />}
          disableRipple
        >
          info
        </Button>
        <IconButton color="info" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          color="success"
          variant="contained"
          orientation="vertical"
          size="small"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          color="info"
          value={format}
          onChange={(e, value) => handleClickFormat(value)}
          exclusive
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

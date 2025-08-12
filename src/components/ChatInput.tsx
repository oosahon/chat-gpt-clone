"use client";

import { palette } from "@/theme";
import { Add } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";

export const ChatInput = () => {
  const [initialHeight, setInitialHeight] = useState(0);
  const [removeSideButton, setRemoveSideButton] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight, value } = event.target;
    if (value.length === 1) setInitialHeight(scrollHeight);
    const heightHasChanged =
      initialHeight !== 0 && scrollHeight / initialHeight > 1;
    setRemoveSideButton(heightHasChanged);
  };

  const inputBaseSx = { borderRadius: 5 };
  const iconBaseSx = {
    mr: 1,
    ":hover": { backgroundColor: palette.text.disabled },
  };
  const expandedInputSx = { position: "relative", paddingBottom: 8 };
  const expandedIconSx = { position: "absolute", bottom: 5 };

  return (
    <Box
      width="100%"
      maxWidth={900}
      mx="auto"
      p={2}
      sx={{ position: "fixed", bottom: 0 }}
    >
      <TextField
        multiline
        fullWidth
        onChange={handleChange}
        maxRows={10}
        variant="outlined"
        placeholder="Go on, ask me anything..."
        slotProps={{
          input: {
            sx: {
              ...inputBaseSx,
              ...(removeSideButton && expandedInputSx),
            },
            startAdornment: (
              <IconButton
                size="medium"
                color="inherit"
                sx={{
                  ...iconBaseSx,
                  ...(removeSideButton && expandedIconSx),
                }}
              >
                <Add />
              </IconButton>
            ),
          },
        }}
      />
    </Box>
  );
};

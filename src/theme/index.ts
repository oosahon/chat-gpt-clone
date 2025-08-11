"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface Palette {
    bg: {
      success: string;
      error: string;
      warning: string;
    };
  }

  interface PaletteOptions {
    bg: {
      success: string;
      error: string;
      warning: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const palette = {
  primary: {
    main: "#10A37F",
    dark: "#0E7C62",
    light: "#1ABC9C",
  },
  secondary: {
    main: "#8E8E93",
  },
  error: {
    main: "#F87171",
  },
  warning: {
    main: "#FBBF24",
  },
  info: {
    main: "#60A5FA",
  },
  success: {
    main: "#4ADE80",
  },
  text: {
    primary: "#ECECEC",
    secondary: "#A1A1AA",
    disabled: "#6B7280",
  },
  bg: {
    success: "#1E1F1E",
    warning: "#1E1E1B",
    error: "#1E1B1B",
    neutral: "#202123",
    main: "#181818",
  },
};

export const muiTheme = createTheme({
  cssVariables: true,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "green !important",
          color: "red",
        },
        "*": {
          backgroundColor: "green !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.text.primary,
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    button: {
      textTransform: "none",
      letterSpacing: "0.01rem",
      wordSpacing: "0.01rem",
      fontWeight: 400,
    },
    h1: {
      fontSize: "5.5rem",
      color: "text.primary",
    },
    h2: {
      fontSize: "4.0rem",
      color: palette.text.primary,
    },
    h3: {
      fontSize: "3rem",
      color: palette.text.primary,
    },
    h4: {
      fontSize: "2.25rem",
      color: palette.text.primary,
    },
    h5: {
      fontSize: "1.5rem",
      color: palette.text.primary,
    },
    h6: {
      fontSize: "1.25rem",
      color: palette.text.primary,
    },
    body1: {
      color: palette.text.primary,
    },
    body2: {
      color: palette.text.primary,
    },
    caption: {
      color: palette.text.primary,
    },
  },
  palette,
});

muiTheme.typography.h1 = {
  ...muiTheme.typography.h1,
  [muiTheme.breakpoints.down("sm")]: {
    fontSize: "3.5rem",
  },
};

muiTheme.typography.h2 = {
  ...muiTheme.typography.h2,
  [muiTheme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
};

muiTheme.typography.h3 = {
  ...muiTheme.typography.h3,
  [muiTheme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
};

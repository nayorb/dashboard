import { createTheme, PaletteOptions } from "@mui/material";

const palette = {
  primary: {
    main: "#4071FB",
  },
  common: {
    white: "#FFFFFF",
    black: "#000000",
  },
  grey: {
    100: "#FAFAFA",
    200: "#F5F5F5",
    300: "#EEEEEE",
    400: "#E0E0E0",
    500: "#BDBDBD",
    600: "#9E9E9E",
    700: "#757575",
    800: "#616161",
    900: "#424242",
  },
};

const theme = createTheme({
  palette: palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 32,
          height: 80,
          fontWeight: "bold",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 32,
          backgroundColor: palette.common?.white,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          padding: 16,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          marginLeft: -16,
          marginRight: -16,
          padding: "16px 32px",
          borderTop: `1px solid ${palette.grey[100]}`,
          borderBottom: `1px solid ${palette.grey[100]}`,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          marginTop: 8,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: 60,
          minHeight: 60,

          "& .MuiTabs-indicator": {
            height: 20,
            borderRadius: 32,
            width: "40px !important",
            transform: "translate(calc(240% - 20px), 10px)",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: palette.grey[400],
          flex: 1,
          textTransform: "none",
          fontSize: 16,
          fontWeight: 500,
          letterSpacing: 0.8,

          "&.Mui-selected": {
            color: palette.common?.black,
          },
        },
      },
    },
  },
});

export default theme;

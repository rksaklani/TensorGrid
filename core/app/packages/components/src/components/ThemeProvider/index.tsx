import * as fos from "@tensorgrid/state";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from "@mui/material/styles";
import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { ThemeContext as LegacyTheme } from "styled-components";

function dynamicTheme(accessor: string) {
  const parts = accessor.split(".");
  parts.unshift("--fo");
  return `var(${parts.join("-")})`;
}

let theme = extendMuiTheme({
  cssVarPrefix: "fo",
  typography: {
    fontFamily: "Palanquin, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  zIndex: {
    // Samples modal zIndex is set to 1000
    operatorPalette: 1001,
  },
  colorSchemes: {
    light: {
      palette: {
        themeMode: "light",
        action: {
          active: "hsl(200, 0%, 30%)",
          disabled: "hsl(0, 0.9523809523809558%, 20.588235294117645%)",
        },
        background: {
          body: "#ffffff",
          button: "#fff8f2",
          header: "rgba(255, 255, 255, 0.92)",
          input: "#ffffff",
          level1: "#fffaf5",
          level2: "#ffffff",
          level3: "#fff8f2",
          looker: "#fffaf5",
          mediaSpace: "rgba(255, 250, 245, 0.9)",
          mediaSpaceTransparent: "hsla(255, 250, 245, 0)",
          modalBackdrop: "rgba(26, 26, 46, 0.45)",
          sidebar: "rgba(255, 255, 255, 0.94)",
          tooltip: "#1a1a2e",
          viewBarButtons: "rgba(255, 255, 255, 0.96)",
          inactiveTab: "#fff4e6",
          popup: "#ffffff",
          field: "#fffaf5",
          activeCell: "#fff4e6",
        },
        divider: "rgba(255, 107, 0, 0.12)",
        dividerDisabled: "rgba(255, 107, 0, 0.08)",
        danger: {
          plainColor: "hsl(0, 87%, 47%)",
        },
        grey: {
          400: "#fff",
          5: "hsl(200, 0%, 5%)",
        },
        neutral: {
          plainColor: "hsl(213, 100%, 47%)",
          softBg: "hsl(200, 0%, 95%, 0.3)",
          softBorder: "hsl(200, 0%, 75%)",
        },
        primary: {
          main: "hsl(25, 100%, 51%)",
          mainChannel: "0 0 0",
          plainBorder: "hsl(200, 0%, 90%)",
          plainColor: "hsl(25, 100%, 51%)",
          softBg: "hsl(200, 0%, 85%, 0.7)",
          softBorder: "hsl(200, 0%, 80%)",
        },
        secondary: {
          main: "hsl(200, 0%, 30%)",
        },
        tertiary: {
          main: "hsl(200, 0%, 90%)",
          hover: "hsl(200, 0%, 85%)",
        },
        focusVisible: "hsl(212, 97%, 57%, 0.3)",
        text: {
          buttonHighlight: "hsl(200, 0%, 100%)",
          primary: "hsl(200, 0%, 0%)",
          secondary: "hsl(200, 0%, 30%)",
          tertiary: "hsl(200, 0%, 50%)",
          invert: "hsl(200, 0%, 100%)",
        },
        custom: {
          shadow: "hsl(200, 0%, 90%)",
          shadowDark: "hsl(200, 0%, 70%)",
          lightning: "hsl(25, 100%, 51%)",
          toastBackgroundColor: "#FFFFFF",
          primarySoft: "hsl(25, 100%, 51%)",
        },
        voxel: {
          500: "#FF6D04",
          600: "#D54B00", // Not in the design. Darker shade of 500 of is used
        },
        error: {
          main: "hsl(0, 87%, 53%)",
        },
        Avatar: {
          defaultBg: "hsl(200, 0%, 85%)",
        },
      },
    },
    dark: {
      palette: {
        themeMode: "dark",
        action: {
          active: "hsl(200, 0%, 70%)",
          disabled: "hsl(200, 0%, 50%)",
        },
        background: {
          button: "hsl(220, 12%, 22%)",
          header: "rgba(22, 22, 34, 0.94)",
          body: "#12121a",
          looker: "#14141f",
          level1: "#161622",
          level2: "#1a1a28",
          level3: "#1e1e2e",
          mediaSpace: "rgba(20, 20, 31, 0.92)",
          mediaSpaceTransparent: "hsla(20, 20, 31, 0)",
          modalBackdrop: "rgba(0, 0, 0, 0.75)",
          sidebar: "rgba(26, 26, 40, 0.96)",
          tooltip: "#1e1e2e",
          viewBarButtons: "rgba(30, 30, 46, 0.95)",
          inactiveTab: "hsl(220, 12%, 18%)",
          paper: "hsl(220, 12%, 14%)",
          popup: "hsl(220, 12%, 20%)",
          field: "rgba(255, 107, 0, 0.08)",
          activeCell: "rgba(255, 107, 0, 0.12)",
          card: "hsl(220, 12%, 16%)",
        },
        divider: "rgba(255, 140, 0, 0.14)",
        dividerDisabled: "rgba(255, 140, 0, 0.08)",
        danger: {
          plainColor: "hsl(0, 87%, 53%)",
        },
        grey: {
          400: "#fff",
          5: "hsl(200, 0%, 5%)",
        },
        neutral: {
          softBg: "hsl(200, 0%, 20%, 0.3)",
          softBorder: "hsl(200, 0%, 25%)",
          plainColor: "hsl(213, 100%, 53%)",
        },
        primary: {
          main: "hsl(25, 100%, 51%)",
          mainChannel: "0 0 0",
          plainColor: "hsl(25, 100%, 51%)",
          plainBorder: "hsl(200, 0%, 5%)",
          softBg: "hsl(200, 0%, 25%)",
          softBorder: "hsl(200, 0%, 20%)",
        },
        secondary: {
          main: "hsl(200, 0%, 70%)",
        },
        tertiary: {
          main: "hsl(200, 0%, 15%)",
          hover: "hsl(200, 0%, 20%)",
        },
        focusVisible: "hsl(212, 97%, 43%, 0.3)",
        text: {
          buttonHighlight: "hsl(200, 0%, 100%)",
          primary: "hsl(200, 0%, 100%)",
          secondary: "hsl(200, 0%, 70%)",
          tertiary: "hsl(200, 0%, 50%)",
          invert: "hsl(200, 0%, 5%)",
        },
        custom: {
          shadow: "hsl(200, 0%, 10%)",
          shadowDark: "hsl(200, 0%, 0%)",
          lightning: "#f5b700",
          toastBackgroundColor: "#333",
          primarySoft: "hsl(25, 100%, 80%)",
          primaryMedium: "hsl(25, 100%, 71%)",
        },
        voxel: {
          500: "#FF6D04",
          600: "#D54B00", // Not in the design. Darker shade of 500 of is used
        },
        error: {
          main: "hsl(0, 87%, 53%)",
        },
      },
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: { color: "#ffffff" },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            borderColor: dynamicTheme("palette.divider"),
          },
        },
      ],
    },
    MuiModal: {
      styleOverrides: {
        root: {
          // Relative to MuiMenu. Without it, Playwright will not be
          // able to click on Mui-Select component without force=true
          zIndex: 99,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          zIndex: 999,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: dynamicTheme("palette.text.secondary"),
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: dynamicTheme("palette.text.tertiary"),
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: dynamicTheme("palette.text.primary"),
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: dynamicTheme("palette.background.level2"),
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          ".MuiSlider-thumb": {
            transform: "translate(-50%, -50%)",
            top: "50%",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${dynamicTheme("palette.divider")}`,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: dynamicTheme("palette.divider"),
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
  },

  fontFamily: {
    body: "Palanquin, sans-serif",
  },
  opacity: {
    inputPlaceholder: 0.5,
  },
});

export const useTheme = () => {
  return theme.colorSchemes[useRecoilValue(fos.theme)].palette;
};

export const useFont = () => {
  return theme.typography.fontFamily;
};

const ThemeProvider: React.FC<
  React.PropsWithChildren<{ customTheme?: typeof theme }>
> = ({ children, customTheme }) => {
  if (customTheme) theme = customTheme;
  const loadable = useRecoilValueLoadable(fos.theme);
  const current = loadable.state === "hasValue" ? loadable.contents : "dark";

  // Sync dark class on document element for design-system components
  React.useEffect(() => {
    if (current === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [current]);

  return (
    <LegacyTheme.Provider value={theme.colorSchemes[current].palette}>
      <CssVarsProvider theme={theme} defaultMode={current}>
        {children}
      </CssVarsProvider>
    </LegacyTheme.Provider>
  );
};

export default ThemeProvider;

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        backgroundColor: "gray.300",
      },
      body: {
        bgColor: "gray.50",
        maxWidth: "460px",
        width: "100%",
        minHeight: "100vh",
        margin: "0 auto",
        overflowX: "hidden",
      },
    },
  },

  fonts: {
    heading: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
});

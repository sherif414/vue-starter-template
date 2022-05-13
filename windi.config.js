import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "0px 1px 2px 0px rgb(0 0 0 / 24%)",
      },
    },
  },
});

import {
  head,
  pwa,
  axios,
  css,
  plugins,
  toast,
  buildModules,
  modules,
  colorMode
} from "./constants";

export default {
  target: "static",
  head,
  pwa,
  css,
  plugins,
  components: true,
  buildModules,
  modules,
  axios,
  toast,
  colorMode,
  content: {},
  build: {}
};

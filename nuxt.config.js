import {
  head,
  pwa,
  axios,
  css,
  plugins,
  toast,
  buildModules,
  modules,
  colorMode,
  build
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
  auth: {
    strategies: {
      local: {
//      scheme: "refresh",
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          autoFetch: true
        },
//      refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
//        property: "refresh_token",
//        data: "refresh_token",
//      },
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
//        refresh: { url: "/api/auth/refresh-token", method: "post" },
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: "/api/auth/user", method: "get" }
        }
      }
    }
  },
  build
};

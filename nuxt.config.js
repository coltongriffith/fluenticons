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
  build,
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
  env: {
    api: process.env.NODE_ENV !== "production" ? "http://localhost:3001" : "https://api.fluenticons.co"
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
        },
        user: {
          property: "user",
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
          logout: false,
          user: { url: "/api/auth/user", method: "get" },
        },
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        codeChallengeMethod: "",
        responseType: "code",
        grantType: "authorization_code",
        redirectUri: `${process.env.PUBLIC_URL}/callback/google`,
        endpoints: {
          token: "/api/auth/social/google",
          userInfo: "/api/auth/user",
        },
      },
      facebook: {
        endpoints: {
          userInfo: "/api/auth/user",
        },
        redirectUri: `${process.env.PUBLIC_URL}/callback/facebook`,
        clientId: process.env.FACEBOOK_CLIENT_ID,
        scope: ["public_profile", "email"],
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        redirectUri: `${process.env.PUBLIC_URL}/callback/github`,
        endpoints: {
          userInfo: "/api/auth/user",
        },
      },
    },
  },
  build,
  generate: {
    fallback: true
  }
};

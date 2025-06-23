module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@libs": "./src/libs",
          "@components": "./src/components",
          "@hooks": "./src/libs/ui-shared/hooks",
          "@assets": "./src/assets",
          "@constants": "./src/constants",
          "@app": "./src/app",
        },
      },
    ],
  ],
};

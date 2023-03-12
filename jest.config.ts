// module.exports = {
//   preset: "react-native",
//   setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
//   transformIgnorePatterns: [
//     "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)",
//   ],
// };
import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "react-native",
  setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)",
  ],
};

export default config;

const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: [
      resolver.assetExts.filter((ext) => ext !== "svg"),
      "glb",
      "gltf",
      "png",
      "jpg",
      "ttf",
    ],
    sourceExts: [
      ...resolver.sourceExts,
      "svg",
      "js",
      "jsx",
      "json",
      "ts",
      "tsx",
      "cjs",
      "mjs",
    ],
  };

  return config;
})();

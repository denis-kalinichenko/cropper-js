import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
    entry: "src/index.js",
    format: "iife",
    sourceMap: "inline",
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
      babel({
        presets: ["es2015-rollup"],
        babelrc: false
      }),
    ],
    dest: "dist/g2a-image-crop.js",
    moduleName: "ImageCrop"
};

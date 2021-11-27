module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  "vue/no-use-v-if-with-v-for": [
    "error",
    {
      allowUsingIterationVar: false,
    },
  ],
  //   rules: {
  //     // allow debugger during development
  //     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //     "vue/no-use-v-if-with-v-for": "off"
  // }
};

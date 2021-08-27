module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { configFile: '.swcrc' }],
  },
};

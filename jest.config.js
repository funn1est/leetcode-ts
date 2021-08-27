module.exports = {
  transform: {
    '^.+\\.(t|j)s$': ['@swc/jest', { configFile: '.swcrc' }],
    '^.+\\.(t|j)sx$': ['@swc/jest', { configFile: '.swcrc' }],
  },
};

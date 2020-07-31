module.exports = {
  extends: '@snowpack/app-scripts-lit-element',
  scripts: {},
  plugins: [],
  buildOptions: {
    clean: true,
    baseUrl: '',
  },
  mount: {
    src: '/_dist_',
    public: '/',
  },
  alias: {
    '@modules': './web_modules',
  },
  devOptions: {
    bundle: false,
    out: 'build',
    open: 'default',
  },
};

import { resolve } from 'path';
import { IConfig } from 'umi-types';

const TARGET = 'https://help.tencentbot.top';

const umiPluginReactOption = {
  antd: true,
  dva: {
    immer: true,
  },
  dynamicImport: { webpackChunkName: true },
  title: '兰德索尔最强大脑',
  routes: {
    exclude: [
      /models\//,
      /services\//,
      /model\.(t|j)sx?$/,
      /service\.(t|j)sx?$/,
      /components\//,
      /hooks\//,
      /hook\.(t|j)sx?$/,
      /hooks\.(t|j)sx?$/,
      /context\.(t|j)sx?$/,
    ],
  },
};

const proxy = {
  '/services': {
    target: 'https://help.tencentbot.top/',
    changeOrigin: true,
    secure: false,
    pathRewrite: { '^/services': '' },
  },
};

// ref: https://umijs.org/config/
const config: IConfig = {
  history: 'hash',
  ignoreMomentLocale: true,
  treeShaking: true,
  targets: { ie: 9 },
  hash: true,
  alias: {
    '@': resolve(__dirname, './src'),
    configs: resolve(__dirname, './configs.ts'),
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', umiPluginReactOption],
  ],
  proxy,
  theme: {
    'font-size-base': '12px',
    'line-height-base': '1.2',
    'font-family': '微软雅黑',
    'primary-color': '#ffc069',
  },
};

export default config;

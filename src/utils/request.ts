import { message as Message } from 'antd';
import createInstance from 'requex';

export * from 'requex';

type Response = {
  status?: 'done' | 'queue' | 'notfound';
  title?: string;
  pos?: number;
};

export const code2Message = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
  514: '请求过快, 请稍后重试。',
};

/** 请求默认处理流程. */
// 根据每个项目请求返回体格式不同而修改

export const request = createInstance<Response>(
  {
    withCredentials: true,
    confirmText: '是否跳转到新页面?',
    isSuccess: data => {
      const { status = 'notfound' } = data;
      return ['done'].includes(status);
    },
  },
  {
    onFail: (data, status) => {
      if (status >= 200 && status < 300) {
        //   业务错误
        if (data.status === 'queue') {
          Message.warn(`查询队列中, 您当前队列位置${data.pos}`);
        }
        if (data.status === 'notfound') {
          Message.warn('查询失败, 请重新查询!');
        }
      } else {
        Message.error(code2Message[status]);
      }
    },
  },
);

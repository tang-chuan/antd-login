import instance from './request';

export default function getLogin(params) {
  return instance({
    url: '/system/login',
    method: 'post',
    data: params,
  });
}

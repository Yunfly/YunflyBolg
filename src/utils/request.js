import fetch from 'dva/fetch';
import { notification } from 'antd';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function buildResult(response) {
  return response.json().then((result) => {
    if (result.code >= 200 && result.code < 300) {
      // eslint-disable-next-line
      result.success = true;
      return result;
    } else {
      const error = new Error(result.message);
      error.result = result;
      throw error;
    }
  });
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(buildResult)
    .catch((error) => {
      // 构建错误结果对象
      const result = { success: false, url };
      if ('code' in error) result.code = error.code;
      if ('stack' in error) result.stack = error.stack;
      if ('message' in error) result.message = error.message;

      // 提示错误内容
      if (result.message) {
        notification.error({
          message: `请求错误: ${result.url}`,
          description: result.message,
        });
      }
      return result;
    });
}

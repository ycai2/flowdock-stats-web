import urls from '../constants/urls';

const getData = (url, params) =>
  fetch(url)
    .then(handleErrors)
    .then(response => response.json())
    .catch(err => console.log(err));

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const getUsersData = (params = {}) => getData(urls.USERS, params);
export const getMessagesData = (params = {}) => getData(urls.MESSAGES, params);
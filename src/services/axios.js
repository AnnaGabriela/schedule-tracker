import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/graphql/';

function getResolvedOrRejectedPromise(res) {
  if (res.data.errors) return Promise.reject(res.data.errors);
  return Promise.resolve(res.data.data);
}

function getData(url) {
  return axios.get(url);
}


function postData(query) {
  return axios.post(axios.baseURL, {
    headers: { 'Content-Type': 'application/json' },
    query,
  });
}

axios.interceptors.request.use(config => config, err => Promise.reject(err));

axios.interceptors.response.use(res => getResolvedOrRejectedPromise(res),
  (err) => {
    if (err.request.status === 0 && err.request.readyState === 4) {
      throw new Error('Algo deu errado. Tente novamente mais tarde!');
    }
  });

function getAssociateData(associateName) {
  const query = `?query=query{getAssociateData(associateName:"${associateName}"){schedule{date,entry,exit}, scheduleHistory{date,entry,exit}}}`;
  return getData(query);
}

function createNewAssociate(associateName, date, entry, exit) {
  const query = `mutation{createAssociate(associate:{name: "${associateName}",schedule:{date:"${date}",entry:"${entry}",exit:"${exit}"}})}`;
  return postData(query);
}

function setSchedule(associateName, date, entry, exit) {
  const query = `mutation{setNewSchedule(associateName:"${associateName}",schedule:{date:"${date}",entry:"${entry}",exit:"${exit}"})}`;
  return postData(query);
}

export default {
  getAssociateData,
  createNewAssociate,
  setSchedule,
};

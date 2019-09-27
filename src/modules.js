import Axios from 'axios'

Axios.defaults.baseURL = 'http://private-bc245d-brewoptixv2.apiary-mock.com'
Axios.defaults.headers.Accept = 'application/json'
Axios.defaults.headers.common['Authorization'] = 'Bearer ABCDEF'
Axios.defaults.headers.common['x-supplier-id'] =
  'ad51d5ac-17bb-4240-8648-c483b224b2aa'
Axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

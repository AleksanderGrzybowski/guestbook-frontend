import axios from 'axios';
import backendUrl from './backendUrl';

export function listEntries() {
    return axios.get(backendUrl + '/entry')
      .then(({data}) => data);
}

export function saveEntry(username, text) {
    return axios.post(backendUrl + '/entry', {username, text});
}
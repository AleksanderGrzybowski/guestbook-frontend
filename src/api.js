import axios from 'axios';
import backendUrl from './backendUrl';

const entryUrl = backendUrl + '/entry';

export function listEntries() {
    return axios.get(entryUrl).then(({data}) => data);
}

export function saveEntry(username, text) {
    return axios.post(entryUrl, {username, text});
}
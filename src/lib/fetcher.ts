import axios from 'axios';

const fetcher = async (url: string, data: undefined) => {
  axios({
    method: data ? 'POST' : 'GET',
    url: `${window.location.origin}/api/${url}`,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then((res) => res.data);
};

export default fetcher;

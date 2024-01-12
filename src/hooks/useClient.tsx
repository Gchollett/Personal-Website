import axios from 'axios';


/**
 * Makes an instance of an axios client
 * @returns The client instance
 */
const useClient = () => {
    const client = axios.create()
    return client;
}

export default useClient;
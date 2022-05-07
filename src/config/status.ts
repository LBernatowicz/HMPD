/**
 * export all bad API status on switch method
 */
export const wrongStatusSwitch = (status: number) => {
    switch (status) {
        case 404:
            return `You're request doesn’t exist on the server.`;
        case 401:
            return 'You haven’t yet authenticated against the API.';
        case 403:
            return 'You don’t have permission to request that URL.';
        case 400:
            return 'You did something wrong in your request.';
        case 429:
            return 'You’re sending too many requests in a short amount of time.';
        case 500:
            return 'API server crashed';
        case 502:
            return 'Server you were calling wasn’t the actual API server, but a gateway or proxy.';
        case 503:
            return 'The server is overloaded.';
        case 504:
            return 'The server you were calling is a proxy for the real API server.';
        case 501:
            return 'The not implemented status is related to the HTTP method.';
        default:
            return `Undefined ${status} status!!`;
    }
}

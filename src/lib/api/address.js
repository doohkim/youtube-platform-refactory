import client from './client';

export const createAddress = (address) => {
    return client.post(
        `/members/address/`,
        { address },
        {
            headers: {
                Authorization: `Token ${sessionStorage.getItem('token')}`,
            },
        },
    );
};

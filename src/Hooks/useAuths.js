import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAuths = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuths;
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAuths = () => {
    return useContext(AuthContext)
};

export default useAuths;
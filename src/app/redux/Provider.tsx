'use client'
import { Provider } from 'react-redux';
import { store } from './store';
import { ReactNode } from 'react';


interface ReduxProviderProps {
    children: ReactNode
}
const ReduxProvider: React.FC<ReduxProviderProps> = ({children}) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    );
};

export default ReduxProvider;
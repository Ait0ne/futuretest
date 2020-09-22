import React from 'react';

import {SpinnerContainer, Spinner} from './loader.styles';


const Loader: React.FC = () => {
    return (
        <SpinnerContainer>
            <Spinner  viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </Spinner>
        </SpinnerContainer>
    )
}

export default Loader;
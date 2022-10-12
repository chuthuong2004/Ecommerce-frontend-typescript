import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Header from '../components/Header/Header';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};
const HeaderOnly: React.FC<Props> = ({children})=> {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default HeaderOnly;

import React, { ReactNode, Suspense } from 'react';
import { Header } from '../components';
type Props = {
  children: ReactNode;
};
const HeaderOnly: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content"> {children} </div>
      </div>
    </div>
  );
};

export default HeaderOnly;

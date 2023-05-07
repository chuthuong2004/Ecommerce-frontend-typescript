import React, { ReactNode, Suspense } from 'react';
const Header = React.lazy(() => import('../components/Header'));
type Props = {
  children: ReactNode;
};
const HeaderOnly: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="container">
        <div className="content"> {children} </div>
      </div>
    </div>
  );
};

export default HeaderOnly;

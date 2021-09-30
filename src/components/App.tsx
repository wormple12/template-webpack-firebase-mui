import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Header } from './Header';
import { SuspenseLoader, ErrorBoundary } from './utilities';
import { MainRoutes } from './Routes';

import '@Style/style.scss';
import '@Style/variables.scss';

const App: React.FC = () => {
   return (
      <RecoilRoot>
         <Router>
            <Header />
            <main>
               <ErrorBoundary>
                  <React.Suspense fallback={<SuspenseLoader />}>
                     <MainRoutes />
                  </React.Suspense>
               </ErrorBoundary>
            </main>
         </Router>
      </RecoilRoot>
   );
};

export default App;

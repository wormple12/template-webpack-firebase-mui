import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import "@Style/style.scss";
import "@Style/variables.scss";

import { NavBar } from "./shared";
import { SuspenseLoader, ErrorBoundary } from "./utilities";
import { MainRoutes } from './Routes';

const App = () => {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <Router>
          <header>
            <NavBar tabs={[
              { label: "Home", path: "/", exact: true },
              { label: "Section 1", path: "/section01", exact: true },
              { label: "Section 2", path: "/section02" },
            ]} />
          </header>
          <main>
            <div id="main-container">
              <React.Suspense fallback={<SuspenseLoader />}>
                <MainRoutes />
              </React.Suspense>
            </div>
          </main>
        </Router>
      </ErrorBoundary>
    </RecoilRoot>
  );
};

export default App;
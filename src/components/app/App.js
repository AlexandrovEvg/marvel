import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
//import { MainPage, ComicsPage, Page404, SingleComicPage, NotFound } from '../pages';
import { ComicsPage } from '../pages';

const MainPage = lazy(() => import('../pages/MainPage'));
//const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const Page404 = lazy(() => import('../pages/404'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SingleCharacterPage = lazy(() => import('../pages/SingleCharacterPage'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/comics/:comicId" element={<SingleComicPage />} />
              <Route
                path="/characters/:characterId"
                element={<SingleCharacterPage />}
              />
              <Route path="*" element={<Page404 />}></Route>
              <Route path="/notfound" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;

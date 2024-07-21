import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, News, LeakedNews } from '@/views/index.js';

// Components
import Layout from '@/components/layout/Layout.jsx';

function RoutesApp() {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/news"
                    element={
                        <Layout>
                            <News />
                        </Layout>
                    }
                />
                <Route
                    path="/news/:slug"
                    element={
                        <Layout>
                            <LeakedNews />
                        </Layout>
                    }
                />
            </Routes>
        </HashRouter>
    );
}

export default RoutesApp;

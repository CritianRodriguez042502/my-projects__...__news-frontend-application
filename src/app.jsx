import { useEffect } from 'react';

// Routes
import RoutesApp from './routes/index.routes.jsx';

import { activate } from './utils/activate.js';

import './index.css';

const App = () => {
    useEffect(() => {
        activate();
    }, []);

    return (
        <main>
            <RoutesApp />
        </main>
    );
};

export default App;

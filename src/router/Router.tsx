import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/TestPage';
import DraftPage from '../pages/DraftPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" index element={<DraftPage />} />
            <Route path="/test" index element={<MainPage />} />
        </Routes>
    );
};

export default Router;
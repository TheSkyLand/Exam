import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/TestPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/test" index element={<MainPage />} />
        </Routes>
    );
};

export default Router;
import React from 'react';
import DashboardPage from './pages/DashboardPage';

const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
            </Routes>
        </Router>
    )
}

export default Navigation;
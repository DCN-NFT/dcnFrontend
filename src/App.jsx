import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AppProvider} from './context/AppProvider';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import NftMarketplacePage from './pages/NftMarketplacePage';
import WalletAccountPage from './pages/WalletAccountPage';
import ClaimNft from './pages/ClaimNft';
import SettingsPages from './pages/SettingsPages';

// admin pages
import AdminDashboard from './pages/AdminDashboard';
import CreateNft from './pages/CreateNft';
import NftCollection from './pages/NftCollection';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    {/* student page routes */}
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/nft-market" element={<NftMarketplacePage />} />
                    <Route path="/wallets" element={<WalletAccountPage />} />
                    <Route path="/claim-nfts" element={<ClaimNft />} />
                    <Route path="/setting" element={<SettingsPages />} />
                    <Route path="*" element={<HomePage />} />

                    {/* admin pages routes */}
                    <Route path="/isn" element={<AdminDashboard />} />
                    <Route path="/ins/dashboard" element={<AdminDashboard />} />
                    <Route path="/ins/create-nft" element={<CreateNft />} />
                    <Route path="/ins/collection" element={<NftCollection />} />
                </Routes>
            </Router>
        </AppProvider>
    )
}

export default App
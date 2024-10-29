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
import AccountSelectionPage from './pages/AccountSelectionPage';
import WalletAccountInsPage from './pages/WalletAccountInsPage';
import ManagerStaff from './pages/ManagerStaff';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/account-selection" element={<AccountSelectionPage />} />

                    {/* student page routes */}
                    <Route path="account/student" element={<DashboardPage />} />
                    <Route path="account/student/dashboard" element={<DashboardPage />} />
                    <Route path="account/student/nft-market" element={<NftMarketplacePage />} />
                    <Route path="account/student/wallets" element={<WalletAccountPage />} />
                    <Route path="account/student/claim-nfts" element={<ClaimNft />} />
                    <Route path="account/student/setting" element={<SettingsPages />} />
                    {/* <Route path="*" element={<HomePage />} /> */}

                    {/* admin pages routes */}
                    <Route path="/account/institution" element={<AdminDashboard />} />
                    <Route path="/account/institution/dashboard" element={<AdminDashboard />} />
                    <Route path="/account/institution/create-nft" element={<CreateNft />} />
                    <Route path="/account/institution/collection" element={<NftCollection />} />
                    <Route path="/account/institution/wallets" element={<WalletAccountInsPage />} />
                    <Route path="*" element={<ManagerStaff/>} />
                </Routes>
            </Router>
        </AppProvider>
    )
}

export default App
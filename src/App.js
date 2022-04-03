// import logo from "./logo.svg"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import SideNav from "./components/SideNav/SideNav";
import CreatePaymentLinkPage from "./Pages/CreatePaymentLinkPage/CreatePaymentLinkPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PaymentResult from "./Pages/PaymentResult/PaymentResult";
import ProductInformationPage from "./Pages/ProductInformationPage/ProductInformationPage";
import PaymentReceived from "./Pages/PaymentReceived/PaymentReceived";
import DonationSuccessful from "./Pages/DonationSuccessful/DonationSuccessful";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import {
  useMoralis,
  // useNativeBalance,
  // useChain
  // useNFTBalances,
  // useERC20Balances,
  // useTokenPrice,
  // useNFTTransfers,
  // useWeb3Transfer
} from "react-moralis";

import background from "./assets/images/background.png";
import metamask from "./assets/images/metamask.png";
function App() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  return (
    <>
      <div className="App flex h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        <Router>
          <div className="flex">
            <SideNav />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/info" element={<ProductInformationPage />} />
              <Route exact path="/received" element={<PaymentReceived />} />
              <Route exact path="/donate" element={<DonationSuccessful />} />

              <Route exact path="/create" element={<CreatePaymentLinkPage />} />
              <Route exact path="/result" element={<PaymentResult />} />
            </Routes>
          </div>
          <div className="flex w-full justify-end pr-5">
            <div className="pt-4 pr-5">
              <LogoutButton />
            </div>
            <div className="pt-4  align-right pr-3">
              {isAuthenticated && (
                <img src={metamask} onClick={() => logout()} />
              )}
              {!isAuthenticated && (
                <div className="pt-2.5">
                  <button
                    onClick={() => authenticate()}
                    className="text-center bg-cust_tertiary ml-10
      text-2xl text-white font-bold w-60 h-20 rounded-xl"
                  >
                    Connect to wallet
                  </button>
                </div>
              )}
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

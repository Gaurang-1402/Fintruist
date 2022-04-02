// import logo from "./logo.svg"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import PaymentResultPage from "./Pages/PaymentResult/PaymentResult";
import CreatePaymentLinkPage from "./Pages/CreatePaymentLinkPage/CreatePaymentLinkPage";
import SideNav from "./components/SideNav/SideNav";
// import Button from "@material-tailwind/react/Button";

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
import auth0 from "./assets/images/auth0.png";
function App() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  return (
    <>
      <div className="App flex h-screen bg-cust_back">
        <Router>
          <SideNav />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/create" element={<CreatePaymentLinkPage />} />
            <Route exact path="/result" element={<PaymentResultPage />} />
          </Routes>
          <div className="flex w-full justify-end pr-5">
            <div className="pt-4 pr-5">
              <img
                src={auth0}
                onClick={() => {
                  console.log("done");
                }}
              />
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

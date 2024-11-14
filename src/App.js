import React, { useState } from "react";
import "./styles.css";
const CryptoTransactionTracker = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [result, setResult] = useState("");
  const [activityResult, setActivityResult] = useState("");
  const [profileResult, setProfileResult] = useState("");

  const exampleAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

  const handleTrackTransactions = (e) => {
    e.preventDefault();

    if (walletAddress.toLowerCase() === exampleAddress.toLowerCase()) {
      const mockTransactions = [
        {
          txHash:
            "0x123f681646d4a755815f9cb19e1acc8565a0c2ac9d9083d9d3869709019a9720",
          from: {
            address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
            name: "Binance Hot Wallet",
          },
          to: { address: exampleAddress, name: "Vitalik Buterin" },
          amount: "0.5 ETH",
          timestamp: "2024-09-25 10:30:15",
        },
        {
          txHash:
            "0x456922b400a88ffa1470144e96b252f51c3ed903127d412538b8563ba6023a83",
          from: { address: exampleAddress, name: "Vitalik Buterin" },
          to: {
            address: "0x2B5634C42055806a59e9107ED44D43c426E58258",
            name: "Unknown Wallet",
          },
          amount: "0.1 ETH",
          timestamp: "2024-09-24 15:45:22",
        },
        {
          txHash:
            "0x789a0acbaf3dc57e11b9b3b360913b9fa750a86a9d87a3e2df8a46ea9da1e5c8",
          from: {
            address: "0x8Ba1f109551bD432803012645Ac136ddd64DBA72",
            name: "MetaMask Wallet",
          },
          to: { address: exampleAddress, name: "Vitalik Buterin" },
          amount: "1.2 ETH",
          timestamp: "2024-09-23 09:12:03",
        },
      ];

      const resultHTML = (
        <>
          <h3>Transactions for {walletAddress}</h3>
          <table>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>From</th>
                <th>To</th>
                <th>Amount</th>
                <th>Transaction Hash</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((tx, index) => (
                <tr key={index}>
                  <td>{tx.timestamp}</td>
                  <td>
                    {tx.from.name}
                    <br />
                    <a
                      href={`https://etherscan.io/address/${tx.from.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tx.from.address}
                    </a>
                  </td>
                  <td>
                    {tx.to.name}
                    <br />
                    <a
                      href={`https://etherscan.io/address/${tx.to.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tx.to.address}
                    </a>
                  </td>
                  <td>{tx.amount}</td>
                  <td>
                    <a
                      href={`https://etherscan.io/tx/${tx.txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transaction-hash"
                    >
                      {tx.txHash.substring(0, 10)}...
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );

      setResult(resultHTML);
    } else {
      setResult(
        <>
          <p>Tracking transactions for: {walletAddress}</p>
          <p>
            No transactions found. (This is a mock response for demonstration
            purposes.)
          </p>
        </>
      );
    }
  };

  const handleCheckActivity = () => {
    if (walletAddress.toLowerCase() === exampleAddress.toLowerCase()) {
      const mockAccounts = [
        {
          name: "Main ETH Wallet",
          address: exampleAddress,
          balance: "1,234.5678 ETH",
          lastTransaction: {
            type: "Received",
            amount: "0.5 ETH",
            timestamp: "2024-09-25 10:30:15",
          },
        },
        {
          name: "DeFi Staking Account",
          address: "0x1234567890123456789012345678901234567890",
          balance: "500.0000 ETH",
          lastTransaction: {
            type: "Staked",
            amount: "100 ETH",
            timestamp: "2024-09-24 14:20:30",
          },
        },
        {
          name: "NFT Collection Wallet",
          address: "0x0987654321098765432109876543210987654321",
          balance: "10.5000 ETH",
          lastTransaction: {
            type: "Sent",
            amount: "2 ETH",
            timestamp: "2024-09-23 18:45:12",
          },
        },
      ];

      const activityHTML = (
        <>
          <h3>Wallet Activity for {walletAddress}</h3>
          <table>
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Address</th>
                <th>Balance</th>
                <th>Last Transaction</th>
              </tr>
            </thead>
            <tbody>
              {mockAccounts.map((account, index) => (
                <tr key={index}>
                  <td>{account.name}</td>
                  <td>
                    <a
                      href={`https://etherscan.io/address/${account.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {account.address}
                    </a>
                  </td>
                  <td>{account.balance}</td>
                  <td>
                    {account.lastTransaction.type}{" "}
                    {account.lastTransaction.amount}
                    <br />
                    {account.lastTransaction.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );

      setActivityResult(activityHTML);
    } else {
      setActivityResult(
        <>
          <p>Checking activity for: {walletAddress}</p>
          <p>
            No activity found. (This is a mock response for demonstration
            purposes.)
          </p>
        </>
      );
    }
  };

  const handleViewProfile = () => {
    if (walletAddress.toLowerCase() === exampleAddress.toLowerCase()) {
      const mockProfile = {
        name: "Vitalik Buterin",
        email: "vitalik@ethereum.org",
        country: "Canada",
        dob: "1994-01-31",
        kycStatus: "Verified",
      };

      setProfileResult(
        <>
          <h3>Profile for {walletAddress}</h3>
          <p>Name: {mockProfile.name}</p>
          <p>Email: {mockProfile.email}</p>
          <p>Country: {mockProfile.country}</p>
          <p>Date of Birth: {mockProfile.dob}</p>
          <p>KYC Status: {mockProfile.kycStatus}</p>
        </>
      );
    } else {
      setProfileResult(
        <>
          <p>Viewing profile for: {walletAddress}</p>
          <p>
            No profile information found. (This is a mock response for
            demonstration purposes.)
          </p>
        </>
      );
    }
  };

  return (
    <div className="container">
      <h1 className="head">CRYPTO TRANSACTION TRACKER</h1>
      <form onSubmit={handleTrackTransactions}>
        <label htmlFor="walletAddress">Wallet Address or User Detail:</label>
        <input
          type="text"
          id="walletAddress"
          name="walletAddress"
          required
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <div className="example">
          Example: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 (Vitalik Buterin's
          Ethereum Wallet)
        </div>
        <button type="submit" id="trackTransactions">
          Track Transactions
        </button>
        <button type="button" id="checkActivity" onClick={handleCheckActivity}>
          Check Activity
        </button>
        <button type="button" id="viewProfile" onClick={handleViewProfile}>
          View Profile
        </button>
      </form>
      <div id="result">{result}</div>
      <div id="activityResult">{activityResult}</div>
      <div id="profileResult">{profileResult}</div>
    </div>
  );
};

export default CryptoTransactionTracker;

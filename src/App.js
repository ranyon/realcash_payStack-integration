import React, { useState } from "react"
import { PaystackButton,  } from "react-paystack"
import './App.css'

const App = () => {
  const publicKey = process.env.REACT_APP_Pay_Stack_Key
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [amount,setAmount] = useState('')
  const [walletAddress,setWalletAdress] = useState('')

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Purchase crypto",
    onSuccess: () => {
      setEmail("")
      setName("")
      setPhone("")
      setAmount("")
      setWalletAdress("")
    },
    onClose: () => alert("Wait! Purchase some crypto, don't go!!!!"),
  }

  return (
    <div className="App">
      <div className="container">
        {/* <div className="item"> */}
          {/* <div className="overlay-effect"></div> */}
        
          {/* <div className="item-details"> */}
            {/* <p className="item-details__title">Coconut Oil</p> */}
            {/* <p className="item-details__amount">NGN {amount / 100}</p> */}
          {/* </div> */}
        {/* </div> */}
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Amount</label>
              <input
                type="text"
                id="amount"
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Wallet Address</label>
              <input
                type="text"
                id="walletAddress"
                value={walletAddress} 
                onChange={(e) => setWalletAdress(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
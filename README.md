# ico.bot
Experimental chatbot for running ICO crowdsales (Will be VendBot)

# dependencies 
- Nodejs
- Docker
- Docker Compose
- Geth
- MongoDB

# commands
Hi, I'm VendBot. I've been designed to guide you through the VendExchange token sales.
* /info
    - Displays some information about the usefulness of VEND and the exchange/trading platform
* /register
    Give us your email so we can remember you and send your some notifications/offers. Registering also creates a dedicated address for you where we will send the VEND tokens to.
    - enter email address
    - confirm email address
    - registration complete, here is your vend address 0x9e0
    - further chats with VendBot will remember this email address and your account
* /purchase
    Walks you through the process of buying our token
    - Send ether to a contract (contract sends to multisig address)
    - Contract notifies VendBot when funds have been recieved
    - On Funds Recieved Event, bot sends email with confirmation code to user
    - Bot asks user for confirmation code
        - if confirmation pass, continue
        - if confirmation fail, retry 3 times
        - if confirmation timeouts after 15 mins of wait, 
    - After confirmation, send VEND to user's etheum account.
- /topup
    Top up your account with VEND
    - Send ether to smart contract (Attach a reference)
    - Smart contract notifes bot of deposit
    - Bot sends confirmation email with code
    - Bot asks user for confirmation code
        - if confirmation pass, continue
        - if confirmation fail, retry 3 times until pass else return ether.
        - if confirmation timeouts after 15 mins of wait, return ether. 
    - After confirmation, topup user's ethereum account with more VEND.
- /balance
    Display Account Balance
- /transfer
    Transfer your VEND to an ERC20 compliant Wallet
    - Bot asks for wallet address
    - Bot sends Prenotifcation charge to smart contract
    - Smart contract sends 0.5 wei to account along with a CODE as part of reference.
    - Bot asks for reference code
        - if confirm pass, continue
        - if confirm fail, retry 3 times until pass
        - if confirm timeout, 
- /help {address}
- grabmeme
    Surpise.
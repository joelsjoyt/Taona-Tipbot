# This Repo is no longer actively maintained #

# Bot for Discord communities to facilitate crypto coin tipping!
(This README will be updated along with bot updates)

Features:
- Tipbot for any coin running the bitcoind client.
    - Help message `!tip`.
- Dynamic plugin loading with permission support.
- **Supported Coin**
    - Taona Coin (TNA)
    


## Create a Bot

1) Create a bot and get the bots Token and Client ID: https://discordapp.com/developers/applications/me

    1) After going to the link above click “new application”. Give it a name, picture, and description.

    2) On the side bar navigation menu click "Bot" Click “Add Bot” and click “Yes, Do It!” when the dialog pops up.

    3) Copy down the token used on this page to login and Client ID on the general info page to invite your new bot to your discord server.

2) invite the bot to your server using the link below and entering the Client ID or generate your own [Here:link:](https://discordapi.com/permissions.html)

```
https://discordapp.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot&permissions=27648
```

## Edit Files

1) Edit `default.json` in `/config`. and set username and password as for connecting to Taona wallet core

2) set up the wallets config file

    1) In most cases, your wallets data folder can be found in `%appdata%`

        (default Roaming Folder), `e.g. C:\Users\USER\AppData\Roaming\COIN.`

    2) Edit or create your `COIN.conf` file (Where "COIN" is the coin name) to include the following:

        ```
        server=1
        par=1
        rpcbind=127.0.0.1
        rpcallowip=127.0.0.1
        rpcport=9050
        rpcuser=<Same-as-you-set-in-config.json>
        rpcpassword=<Same-as-you-set-in-config.json>
        rpcclienttimeout=30
        rpcthreads=4
        rpcworkqueue=1000
        paytxfee=0.01
        ```

        1) NOTE: for `paytxfee` to actually work properly use the console or rpc command `settxfee number` number being the fee of course.

        2) NOTE: if you are using a master node coin you also need to add these extra options into your wallets config file

          ```
          staking=0
          enableaccounts=1
          ```

## Install Bot

### Auto - Windows

1) verify the following tools are installed by running the commands below in cmd:

      * git - `git --version`
      * node - `node -v`
        * npm - `npm -v`
          * pm2 - `pm2 -v`
          * yarn - `yarn --version`

2) start the bot with `yarn start`  in the bots root directory

    1) if the bot fails to start and throws missing npm package errors simply run `npm install` again in the bots root directory

### Manual - Linux/Mac

1) Download and install the required tools listed below:
      * [git > 2.0.0](https://git-scm.com/downloads)
      * [node > 8.0.0](https://nodejs.org/en/)
        * [npm > 0.12.x](https://nodejs.org/en/)
          * [pm2 > latest](http://pm2.keymetrics.io/)
          * [yarn > latest](https://yarnpkg.com/en/docs/install)

2) After the above tools have been installed run `npm install` in the bots root directory.

    1) this may throw some errors on some systems not all packages are required for some systems, the bot will still run unless it's an absolutely needed dependency.

3) start the bot with `yarn start` or `pm2 start ecosystem.config.js` in the bots root directory

### Development

Be sure to run the command below before working on any code, this ensures
prettier goes to work and keeps the code to our standard.

```
yarn install --production=false
```
to run prettier before submitting your code simply run the following in the bots root directory.

```
yarn precommit
```

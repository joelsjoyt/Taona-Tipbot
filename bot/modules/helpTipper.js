'use strict';
let config = require('config');
let taonaFee = config.get('tna').paytxfee;
let prefix = config.get('bot').prefix;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**:bank: Coins :bank:**__\n' +
      '  **Taona (TNA) Tipper**\n    Transaction Fees: **' + taonaFee + '**\n' +        
      '__**Commands**__\n' +
      '  **' + prefix + 'tiptna** : Displays This Message\n' +
      '  **' + prefix + 'tiptna balance** : get your balance\n' +
      '  **' + prefix + 'tiptna deposit** : get address for your deposits\n' +
      '  **' + prefix + 'tiptna withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **' + prefix + 'tiptna <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **' + prefix + 'tiptna private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +
      
      //-----------------------##########---------Orginal---------------------##############################
      // '  **' + prefix + 'tip<CoinSymbol> private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +

      '**<> : Replace carrot <> symbole with appropriate value.**\n' +
      '__**Examples**__\n' +
      '  **' + prefix + 'tiptna @MSFTserver 10**\n' +
      '  **' + prefix + 'tiptna withdraw TAONAaddressHERE 10**\n' +
      '  **' + prefix + 'tiptna private @MSFTserver 10**\n' +
      '  **' + prefix + 'tiptna balance**\n' +
      '  **' + prefix + 'tiptna deposit**\n'
    );
  }
};

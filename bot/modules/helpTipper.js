'use strict';
let config = require('config');
let taonaFee = config.get('tna').paytxfee;
// let ravenFee = config.get('rvn').paytxfee;
// let dogeFee = config.get('doge').paytxfee;
// let lbryFee = config.get('lbc').paytxfee;
// let phaseFee = config.get('phase').paytxfee;
// let ufoFee = config.get('ufo').paytxfee;
// let phoenixFee = config.get('pxc').paytxfee;
// let featherFee = config.get('ftc').paytxfee;
// let verticalFee = config.get('vtl').paytxfee;
// let neblioFee = config.get('nebl').paytxfee;
// let xuezFee = config.get('xuez').paytxfee;
// let spkFee = config.get('spk').paytxfee;
// let ppcFee = config.get('ppc').paytxfee;
let prefix = config.get('bot').prefix;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**:bank: Coins :bank:**__\n' +
      '  **Taona (TNA) Tipper**\n    Transaction Fees: **' + taonaFee + '**\n' +
      // '  **Ravencoin (RVN) Tipper**\n    Transaction Fees: **' + ravenFee + '**\n' +
      // '  **Dogecoin (DOGE) Tipper**\n    Transaction Fees: **' + dogeFee + '**\n' +
      // '  **LBRY Credit (LBC) Tipper**\n    Transaction Fees: **' + lbryFee + '**\n' +
      // '  **Phase (PHASE) Tipper**\n    Transaction Fees: **' + phaseFee + '**\n' +
      // '  **Uniform Fiscal Object (UFO) Tipper**\n    Transaction Fees: **' + ufoFee + '**\n' +
      // '  **Phoenixcoin (PXC) Tipper**\n    Transaction Fees: **' + phoenixFee + '**\n' +
      // '  **Feathercoin (FTC) Tipper**\n    Transaction Fees: **' + featherFee + '**\n' +
      // '  **Vertical (VTL) Tipper**\n    Transaction Fees: **' + verticalFee + '**\n' +
      // '  **Neblio (NEBL) Tipper**\n    Transaction Fees: **' + neblioFee + '**\n' +
      // '  **Xuez (XUEZ) Tipper**\n    Transaction Fees: **' + xuezFee + '**\n' +
      // '  **SparksPay (SPK) Tipper**\n    Transaction Fees: **' + spkFee + '**\n' +      
      // '  **Peercoin (PPC) Tipper**\n    Transaction Fees: **' + ppcFee + '**\n' +         
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

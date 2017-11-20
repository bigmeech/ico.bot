exports.info = function (session){
    session.endDialog('Vendex ICO info goes here');
}

exports.purchase = function (session) {
    session.endDialog(''
        + 'Send some ether to Me and I will send some vend '
        + 'into your token sale account after I get confirmation'
    );
}

exports.transfer = function (session) {
    session.endDialog('Give me an ERC20 compliant address and '
        + 'i will transfer VEND tokens from your token sale account'
    );
}

exports.balance = function (session) {
    session.endDialog(''
        + 'So you want to see the balance of your token sale account? of course i can do that'
    );
}

exports.topup = function (session) {
    session.endDialog(''
        + 'Did i heard you say topup? You need to make sure you have a token sale account'
    );
}

exports.register = function (session) {
    session.endDialog('Registration lets us remember '
        + 'you and create a temporary token sale account. This account '
        + 'will be managed by ME but you can ask me to send it to a wallet address of your choice'
    );
}

exports.help = function (session) {
    session.endDialog('### Command Options '
        + '\n -----------------------------------------------------------------------'
        + '\n```info```'
        + '<br/>&nbsp;&nbsp;&nbsp; Displays some information for our token sales\n'
        + '\n```register```' 
        + '<br>&nbsp;&nbsp;&nbsp; Join the sale and get temporary account\n'
        + '\n```purchase```' 
        + '<br>&nbsp;&nbsp;&nbsp; Buy some VEND in exchange for some ETH\n'
        + '\n```transfer```'
        + `<br/>&nbsp;&nbsp;&nbsp; Transfer VEND from a TSA for specfied wallet address\n`
        + '\n```balance```'
        + '<br/>&nbsp;&nbsp;&nbsp; Check balance of your token sale account\n'
        + '\n```topup```'
        + '<br/>&nbsp;&nbsp;&nbsp; Buy some more VEND\n'
        + '\n```help```'
        + '<br/>&nbsp;&nbsp;&nbsp; Displays this message again\n'
    );
}
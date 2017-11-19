exports.info = function (session){
    session.endDialog('Vendex ICO info goes here');
}

exports.request = function (session) {
    session.endDialog('Buy some tokens. Min = 1500 VEND');
}

exports.rules = function (session) {
    session.endDialog('Vendex ICO Rules go here');
}

exports.create = function (session) {
    session.endDialog('Create address for user to send VEND token');
}

exports.balance = function (session) {
    session.endDialog('Checks balance of address created by US');
}

exports.register = function (session) {
    session.endDialog('Register user for our ICO (Some users might want to start anonymous)')
}

exports.delete = function (session) {
    session.endDialog('Delete Account: Make sure you dont have funds in it');
}

exports.help = function (session) {
    session.endDialog('### Command Options '
        + '\n -----------------------------------------------------------------------'
        + '\n - ```/info```&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Displays some information for our token sales '
        + '\n - ```/register```&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Help us remember you' 
        + '\n - ```/buy [units]```&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Returns an address with the '
        + '\n - ```/transfer [from] [to]```&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - tranfer token to another address'
        + '\n - ```/balance [addr] [to]```&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - return balance of address'
        + '\n - ```/help [addr] [to]```&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - return balance of address'
    );
}
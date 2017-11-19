exports.info = function (session){
    session.send('Vendex ICO info goes here');
}

exports.request = function (session) {
    session.send('Buy some tokens. Min = 1500 VEND');
}

exports.rules = function (session) {
    session.send('Vendex ICO Rules go here');
}

exports.create = function (session) {
    session.send('Create address for user to send VEND token');
}

exports.balance = function (session) {
    session.send('Checks balance of address created by US');
}

exports.register = function (session) {
    session.send('Register user for our ICO (Some users might want to start anonymous)')
}

exports.delete = function (session) {
    session.send('Delete Account: Make sure you dont have funds in it');
}
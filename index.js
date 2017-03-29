module.exports = {
    help: () =>{
        return "You don't need any kind of help, because this module is a joke XD";
        // Really?
    }
    ,pony: () =>{
        return "Hack ya~~~";
        // HACK YA!!!!!!!!!!!!!!!!!!
    }
    ,save: (variableKey, variableValue) =>{
        eval(`${variableKey} = "${variableValue}"`);
        // Useful then the other functions I guess? ¯\_(ツ)_/¯
    }
    ,bugReport: () => {
        const open = require('open');
        open(`https://github.com/felixfong227/rainbowdash-not-serious/issues`);
        return "This just open a URL in your default browser, sooo ya go on with out me~~~~~"
        // Howd can app look like this will having a bug? ಠ╭╮ಠ naa go a head, fire up an issues (~˘▾˘)~
    }

    ,whyWouldSomeBodyLikeMeWantToCreateAModileLikeThisQuestionMark: () => {
        return "I have no idea XD";
    }

    ,version: () => {
        return "Are we going to turn this thing into a CLI module? just take a look at the package.json already"
    }

    ,myNodeDidntSupportFatArrowFunction: function(){
        return "Then go a head and update your Node for fox say, and by the way please take a look at node.green ╚(ಠ_ಠ)=┐"
    }
}
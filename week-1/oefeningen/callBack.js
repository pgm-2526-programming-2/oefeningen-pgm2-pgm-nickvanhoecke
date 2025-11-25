function myCallBack(logic) {
    return logic
}

function mainLogic(logic, callBack) {   
    console.log(callBack(logic));
}


mainLogic("this is the callback for my logic", myCallBack);

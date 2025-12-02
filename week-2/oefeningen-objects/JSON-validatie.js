function IsJSONStringWellformed(string ) {
    if (JSON.parse(string)) {
        return true
    } else {
        return false
    }
}


    const a = '{"name":"John","age":25,"city":"New York"}' 
    const b = '{"firstName:John","lastName":"Doe"}' 
    const c = '{"color":"red","wheels":4,"engine":{"cylinders":6,"size":3.6}}'

    console.log(IsJSONStringWellformed(a));
    // console.log(IsJSONStringWellformed(b)); gives error
    console.log(IsJSONStringWellformed(c));
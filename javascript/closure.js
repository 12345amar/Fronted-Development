// combination of functions and lexical scope is called closure.

    function outerFun() {
        const myName = 'Amar'

        return function innerFunc() {
            console.log("myName", myName)
        }
    }
    const getMyInnerFunc = outerFun()
    getMyInnerFunc()
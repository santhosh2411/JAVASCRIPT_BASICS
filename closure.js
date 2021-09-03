/// examples for closure

function a() {
    for (var i = 1; i <= 2; i++) {
        setTimeout(function() {
            console.log(i)
        }, 1000);
    }
    console.log("This is How SetTimeOut Executes");
}
a();
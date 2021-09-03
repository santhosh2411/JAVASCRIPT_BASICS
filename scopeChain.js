function a() {


    c();

    function c() {

        d();
        var x = 2;

        function d() {
            console.log(x)
            console.log(y)
        }
    }
}
var y = 5;
a();
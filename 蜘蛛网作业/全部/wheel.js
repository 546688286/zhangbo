function wheel(obj, fn) {
    function wheel(ev) {
        var oEv = ev || window.event;
        var isDown = true;
        oEv.wheelDelta ? oEv.wheelDelta < 0 ? isDown = true : isDown = false : -oEv.detail < 0 ? isDown = true : isDown = false;
        /*
            if(oEv.wheelDelta){
                if(oEv.wheelDelta<0){
                    isDown = true
                }
                else{
                    isDown = false;
                }
            }
            else{
                if(-oEv.detail<0){
                    isDown = true
                }
                else{
                    isDown = false;
                }
            }
        */
        

        fn(isDown);
        oEv.preventDefault && oEv.preventDefault();
        return false;
    }
    window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1 ? obj.addEventListener('DOMMouseScroll', wheel) : obj.onmousewheel = wheel;
}
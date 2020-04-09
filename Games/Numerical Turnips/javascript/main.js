var interval = 20;
var app = new Vue({
    el: "#app",
    data: {
        NumericalTurnips: 0,
        NTPS: 0
    },
    methods: {
        IncreaseNTPS: function () {
            this.NTPS += 1;
        },
        MakeNumercalTurnips: function () {
            this.NumericalTurnips += this.NTPS / interval
        }
    }
})
setInterval(app.MakeNumercalTurnips,1000 / interval);
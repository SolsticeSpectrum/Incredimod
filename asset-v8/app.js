/* 0.5.4 2021-04-23 21:06:13 */
var app = new function () {
    this.name = "Downtown", this.version = "8", this.date = "2024", this.folder = "asset-v8/", this.looptime = 6857, this.bpm = 140, this.totalframe = 328, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 68, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#191926", this.col0 = "#a6b0c5", this.col1 = "#848da4", this.col2 = "#616a83", this.col3 = "#404860", this.col4 = "#2d3043", this.animearray = [{
        name: "01_holo-da-plug",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "02_tatty-jr",
        color: "face00",
        uniqsnd: !0
    }, {
        name: "03_numba1ne",
        color: "face00",
        uniqsnd: !0
    }, {
        name: "04_yello-slim",
        color: "face00",
        uniqsnd: !0
    }, {
        name: "05_big-chunkz",
        color: "d22b0d",
        uniqsnd: !1
    }, {
        name: "06_anotha-dew",
        color: "d22b0d",
        uniqsnd: !0
    }, {
        name: "07_tj-weirdo",
        color: "d22b0d",
        uniqsnd: !0
    }, {
        name: "08_dawg-leo",
        color: "d22b0d",
        uniqsnd: !1
    }, {
        name: "09_dj-flex",
        color: "d22b0d",
        uniqsnd: !0
    }, {
        name: "10_10ft-edgy",
        color: "d22b0d",
        uniqsnd: !0
    }, {
        name: "11_flakey-flake",
        color: "f27011",
        uniqsnd: !0
    }, {
        name: "12_lil-g6",
        color: "f27011",
        uniqsnd: !0
    }, {
        name: "13_locky-bag",
        color: "f27011",
        uniqsnd: !1
    }, {
        name: "14_young-pebble",
        color: "f27011",
        uniqsnd: !1
    }, {
        name: "15_skeetlezz",
        color: "f27011",
        uniqsnd: !0
    }, {
        name: "16_chief-wayne",
        color: "6d4dae",
        uniqsnd: !1
    }, {
        name: "17_mooky-killz",
        color: "6d4dae",
        uniqsnd: !0
    }, {
        name: "18_emcee-jacky",
        color: "6d4dae",
        uniqsnd: !1
    }, {
        name: "19_jiggy-yo-shi",
        color: "6d4dae",
        uniqsnd: !1
    }, {
        name: "20_blessed-mony",
        color: "6d4dae",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Loose",
        src: "b1-loose-hb.mp4",
        code: "2,3,6,12,13",
        sound: "bonus-loose",
        aspire: "aspire-loose"
    }], this.unlockerarray = [];
    for (var e = 0, n = this.animearray.length; e < n; e++) {
        var o = this.animearray[e].name;
        this.animearray[e].soundA = o + "_a", this.animearray[e].soundB = this.animearray[e].uniqsnd ? o + "_a" : o + "_b", this.animearray[e].anime = o + "-sprite.png", this.animearray[e].animeData = o + ".json"
    }
};
/* 0.5.4 2021-04-23 21:06:13 */
var app = new function () {
    this.name = "The Bells", this.version = "4", this.date = "2021", this.folder = "asset-v4/", this.looptime = 6857, this.bpm = 140, this.totalframe = 342, this.nbpolo = 7, this.nbloopbonus = 6, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 27, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#2b0f02", this.col0 = "#ff0020", this.col1 = "#dd1d35", this.col2 = "#b5172a", this.col3 = "#470d14", this.col4 = "#1d0205", this.animearray = [{
        name: "1_forzkick",
        color: "45aed1",
        uniqsnd: !0
    }, {
        name: "2_forzsnare",
        color: "45aed1",
        uniqsnd: !0
    }, {
        name: "3_forzhat",
        color: "45aed1",
        uniqsnd: !0
    }, {
        name: "4_forzbite",
        color: "45aed1",
        uniqsnd: !0
    }, {
        name: "5_forzzen",
        color: "45aed1",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "007152",
        uniqsnd: !1
    }, {
        name: "7_bells",
        color: "007152",
        uniqsnd: !0
    }, {
        name: "8_blow",
        color: "007152",
        uniqsnd: !0
    }, {
        name: "9_bell",
        color: "007152",
        uniqsnd: !1
    }, {
        name: "10_giftpolo",
        color: "007152",
        uniqsnd: !0
    }, {
        name: "11_snowman",
        color: "5f2a2e",
        uniqsnd: !1
    }, {
        name: "12_whistle",
        color: "5f2a2e",
        uniqsnd: !1
    }, {
        name: "13_angel",
        color: "5f2a2e",
        uniqsnd: !1
    }, {
        name: "14_trompolo",
        color: "5f2a2e",
        uniqsnd: !1
    }, {
        name: "15_anabell",
        color: "5f2a2e",
        uniqsnd: !1
    }, {
        name: "16_angela",
        color: "b11e31",
        uniqsnd: !1
    }, {
        name: "17_choir",
        color: "b11e31",
        uniqsnd: !1
    }, {
        name: "18_snow",
        color: "b11e31",
        uniqsnd: !1
    }, {
        name: "19_lala",
        color: "b11e31",
        uniqsnd: !1
    }, {
        name: "20_santa",
        color: "b11e31",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Snowy",
        src: "b1-snowy-hb.mp4",
        code: "1,2,6,11,16",
        sound: "bonus-snowy",
        aspire: "aspire-snowy"
    }, {
        name: "Gifts",
        src: "b2-gifts-hb.mp4",
        code: "1,6,10,12,18",
        sound: "bonus-gifts",
        aspire: "aspire"
    }, {
        name: "Together",
        src: "b3-together-hb.mp4",
        code: "6,14,15,19,20",
        sound: "bonus-together",
        aspire: "aspire-together"
    }], this.unlockerarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var s = this.animearray[n].name;
        this.animearray[n].soundA = s + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? s + "_a" : s + "_b", this.animearray[n].anime = s + "-sprite.png", this.animearray[n].animeData = s + ".json"
    }
};
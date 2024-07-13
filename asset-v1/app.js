/* 0.5.4 2021-04-23 21:06:13 */
var app = new function () {
    this.name = "Evadare", this.version = "1", this.date = "2022", this.folder = "asset-v1/", this.looptime = 6857, this.bpm = 140, this.totalframe = 342, this.nbpolo = 7, this.nbloopbonus = 6, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 27, this.recminloop = 3, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#070314", this.col0 = "#68388e", this.col1 = "#542a82", this.col2 = "#492078", this.col3 = "#2A1547", this.col4 = "#210534", this.animearray = [{
        name: "1_lanturi",
        color: "68388e",
        uniqsnd: !1
    }, {
        name: "2_jacko",
        color: "68388e",
        uniqsnd: !1
    }, {
        name: "3_breakmask",
        color: "68388e",
        uniqsnd: !0
    }, {
        name: "4_tim",
        color: "68388e",
        uniqsnd: !0
    }, {
        name: "5_kah",
        color: "68388e",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "b43939",
        uniqsnd: !1
    }, {
        name: "7_gasmask",
        color: "b43939",
        uniqsnd: !1
    }, {
        name: "8_clock",
        color: "b43939",
        uniqsnd: !0
    }, {
        name: "9_piano",
        color: "b43939",
        uniqsnd: !1
    }, {
        name: "10_teeth",
        color: "b43939",
        uniqsnd: !0
    }, {
        name: "11_skel",
        color: "2d846c",
        uniqsnd: !0
    }, {
        name: "12_mumie",
        color: "2d846c",
        uniqsnd: !0
    }, {
        name: "13_agatha",
        color: "2d846c",
        uniqsnd: !1
    }, {
        name: "14_infectat",
        color: "2d846c",
        uniqsnd: !0
    }, {
        name: "15_dou",
        color: "2d846c",
        uniqsnd: !1
    }, {
        name: "16_shakala",
        color: "195a71",
        uniqsnd: !0
    }, {
        name: "17_evadare",
        color: "195a71",
        uniqsnd: !1
    }, {
        name: "18_stars",
        color: "195a71",
        uniqsnd: !1
    }, {
        name: "19_samara",
        color: "195a71",
        uniqsnd: !1
    }, {
        name: "20_aries",
        color: "195a71",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Invitat",
        src: "c1-b1-invitat-hb.mp4",
        code: "1,3,4,11,12",
        sound: "bonus-invitat",
        aspire: "aspire-invitat"
    }, {
        name: "evadare",
        src: "c1-b2-evadare-hb.mp4",
        code: "1,6,7,14,17",
        sound: "bonus-evadare",
        aspire: "aspire-invitat"
    }, {
        name: "galaxy",
        src: "c1-b3-galaxy-hb.mp4",
        code: "8,9,15,19,20",
        sound: "bonus-galaxy",
        aspire: "aspire-galaxy"
    }], this.unlockerarray = [];
    for (var e = 0, n = this.animearray.length; e < n; e++) {
        var o = this.animearray[e].name;
        this.animearray[e].soundA = o + "_a", this.animearray[e].soundB = this.animearray[e].uniqsnd ? o + "_a" : o + "_b", this.animearray[e].anime = o + "-sprite.png", this.animearray[e].animeData = o + ".json"
    }
};
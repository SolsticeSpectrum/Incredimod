/* 0.5.4 2021-04-23 21:06:13 */
var app = new function () {
    this.name = "Travis", this.version = "6", this.date = "2022", this.folder = "asset-v6/", this.looptime = 12000, this.bpm = 80, this.totalframe = 576, this.nbpolo = 7, this.nbloopbonus = 3, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 68, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#001b2c", this.col0 = "#0086d1", this.col1 = "#1b4e91", this.col2 = "#193e6f", this.col3 = "#0d284c", this.col4 = "#0a1c33", this.animearray = [{
        name: "1_kick",
        color: "860788",
        uniqsnd: !1
    }, {
        name: "2_clap",
        color: "860788",
        uniqsnd: !1
    }, {
        name: "3_snap",
        color: "860788",
        uniqsnd: !0
    }, {
        name: "4_tuctuc",
        color: "860788",
        uniqsnd: !1
    }, {
        name: "5_poom",
        color: "860788",
        uniqsnd: !1
    }, {
        name: "6_bass",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "7_clicky",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "8_satellite",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "9_echo",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "10_steam",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "11_hooh",
        color: "cb2d3e",
        uniqsnd: !1
    }, {
        name: "12_flute",
        color: "cb2d3e",
        uniqsnd: !1
    }, {
        name: "13_euphoria",
        color: "cb2d3e",
        uniqsnd: !1
    }, {
        name: "14_siren",
        color: "cb2d3e",
        uniqsnd: !0
    }, {
        name: "15_arp",
        color: "cb2d3e",
        uniqsnd: !1
    }, {
        name: "16_lie",
        color: "005090",
        uniqsnd: !1
    }, {
        name: "17_mosaic",
        color: "005090",
        uniqsnd: !1
    }, {
        name: "18_knowledge",
        color: "005090",
        uniqsnd: !1
    }, {
        name: "19_toina",
        color: "005090",
        uniqsnd: !1
    }, {
        name: "20_clock",
        color: "005090",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Terror",
        src: "b1-terror-hb.mp4",
        code: "1,2,6,8,13",
        sound: "bonus-terror",
        aspire: "aspire-terror"
    }], this.unlockerarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var s = this.animearray[n].name;
        this.animearray[n].soundA = s + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? s + "_a" : s + "_b", this.animearray[n].anime = s + "-sprite.png", this.animearray[n].animeData = s + ".json"
    }
};
let tnmonhoc=[
    {
        id: "toan",
        ten: "Toán",
        link: "https://meet.google.com/yuy-kzka-hpz"//OK
    },
    {
        id: "tviet",
        ten: "Tiếng Việt",
        link: "https://meet.google.com/yuy-kzka-hpz"//OK
    },
    {
        id: "dduc",
        ten: "Đạo đức",
        link: "https://meet.google.com/yuy-kzka-hpz"//OK
    },
    {
        id: "tduc",
        ten: "Thể dục",
        link: "https://meet.google.com/phm-zmbk-fpg"//OK
    },
    {
        id: "anhac",
        ten: "Âm nhạc",
        link: "https://meet.google.com/dza-djwb-rdh"//OK
    },
    {
        id: "mthuat",
        ten: "Mỹ thuật",
        link: "https://meet.google.com/jhr-ineh-owa"//OK
    },
    {
        id: "tnxh",
        ten: "Tự nhiên - Xã hội",
        link: ""
    },
    {
        id: "hdtn",
        ten: "Hoạt động trải nghiệm",
        link: ""
    }
];
let tnthoigian=[
    {
        id: "1",
        tg: "8h00 - 8h30"
    },
    {
        id: "2",
        tg: "8h40 - 9h10"
    },
    {
        id: "3",
        tg: "9h30 - 10h00"
    },
    {
        id: "4",
        tg: "2h00 - 2h30"
    },
    {
        id: "5",
        tg: "2h40 - 3h10"
    }
];
let tntkb=[
    {
        thu: "2",
        tg: "1",
        mon: "tviet"
    },
    {
        thu: "2",
        tg: "2",
        mon: "tviet"
    },
    {
        thu: "2",
        tg: "3",
        mon: "toan"
    },
    {
        thu: "2",
        tg: "4",
        mon: "dduc"
    },
    {
        thu: "2",
        tg: "5",
        mon: "tduc"
    },
    {
        thu: "3",
        tg: "1",
        mon: "tviet"
    },
    {
        thu: "3",
        tg: "2",
        mon: "tviet"
    },
    {
        thu: "3",
        tg: "3",
        mon: "toan"
    },
    {
        thu: "3",
        tg: "4",
        mon: "anhac"
    },
    {
        thu: "3",
        tg: "5",
        mon: "mthuat"
    },
    {
        thu: "4",
        tg: "1",
        mon: "tviet"
    },
    {
        thu: "4",
        tg: "2",
        mon: "tviet"
    },
    {
        thu: "4",
        tg: "3",
        mon: "toan"
    },
    {
        thu: "5",
        tg: "1",
        mon: "tviet"
    },
    {
        thu: "5",
        tg: "2",
        mon: "tviet"
    },
    {
        thu: "5",
        tg: "3",
        mon: "tnxh"
    },
    {
        thu: "6",
        tg: "1",
        mon: "tviet"
    },
    {
        thu: "6",
        tg: "2",
        mon: "tviet"
    },
    {
        thu: "6",
        tg: "3",
        mon: "hdtn"
    }
];
function tntkbhtml(thu, tg){
    let s="";
    let stg="";
    for (let otg of tnthoigian){
        if(parseInt(otg.id)==tg){
            stg = otg.tg;
            break;
        }
    }
    for (let i=0; i<tntkb.length; i++){
        let tkb = tntkb[i];
        if(parseInt(tkb.thu)== thu && parseInt(tkb.tg)==tg){
            let monid = tkb.mon;
            for (let k=0; k<tnmonhoc.length; k++){
                let monhoc = tnmonhoc[k];
                if(monhoc.id==monid){
                    if(monhoc.link.length>0){
                        let linkarr = monhoc.link.split("/");
                        let nlinkarr = linkarr.length;
                        s += '<div class="moni ' + monid + '"' + '">';
                            s += '<div>';
                                s += '<a class="btn btn-success" style="width:100%" target="_blank" href="' + monhoc.link + '"' + '>';
                                s += monhoc.ten;
                                s += '</a>';
                            s += '</div>';
                            s += '<div class="tkb-break over-white">'
                            s += '<p>' + linkarr[nlinkarr-1] + '<br />'
                            s += stg + '</p>'
                            s += '</div>';
                        s += '</div>';
                    }
                    else{
                        s += '<div class="moni ' + monid + '"' + '">';
                            s += '<div>';
                                s += '<a class="btn btn-success" style="width:100%"' + '>';
                                s += monhoc.ten;
                                s += '</a>';
                            s += '</div>';
                            s += '<div class="tkb-break over-white">'
                            s += '<p>' + stg + '</p>';
                            s += '</div>';
                        s += '</div>';
                    }
                    break;
                }
            }
            return s;
        }
    }
    return '';
}
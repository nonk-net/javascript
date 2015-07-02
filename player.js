/*
 * www.djflexter.com
 */
var VeediEmbed = function(opts){
    
//   /*! mobile-detect - v1.1.0 - 2015-05-11
//    https://github.com/hgoebl/mobile-detect.js 
!function(T,e){T(function(){"use strict";function T(T,e){return null!=T&&null!=e&&T.toLowerCase()===e.toLowerCase()}function S(T){for(var e in T)G.call(T,e)&&(T[e]=new RegExp(T[e],"i"))}function i(T,e){this.ua=T||"",this._cache={},this.maxPhoneWidth=e||600}var o={};o.mobileDetectRules={phones:{iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",Dell:"Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925",Samsung:"Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",Asus:"Asus.*Galaxy|PadFone.*Mobile",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",Wiko:"KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo 3DS",Amoi:"Amoi",INQ:"INQ",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},tablets:{iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)|^.*Android.*Nexus(?:(?!Mobile).)*$",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237P|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD",LenovoTablet:"Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android.*\\bG1\\b",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9",JXDTablet:"Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",OndaTablet:"\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY",CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",WolderTablet:"miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b",NibiruTablet:"Nibiru M1|Nibiru Jupiter One",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",Hudl:"Hudl HT7S3",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b"},oss:{AndroidOS:"Android",BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os",PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",WindowsPhoneOS:"Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",iOS:"\\biPhone.*Mobile|\\biPod|\\biPad",MeeGoOS:"MeeGo",MaemoOS:"Maemo",JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b",webOS:"webOS|hpwOS",badaOS:"\\bBada\\b",BREWOS:"BREW"},uas:{Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",Dolfin:"\\bDolfin\\b",Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",Skyfire:"Skyfire",IE:"IEMobile|MSIEMobile",Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",Bolt:"bolt",TeaShark:"teashark",Blazer:"Blazer",Safari:"Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",Tizen:"Tizen",UCBrowser:"UC.*Browser|UCWEB",baiduboxapp:"baiduboxapp",baidubrowser:"baidubrowser",DiigoBrowser:"DiigoBrowser",Puffin:"Puffin",Mercury:"\\bMercury\\b",ObigoBrowser:"Obigo",NetFront:"NF-Browser",GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"},props:{Mobile:"Mobile/[VER]",Build:"Build/[VER]",Version:"Version/[VER]",VendorID:"VendorID/[VER]",iPad:"iPad.*CPU[a-z ]+[VER]",iPhone:"iPhone.*CPU[a-z ]+[VER]",iPod:"iPod.*CPU[a-z ]+[VER]",Kindle:"Kindle/[VER]",Chrome:["Chrome/[VER]","CriOS/[VER]","CrMo/[VER]"],Coast:["Coast/[VER]"],Dolfin:"Dolfin/[VER]",Firefox:"Firefox/[VER]",Fennec:"Fennec/[VER]",IE:["IEMobile/[VER];","IEMobile [VER]","MSIE [VER];","Trident/[0-9.]+;.*rv:[VER]"],NetFront:"NetFront/[VER]",NokiaBrowser:"NokiaBrowser/[VER]",Opera:[" OPR/[VER]","Opera Mini/[VER]","Version/[VER]"],"Opera Mini":"Opera Mini/[VER]","Opera Mobi":"Version/[VER]","UC Browser":"UC Browser[VER]",MQQBrowser:"MQQBrowser/[VER]",MicroMessenger:"MicroMessenger/[VER]",baiduboxapp:"baiduboxapp/[VER]",baidubrowser:"baidubrowser/[VER]",Iron:"Iron/[VER]",Safari:["Version/[VER]","Safari/[VER]"],Skyfire:"Skyfire/[VER]",Tizen:"Tizen/[VER]",Webkit:"webkit[ /][VER]",Gecko:"Gecko/[VER]",Trident:"Trident/[VER]",Presto:"Presto/[VER]",iOS:" \\bi?OS\\b [VER][ ;]{1}",Android:"Android [VER]",BlackBerry:["BlackBerry[\\w]+/[VER]","BlackBerry.*Version/[VER]","Version/[VER]"],BREW:"BREW [VER]",Java:"Java/[VER]","Windows Phone OS":["Windows Phone OS [VER]","Windows Phone [VER]"],"Windows Phone":"Windows Phone [VER]","Windows CE":"Windows CE/[VER]","Windows NT":"Windows NT [VER]",Symbian:["SymbianOS/[VER]","Symbian/[VER]"],webOS:["webOS/[VER]","hpwOS/[VER];"]},utils:{Bot:"Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor",MobileBot:"Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",DesktopMode:"WPDesktop",TV:"SonyDTV|HbbTV",WebKit:"(webkit)[ /]([\\w.]+)",Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",Watch:"SM-V700"}},o.detectMobileBrowsers={fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i};var P,G=Object.prototype.hasOwnProperty;return o.FALLBACK_PHONE="UnknownPhone",o.FALLBACK_TABLET="UnknownTablet",o.FALLBACK_MOBILE="UnknownMobile",P="isArray"in Array?Array.isArray:function(T){return"[object Array]"===Object.prototype.toString.call(T)},function(){var T,e,i,a,A,b,n=o.mobileDetectRules;for(T in n.props)if(G.call(n.props,T)){for(e=n.props[T],P(e)||(e=[e]),A=e.length,a=0;A>a;++a)i=e[a],b=i.indexOf("[VER]"),b>=0&&(i=i.substring(0,b)+"([\\w._\\+]+)"+i.substring(b+5)),e[a]=new RegExp(i,"i");n.props[T]=e}S(n.oss),S(n.phones),S(n.tablets),S(n.uas),S(n.utils),n.oss0={WindowsPhoneOS:n.oss.WindowsPhoneOS,WindowsMobileOS:n.oss.WindowsMobileOS}}(),o.findMatch=function(T,e){for(var S in T)if(G.call(T,S)&&T[S].test(e))return S;return null},o.getVersionStr=function(T,e){var S,i,P,a,A=o.mobileDetectRules.props;if(G.call(A,T))for(S=A[T],P=S.length,i=0;P>i;++i)if(a=S[i].exec(e),null!==a)return a[1];return null},o.getVersion=function(T,e){var S=o.getVersionStr(T,e);return S?o.prepareVersionNo(S):0/0},o.prepareVersionNo=function(T){var e;return e=T.split(/[a-z._ \/\-]/i),1===e.length&&(T=e[0]),e.length>1&&(T=e[0]+".",e.shift(),T+=e.join("")),Number(T)},o.isMobileFallback=function(T){return o.detectMobileBrowsers.fullPattern.test(T)||o.detectMobileBrowsers.shortPattern.test(T.substr(0,4))},o.prepareDetectionCache=function(T,S,P){if(T.mobile===e){var G,a,A;return(a=o.findMatch(o.mobileDetectRules.tablets,S))?(T.mobile=T.tablet=a,void(T.phone=null)):(G=o.findMatch(o.mobileDetectRules.phones,S))?(T.mobile=T.phone=G,void(T.tablet=null)):void(o.isMobileFallback(S)?(A=i.isPhoneSized(P),A===e?(T.mobile=o.FALLBACK_MOBILE,T.tablet=T.phone=null):A?(T.mobile=T.phone=o.FALLBACK_PHONE,T.tablet=null):(T.mobile=T.tablet=o.FALLBACK_TABLET,T.phone=null)):T.mobile=T.tablet=T.phone=null)}},o.mobileGrade=function(T){var e=null!==T.mobile();return T.os("iOS")&&T.version("iPad")>=4.3||T.os("iOS")&&T.version("iPhone")>=3.1||T.os("iOS")&&T.version("iPod")>=3.1||T.version("Android")>2.1&&T.is("Webkit")||T.version("Windows Phone OS")>=7||T.is("BlackBerry")&&T.version("BlackBerry")>=6||T.match("Playbook.*Tablet")||T.version("webOS")>=1.4&&T.match("Palm|Pre|Pixi")||T.match("hp.*TouchPad")||T.is("Firefox")&&T.version("Firefox")>=12||T.is("Chrome")&&T.is("AndroidOS")&&T.version("Android")>=4||T.is("Skyfire")&&T.version("Skyfire")>=4.1&&T.is("AndroidOS")&&T.version("Android")>=2.3||T.is("Opera")&&T.version("Opera Mobi")>11&&T.is("AndroidOS")||T.is("MeeGoOS")||T.is("Tizen")||T.is("Dolfin")&&T.version("Bada")>=2||(T.is("UC Browser")||T.is("Dolfin"))&&T.version("Android")>=2.3||T.match("Kindle Fire")||T.is("Kindle")&&T.version("Kindle")>=3||T.is("AndroidOS")&&T.is("NookTablet")||T.version("Chrome")>=11&&!e||T.version("Safari")>=5&&!e||T.version("Firefox")>=4&&!e||T.version("MSIE")>=7&&!e||T.version("Opera")>=10&&!e?"A":T.os("iOS")&&T.version("iPad")<4.3||T.os("iOS")&&T.version("iPhone")<3.1||T.os("iOS")&&T.version("iPod")<3.1||T.is("Blackberry")&&T.version("BlackBerry")>=5&&T.version("BlackBerry")<6||T.version("Opera Mini")>=5&&T.version("Opera Mini")<=6.5&&(T.version("Android")>=2.3||T.is("iOS"))||T.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||T.version("Opera Mobi")>=11&&T.is("SymbianOS")?"B":(T.version("BlackBerry")<5||T.match("MSIEMobile|Windows CE.*Mobile")||T.version("Windows Mobile")<=5.2,"C")
},o.detectOS=function(T){return o.findMatch(o.mobileDetectRules.oss0,T)||o.findMatch(o.mobileDetectRules.oss,T)},o.getDeviceSmallerSide=function(){return window.screen.width<window.screen.height?window.screen.width:window.screen.height},i.prototype={constructor:i,mobile:function(){return o.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.mobile},phone:function(){return o.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.phone},tablet:function(){return o.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.tablet},userAgent:function(){return this._cache.userAgent===e&&(this._cache.userAgent=o.findMatch(o.mobileDetectRules.uas,this.ua)),this._cache.userAgent},os:function(){return this._cache.os===e&&(this._cache.os=o.detectOS(this.ua)),this._cache.os},version:function(T){return o.getVersion(T,this.ua)},versionStr:function(T){return o.getVersionStr(T,this.ua)},is:function(e){return T(e,this.userAgent())||T(e,this.os())||T(e,this.phone())||T(e,this.tablet())||T(e,o.findMatch(o.mobileDetectRules.utils,this.ua))},match:function(T){return T instanceof RegExp||(T=new RegExp(T,"i")),T.test(this.ua)},isPhoneSized:function(T){return i.isPhoneSized(T||this.maxPhoneWidth)},mobileGrade:function(){return this._cache.grade===e&&(this._cache.grade=o.mobileGrade(this)),this._cache.grade}},i.isPhoneSized="undefined"!=typeof window&&window.screen?function(T){return 0>T?e:o.getDeviceSmallerSide()<=T}:function(){},i._impl=o,i})}(function(){if("undefined"!=typeof window)return function(T){window.MobileDetect=T()};throw new Error("unknown environment")}());
      
        var self = this;
        var APIcommandsArr = []; // storing all api commands that were called before player initialized
        var pfx = ["webkit", "moz", "MS", "o", ""];
        var vendors = ['-moz-','-webkit-','-o-','-ms-','-khtml-',''];
        
        var flags = {
            embeded             : false,
            widthProvided       : false,
            recheckSize         : false,
            apiReady            : false,
            paddingChecked      : false,
            mobile              : (typeof(opts.mobile)=='undefined') ? false : opts.mobile,
            wt                  : false,
            playClicked         : false,
            customFullscreen    : false,
            deviceTypeProvided  : (typeof opts.deviceType == "undefined") ? false: true,
            rectConfigured      : false,
            notFound            : false,
            spillFlag           : (opts.spil) ? true : false,
            testEnv             : (opts.test) ? true : false        
        };
        
        var iframe; // iframe element will be stored here
        var errorFrame;
        var gErrLog;
        var playerURL;
        var deviceType = detectDevice(opts.deviceType);
        var domain = window.location.href;
        domain = domain.match(/:\/\/(.[^/]+)/)[1];
        var host = (domain.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[0];
        
        // GETTING URL PARAMS FROM URL - debug functionality
        var urlproperties = [];
        getURLprops();
        
        // required params
	var game 	= (typeof(opts.game) != 'undefined') ? opts.game : false ;
	var publisherId = (typeof(opts.publisherId) != 'undefined') ? opts.publisherId : false ;
        
        // optional params
        var gametitle;
        if(typeof(opts.gametitle) != 'undefined'){
            if(opts.gametitle == "") gametitle = " ";
            else gametitle = opts.gametitle;
        }else{
            gametitle = false;
        }
        var lang        = (typeof(opts.lang) != 'undefined') ? opts.lang : 'en' ;
        if(typeof(opts.width) != 'undefined'){
             var widthParam =  parseInt(opts.width); 
             flags.widthProvided = true;
        }
        var container = (typeof(opts.container) != 'undefined') ? document.getElementById(opts.container) : false;
        var customDomain = (typeof(opts.customDomain) != 'undefined') ? opts.customDomain : false;
        var customAdTag  = (typeof(opts.customAdTag) != 'undefined') ? opts.customAdTag : false;
        var webView = (typeof(opts.webView) != 'undefined') ? opts.webView : false;
        
        // callbacks
        var onVideoFound    = (typeof(opts.onVideoFound) != 'undefined') ? opts.onVideoFound : function(){};
        var onVideoNotFound = (typeof(opts.onVideoNotFound) != 'undefined') ? opts.onVideoNotFound : function(){};
        var onError         = (typeof(opts.onError) != 'undefined') ? opts.onError : function(){};
        var onFullscreen    = (typeof(opts.onFullscreen) != 'undefined') ? opts.onFullscreen : function(){};
        var requiredAjaxes = {
            gamesFeed: false,
            env: false
        };
        
        // internal vars
        var timer = 10;
        var interval;
	var defaults = {
            width: 450,
            height: parseInt(450/16*9)
	};
        
        
        /*WT parameters settings*/
        var wt = {
            enable: false,
            disable: false
        };
        if(typeof(opts.wt) != 'undefined'){
            for(var wtProp in opts.wt){
                wt[wtProp] = opts.wt[wtProp];
            }
            
            if(parseInt(wt.position)>3) wt.position = 2;

            flags.wt = true;   
        }
        
        log(opts, "EMBED PARAMS");
        
/********************************** ADVANCED EMBED FUNCTIONALITY  **********************************/

        // main object
	var VeediObj = { 
            styles  : {},
            init    : function(){
                include();
		VeediObj.iframe = document.getElementById('Veediframe');
                
                /*
                 * checking if width parameter provided
                 * if not we embeding player onload of the page or after X amount of timer set
                 */
                
                // receiving from player when it will be ready
                window.addEventListener("message", receivePostMessage, false); 
                
                if(!flags.widthProvided){
                    if(!flags.embeded) embedIframe();
                    interval = setInterval(function(){
                        enableTimer();  
                    }, 200);
                }else{
                    embedIframe();  
                }
		
                if(flags.mobile) window.addEventListener("resize", recheckDimensions, false); // enables responsiviness
  
            },
            
            getEnvPerDomain: function(){
                var domainForEnv = customDomain || domain;                      // if customDomain provided, deliver customDomain
                var URL = "http://www.veedi.com/player/server/envInitializer.php?";
                URL +="pid=" + publisherId;
                URL +="&domain=" + domainForEnv;
                var params = {
                    url: URL,
                    callback: VeediObj.setEnvPerDomain
                };
                VeediObj.callAjax(params); 
            },
            
            setEnvPerDomain: function(res){
                var json = JSON.parse(res);
                if(!flags.testEnv) flags.testEnv = (json.env=="player_test");
                if(checkRequiredAjaxesReceived("env")) VeediObj.videoFound();
            },
            
            checkGameExists : function(){
                /*
                 * checking if provided parameter is gameid or gamename
                 * if it's gamename, we'll send it to the feed in order to check does such game exists,
                 * if provided param is gameid, we'll skip Ajax, and load player with gameid
                 */
                // checking if provided parameter is empty
                if(game==="") {
                    onVideoNotFound();
                    return;
                }
                
                if(flags.spillFlag){
                    VeediObj.sendGamesFeedAjaxSpill();
                }else{
                    VeediObj.sendGamesFeedAjax();
                }

            },
            
            
            sendGamesFeedAjaxSpill: function(){
                var URL = "http://www.veedi.com/player/games_feed.php?spill-id=";
                URL+=game;
                var params = {
                    message: "",
                    url: URL,
                    callback: VeediObj.handleAjax,
                    deviceDetect: true
                };
                VeediObj.callAjax(params); 
            },
            
            sendGamesFeedAjax: function(){
                var numberFlag = false;
                if(typeof(game.match)=="undefined"){
                    numberFlag = true; 
                }else{
                    if(game.match(/[a-zA-Z]/g)){
                        numberFlag = false;
                    }else{
                        numberFlag = true;
                        game = parseInt(game);
                    }  
                }
                
                if(!numberFlag){
                    var URL = "http://www.veedi.com/player/games_feed.php?title=";
                    try{game = game.replace(/\s+/g, ' ').trim();}catch(e){};    // trimming all extra spaces
                    URL += encodeURIComponent(game);
                    var params = {
                        message: "",
                        url: URL,
                        callback: VeediObj.handleAjax,
                        deviceDetect: true
                    };
                    VeediObj.callAjax(params); 
                }else{
                    VeediObj.videoFound();   
                }
            },
            
            handleAjax : function(data){
                
                switch(true){
                    case (parseInt(data)==0):
                        VeediObj.videoNotFound();
                        break;
                        
                    case (data == "disabled"): 
                        VeediObj.videoDisabled();
                        break;
                        
                    default:
                        if(data.indexOf("2::")>-1){
                            // video exception
                            var parsedData = data.split("::");
                            var exception = VeediObj.getProperGameId(JSON.parse(parsedData[2]));
                            if(exception === "0") {
                                onVideoNotFound(); // publisher provided function
                                return;
                            }else{
                                game = (exception) ? parseInt(exception) : parseInt(parsedData[1]);
                            }

                        }else{
                            game = parseInt(data);  
                        }
                        if(checkRequiredAjaxesReceived("gamesFeed")) VeediObj.videoFound();
                        break;    
                }
            },
            
            callAjax : function(params){
                //message, url, callback, method, deviceDetect
                
                var method = (typeof params.method!="undefined") ? params.method: "GET";
                var contentType = (params.contentType) ? params.contentType : "application/x-www-form-urlencoded";
                var callback = (params.callback) ? params.callback : function(){};
                var xhr;
                // compatible with IE7+, Firefox, Chrome, Opera, Safari
                if(navigator.userAgent.indexOf("MSIE 9") > -1){
                    xhr = new XDomainRequest();
                    xhr.onload = function(){params.callback(xhr.responseText);};
                    xhr.onprogress = function () { };
                    xhr.ontimeout = function () { };
                    xhr.onerror = function () { };
                    xhr.open(method, params.url, true);
                }else{
                    
                    xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function(){
                        if (xhr.readyState == 4 && xhr.status == 200){
                            callback(xhr.responseText);
                        }
                    }
                    xhr.open(method, params.url, true);
                    xhr.setRequestHeader("Content-Type", contentType);    
                }
                
                setTimeout(function () {
                    xhr.send(params.message);
                }, 0);
                
            },
            
            
            videoDisabled: function(){
                onVideoNotFound(); // publisher provided function
            },
                    
            videoNotFound: function(){
                flags.notFound = true;
                VeediObj.updateMissmatchesCounter();
                VeediObj.updateStatsMissmatchesCounter();
                window.addEventListener("message", receivePostMessage, false);
                include();
                setNotFoundErrorSource();
                onVideoNotFound(); // publisher provided function
            },
            
            videoFound: function(){
                VeediObj.init();
                try{onVideoFound();}catch(e){};                                 // publisher provided function
            },
            
            getProperGameId: function(obj){
                // return videoId according to pubid
                var checkPub = VeediObj.checkExceptionPerPubid(obj);
                if(checkPub) return checkPub;
                
                return VeediObj.checkExceptionPerDomain(obj);
                
                
            },
    
            
            checkExceptionPerDomain: function(arr){
                var subDomain = VeediObj.subDomainSupport(arr);
                if(subDomain || subDomain===0) return arr[subDomain].videoId;
                
                for(var i = 0; i<arr.length;i++){
                    if(arr[i].domain==domain || VeediObj.checkWWW(arr[i].domain)==domain){
                        return arr[i].videoId;
                    }
                }
                return false;
            },
            
            checkWWW : function(domain){
                if(domain.indexOf('www.')>-1){
                    return domain.replace('www.', "");
                }
                return "www."+domain;
            },
            
            
            subDomainSupport : function(arr){

                for(var i = 0; i<arr.length;i++){
                    if(arr[i].domain.indexOf('*')>-1){
                        if((arr[i].domain.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[0] == host ){
                            return i;
                        }
                    } 
                }
                return false;

            },
            
            checkExceptionPerPubid: function(arr){
                for(var i = 0; i<arr.length;i++){
                    if(arr[i].pubid==publisherId){
                        return arr[i].videoId;
                    }
                }
                return false;
            },
            
            
            updateMissmatchesCounter: function(){
                var URL = "http://www.veedi.com/"+getPlayerEnvPath()+"/server/miss_counter_updater.php";
                var params = {
                    method: "POST",
                    message: "message=" + encodeURI(JSON.stringify(VeediObj.buildMismatchesDataObject())),
                    url: URL
                };
                VeediObj.callAjax(params);   
            },
            
            buildMismatchesDataObject: function(){
                return{
                    name: game
                };
            },
            
            updateStatsMissmatchesCounter: function(){                          // sending missed event to our BI
                var URL = "http://stats.veedi.com/analytics/events/missed";
                var params = {
                    method: "POST",
                    message: JSON.stringify(VeediObj.buildStatsMismatchesDataObject()),
                    url: URL,
                    contentType: "application/json"
                };
                
                var num = Math.round(Math.random()*100);
                if(num>=50 && num <70 ) VeediObj.callAjax(params);              // sending BI event only in 20%
            },
            
            buildStatsMismatchesDataObject: function(){                         // proper data for missed event sent to BI
                return{
                    title: game,
                    domain: window.location.host,
                    pid: publisherId
                };
            }

        };
	
        // enables embed initialization
        VeediObj.checkGameExists();
        VeediObj.getEnvPerDomain();



/******************************************************************************************************************/ 
/**********************  EMBEDDING FUNCTIONS  *********************************************************************/ 
/******************************************************************************************************************/ 
        function checkRequiredAjaxesReceived(prop){                             // checking if both ajaxes (games_feed and env checker had returned)
            requiredAjaxes[prop] = true;
            for(var prop in requiredAjaxes){
                if(!requiredAjaxes[prop]) return false;
            }
            return true;
        }


        
/**************************** CALCULATING DIMENSIONS ****************************/
        // return width and height of the iframe's parent element(container)
	function getParentDimensions(obj){
                if(flags.widthProvided){
                    return {
			width : widthParam,
			height: parseInt(widthParam/16*9)
                    }; 
                }
                
                var padding = getPadding(obj.parentNode);
                return {
                    width : parseInt(obj.parentNode.clientWidth) - padding.left - padding.right,
                    height: obj.parentNode.clientHeight
                };
                
                
                // handle padding issue	
	}

        function checkDimensions(){
            
                if(flags.mobile){
                    buildEmbed(VeediObj.parentStyles.width, VeediObj.parentStyles.height);
                    return;
                }
            
		var height;
		switch(true){
			case (VeediObj.parentStyles.width < 50):
				// block element inherits body styles
                                buildEmbed(defaults.width, defaults.height, 3);
				break;
				
			case (VeediObj.parentStyles.width < 450):
				// element has width less than 450 show him an error
                                buildEmbed('100%', '100%', 1);
				
				break;
				
			case (VeediObj.parentStyles.width >= 450):
				// need to set height and check if it fits
				// checking if height is ok
				if(checkHeight(VeediObj.parentStyles.width)){
					
					buildEmbed(VeediObj.parentStyles.width, VeediObj.styles.height, 0);
					

				}else{
					//dimensions are not ok, need to check accroding to height check width
					if(checkWidth(VeediObj.parentStyles.height)){
						// if width is ok need build embed
						buildEmbed(VeediObj.styles.width, VeediObj.parentStyles.height, 0)
					}else{
						// build embed with error
						buildEmbed('100%', '100%', 2);
					}
				}
				
				break;

		}
	}
        
        function recheckDimensions(){
            VeediObj.parentStyles = getParentDimensions(VeediObj.iframe);
            // checking if parent dimensions changed
            
            if(VeediObj.parentStyles.width!=VeediObj.parentFirstStyles.width || (flags.mobile && VeediObj.parentStyles.height!=VeediObj.parentFirstStyles.height)){
                // if dimensions are smaller than 730px we need to enable responsiviness
                flags.recheckSize = true;
                PrefixedEvent(iframe, "TransitionEnd", sendResponsiveInit);
                checkDimensions(); 
                clearInterval(interval);
                if(flags.mobile){
                    VeediObj.parentFirstStyles.width = VeediObj.parentStyles.width;
                    VeediObj.parentFirstStyles.height = VeediObj.parentStyles.height;
                } 
            }      
        }
        
	function checkWidth(height){
		var width = parseInt(height / 9 * 16);
		if(width >= 450){
			VeediObj.styles.width = width;
			return true;
		}
		else{
			return false;
		}
	}
	
	function checkHeight(width){
		var height = parseInt(width/16*9);
		switch(true){
                        case (flags.recheckSize):
                                VeediObj.styles.height = height;
				return true;
                                break;
                    
			case(height > window.innerHeight):
				VeediObj.parentStyles.height = window.innerHeight;
				return false;
				break;
		
			case (height > VeediObj.parentStyles.height && VeediObj.parentStyles.height < 50): 
				VeediObj.styles.height = height;
				return true;
				break;
			case(height > VeediObj.parentStyles.height && VeediObj.parentStyles.height > 50): 
				//NEED TO FOLLOW ACCORDING PARENT'S HEIGHT
				return false;
				break;
		
			case(height <= VeediObj.parentStyles.height && VeediObj.parentStyles.height > 50): 
				VeediObj.styles.height = height;
				return true;
				break;
		}
	}
        
// custom fullscreen was created for IPAD that don't have native fullscreen support
// but we removed this functionality until we create some generic one

        function enableCustomFullscreen(){
//            gMobileBeforeFullscreenStyles = {
//                width: iframe.getAttribute("width"),
//                height: iframe.getAttribute("height")  
//            };
//            flags.customFullscreen = true;

        }
        
        function disableCustomFullscreen(){
//            iframe.setAttribute("width", gMobileBeforeFullscreenStyles.width);
//            iframe.setAttribute("height", gMobileBeforeFullscreenStyles.height);   
//            flags.customFullscreen = false;
        }

/**************************** IFRAME FUNCTIONALITY ****************************/    
        function enableTimer(){
            timer-=0.2;
            recheckDimensions();
            if(timer>0) return;
            
            clearInterval(interval);
            if(!flags.embeded) embedIframe();
        }
    
        function embedIframe(){
            VeediObj.parentStyles       = getParentDimensions(VeediObj.iframe);
            VeediObj.parentFirstStyles  = VeediObj.parentStyles;
            checkDimensions();
            flags.embeded = true;
        }
	
	function buildEmbed(width, height){
		VeediObj.iframe.setAttribute('width', width);
		VeediObj.iframe.setAttribute('height',height);
                playerURL = getPlayerURL();
                if(typeof(urlproperties['debug']!="undefined")){
                    if(urlproperties['debug'] == "veedi"){
                          playerURL+="&debug=veedi";
                    }  
                }
		if(!flags.embeded) VeediObj.iframe.setAttribute('src',encodeURI(playerURL));
	}

        // create iframe element node
	function createIframeElement(){
            iframe = document.createElement('iframe');
            PrefixedEvent(iframe, "TransitionEnd", sendResponsiveInit);
            if(navigator.userAgent.indexOf("MSIE 9")==-1){
                setCss3Style(iframe, 'transition', 'all 0.3s ease-in-out'); 
            }
            iframe.setAttribute('id', 'Veediframe');
            iframe.setAttribute('scrolling', 'no');
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('width', '0');
            iframe.setAttribute('height', '0');
            iframe.style.display = "block";
            iframe.style.margin = "auto";
            iframe.style.overflow = "hidden";
            iframe.style.backgroundColor = "black";
            iframe.style.backgroundImage = "url(http://www.veedi.com/player/img/original-loader_orig_2.gif)";
            iframe.style.backgroundPosition = "center center";
            iframe.style.backgroundRepeat = "no-repeat";
            iframe.style.visibility = "hidden";
            iframe.onload = function(){
                iframe.style.visibility="visible";
            }
            
            return iframe;  
        }
        

	
	// includes iframe 
	function include(){
            if(container){
                container.appendChild(createIframeElement());
            }else{
                var script = document.getElementById('veediInit');
                script.parentNode.appendChild(createIframeElement());
            }   
	}
        
        // setting error frame to the page
        function setNotFoundErrorSource(){
            VeediObj.iframe = document.getElementById('Veediframe');
            VeediObj.iframe.setAttribute('src','http://www.veedi.com/player/notfoundframe.php');
        }
        
        function setErrorSource(){
            errorFrame = document.createElement('iframe');
            errorFrame.setAttribute('width', 0);
            errorFrame.setAttribute('height', 0);
            errorFrame.style.display = "none";
            errorFrame.setAttribute('src','http://www.veedi.com/player/gaErrorSender.php');
            if(container){
                container.appendChild(errorFrame);
            }else{
                var script = document.getElementById('veediInit');
                script.parentNode.appendChild(errorFrame);  
            }  
        }

 
    
/******************************************************************************************************************/ 
/**********************   CROSSDOMAIN FUNCTIONALITY   *************************************************************/ 
/******************************************************************************************************************/ 
    
    //receiving postmessage from Veedi.com
	function receivePostMessage(event){
		if(event.origin =='http://www.veedi.com'){
			switch(true){
                                case (event.data.indexOf('getCustomDomain')>-1):
                                    sendCustomDomainAndWebViewParams();
                                    if(flags.wt && wt.enable) sendWTbtnforceCommand();
                                    break;
                            
                                case (event.data.indexOf('ready')>-1):
                                    // if parameter gametitle provided in initialization of embed it will be delivered to the player
                                    if(gametitle) sendGametitleParam(gametitle);
                                    // sending lang parameter ('EN' by default)
                                    sendLangParam(lang);
                                    sendGameIdParameter(game);
                                    if(customAdTag) sendCustomAdTag(customAdTag);
                                    break;
                                    
                                case (event.data.indexOf('playClicked')>-1):
                                    flags.playClicked = true;
                                    break;
                  
                                
                                case (event.data.indexOf('apiReady')>-1):
                                    flags.apiReady = true;
                                    activateApiCommands();
                                    break;
                                
                                // receiving error from the player
                                case (event.data.indexOf('playerError')>-1):
                                    var arr = event.data.split("::");
                                    sendErrorLog(arr[1]);
                                    break;
                                
                                
                                case (event.data.indexOf('enableFullIOSscreen')>-1):
//                                  enable custom fullscreen mode in IOS
                                    enableCustomFullscreen();
                                    break;
                                    
                                case (event.data.indexOf('fullscreen')>-1):
                                    var arr = event.data.split("::");
                                    var bool = (arr[1]=="enabled") ? true : false;
//                                  mobile branch
//                                  disable custom fullscreen if it's IPAD
                                    if(!bool && flags.customFullscreen) disableCustomFullscreen();
                                    onFullscreen(bool);
                                    break;
                                    
                                case (event.data.indexOf('MissedPageReady')>-1):
                                    sendErrorMissedData();
                                    break;
                                    
                                case (event.data.indexOf('ErrorPageReady')>-1):
                                    sendErrorData();
                                    break;
                                    
                                case (event.data.indexOf('getIframeSizes')>-1):
                                    sendIframeSizes();
                                    break;
                                    
                                case (event.data.indexOf("WT_BTN_PROPS::")>-1):
                                    if(wt.disable) return;
                                    var arr = event.data.split('::');
                                    WT.init(JSON.parse(arr[1]));
                                    break;
                                    
                                case (event.data.indexOf("recheckDimensions")>-1):
                                    recheckDimensions();
                                    break;
                                                      
                      }
		}
	}
        
        
        function sendWTbtnforceCommand(){
            VeediObj.iframe.contentWindow.postMessage("forceWTbtn",playerURL); 
        }
        
        function sendWTbtnClickedEvent(){
            VeediObj.iframe.contentWindow.postMessage("WTbtn_clicked",playerURL); 
        }
        
        function sendCustomAdTag(tag){
            VeediObj.iframe.contentWindow.postMessage("customAdTag::" + tag ,playerURL); 
        }
        
        function sendIframeSizes(){
            var w = VeediObj.iframe.getAttribute('width');
            var h = VeediObj.iframe.getAttribute('height');
            VeediObj.iframe.contentWindow.postMessage("iframeSizes::" + w + '/' + h,playerURL);  
        }
        
        function sendGameIdParameter(game){
            VeediObj.iframe.contentWindow.postMessage("getGameData::" + game,playerURL);  
        }
        
        function sendResponsiveInit(e){
            if(flags.customFullscreen && !flags.rectConfigured){
                var rect = iframe.getBoundingClientRect();
                enableTranslateStyles(rect.left,rect.top);
                flags.rectConfigured = true;
            }
            if(parseInt(VeediObj.parentStyles.width)<730){
                VeediObj.iframe.contentWindow.postMessage("responsive::enable",playerURL);  
            }else{
                VeediObj.iframe.contentWindow.postMessage("responsive::disable",playerURL);  
            }  
        }
        
        function sendLangParam(lang){
            VeediObj.iframe.contentWindow.postMessage("lang::" + lang,playerURL);  
        }
        
        function sendCustomDomainAndWebViewParams(){
             var object = {
                 customDomain : customDomain,
                 webView      : webView
             };
            
             VeediObj.iframe.contentWindow.postMessage("customDomainAndWebView::"+JSON.stringify(object),playerURL);        
        }
        
        function sendGametitleParam(gametitle){
            VeediObj.iframe.contentWindow.postMessage("gametitle::" + gametitle,playerURL);     
        }
        
        // sending errors on videoNotFound
        function sendErrorMissedData(){
            var message = "errorData::"+publisherId+"::"+game+"::"+window.location.href;
            VeediObj.iframe.contentWindow.postMessage(message,'http://www.veedi.com/player/notfoundframe.php');  
        }
        
        function sendErrorData(){
            var message = "errorData::"+publisherId+","+gErrLog;
            errorFrame.contentWindow.postMessage(message,'http://www.veedi.com/player/gaErrorSender.php');
        }

/******************************************************************************************************************/ 
/**********************   COMMON FUNCTIONS   **********************************************************************/ 
/******************************************************************************************************************/ 
        function detectDevice(device){
            if(device) return device;
            var md = new MobileDetect(window.navigator.userAgent);
            switch(false){
                case (!md.phone()): 
                    flags.mobile = true;
                    return "mobile";
                    break;
                    
                case (!md.tablet()): 
                    flags.mobile = true;
                    return "tablet";
                    break;
                     
                default: 
                    return "desktop";
                    break;
            }
        }
        
    
        function getPlayerEnvPath(){                                            // setting proper url for non mobile required files like: notfound.php, errorSender.php etc...
           return (flags.testEnv) ? "player_test" : "player";
        }
    
        function getPlayerType(type){                                           // setting proper player type
            switch(true){
                case (flags.mobile): 
                    return "player_mobile"; 
                    break;
                
                case (type=="mobile" || type=="tablet"):
                    return "player_mobile";
                    break;
                
                case (flags.testEnv):
                    return "player_test";
                    break;
                    
                case (type=="desktop"):
                    return "player";
                    break;
                
                
                
                default:                                                        // default is that provided type is mobile
                    flags.mobile = true;
                    return "player_mobile"; 
                    break;
                
            };
        }


	function isPortrait(){
            return (window.innerWidth>window.innerHeight) ? false : true;
        }
        
        function getPlayerURL(){
            var curURL = window.location.href.split('?')[0];
            var URL = "http:\/\/www.veedi.com\/"+getPlayerType(deviceType)+"\/";
            URL+=lang+'\/';
            URL+=publisherId+'\/';
            URL+=game+'.html';
            URL+='?puburl='+encodeURIComponent(curURL);
            URL+='&device-type=' + deviceType;
            if(customDomain) URL+='&customd=' + encodeURIComponent(customDomain);
            return URL;
            /*
             * new player URL example - http://www.veedi.com/player/en/2828/67.html
             * old player URL example - http://www.veedi.com/player/index.php?pid=2828
             */   
        }
	
	
	//detects IE 10,9
	function detectIE(){
		try{
			if (navigator.appVersion.indexOf("MSIE 10") !== -1 || navigator.userAgent.indexOf("MSIE 9") > -1){
				return true;
			}
			return false;
		}catch(e){return false;};
	}
        
        function detectIE11(){
            try{
                var ua = navigator.userAgent.toString().toLowerCase();
                var match = /(trident)(?:.*rv:([\w.]+))?/.exec(ua) ||/(msie) ([\w.]+)/.exec(ua)||['',null,-1];
                var rv = match[2];
                return (typeof(rv)=="undefined" || rv==-1) ? false :true;
            }catch(e){
                return false;
            }
        }
        

        function getURLprops(){
            try {
                var qstr = location.search.substring(1);
                var arr = qstr.split("&");
                for (var i = 0; i < arr.length; i++) {
                     var breakpoint = arr[i].indexOf("=");
                     myname = arr[i].substring(0, breakpoint);
                     myvalue = arr[i].substring(breakpoint + 1, arr[i].length)
                     urlproperties[myname] = myvalue;
                }
                } catch (e) {
                     //alert('Error reading URL variables');
                }
        };
        
        function PrefixedEvent(element, type, callback) {
            for (var p = 0; p < pfx.length; p++) {
                if (!pfx[p]) type = type.toLowerCase();
                element.addEventListener(pfx[p]+type, callback, false);
            }
        }
        
        // setting transition to the iframe element
        // cross browser solution
        function toCamelCase(str){
            return str.toLowerCase().replace(/(\-[a-z])/g, function($1){
                return $1.toUpperCase().replace('-','');
            });
        }
        
        function setCss3Style(el,prop,val){
            for(var i=0,l=vendors.length;i<l;i++)
                {
                    var p = toCamelCase(vendors[i] + prop);
                    if(p in el.style)
                        el.style[p] = val;
                }
        }
        
        function customEncode(data){
            data = data.replace(/&/g, "*and*");
            data = data.replace("?", "*question*");
            return data;
        };
        
        function log(str, obj){
            if(typeof(urlproperties['debug']) != 'undefined'){
                if(typeof(obj)!="undefined"){ try{console.log(obj,str);}catch(e){};}
                else {try{console.log(str);}catch(e){};}
            } 
        }
        
        function getPadding(obj){
            var style = window.getComputedStyle(obj, null);
            var pLeft = (typeof(style.getPropertyValue("padding-left"))!="undefined") ? parseInt(style.getPropertyValue("padding-left")) : 0;
            var pRight = (typeof(style.getPropertyValue("padding-right"))!="undefined") ? parseInt(style.getPropertyValue("padding-right")) : 0;
            flags.paddingChecked = true;
            return {
                left: pLeft,
                right: pRight  
            };
        }
        
        
        function addClass(obj,classname){
            try{
                if(typeof(obj.classList) != 'undefined'){ 
                        obj.classList.add(classname);
                }else{

                        if(typeof(obj.getAttribute('class')) !== 'undefined' && obj.getAttribute('class') != null){
                                var classAttr = obj.getAttribute('class');
                                var newClassAttr;

                                if(classAttr.indexOf(classname) > -1){
                                        return;
                                }else{
                                        newClassAttr = classAttr+' '+classname;
                                        obj.setAttribute('class',newClassAttr);
                                        return;
                                }
                        }

                        obj.setAttribute('class',classname);

                }
            }catch(e){log('ERROR from addClass(): ' + e + '\n class: ' + classname); }
        };
        
        function removeClass(obj,classname){
            if(typeof(obj) == 'undefined') return;
            try{
                if(typeof(obj.classList) != 'undefined'){ 
                    obj.classList.remove(classname);  
                }else{
                    if(typeof(obj.getAttribute('class')) !== 'undefined' && obj.getAttribute('class') != null){
                        var classAttr = obj.getAttribute('class').replace(/\s{2,}/g, ' ');
                        var newClassAttr;

                        if(classAttr.indexOf(classname) > -1){
                                newClassAttr = classAttr.replace(classname, '');
                                obj.setAttribute('class',newClassAttr);
                        }else{
                                return;
                        }
                    }
                }
            }catch(e){log('ERROR from removeClass(): ' + e + '\n class: ' + classname); };
        };
        
        
/******************************************************************************************************************/ 
/**********************   API FUNCTIONS   **********************************************************************/ 
/******************************************************************************************************************/ 
        function activateApiCommands(){                                         // activating all commands that were called before player init
            for(var i=0; i<APIcommandsArr.length; i++){
                
                switch(true){
                    
                    case (APIcommandsArr[i].indexOf("vol")>-1):                 // handle volume API
                        var volume = parseInt(APIcommandsArr[i].match(/\d+/g))
                        VeediObj.iframe.contentWindow.postMessage("api::vol_"+volume,playerURL);
                        break;
                    
                    case (APIcommandsArr[i].indexOf("setVideoTagColor")>-1):
                        VeediObj.iframe.contentWindow.postMessage("api::" + APIcommandsArr[i],playerURL);
                        break;
                    
                    default: 
                        self[APIcommandsArr[i]]();    
                        break;
                    
                };

            } 
        }
    
        self.play = function(){
            if(!flags.apiReady) {
                self.saveAllCommands('play');
                return;
            }
            VeediObj.iframe.contentWindow.postMessage("api::play",playerURL);
        };
        
        self.recheck = function(){
            if(flags.notFound) return;
            recheckDimensions();
        };
        
        self.pause = function(){
            if(!flags.apiReady) {
                self.saveAllCommands('pause');
                return;
            }
             VeediObj.iframe.contentWindow.postMessage("api::pause",playerURL);
        };
        
        self.mute = function(){
            if(!flags.apiReady) {
                self.saveAllCommands('mute');
                return;
            }
            VeediObj.iframe.contentWindow.postMessage("api::mute",playerURL);
        };
        
        self.unmute = function(){
            if(!flags.apiReady) {
                self.saveAllCommands('unmute');
                return;
            }
            VeediObj.iframe.contentWindow.postMessage("api::unmute",playerURL);
        };
        
        self.removeVideo = function(){
            if(!flags.apiReady) {
                self.saveAllCommands('removeVideo');
                return;
            }
            VeediObj.iframe.contentWindow.postMessage("api::removeVideo",playerURL);
        };
        
        self.setVolume = function(int){
            var volume = parseInt(int);
            if(volume>10) volume=10; if(volume<0) volume=0;
            if(!flags.apiReady) {
                self.saveAllCommands('vol_'+volume);
                return;
            }
            VeediObj.iframe.contentWindow.postMessage("api::vol_"+volume,playerURL);
        };
        
        self.showVolume = function(){
            if(!flags.apiReady) {
                self.saveAllCommands('showVolume');
                return;
            }
            VeediObj.iframe.contentWindow.postMessage("api::showVolume",playerURL);
        };
        
        self.hideVolume = function(){
            if(!flags.apiReady) {
                self.saveAllCommands('hideVolume');
                return;
            }
            VeediObj.iframe.contentWindow.postMessage("api::hideVolume",playerURL);
        };
        
        self.hidePanels = function(){
            if(!flags.apiReady) {
                self.saveAllCommands('hidePanels');
                return;
            }
            VeediObj.iframe.contentWindow.postMessage("api::hidePanels",playerURL);
        };
        
        self.hideHeader = function(){
            if(!flags.apiReady) {
                self.saveAllCommands('hideHeader');
                return;
            }
            VeediObj.iframe.contentWindow.postMessage("api::hideHeader",playerURL);
        };
        
        self.setVideoTagColor = function(color){
            var str = "setVideoTagColor_" + JSON.stringify({color:color});
            if(!flags.apiReady) {
                self.saveAllCommands(str);
                return;
            }
            VeediObj.iframe.contentWindow.postMessage("api::" + str,playerURL);
        };
        
        
        self.saveAllCommands = function(command){                               // saving commands that were called before player is fully initialized
            APIcommandsArr.push(command);
        };
        
        self.enableWTbutton = function(){
            WT.forceEnable();
        };
        
        function sendErrorLog(errLog){
            gErrLog = errLog;
            setErrorSource();
            log(errLog, "VEEDI ERROR LOG");
            onError(errLog);
        }
        
        
/******************** WALKTROUGH BUTTON ********************/
            var WT_defaults = {
                colors : {
                    bg : "35495c",
                    controls : "95a5a5",
                    thumbs: 'ffd200',
                    hover: 'fbab20'
                }, 
                
                curPosition: [
                    "top: 20px; left: 20px;",
                    "top: 20px; right: 20px;",
                    "bottom: 20px; right: 20px;",
                    "bottom: 20px; left: 20px;"
                ],
                
                strings: {
                    help: "Need Help?",
                    name: "Watch",
                    video: "Video Walkthrough"
                },
                
                getCurPosition: function(index){
                    return WT_defaults.curPosition[index];
                },
                
                timer: 5
                
            };
            WT_defaults.position = 0;
            
        var WT = {   
            globals: {
                timeout: ""
            },
            flags: {
                btnClosed: true,
                initialized: false
            },
            
            isRTL: function(lang){
                var arr = ["he", "ar"];
                for(var i=0;i<arr.length;i++){
                    if(lang.toLowerCase() == arr[i]) return true;
                }
                return false;
            },
            
            getStyleContent: function(){  
                return {
                    '#veediWTbtn': [
                        "background: #"+WT_defaults.colors.bg+";",
                        "color: #"+WT_defaults.colors.controls+";",
                        "border: 1px solid #"+WT_defaults.colors.thumbs+";"
                    ],

                    '#veediWTbtn #veediWTbtn-close': [
                        "background: #"+WT_defaults.colors.bg+";",
                        "border: 1px solid #"+WT_defaults.colors.thumbs+";",
                    ],

                    "#veediWTbtn #veediWTbtn-textBlock .veediWTbtn-text": [
                        "color: #"+WT_defaults.colors.controls+";"
                    ]
                };
            },
            
            init: function(params){
                WT.initDefaults(params);
                WT.appendStyles();
                WT.appendButton(params);
              
//              do not enable WT btn timer if timer set to 0
                if(WT_defaults.timer!=0){
                    WT.globals.timeout = setTimeout(function(){
                        if(!flags.playClicked) {
                            WT.animate();
                        }
                    }, WT_defaults.timer); 
                }
                
                WT.flags.initialized = true;
            },
            
            animate: function(){
                document.getElementById('veediWTbtn').style.display = "block";
                addClass(document.getElementById('veediWTbtn'), "veediWTbtnAnimated");
                removeClass(document.getElementById('veediWTbtn'),"veediWTbtnInvisible");
                WT.flags.btnClosed = false;
            },
            
            forceEnable: function(){
                if(WT.flags.btnClosed && WT.flags.initialized){
                    clearTimeout(WT.globals.timeout);
                    try{WT.animate()}catch(e){};
                }
            },
 
            appendButton: function(params){
                WT.generateBTN(params);
                WT.initEventHandlers();
//              initialization for smoothScroll plugin
                smoothScroll.init({
                    speed: 500, // Integer. How fast to complete the scroll in milliseconds
                    easing: 'easeInOutCubic', // Easing pattern to use
                    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
                    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
                    callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
                    callbackAfter: function ( toggle, anchor ) {
                        WT.closeWTbtn();
                    } // Function to run after scrolling
                });   
            },
            
            initEventHandlers: function(){
                document.getElementById('veediWTbtn-closeHovered').onmouseover = function(){document.getElementById('WT_svg_path').setAttribute('fill', "#" + WT_defaults.colors.hover);};
                document.getElementById('veediWTbtn-closeHovered').onmouseout = function(){document.getElementById('WT_svg_path').setAttribute('fill', "#" + WT_defaults.colors.controls);};
                document.getElementById('veediWTbtn-textBlock').onmouseover = function(){
                    var texts = document.getElementsByClassName('veediWTbtn-text');
                    for(var i=0;i<texts.length;i++){
                        texts[i].style.color = "#" + WT_defaults.colors.hover;
                    }
                    document.getElementById('WT_video_svg_path').setAttribute('fill', "#" + WT_defaults.colors.hover);};
                document.getElementById('veediWTbtn-textBlock').onmouseout = function(){
                    var texts = document.getElementsByClassName('veediWTbtn-text');
                    for(var i=0;i<texts.length;i++){
                        texts[i].style.color = "#" + WT_defaults.colors.controls;
                    }
                    document.getElementById('WT_video_svg_path').setAttribute('fill', "#" + WT_defaults.colors.controls);};
                document.getElementById('veediWTbtn-svgBlock').onmouseover = function(){
                    var texts = document.getElementsByClassName('veediWTbtn-text');
                    for(var i=0;i<texts.length;i++){
                        texts[i].style.color = "#" + WT_defaults.colors.hover;
                    }
                    document.getElementById('WT_video_svg_path').setAttribute('fill', "#" + WT_defaults.colors.hover);
                };
                document.getElementById('veediWTbtn-svgBlock').onmouseout = function(){
                    var texts = document.getElementsByClassName('veediWTbtn-text');
                    for(var i=0;i<texts.length;i++){
                        texts[i].style.color = "#" + WT_defaults.colors.controls;
                    }
                    document.getElementById('WT_video_svg_path').setAttribute('fill', "#" + WT_defaults.colors.controls);};
                // sending GA event
                document.getElementById('veediWTbtn').addEventListener('click', sendWTbtnClickedEvent);
                document.getElementById('veediWTbtn-close').addEventListener('click', WT.closeWTbtn);
            },
            
            closeWTbtn: function(e){
                try{e.stopPropagation()}catch(e){};
                if(!WT.flags.btnClosed){
                    try{
                        var wrapper = document.getElementById('veediWTbtn');
                        removeClass(wrapper, "veediWTbtnAnimated");
                        addClass(wrapper, 'veediWTbtn-fadeout');
                        setTimeout(function(){
                            wrapper.style.display = "none";
                            removeClass(wrapper, 'veediWTbtn-fadeout');
                            
                            addClass(wrapper,"veediWTbtnInvisible");
                        }, 1500); 
                        WT.flags.btnClosed = true;
                        e.stopPropagation();
                        e.preventDefault();
                        return false;
                    }catch(e){return false;}
                } 
            },
            
            initDefaults: function(params){
                WT_defaults.colors = params.colors;
                WT_defaults.strings = params.strings;
                WT_defaults.position = (typeof(wt.position)!="undefined") ? wt.position : params.position;
                WT.styleContent = WT.getStyleContent();
                WT.styleContent['#veediWTbtn'].push(WT_defaults.getCurPosition(WT_defaults.position));  
                WT_defaults.timer = wt.timer*1000 || params.timer*1000;  
            },
            
            appendStyles: function(){
                var link = document.createElement('link');
                link.setAttribute('rel',"stylesheet");
                link.setAttribute('href',"http://www.veedi.com/"+getPlayerEnvPath()+"/css/wtBTN.css?v=3");        
                document.head.appendChild(link);
                
                if(typeof InstallTrigger !== 'undefined'){
                    WT.appendMOZStyles();
                }else{
                    WT.appendWEBKITStyles();
                }   
            },
            
            applyRTLstyle: function(){
                var ids = ['veediWTbtn-close', 'veediWTbtn-svgBlock', 'veediWTbtn-textBlock'];
                var textElems = document.getElementsByClassName('veediWTbtn-text');
                for(var i=0;i<ids.length;i++){
                    addClass(document.getElementById(ids[i]), 'rtl');
                    addClass(textElems[i] , 'rtl');
                }
                
                
            },
            
            appendWEBKITStyles: function(){
//              works in webkit and IE
                var sheet = document.styleSheets[0];
                for(var prop in WT.styleContent){
                    for(var i=0;i<WT.styleContent[prop].length; i++){
                        sheet.addRule(prop, WT.styleContent[prop][i], 1);
                    }
                }
            },

            appendMOZStyles: function(){
                var styleEl = document.createElement('style');
                styleEl.setAttribute('type', 'text/css');
                styleEl.setAttribute('id', 'veediStyles');
                styleEl.appendChild(document.createTextNode(''));
                document.head.appendChild(styleEl);
                var styleSheet = document.getElementById('veediStyles').sheet;
                for(var prop in WT.styleContent){
                    for(var i=0;i<WT.styleContent[prop].length; i++){
                        styleSheet.insertRule(prop + "{" + WT.styleContent[prop][i] + "}", styleSheet.cssRules.length);
                    }
                }
            },
            
            generateBTN: function(){
                var closeBTNhover = WT.createDiv('veediWTbtn-closeHovered');
                var closeBTN = WT.createDiv('veediWTbtn-close');
                closeBTN.appendChild(closeBTNhover);
                closeBTN.appendChild(WT.getSVGcloseBtn());
                
                var SVGblock = WT.createDiv('veediWTbtn-svgBlock');
                SVGblock.appendChild(WT.getSVGvideoImage());
                
                var textBlock = WT.createDiv('veediWTbtn-textBlock');
                var textIds = ['veediWTbtn-needHelp','veediWTbtn-title', 'veediWTbtn-text'];
                for(var i=0;i<textIds.length;i++){
                    textBlock.appendChild(WT.getTextNode(textIds[i]));
                }
                
//                var wrapper = WT.createDiv('veediWTbtn');
                wrapper = document.createElement("a");
                wrapper.setAttribute("id", "veediWTbtn");
                addClass(wrapper, 'veediWTbtnInvisible');
                wrapper.setAttribute("data-scroll", "");
                wrapper.setAttribute("href", "#Veediframe");
                wrapper.appendChild(closeBTN);
                wrapper.appendChild(SVGblock);
                wrapper.appendChild(textBlock);
                document.body.appendChild(wrapper);
                if(WT.isRTL(lang)) WT.applyRTLstyle();
            },
            
            /* SVG creation */
            
            getSVGvideoImage: function(){
                var SVGVideoimage = "M23.5,0H2C0.9,0,0,0.9,0,2.1v17.8C0,21.1,0.9,22,2,22h21.4c1.1,0,2-0.9,2-2.1V2.1C25.5,0.9,24.6,0,23.5,0z M19.4,1h2v2.1h-2V1z M14.3,1h2v2.1h-2V1z M9.2,1h2v2.1h-2V1z M4.1,1h2v2.1h-2V1z M6.1,21l-2,0v-2.1h2V21z M11.2,21h-2v-2.1h2V21z M16.3,21h-2v-2.1h2V21z M21.4,21h-2v-2.1h2V21z M23.5,17.8H2V4.2h21.4V17.8z M11.2,7.3v7.3l5.1-3.4L11.2,7.3z";
                var svg = veedi_SVG.create('svg', {
                    width: '53px',
                    height: '60px',
                    'viewBox': '-1 0 28 22'
                });
                var g = veedi_SVG.create('g');
                var g2 = veedi_SVG.create('g');
                var path = veedi_SVG.create('path', {
                    d: SVGVideoimage,
                    fill: '#'+WT_defaults.colors.controls ,
                    id: 'WT_video_svg_path'
                });
                
                g2.appendChild(path);
                g.appendChild(g2);
                svg.appendChild(g);
                return svg;
            },
            
            getSVGcloseBtn: function(){
                var SVGVCloseimage = "M4.2,2.9l1.4-1.4C6,1.2,6,0.6,5.6,0.3c-0.3-0.3-0.9-0.3-1.3,0 L2.9,1.7L1.5,0.3c-0.3-0.3-0.9-0.3-1.3,0c-0.3,0.3-0.3,0.9,0,1.3l1.4,1.4L0.3,4.4c-0.3,0.3-0.3,0.9,0,1.3C0.6,6,1.2,6,1.5,5.6 l1.4-1.4l1.4,1.4C4.7,6,5.3,6,5.6,5.6C6,5.3,6,4.7,5.6,4.4L4.2,2.9z";
                var svg = veedi_SVG.create('svg', {
                    id: 'veediWTbtn-SVGclose',
                    width: '20px',
                    height: '20px',
                    'viewBox': '-2.2 -1.8 10 10'
                });
                var g = veedi_SVG.create('g');
                var g2 = veedi_SVG.create('g');
                var path = veedi_SVG.create('path', {
                    'fill-rule': 'evenodd',
                    'clip-rule': 'evenodd',
                    d: SVGVCloseimage,
                    fill: '#'+WT_defaults.colors.controls,
                    id: 'WT_svg_path'
                });
                
                g2.appendChild(path);
                g.appendChild(g2);
                svg.appendChild(g);
                return svg;
            },
            
            /* Creating DOM elements */
            createDiv: function(id){
                var div = document.createElement('div');
                div.setAttribute('id', id);
                return div;
            },
            
            getTextNode: function(id){
                var p = document.createElement('p');
                p.innerHTML = WT.getText(id);
                p.setAttribute('class','veediWTbtn-text');
                p.setAttribute("id", id);
                return p;
            } ,
            
            getText: function(id){
                var text = "";
                switch(id){
                    case 'veediWTbtn-needHelp':
                        text = WT_defaults.strings.help;
                        break;
                        
                    case 'veediWTbtn-title':
                        text = WT_defaults.strings.name;
                        break;
                        
                    case 'veediWTbtn-text':
                        text = WT_defaults.strings.video;
                        break;   
                }
                return text;
            }
            
  
        };

    /*SVG lib*/
    var veedi_SVG={_NS:"http://www.w3.org/2000/svg",_regexp:{istext:/text|tspan|tref/i,translate:/translate\(([-\d\.]+),?\s*([-\d\.]*?)\)/i,rotate:/rotate\(([\d\.]+),?.*?\)/i,scale:/scale\(([\d\.]+),?.*?\)/i},create:function(e,t){var n=document.createElementNS(veedi_SVG._NS,e);n.create=veedi_SVG.create;n.append=veedi_SVG._append;n.attr=veedi_SVG._attr;n.translate=veedi_SVG._translate;n.scale=veedi_SVG._scale;if(veedi_SVG._regexp.istext.test(e)==false){n.rotate=veedi_SVG._rotate}n.setTransform=function(e){this.attr("transform",e)};n.text=veedi_SVG._text;if(typeof t=="object"){n.attr(t)}return n},_append:function(e,t){if(typeof e=="string"){var n=this.create(e,t);this.append(n);return n}else{this.appendChild(e)}},_text:function(e){e=""+e+"";e=(new DOMParser).parseFromString(e,"application/xhtml+xml").childNodes[0].childNodes[0];this.append(e)},_attr:function(e,t){if(typeof e=="object"){for(key in e){this.setAttribute(key,e[key])}}else if(typeof e=="string"){if(typeof t!="undefined"){this.setAttribute(e,t)}else{return this.getAttribute(e)}}},_translate:function(e,t){var n=veedi_SVG._regexp.translate;var r=null;var i=0;var s=0;var o=this.attr("transform");if(o!=null){var u=n.exec(o);if(u!=null){i=u[1]!=""?parseFloat(u[1]):0;s=u[2]!=""?parseFloat(u[2]):0}}if(typeof e=="number"){if(typeof t!="number"){t=0}r="translate("+e+","+t+")";if(o!=null){if(n.test(o)){r=o.replace(n,r)}else{r=o+" "+r}}this.attr("transform",r)}return{x:i,y:s}},_scale:function(e){var t=veedi_SVG._regexp.scale;var n=null;var r=1;var i=this.attr("transform");if(i!=null){var s=t.exec(i);if(s!=null){r=s[1]!=""?parseFloat(s[1]):1}}if(typeof e=="number"){n="scale("+e+")";if(i!=null){if(t.test(i)){n=i.replace(t,n)}else{n=i+" "+n}}this.attr("transform",n)}return{scale:r}},_rotate:function(e){var t=veedi_SVG._regexp.rotate;var n=null;var r=0;var i=this.attr("transform");if(i!=null){var s=t.exec(i);if(s!=null){r=s[1]!=""?parseFloat(s[1]):0}}if(typeof e=="number"){n="rotate("+e+")";if(i!=null){if(t.test(i)){n=i.replace(t,n)}else{n=i+" "+n}}this.attr("transform",n)}return{angle:r}}};  


    /** smooth-scroll v5.0.0, by Chris Ferdinandi | http://github.com/cferdinandi/smooth-scroll | Licensed under MIT: http://gomakethings.com/mit/ */
    (function(e,t){e.smoothScroll=t(e)})(window,function(e){"use strict";var t={};var n=!!document.querySelector&&!!e.addEventListener;var r;var i={speed:500,easing:"easeInOutCubic",offset:0,updateURL:true,callbackBefore:function(){},callbackAfter:function(){}};var s=function(e,t,n){if(Object.prototype.toString.call(e)==="[object Object]"){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){t.call(n,e[r],r,e)}}}else{for(var i=0,s=e.length;i<s;i++){t.call(n,e[i],i,e)}}};var o=function(e,t){var n={};s(e,function(t,r){n[r]=e[r]});s(t,function(e,r){n[r]=t[r]});return n};var u=function(e,t){var n;if(e==="easeInQuad")n=t*t;if(e==="easeOutQuad")n=t*(2-t);if(e==="easeInOutQuad")n=t<.5?2*t*t:-1+(4-2*t)*t;if(e==="easeInCubic")n=t*t*t;if(e==="easeOutCubic")n=--t*t*t+1;if(e==="easeInOutCubic")n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1;if(e==="easeInQuart")n=t*t*t*t;if(e==="easeOutQuart")n=1- --t*t*t*t;if(e==="easeInOutQuart")n=t<.5?8*t*t*t*t:1-8*--t*t*t*t;if(e==="easeInQuint")n=t*t*t*t*t;if(e==="easeOutQuint")n=1+ --t*t*t*t*t;if(e==="easeInOutQuint")n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t;return n||t};var a=function(e,t,n){var r=0;if(e.offsetParent){do{r+=e.offsetTop;e=e.offsetParent}while(e)}r=r-t-n;return r>=0?r:0};var f=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)};var l=function(e){return!e||!(typeof JSON==="object"&&typeof JSON.parse==="function")?{}:JSON.parse(e)};var c=function(e,t){if(history.pushState&&(t||t==="true")){history.pushState({pos:e.id},"",window.location.pathname+e)}};t.animateScroll=function(t,n,r,s){var h=o(h||i,r||{});var p=l(t?t.getAttribute("data-options"):null);h=o(h,p);var d=document.querySelector("[data-scroll-header]");var v=d===null?0:d.offsetHeight+d.offsetTop;var m=e.pageYOffset;var g=a(document.querySelector(n),v,parseInt(h.offset,10));var y;var b=g-m;var w=f();var E=0;var S,x;if(t&&t.tagName.toLowerCase()==="a"&&s){s.preventDefault()}c(n,h.updateURL);var T=function(r,i,s){var o=e.pageYOffset;if(r==i||o==i||e.innerHeight+o>=w){clearInterval(s);h.callbackAfter(t,n)}};var N=function(){E+=16;S=E/parseInt(h.speed,10);S=S>1?1:S;x=m+b*u(h.easing,S);e.scrollTo(0,Math.floor(x));T(x,g,y)};var C=function(){h.callbackBefore(t,n);y=setInterval(N,16)};if(e.pageYOffset===0){e.scrollTo(0,0)}C()};t.init=function(e){if(!n)return;r=o(i,e||{});var u=document.querySelectorAll("[data-scroll]");s(u,function(e){e.addEventListener("click",t.animateScroll.bind(null,e,e.hash,r),false)})};return t});

};


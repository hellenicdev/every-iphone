/* ══════════════════════ DATA ══════════════════════ */
const CH={Silver:'#A2AAAD',Aluminum:'#A8A9AD',Black:'#1C1C1E',White:'#F5F5F7','Space Gray':'#535150',Gold:'#F5DDC0','Rose Gold':'#E8C4B8','Black & Slate':'#3A3A3C','White & Silver':'#E8E8ED',Blue:'#5BBEE5',Green:'#59C04E',Yellow:'#FBE64D',Pink:'#FE767A','Jet Black':'#0A0A0A',Coral:'#FF6E54',Purple:'#C8B8D9','Midnight Green':'#2F4538','Pacific Blue':'#2E5B8C','Product RED':'#BF0013','(PRODUCT)RED':'#BF0013','PRODUCT(RED)':'#BF0013','Sierra Blue':'#6E8FAE',Midnight:'#2E3133',Starlight:'#FAF6F2','Alpine Green':'#505F4E','Deep Purple':'#5B4C6B',Lavender:'#C9B8D9','Natural Titanium':'#978A7E','Blue Titanium':'#3D4552','White Titanium':'#F2F1ED','Black Titanium':'#3C3B37','Desert Titanium':'#C2A47E',Ultramarine:'#5A6BFF',Teal:'#4E8B8F','Cosmic Orange':'#E8734A','Deep Blue':'#2D3A6B',Sage:'#8FA98C','Mist Blue':'#94B4C4','Space Black':'#2C2C2E','Cloud White':'#F0EDE8','Light Gold':'#E8D5B5','Sky Blue':'#87CEEB','Soft Pink':'#F4C2C2',Red:'#BF0013',Graphite:'#54524F',Bronze:'#C9A96E','Matte Black':'#2C2C2E'};

const P=[
{m:"iPhone",y:2007,p:499,s:3.5,cm:2,cl:1,w:135,t:11.6,h:115,wd:61,c:["Silver"],f:"The first iPhone. Multi-touch, Safari, visual voicemail. iPhone OS 1.0 — no App Store, no copy-paste, no MMS.",r:null,con:"30-pin",bio:null,d:"LCD",bat:1400,cat:"standard",proc:"ARM",ios:"1.0"},
{m:"iPhone 3G",y:2008,p:199,s:3.5,cm:2,cl:1,w:133,t:12.3,h:115.5,wd:62.1,c:["Black","White"],f:"3G, GPS, App Store launched (500 apps day one). iPhone OS 2.0 brought third-party apps.",r:null,con:"30-pin",bio:null,d:"LCD",bat:1150,cat:"standard",proc:"ARM",ios:"2.0"},
{m:"iPhone 3GS",y:2009,p:199,s:3.5,cm:3,cl:1,w:135,t:12.3,h:115.5,wd:62.1,c:["Black","White"],f:"Video recording, voice control, 2× faster. iPhone OS 3.0 added copy-paste, MMS, Spotlight search.",r:null,con:"30-pin",bio:null,d:"LCD",bat:1219,cat:"standard",proc:"Cortex-A8",ios:"3.0"},
{m:"iPhone 4",y:2010,p:199,s:3.5,cm:5,cl:1,w:137,t:9.3,h:115.2,wd:58.6,c:["Black","White"],f:"Retina display. FaceTime. Glass & steel. iOS 4 brought multitasking, folders, and iBooks.",r:null,con:"30-pin",bio:null,d:"Retina LCD",bat:1420,cat:"standard",proc:"A4",ios:"4"},
{m:"iPhone 4S",y:2011,p:199,s:3.5,cm:8,cl:1,w:140,t:9.3,h:115.2,wd:58.6,c:["Black","White"],f:"Siri. 8MP camera. 1080p video. iOS 5 brought iMessage, Notification Center, iCloud.",r:null,con:"30-pin",bio:null,d:"Retina LCD",bat:1432,cat:"standard",proc:"A5",ios:"5"},
{m:"iPhone 5",y:2012,p:199,s:4.0,cm:8,cl:1,w:112,t:7.6,h:123.8,wd:58.6,c:["Black & Slate","White & Silver"],f:"Lightning. 4-inch screen. LTE. iOS 6 brought Apple Maps (infamously bad at launch), Passbook.",r:"30-pin dock connector",con:"Lightning",bio:null,d:"Retina LCD",bat:1440,cat:"standard",proc:"A6",ios:"6"},
{m:"iPhone 5C",y:2013,p:99,s:4.0,cm:8,cl:1,w:132,t:8.97,h:124.4,wd:59.2,c:["White","Blue","Green","Yellow","Pink"],f:"Colorful polycarbonate. Budget iPhone. iOS 7 brought the flat design revolution — love it or hate it.",r:null,con:"Lightning",bio:null,d:"Retina LCD",bat:1510,cat:"budget",proc:"A6",ios:"7"},
{m:"iPhone 5S",y:2013,p:199,s:4.0,cm:8,cl:1,w:112,t:7.6,h:123.8,wd:58.6,c:["Space Gray","Silver","Gold"],f:"Touch ID. 64-bit A7. First gold iPhone. iOS 7's flat design was the biggest visual overhaul in iPhone history.",r:null,con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:1560,cat:"standard",proc:"A7",ios:"7"},
{m:"iPhone 6",y:2014,p:199,s:4.7,cm:8,cl:1,w:129,t:6.9,h:138.1,wd:67,c:["Space Gray","Silver","Gold"],f:"4.7\" screen. Rounded design. Apple Pay. iOS 8 brought HealthKit, widgets, and third-party keyboards.",r:null,con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:1810,cat:"standard",proc:"A8",ios:"8"},
{m:"iPhone 6 Plus",y:2014,p:299,s:5.5,cm:8,cl:1,w:172,t:7.1,h:158.1,wd:77.8,c:["Space Gray","Silver","Gold"],f:"First phablet iPhone. OIS camera. Landscape home screen.",r:null,con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:2915,cat:"plus",proc:"A8",ios:"8"},
{m:"iPhone 6S",y:2015,p:199,s:4.7,cm:12,cl:1,w:143,t:7.18,h:138.3,wd:67.1,c:["Space Gray","Silver","Gold","Rose Gold"],f:"3D Touch. Live Photos. Rose Gold. 12MP. iOS 9 brought proactive Siri and split-screen iPad.",r:null,con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:1715,cat:"standard",proc:"A9",ios:"9"},
{m:"iPhone 6S Plus",y:2015,p:299,s:5.5,cm:12,cl:1,w:192,t:7.18,h:158.2,wd:77.9,c:["Space Gray","Silver","Gold","Rose Gold"],f:"3D Touch. 12MP camera with OIS.",r:null,con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:2750,cat:"plus",proc:"A9",ios:"9"},
{m:"iPhone SE",y:2016,p:399,s:4.0,cm:12,cl:1,w:113,t:7.6,h:123.8,wd:58.6,c:["Space Gray","Silver","Gold","Rose Gold"],f:"iPhone 5S body with 6S internals. For people who loved small phones.",r:null,con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:1624,cat:"se",proc:"A9",ios:"9"},
{m:"iPhone 7",y:2016,p:649,s:4.7,cm:12,cl:1,w:138,t:7.1,h:138.3,wd:67.1,c:["Jet Black","Black","Silver","Gold","Rose Gold","(PRODUCT)RED"],f:"No headphone jack. Water resistant. Stereo speakers. iOS 10 opened up Siri to developers and redesigned Messages. RED edition added March 2017.",r:"Headphone jack",con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:1960,cat:"standard",proc:"A10",ios:"10"},
{m:"iPhone 7 Plus",y:2016,p:769,s:5.5,cm:12,cl:2,w:188,t:7.3,h:158.2,wd:77.9,c:["Jet Black","Black","Silver","Gold","Rose Gold","(PRODUCT)RED"],f:"Dual cameras. Portrait mode — the feature that made everyone a photographer. RED edition added March 2017.",r:"Headphone jack",con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:2900,cat:"plus",proc:"A10",ios:"10"},
{m:"iPhone 8",y:2017,p:699,s:4.7,cm:12,cl:1,w:148,t:7.3,h:138.4,wd:67.3,c:["Space Gray","Silver","Gold","(PRODUCT)RED"],f:"Glass back. Wireless charging. True Tone. iOS 11 brought ARKit, Files app, and a redesigned Control Center. RED edition added April 2018.",r:null,con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:1821,cat:"standard",proc:"A11",ios:"11"},
{m:"iPhone 8 Plus",y:2017,p:799,s:5.5,cm:12,cl:2,w:202,t:7.5,h:158.4,wd:78.1,c:["Space Gray","Silver","Gold","(PRODUCT)RED"],f:"Portrait Lighting. 4K 60fps video. The last Plus with a home button. RED edition added April 2018.",r:null,con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:2691,cat:"plus",proc:"A11",ios:"11"},
{m:"iPhone X",y:2017,p:999,s:5.8,cm:12,cl:2,w:174,t:7.7,h:143.6,wd:70.9,c:["Space Gray","Silver"],f:"Face ID. Edge-to-edge OLED. No home button. Animoji. iOS 11 brought ARKit.",r:"Home button, Touch ID (flagship)",con:"Lightning",bio:"Face ID",d:"OLED",bat:2716,cat:"standard",proc:"A11",ios:"11"},
{m:"iPhone XR",y:2018,p:749,s:6.1,cm:12,cl:1,w:194,t:8.3,h:150.9,wd:75.7,c:["Blue","White","Black","Yellow","Coral","(PRODUCT)RED"],f:"Liquid Retina LCD. Six colors. Affordable Face ID. iOS 12 brought Screen Time and Memoji.",r:"3D Touch",con:"Lightning",bio:"Face ID",d:"LCD",bat:2942,cat:"standard",proc:"A12",ios:"12"},
{m:"iPhone XS",y:2018,p:999,s:5.8,cm:12,cl:2,w:177,t:7.7,h:143.6,wd:70.9,c:["Space Gray","Silver","Gold"],f:"A12 Bionic. Smart HDR. eSIM. Depth control in portraits.",r:null,con:"Lightning",bio:"Face ID",d:"OLED",bat:2658,cat:"standard",proc:"A12",ios:"12"},
{m:"iPhone XS Max",y:2018,p:1099,s:6.5,cm:12,cl:2,w:208,t:7.7,h:157.5,wd:77.4,c:["Space Gray","Silver","Gold"],f:"Largest iPhone ever (at the time). 6.5\" OLED. Dual SIM with eSIM.",r:null,con:"Lightning",bio:"Face ID",d:"OLED",bat:3174,cat:"max",proc:"A12",ios:"12"},
{m:"iPhone 11",y:2019,p:699,s:6.1,cm:12,cl:2,w:194,t:8.3,h:150.9,wd:75.7,c:["Black","Green","Yellow","Purple","(PRODUCT)RED","White"],f:"Ultra-wide camera. Night mode. U1 chip. iOS 13 brought Dark Mode, Sign in with Apple.",r:"3D Touch",con:"Lightning",bio:"Face ID",d:"LCD",bat:3110,cat:"standard",proc:"A13",ios:"13"},
{m:"iPhone 11 Pro",y:2019,p:999,s:5.8,cm:12,cl:3,w:188,t:8.1,h:144,wd:71.4,c:["Midnight Green","Space Gray","Silver","Gold"],f:"Triple camera. Pro naming. Super Retina XDR. First \"Pro\" iPhone.",r:null,con:"Lightning",bio:"Face ID",d:"OLED",bat:3046,cat:"pro",proc:"A13",ios:"13"},
{m:"iPhone 11 Pro Max",y:2019,p:1099,s:6.5,cm:12,cl:3,w:226,t:8.1,h:158,wd:77.8,c:["Midnight Green","Space Gray","Silver","Gold"],f:"5 hrs more battery than XS Max. Deep Fusion computational photography.",r:null,con:"Lightning",bio:"Face ID",d:"OLED",bat:3969,cat:"pro_max",proc:"A13",ios:"13"},
{m:"iPhone SE 2",y:2020,p:399,s:4.7,cm:12,cl:1,w:148,t:7.3,h:138.4,wd:67.3,c:["Black","White","(PRODUCT)RED"],f:"A13 chip in iPhone 8 body. Touch ID during COVID was a selling point.",r:null,con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:1821,cat:"se",proc:"A13",ios:"13"},
{m:"iPhone 12 mini",y:2020,p:729,s:5.4,cm:12,cl:2,w:135,t:7.4,h:131.5,wd:64.2,c:["Black","White","(PRODUCT)RED","Green","Blue","Purple"],f:"Smallest flagship. 5G. OLED. MagSafe. Loved by fans, killed by sales. Purple added April 2021.",r:null,con:"Lightning",bio:"Face ID",d:"OLED",bat:2227,cat:"mini",proc:"A14",ios:"14"},
{m:"iPhone 12",y:2020,p:799,s:6.1,cm:12,cl:2,w:164,t:7.4,h:146.7,wd:71.5,c:["Black","White","(PRODUCT)RED","Green","Blue","Purple"],f:"5G. Flat edges return. No charger in box. iOS 14 brought home screen widgets and App Library. Purple added April 2021.",r:"In-box charger",con:"Lightning",bio:"Face ID",d:"OLED",bat:2815,cat:"standard",proc:"A14",ios:"14"},
{m:"iPhone 12 Pro",y:2020,p:999,s:6.1,cm:12,cl:3,w:189,t:7.4,h:146.7,wd:71.5,c:["Pacific Blue","Gold","Graphite","Silver"],f:"LiDAR scanner. ProRAW. Dolby Vision HDR video recording.",r:null,con:"Lightning",bio:"Face ID",d:"OLED",bat:2815,cat:"pro",proc:"A14",ios:"14"},
{m:"iPhone 12 Pro Max",y:2020,p:1099,s:6.7,cm:12,cl:3,w:228,t:7.4,h:160.8,wd:78.1,c:["Pacific Blue","Gold","Graphite","Silver"],f:"Sensor-shift OIS. Largest screen. The camera phone of choice for filmmakers.",r:null,con:"Lightning",bio:"Face ID",d:"OLED",bat:3687,cat:"pro_max",proc:"A14",ios:"14"},
{m:"iPhone 13 mini",y:2021,p:699,s:5.4,cm:12,cl:2,w:140,t:7.65,h:131.5,wd:64.2,c:["Midnight","Starlight","(PRODUCT)RED","Blue","Pink","Green"],f:"Smaller notch. Cinematic mode. The last mini iPhone — RIP small phones. Green added March 2022.",r:null,con:"Lightning",bio:"Face ID",d:"OLED",bat:2406,cat:"mini",proc:"A15",ios:"15"},
{m:"iPhone 13",y:2021,p:799,s:6.1,cm:12,cl:2,w:174,t:7.65,h:146.7,wd:71.5,c:["Midnight","Starlight","(PRODUCT)RED","Blue","Pink","Green"],f:"Smaller notch. Cinematic video. iOS 15 brought Focus modes and SharePlay. Green added March 2022.",r:null,con:"Lightning",bio:"Face ID",d:"OLED",bat:3227,cat:"standard",proc:"A15",ios:"15"},
{m:"iPhone 13 Pro",y:2021,p:999,s:6.1,cm:12,cl:3,w:204,t:7.65,h:146.7,wd:71.5,c:["Sierra Blue","Silver","Gold","Graphite","Alpine Green"],f:"ProMotion 120Hz finally comes to iPhone. Macro photography. 1TB option. Alpine Green added March 2022.",r:null,con:"Lightning",bio:"Face ID",d:"OLED 120Hz",bat:3095,cat:"pro",proc:"A15",ios:"15"},
{m:"iPhone 13 Pro Max",y:2021,p:1099,s:6.7,cm:12,cl:3,w:240,t:7.65,h:160.8,wd:78.1,c:["Sierra Blue","Silver","Gold","Graphite","Alpine Green"],f:"Longest battery ever in an iPhone. 28 hrs video playback. Alpine Green added March 2022.",r:null,con:"Lightning",bio:"Face ID",d:"OLED 120Hz",bat:4352,cat:"pro_max",proc:"A15",ios:"15"},
{m:"iPhone SE 3",y:2022,p:429,s:4.7,cm:12,cl:1,w:144,t:7.3,h:138.4,wd:67.3,c:["Midnight","Starlight","(PRODUCT)RED"],f:"A15. 5G. Cheapest 5G iPhone. Last iPhone with a home button.",r:null,con:"Lightning",bio:"Touch ID",d:"Retina LCD",bat:2018,cat:"se",proc:"A15",ios:"15"},
{m:"iPhone 14",y:2022,p:799,s:6.1,cm:12,cl:2,w:172,t:7.8,h:146.7,wd:71.5,c:["Midnight","Starlight","(PRODUCT)RED","Blue","Purple","Yellow"],f:"Crash Detection. Emergency SOS via satellite. iOS 16 brought customizable Lock Screen. Yellow added March 2023.",r:"SIM tray (US)",con:"Lightning",bio:"Face ID",d:"OLED",bat:3279,cat:"standard",proc:"A15",ios:"16"},
{m:"iPhone 14 Plus",y:2022,p:899,s:6.7,cm:12,cl:2,w:203,t:7.8,h:160.8,wd:78.1,c:["Midnight","Starlight","(PRODUCT)RED","Blue","Purple","Yellow"],f:"Big screen without Pro price. Replaced the mini. Yellow added March 2023.",r:null,con:"Lightning",bio:"Face ID",d:"OLED",bat:4325,cat:"plus",proc:"A15",ios:"16"},
{m:"iPhone 14 Pro",y:2022,p:999,s:6.1,cm:48,cl:3,w:206,t:7.85,h:147.5,wd:71.5,c:["Deep Purple","Gold","Silver","Space Black"],f:"Dynamic Island. 48MP (4× jump). Always-On display. Action mode video.",r:"Notch",con:"Lightning",bio:"Face ID",d:"OLED 120Hz",bat:3200,cat:"pro",proc:"A16",ios:"16"},
{m:"iPhone 14 Pro Max",y:2022,p:1099,s:6.7,cm:48,cl:3,w:240,t:7.85,h:160.7,wd:77.6,c:["Deep Purple","Gold","Silver","Space Black"],f:"Dynamic Island. 48MP. Best-in-class battery life.",r:"Notch",con:"Lightning",bio:"Face ID",d:"OLED 120Hz",bat:4323,cat:"pro_max",proc:"A16",ios:"16"},
{m:"iPhone 15",y:2023,p:799,s:6.1,cm:48,cl:2,w:171,t:7.8,h:147.6,wd:71.6,c:["Pink","Yellow","Green","Blue","Black"],f:"USB-C finally. Dynamic Island for all. 48MP main camera. iOS 17 brought StandBy mode.",r:"Lightning port",con:"USB-C",bio:"Face ID",d:"OLED",bat:3349,cat:"standard",proc:"A16",ios:"17"},
{m:"iPhone 15 Plus",y:2023,p:899,s:6.7,cm:48,cl:2,w:201,t:7.8,h:160.9,wd:77.8,c:["Pink","Yellow","Green","Blue","Black"],f:"USB-C. Big screen. All-day battery. NameDrop with iOS 17.",r:"Lightning port",con:"USB-C",bio:"Face ID",d:"OLED",bat:4383,cat:"plus",proc:"A16",ios:"17"},
{m:"iPhone 15 Pro",y:2023,p:999,s:6.1,cm:48,cl:3,w:187,t:8.25,h:146.6,wd:70.6,c:["Natural Titanium","Blue Titanium","White Titanium","Black Titanium"],f:"Titanium frame. Action Button replaces mute switch. USB 3 speeds. Spatial Video.",r:"Mute switch, stainless steel",con:"USB-C",bio:"Face ID",d:"OLED 120Hz",bat:3274,cat:"pro",proc:"A17 Pro",ios:"17"},
{m:"iPhone 15 Pro Max",y:2023,p:1199,s:6.7,cm:48,cl:3,w:221,t:8.25,h:159.9,wd:76.7,c:["Natural Titanium","Blue Titanium","White Titanium","Black Titanium"],f:"5× optical zoom (tetraprism lens). Lightest Pro Max ever. 25% lighter than 14 Pro Max.",r:"Mute switch",con:"USB-C",bio:"Face ID",d:"OLED 120Hz",bat:4422,cat:"pro_max",proc:"A17 Pro",ios:"17"},
{m:"iPhone 16",y:2024,p:799,s:6.1,cm:48,cl:2,w:170,t:7.8,h:147.6,wd:71.6,c:["Ultramarine","Teal","Pink","White","Black"],f:"Camera Control button. Apple Intelligence. iOS 18 brought RCS and home screen customization.",r:null,con:"USB-C",bio:"Face ID",d:"OLED",bat:3561,cat:"standard",proc:"A18",ios:"18"},
{m:"iPhone 16 Plus",y:2024,p:899,s:6.7,cm:48,cl:2,w:199,t:7.8,h:160.9,wd:77.8,c:["Ultramarine","Teal","Pink","White","Black"],f:"Camera Control. Bigger battery. Apple Intelligence on the big screen.",r:null,con:"USB-C",bio:"Face ID",d:"OLED",bat:4674,cat:"plus",proc:"A18",ios:"18"},
{m:"iPhone 16 Pro",y:2024,p:999,s:6.3,cm:48,cl:3,w:199,t:8.25,h:149.6,wd:71.5,c:["Desert Titanium","Natural Titanium","White Titanium","Black Titanium"],f:"A18 Pro. 4K 120fps video. Camera Control. Thinnest bezels on any phone.",r:null,con:"USB-C",bio:"Face ID",d:"OLED 120Hz",bat:3582,cat:"pro",proc:"A18 Pro",ios:"18"},
{m:"iPhone 16 Pro Max",y:2024,p:1199,s:6.9,cm:48,cl:3,w:227,t:8.25,h:163,wd:77.6,c:["Desert Titanium","Natural Titanium","White Titanium","Black Titanium"],f:"Largest iPhone ever. 6.9\". 4K Dolby Vision 120fps. Visual Intelligence.",r:null,con:"USB-C",bio:"Face ID",d:"OLED 120Hz",bat:4685,cat:"pro_max",proc:"A18 Pro",ios:"18"},
{m:"iPhone 16e",y:2025,p:599,s:6.1,cm:48,cl:1,w:163,t:7.25,h:147.7,wd:71.5,c:["Black","White"],f:"A18. Apple Intelligence. First Apple-designed 5G modem (C1). Edge-to-edge OLED.",r:"Home button (gone from SE line)",con:"USB-C",bio:"Face ID",d:"OLED",bat:3831,cat:"se",proc:"A18",ios:"18"},
{m:"iPhone 17",y:2025,p:799,s:6.3,cm:48,cl:2,w:180,t:7.25,h:148,wd:71,c:["Lavender","Sage","Mist Blue","White","Black"],f:"ProMotion 120Hz for all. 24MP front camera. iOS 19 with on-device AI.",r:null,con:"USB-C",bio:"Face ID",d:"OLED 120Hz",bat:3692,cat:"standard",proc:"A19",ios:"19"},
{m:"iPhone Air",y:2025,p:999,s:6.6,cm:48,cl:1,w:165,t:5.6,h:155,wd:71,c:["Space Black","Cloud White","Light Gold","Sky Blue"],f:"Thinnest ever (5.6mm). Entirely new category between standard and Pro.",r:null,con:"USB-C",bio:"Face ID",d:"OLED 120Hz",bat:3149,cat:"air",proc:"A19 Pro",ios:"19"},
{m:"iPhone 17 Pro",y:2025,p:1099,s:6.3,cm:48,cl:3,w:206,t:8.75,h:150,wd:71.9,c:["Cosmic Orange","Deep Blue","Silver"],f:"Aluminum replaces titanium. Vapor chamber cooling. Cosmic Orange is a first.",r:"Titanium frame",con:"USB-C",bio:"Face ID",d:"OLED 120Hz",bat:3988,cat:"pro",proc:"A19 Pro",ios:"19"},
{m:"iPhone 17 Pro Max",y:2025,p:1199,s:6.9,cm:48,cl:3,w:233,t:8.75,h:163.4,wd:78,c:["Cosmic Orange","Deep Blue","Silver"],f:"2TB storage option. 5088mAh battery. 40W wired + 25W MagSafe charging.",r:"Titanium frame",con:"USB-C",bio:"Face ID",d:"OLED 120Hz",bat:5088,cat:"pro_max",proc:"A19 Pro",ios:"19"},
{m:"iPhone 17e",y:2026,p:599,s:6.1,cm:48,cl:1,w:169,t:7.8,h:148,wd:71,c:["Black","White","Soft Pink"],f:"A19 in budget model. 256GB base storage. Apple Intelligence for everyone.",r:null,con:"USB-C",bio:"Face ID",d:"OLED",bat:4005,cat:"se",proc:"A19",ios:"19"}
];

/* ── Image map: model identifiers for iCloud CDN ── */
const ADB='https://img.appledb.dev/device@main/';
const STORE='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/';
const IMG={
  'iPhone':ADB+'iPhone1,1/0.png',
  'iPhone 3G':ADB+'iPhone1,2/0.png',
  'iPhone 3GS':ADB+'iPhone2,1/0.png',
  'iPhone 4':ADB+'iPhone3,1/0.png',
  'iPhone 4S':ADB+'iPhone4,1/0.png',
  'iPhone 5':ADB+'iPhone5,1/0.png',
  'iPhone 5C':ADB+'iPhone5,3/Blue.png',
  'iPhone 5S':ADB+'iPhone6,1/Space%20Gray.png',
  'iPhone 6':ADB+'iPhone7,2/Space%20Gray.png',
  'iPhone 6 Plus':ADB+'iPhone7,1/Space%20Gray.png',
  'iPhone 6S':ADB+'iPhone8,1/Space%20Gray.png',
  'iPhone 6S Plus':ADB+'iPhone8,2/Space%20Gray.png',
  'iPhone SE':ADB+'iPhone8,4/Space%20Gray.png',
  'iPhone 7':ADB+'iPhone9,1/Black.png',
  'iPhone 7 Plus':ADB+'iPhone9,2/Black.png',
  'iPhone 8':ADB+'iPhone10,1/Space%20Gray.png',
  'iPhone 8 Plus':ADB+'iPhone10,2/Space%20Gray.png',
  'iPhone X':ADB+'iPhone10,3/Space%20Gray.png',
  'iPhone XR':ADB+'iPhone11,8/Black.png',
  'iPhone XS':ADB+'iPhone11,2/Space%20Gray.png',
  'iPhone XS Max':ADB+'iPhone11,6/Space%20Gray.png',
  'iPhone 11':ADB+'iPhone12,1/Black.png',
  'iPhone 11 Pro':ADB+'iPhone12,3/Midnight%20Green.png',
  'iPhone 11 Pro Max':ADB+'iPhone12,5/Midnight%20Green.png',
  'iPhone SE 2':ADB+'iPhone12,8/Black.png',
  'iPhone 12 mini':ADB+'iPhone13,1/Black.png',
  'iPhone 12':ADB+'iPhone13,2/Black.png',
  'iPhone 12 Pro':ADB+'iPhone13,3/Pacific%20Blue.png',
  'iPhone 12 Pro Max':ADB+'iPhone13,4/Pacific%20Blue.png',
  'iPhone 13 mini':ADB+'iPhone14,4/Midnight.png',
  'iPhone 13':ADB+'iPhone14,5/Midnight.png',
  'iPhone 13 Pro':ADB+'iPhone14,2/Sierra%20Blue.png',
  'iPhone 13 Pro Max':ADB+'iPhone14,3/Sierra%20Blue.png',
  'iPhone SE 3':ADB+'iPhone14,6/Midnight.png',
  'iPhone 14':ADB+'iPhone14,7/Midnight.png',
  'iPhone 14 Plus':ADB+'iPhone14,8/Midnight.png',
  'iPhone 14 Pro':ADB+'iPhone15,2/Deep%20Purple.png',
  'iPhone 14 Pro Max':ADB+'iPhone15,3/Deep%20Purple.png',
  'iPhone 15':ADB+'iPhone15,4/Black.png',
  'iPhone 15 Plus':ADB+'iPhone15,5/Black.png',
  'iPhone 15 Pro':ADB+'iPhone16,1/Black%20Titanium.png',
  'iPhone 15 Pro Max':ADB+'iPhone16,2/Black%20Titanium.png',
  'iPhone 16':ADB+'iPhone17,3/Black.png',
  'iPhone 16 Plus':ADB+'iPhone17,4/Black.png',
  'iPhone 16 Pro':ADB+'iPhone17,1/Black%20Titanium.png',
  'iPhone 16 Pro Max':ADB+'iPhone17,2/Black%20Titanium.png',
  'iPhone 16e':ADB+'iPhone17,5/Black.png',
  'iPhone 17':ADB+'iPhone18,3/Mist%20Blue.png',
  'iPhone Air':ADB+'iPhone18,4/Space%20Black.png',
  'iPhone 17 Pro':ADB+'iPhone18,1/Cosmic%20Orange.png',
  'iPhone 17 Pro Max':ADB+'iPhone18,1/Cosmic%20Orange.png',
  'iPhone 17e':ADB+'iPhone17,5/White.png',
};

/* Apple Store CDN — finish-select images (shows back with color visible) */
const ACDN='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/';
const ACDN_Q='?wid=800&hei=800&fmt=png-alpha';
function normalizeColor(c){return c.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()}
// Model → [slug, date, screenSize(or null for new pattern)]
const FINISH_MAP={
  'iPhone 14':['iphone-14','202209','6-1inch'],
  'iPhone 14 Plus':['iphone-14-plus','202209','6-7inch'],
  'iPhone 14 Pro':['iphone-14-pro','202209','6-1inch'],
  'iPhone 14 Pro Max':['iphone-14-pro-max','202209','6-7inch'],
  'iPhone 15':['iphone-15','202309','6-1inch'],
  'iPhone 15 Plus':['iphone-15-plus','202309','6-7inch'],
  'iPhone 15 Pro':['iphone-15-pro','202309','6-1inch'],
  'iPhone 15 Pro Max':['iphone-15-pro-max','202309','6-7inch'],
  'iPhone 16':['iphone-16','202409','6-1inch'],
  'iPhone 16 Plus':['iphone-16-plus','202409','6-7inch'],
  'iPhone 16 Pro':['iphone-16-pro','202409','6-3inch'],
  'iPhone 16 Pro Max':['iphone-16-pro-max','202409','6-9inch'],
  'iPhone 16e':['iphone-16e','202502',null],
  'iPhone 17':['iphone-17','202509',null],
  'iPhone Air':['iphone-air','202509',null],
  'iPhone 17 Pro':['iphone-17-pro','202509',null],
  'iPhone 17 Pro Max':['iphone-17-pro-max','202509',null],
  'iPhone 17e':['iphone-17e','202603',null],
};
function getFinishUrl(model,color){
  const entry=FINISH_MAP[model];
  if(!entry)return null;
  const [slug,date,screen]=entry;
  const c=normalizeColor(color);
  // Old pattern (14-16): slug-finish-select-date-screen-color
  // New pattern (16e+): slug-finish-select-color-date
  if(screen) return ACDN+slug+'-finish-select-'+date+'-'+screen+'-'+c+ACDN_Q;
  return ACDN+slug+'-finish-select-'+c+'-'+date+ACDN_Q;
}

/* Silhouette config for old models */
const SIL_CFG={
  'iPhone':{w:42,h:80,r:12,bezel:10,tb:30,sr:1,home:true},
  'iPhone 3G':{w:43,h:80,r:14,bezel:10,tb:30,sr:1,home:true},
  'iPhone 3GS':{w:43,h:80,r:14,bezel:10,tb:30,sr:1,home:true},
  'iPhone 4':{w:40,h:80,r:8,bezel:6,tb:28,sr:1,home:true},
  'iPhone 4S':{w:40,h:80,r:8,bezel:6,tb:28,sr:1,home:true},
  'iPhone 5':{w:40,h:88,r:8,bezel:6,tb:24,sr:2,home:true},
  'iPhone 5C':{w:40,h:88,r:10,bezel:6,tb:24,sr:2,home:true},
  'iPhone 5S':{w:40,h:88,r:8,bezel:6,tb:24,sr:2,home:true},
  'iPhone 6':{w:46,h:96,r:12,bezel:5,tb:22,sr:3,home:true},
  'iPhone 6 Plus':{w:54,h:110,r:12,bezel:5,tb:22,sr:3,home:true},
  'iPhone 6S':{w:46,h:96,r:12,bezel:5,tb:22,sr:3,home:true},
  'iPhone 6S Plus':{w:54,h:110,r:12,bezel:5,tb:22,sr:3,home:true},
  'iPhone SE':{w:40,h:86,r:8,bezel:6,tb:24,sr:2,home:true},
  'iPhone 16e':{w:48,h:102,r:16,bezel:3,tb:5,sr:14,home:false},
  'iPhone 17':{w:48,h:104,r:16,bezel:3,tb:5,sr:14,home:false},
  'iPhone Air':{w:48,h:110,r:18,bezel:3,tb:5,sr:16,home:false},
  'iPhone 17 Pro':{w:48,h:104,r:16,bezel:3,tb:5,sr:14,home:false},
  'iPhone 17 Pro Max':{w:54,h:114,r:18,bezel:3,tb:5,sr:16,home:false},
  'iPhone 17e':{w:48,h:102,r:16,bezel:3,tb:5,sr:14,home:false},
};

/* ── Milestones ── */
const MS=[
  {i:0,yr:2007,h:"Hello",desc:"January 9, 2007. Steve Jobs walked on stage and changed everything. A widescreen iPod. A revolutionary phone. A breakthrough internet device. It was all one device. No keyboard. No stylus. Just your finger and a 3.5-inch screen.",specs:[["3.5\"","Screen"],["$499","Price"],["2 MP","Camera"]],
   extra:[["6.1M","Units sold (year 1)"],["iOS 1.0","No App Store yet"]],cultural:"People camped outside Apple Stores for days. The smartphone era began."},
  {i:3,yr:2010,h:"Retina",desc:"326 PPI — where your eye can't distinguish individual pixels. The iPhone 4 crossed that line. Glass on both sides. FaceTime. And a design so iconic, Apple brought it back a decade later.",specs:[["326","PPI"],["5 MP","Camera"],["Glass","Both sides"]],
   extra:[["73.5M","iPhones sold that year"],["iOS 4","Multitasking, folders"]],cultural:"\"You're holding it wrong.\" Antennagate dominated headlines. Apple gave out free bumper cases."},
  {i:7,yr:2013,h:"Touch ID",desc:"Your fingerprint became your password. The 5S also brought the first 64-bit chip in any smartphone, and something no one expected: Gold. Suddenly, everyone wanted the gold iPhone.",specs:[["64-bit","A7 chip"],["Touch ID","Fingerprint"],["Gold","New color"]],
   extra:[["150M","iPhones sold"],["1M+","Apps in App Store"]],cultural:"iOS 7 flat redesign was polarizing — millions said Apple \"ruined\" their phone. They got over it."},
  {i:8,yr:2014,h:"Bigger",desc:"Apple caved. The iPhone 6 went to 4.7\", and the 6 Plus — 5.5\". Overnight, the phone you held with one hand became the phone you held with two. It became Apple's best-selling iPhone ever.",specs:[["4.7\"","& 5.5\""],["NFC","Apple Pay"],["231M","Sold"]],
   extra:[["231M","Record year for iPhone"],["iOS 8","HealthKit, Widgets"]],cultural:"Bendgate: people tried bending iPhones in Apple Stores. Apple said only 9 complaints out of 10 million sold."},
  {i:13,yr:2016,h:"Courage",desc:"\"Courage. The courage to move on and do something new that betters all of us.\" Phil Schiller said it with a straight face. The internet lost its mind. The dongle era began. Two years later — everyone had wireless earbuds.",specs:[["IP67","Waterproof"],["Stereo","Speakers"],["No","Jack"]],
   extra:[["211M","iPhones sold"],["iOS 10","iMessage apps"]],cultural:"AirPods launched — mocked as \"toothbrush heads.\" Became Apple's most popular accessory ever."},
  {i:17,yr:2017,h:"X",desc:"Home button — gone. Bezels — gone. Touch ID — gone. In its place: Face ID, OLED edge-to-edge, and gesture navigation. The most radical reimagining since the original. It also broke a barrier: $999 for a phone.",specs:[["5.8\"","All-screen"],["Face ID","New"],["$999","New era"]],
   extra:[["216M","iPhones sold"],["iOS 11","ARKit, Files app"]],cultural:"\"The notch\" became the internet's favorite joke. Every Android copied it within 6 months."},
  {i:26,yr:2020,h:"Flat",desc:"Remember the iPhone 5's flat edges? They're back. The iPhone 12 brought 5G, Ceramic Shield, MagSafe, and OLED to every model. Oh, and no charger in the box. 1.4 billion charging bricks said otherwise.",specs:[["5G","Finally"],["MagSafe","Snap"],["No","Charger"]],
   extra:[["200M+","iPhones sold"],["iOS 14","Home screen widgets"]],cultural:"COVID era: Apple added Unlock with Apple Watch since Face ID couldn't see through masks."},
  {i:36,yr:2022,h:"Island",desc:"The notch was dead. In its place: the Dynamic Island — a pill-shaped cutout that expanded, contracted, and breathed with your notifications. Apple turned a hardware limitation into a feature. 48MP camera. Always-On display.",specs:[["48 MP","Camera"],["Island","Living UI"],["Always","On"]],
   extra:[["232M","iPhones sold"],["iOS 16","Lock Screen custom."]],cultural:"Crash Detection called 911 on rollercoasters. Apple had to update the algorithm."},
  {i:38,yr:2023,h:"Finally",desc:"For 11 years, one cable ruled iPhone. Lightning — Apple's proprietary connector that spawned a billion third-party cables. Then the EU said: enough. iPhone 15 switched to USB-C. One cable for everything.",specs:[["USB-C","One cable"],["Titanium","Frame"],["5×","Zoom"]],
   extra:[["234M","iPhones sold"],["iOS 17","StandBy, NameDrop"]],cultural:"Lightning's death was celebrated with memes. Apple made $5B+ from Lightning licensing over its lifetime."},
  {i:42,yr:2024,h:"Intelligence",desc:"Apple Intelligence. Two words that meant the iPhone was now an AI device. Camera Control — a new physical button. Visual Intelligence — point your camera at anything and understand it. Genmoji. Writing Tools.",specs:[["A18","AI chip"],["Camera","Control"],["Visual","Intelligence"]],
   extra:[["232M","iPhones sold (est.)"],["iOS 18","Apple Intelligence"]],cultural:"Siri got a ChatGPT upgrade. \"Hey Siri\" became useful for the first time in years."},
  {i:48,yr:2025,h:"Air",desc:"5.6 millimeters. Thinner than a pencil. Apple created an entirely new category — iPhone Air. Meanwhile, the Pro traded titanium for aluminum with vapor chamber cooling. 2TB of storage.",specs:[["5.6mm","Thinnest ever"],["2 TB","Pro Max"],["New","Category"]],
   extra:[["4","New models at once"],["iOS 19","On-device AI"]],cultural:"The thinnest iPhone sparked debate: is thin still a feature or just a flex?"},
];

/* ── Graveyard ── */
const GV=[
  {n:"30-pin dock connector",yr:"2007 – 2012",cause:"Replaced by Lightning"},
  {n:"Headphone jack",yr:"2007 – 2016",cause:"\"Courage\" — iPhone 7"},
  {n:"Home button",yr:"2007 – 2017",cause:"Replaced by gestures — iPhone X"},
  {n:"3D Touch",yr:"2015 – 2019",cause:"Replaced by Haptic Touch"},
  {n:"In-box charger",yr:"2007 – 2020",cause:"\"Environmental reasons\" — iPhone 12"},
  {n:"SIM card tray",yr:"2007 – 2022",cause:"eSIM only (US) — iPhone 14"},
  {n:"Lightning",yr:"2012 – 2023",cause:"EU regulation → USB-C — iPhone 15"},
  {n:"Titanium frame",yr:"2023 – 2024",cause:"Back to aluminum — iPhone 17 Pro"},
];

/* ══════════════════════ BUILD ══════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  buildParade();buildMilestones();buildPrice();buildGraveyard();buildColors();buildExplorer();
  setupObservers();setupPanel();
  // Hero image fallback
  document.getElementById('heroImg').onerror=function(){this.style.display='none'};
});

/* ── Parade ── */
function buildParade(){
  const track=document.getElementById('paradeTrack');
  const scale=p=>Math.round((p.h||p.s*25)*1.6); // physical height mm → pixels
  P.forEach(p=>{
    const phoneH=scale(p);
    const el=document.createElement('div');
    el.className='parade-item';
    el.dataset.idx=String(P.indexOf(p));
    const imgUrl=IMG[p.m];
    let phoneHTML;
    if(imgUrl){
      phoneHTML=`<div class="parade-phone"><img src="${imgUrl}" alt="${p.m}" style="--phone-h:${phoneH}px" loading="lazy" onerror="this.style.opacity='0.15'"></div>`;
    } else {
      phoneHTML=`<div class="parade-phone">${makeSilHTML(p.m,phoneH)}</div>`;
    }
    el.innerHTML=`${phoneHTML}<div class="parade-meta"><div class="parade-model">${p.m.replace('iPhone ','')}</div><div class="parade-year">${p.y}</div><div class="parade-screen">${p.s}"</div></div>`;
    track.appendChild(el);
  });
}

function makeSilHTML(model,targetH){
  const cfg=SIL_CFG[model];
  if(!cfg){
    const w=Math.round(targetH*.48);
    return `<div class="parade-silhouette" style="--sil-w:${w}px;--sil-h:${targetH}px;--sil-r:${Math.round(targetH*.1)}px;--sil-bezel:3px;--sil-bezel-tb:${Math.round(targetH*.04)}px;--sil-sr:${Math.round(targetH*.06)}px"><div class="sil-screen"></div></div>`;
  }
  // Scale config to match target height
  const sc=targetH/cfg.h;
  return `<div class="parade-silhouette" style="--sil-w:${Math.round(cfg.w*sc)}px;--sil-h:${targetH}px;--sil-r:${Math.round(cfg.r*sc)}px;--sil-bezel:${Math.round(cfg.bezel*sc)}px;--sil-bezel-tb:${Math.round(cfg.tb*sc)}px;--sil-sr:${Math.round(cfg.sr*sc)}px"><div class="sil-screen"></div>${cfg.home?'<div class="sil-home"></div>':''}</div>`;
}

/* ── Scrollytelling ── */
function buildMilestones(){
  const stepsCol=document.getElementById('scrollySteps');
  MS.forEach((ms,idx)=>{
    const p=P[ms.i];
    const step=document.createElement('div');
    step.className='scrolly-step';
    step.dataset.index=idx;
    step.innerHTML=`
      <div class="scrolly-step-label">${ms.yr}</div>
      <h3 class="scrolly-step-headline">${ms.h}</h3>
      <p class="scrolly-step-desc">${ms.desc}</p>
      <div class="scrolly-step-specs">${ms.specs.map(s=>`<div><div class="scrolly-spec-val">${s[0]}</div><div class="scrolly-spec-lbl">${s[1]}</div></div>`).join('')}</div>
      ${ms.extra?`<div class="scrolly-step-extra">${ms.extra.map(e=>`<div class="scrolly-extra-item"><div class="scrolly-extra-val">${e[0]}</div><div class="scrolly-extra-lbl">${e[1]}</div></div>`).join('')}</div>`:''}
      ${ms.cultural?`<div class="scrolly-step-cultural">${ms.cultural}</div>`:''}
    `;
    stepsCol.appendChild(step);
  });

  // Set initial phone image
  updateScrollyPhone(0);
}

function updateScrollyPhone(idx){
  const ms=MS[idx];
  const p=P[ms.i];
  const wrap=document.getElementById('scrollyPhoneWrap');
  const imgUrl=IMG[p.m];
  if(imgUrl){
    wrap.innerHTML=`<img src="${imgUrl}" alt="${p.m}" style="max-height:50vh;width:auto;object-fit:contain;filter:drop-shadow(0 20px 60px rgba(0,0,0,.4))">`;
  } else {
    const cfg=SIL_CFG[p.m];
    const sc=3;
    if(cfg) wrap.innerHTML=`<div class="parade-silhouette" style="--sil-w:${cfg.w*sc}px;--sil-h:${cfg.h*sc}px;--sil-r:${cfg.r*sc}px;--sil-bezel:${cfg.bezel*sc}px;--sil-bezel-tb:${cfg.tb*sc}px;--sil-sr:${cfg.sr*sc}px"><div class="sil-screen"></div>${cfg.home?'<div class="sil-home" style="width:42px;height:42px;bottom:15px"></div>':''}</div>`;
    else wrap.innerHTML='';
  }
  document.getElementById('scrollyYear').textContent=p.y;
  document.getElementById('scrollyModel').textContent=p.m;
}

/* ── Price chart ── */
function buildPrice(){
  const wrap=document.getElementById('priceChartWrap');
  wrap.style.position='relative';
  const W=900,H=380,pl=56,pr=20,pt=24,pb=36;
  const cW=W-pl-pr,cH=H-pt-pb;
  const years=[...new Set(P.map(p=>p.y))].sort((a,b)=>a-b);
  const minY=2007,maxY=2026,maxP=1300;
  const x=yr=>pl+((yr-minY)/(maxY-minY))*cW;
  const y=pr=>pt+cH-(Math.min(pr,maxP)/maxP)*cH;

  const basePrices=years.map(yr=>{const m=P.filter(p=>p.y===yr);return{yr,p:Math.min(...m.map(p=>p.p))}});
  const topPrices=years.map(yr=>{const m=P.filter(p=>p.y===yr);return{yr,p:Math.max(...m.map(p=>p.p))}});
  const line=pts=>pts.map((d,i)=>`${i?'L':'M'}${x(d.yr).toFixed(1)},${y(d.p).toFixed(1)}`).join(' ');
  const area=line(basePrices)+topPrices.slice().reverse().map(d=>`L${x(d.yr).toFixed(1)},${y(d.p).toFixed(1)}`).join('')+'Z';

  const yLabels=[0,400,800,1200].map(v=>`<text x="${pl-8}" y="${y(v)+4}" class="price-note" text-anchor="end">$${v}</text><line x1="${pl}" y1="${y(v)}" x2="${W-pr}" y2="${y(v)}" stroke="rgba(255,255,255,.04)"/>`).join('');
  const xLabels=years.filter(yr=>yr%2===1||yr===2008).map(yr=>`<text x="${x(yr)}" y="${H-10}" class="price-note" text-anchor="middle">${yr}</text>`).join('');

  const ann=[{yr:2007,p:499,l:"$499"},{yr:2017,p:999,l:"$999"},{yr:2024,p:1199,l:"$1,199"}];
  const dots=ann.map(a=>`<circle cx="${x(a.yr)}" cy="${y(a.p)}" r="3.5" fill="#fff"/><text x="${x(a.yr)}" y="${y(a.p)-12}" class="price-val" text-anchor="middle">${a.l}</text>`).join('');

  // Invisible hover zones for each year
  const hoverZones=years.map(yr=>{
    const zoneW=cW/years.length;
    return`<rect x="${x(yr)-zoneW/2}" y="${pt}" width="${zoneW}" height="${cH}" fill="transparent" class="price-zone" data-yr="${yr}" style="cursor:pointer"/>`;
  }).join('');

  // Hover elements
  const hoverEls=`<line id="pHoverLine" x1="0" y1="${pt}" x2="0" y2="${pt+cH}" class="price-hover-line" style="display:none"/><circle id="pHoverDotBase" r="4" class="price-hover-dot" style="display:none"/><circle id="pHoverDotMax" r="4" class="price-hover-dot-max" style="display:none"/>`;

  wrap.innerHTML=`<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" id="priceSvg"><defs><linearGradient id="pGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(0,102,204,.15)"/><stop offset="100%" stop-color="rgba(0,102,204,0)"/></linearGradient></defs>${yLabels}${xLabels}<path d="${area}" class="price-area" id="pArea"/><path d="${line(basePrices)}" class="price-line-base" id="pLineBase"/><path d="${line(topPrices)}" class="price-line-max" id="pLineMax"/>${dots}${hoverEls}${hoverZones}</svg><div class="price-tooltip" id="priceTooltip"></div>`;

  // Price chart interactivity
  const svg=document.getElementById('priceSvg');
  const tooltip=document.getElementById('priceTooltip');
  const hLine=document.getElementById('pHoverLine');
  const hDotBase=document.getElementById('pHoverDotBase');
  const hDotMax=document.getElementById('pHoverDotMax');

  svg.querySelectorAll('.price-zone').forEach(zone=>{
    zone.addEventListener('mouseenter',function(){
      const yr=+this.dataset.yr;
      const models=P.filter(p=>p.y===yr);
      const baseP=Math.min(...models.map(p=>p.p));
      const maxP_=Math.max(...models.map(p=>p.p));
      const cx=x(yr);

      hLine.setAttribute('x1',cx);hLine.setAttribute('x2',cx);hLine.style.display='';
      hDotBase.setAttribute('cx',cx);hDotBase.setAttribute('cy',y(baseP));hDotBase.style.display='';
      hDotMax.setAttribute('cx',cx);hDotMax.setAttribute('cy',y(maxP_));hDotMax.style.display='';

      const cheapest=models.reduce((a,b)=>a.p<b.p?a:b);
      const priciest=models.reduce((a,b)=>a.p>b.p?a:b);
      let rows=`<div class="price-tooltip-row"><span>${cheapest.m}</span><span>$${cheapest.p}</span></div>`;
      if(cheapest.m!==priciest.m) rows+=`<div class="price-tooltip-row"><span>${priciest.m}</span><span>$${priciest.p}</span></div>`;
      if(models.length>2) rows+=`<div class="price-tooltip-row" style="color:var(--gray-dim)"><span>${models.length} models total</span><span></span></div>`;

      tooltip.innerHTML=`<div class="price-tooltip-year">${yr}</div><div class="price-tooltip-models">${rows}</div>`;
      tooltip.style.opacity='1';

      // Position tooltip
      const rect=wrap.getBoundingClientRect();
      const svgRect=svg.getBoundingClientRect();
      const pxX=(cx/W)*svgRect.width;
      const left=pxX+12;
      tooltip.style.left=(left+tooltip.offsetWidth>rect.width?pxX-tooltip.offsetWidth-12:left)+'px';
      tooltip.style.top='20%';
    });
    zone.addEventListener('mouseleave',()=>{
      hLine.style.display='none';hDotBase.style.display='none';hDotMax.style.display='none';
      tooltip.style.opacity='0';
    });
    zone.addEventListener('click',function(){
      const yr=+this.dataset.yr;
      const models=P.filter(p=>p.y===yr);
      if(models.length===1) showPanel(models[0]);
    });
  });
}

/* ── Graveyard ── */
function buildGraveyard(){
  const list=document.getElementById('graveList');
  GV.forEach(g=>{
    const el=document.createElement('div');
    el.className='grave-row fade-in';
    el.innerHTML=`<div class="grave-name">${g.n}</div><div class="grave-detail"><div class="grave-years">${g.yr}</div><div class="grave-cause">${g.cause}</div></div>`;
    list.appendChild(el);
  });
}

/* ── Colors ── */
function buildColors(){
  const grid=document.getElementById('colorsGrid');
  const years=[...new Set(P.map(p=>p.y))].sort((a,b)=>a-b);
  years.forEach(yr=>{
    const yp=P.filter(p=>p.y===yr);
    const row=document.createElement('div');
    row.className='color-row fade-in';
    const seen=new Set();
    let dots='';
    yp.forEach(p=>p.c.forEach(c=>{
      if(seen.has(c))return;seen.add(c);
      const hex=CH[c]||'#888';
      const pi=P.indexOf(p);
      dots+=`<div class="color-dot" style="background:${hex}" data-pi="${pi}" data-color="${c}"><span class="tip">${c} · ${hex.toUpperCase()} · ${p.m}</span></div>`;
    }));
    // Model names summary
    const modelNames=yp.map(p=>p.m.replace('iPhone ','')).join('  /  ');
    row.innerHTML=`<div class="color-yr">${yr}</div><div class="color-dots">${dots}</div><div class="color-models">${modelNames}</div>`;
    grid.appendChild(row);
  });
  // Click handler for color dots
  grid.addEventListener('click',e=>{
    const dot=e.target.closest('.color-dot');
    if(!dot)return;
    const p=P[+dot.dataset.pi];
    const color=dot.dataset.color;
    showPanel(p,color);
  });
}

/* ── Explorer ── */
function buildExplorer(){
  const cats=[{k:'all',l:'All'},{k:'standard',l:'Standard'},{k:'pro',l:'Pro'},{k:'pro_max',l:'Pro Max'},{k:'plus',l:'Plus'},{k:'se',l:'SE'},{k:'mini',l:'Mini'},{k:'air',l:'Air'}];
  const fil=document.getElementById('exFilters');
  cats.forEach(c=>{
    const b=document.createElement('button');
    b.className='filter-pill'+(c.k==='all'?' on':'');
    b.textContent=c.l;
    b.onclick=()=>{fil.querySelectorAll('.filter-pill').forEach(x=>x.classList.remove('on'));b.classList.add('on');renderCards(c.k)};
    fil.appendChild(b);
  });
  renderCards('all');
}
function renderCards(cat){
  const grid=document.getElementById('exGrid');
  const list=cat==='all'?P:P.filter(p=>cat==='se'?(p.cat==='se'||p.cat==='budget'):p.cat===cat);
  grid.innerHTML=list.map(p=>{
    const cl=p.cat==='pro_max'?'Pro Max':p.cat==='se'?'SE':p.cat.charAt(0).toUpperCase()+p.cat.slice(1);
    const imgUrl=IMG[p.m];
    const imgHTML=imgUrl?`<div class="ex-card-img"><img src="${imgUrl}" alt="${p.m}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`:'';
    return`<div class="ex-card" data-i="${P.indexOf(p)}"><span class="ex-badge">${cl}</span>${imgHTML}<div class="ex-card-model">${p.m}</div><div class="ex-card-year">${p.y} · ${p.proc}</div><div class="ex-card-specs"><div><div class="ex-spec-val">${p.s}"</div><div class="ex-spec-lbl">Screen</div></div><div><div class="ex-spec-val">${p.cm} MP</div><div class="ex-spec-lbl">Camera</div></div><div><div class="ex-spec-val">$${p.p}</div><div class="ex-spec-lbl">Price</div></div><div><div class="ex-spec-val">${p.bat||'—'}</div><div class="ex-spec-lbl">mAh</div></div></div><div class="ex-card-colors">${p.c.map(c=>`<div class="ex-card-dot" style="background:${CH[c]||'#888'}"></div>`).join('')}</div></div>`}).join('');
}

/* ── Detail panel ── */
const compareSlots=[null,null]; // [phoneIndex, phoneIndex]
function setupPanel(){
  const ov=document.getElementById('overlay'),pn=document.getElementById('panel');
  const close=()=>{ov.classList.remove('open');pn.classList.remove('open');document.body.style.overflow=''};
  document.getElementById('panelClose').onclick=close;
  ov.onclick=close;
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      close();
      const co=document.getElementById('compareOverlay');
      if(co.classList.contains('open')){co.classList.remove('open');document.body.style.overflow=''}
    }
  });

  // Explorer grid: single tap = panel, but also track compare selections
  document.getElementById('exGrid').addEventListener('click',e=>{
    const card=e.target.closest('.ex-card');if(!card)return;
    const idx=+card.dataset.i;
    const p=P[idx];

    // Toggle compare selection
    const alreadySelected=compareSlots.indexOf(idx);
    if(alreadySelected!==-1){
      // Deselect
      compareSlots[alreadySelected]=null;
      card.classList.remove('selected');
      updateCompareBar();
      return;
    }

    // If both slots full, open panel normally
    if(compareSlots[0]!==null && compareSlots[1]!==null){
      showPanel(p);
      return;
    }

    // Add to first empty slot
    const slot=compareSlots[0]===null?0:1;
    compareSlots[slot]=idx;
    card.classList.add('selected');
    updateCompareBar();

    // If only one selected, also show panel
    if(compareSlots[0]===null || compareSlots[1]===null) showPanel(p);
  });

  document.getElementById('paradeTrack').addEventListener('click',e=>{
    const item=e.target.closest('.parade-item');if(!item)return;
    const p=P[+item.dataset.idx];showPanel(p);
  });

  // Compare button
  document.getElementById('compareGo').addEventListener('click',()=>{
    if(compareSlots[0]!==null && compareSlots[1]!==null) showCompare(P[compareSlots[0]],P[compareSlots[1]]);
  });
}

function updateCompareBar(){
  const bar=document.getElementById('compareBar');
  const slot1=document.getElementById('compareSlot1');
  const slot2=document.getElementById('compareSlot2');
  const goBtn=document.getElementById('compareGo');
  const hasAny=compareSlots[0]!==null||compareSlots[1]!==null;
  bar.classList.toggle('show',hasAny);

  [0,1].forEach(i=>{
    const el=i===0?slot1:slot2;
    if(compareSlots[i]!==null){
      const p=P[compareSlots[i]];
      const imgUrl=IMG[p.m]||'';
      el.className='compare-slot';
      el.innerHTML=`${imgUrl?`<img class="compare-slot-img" src="${imgUrl}" alt="${p.m}">`:''}
        <span class="compare-slot-name">${p.m}</span>
        <button class="compare-slot-remove" data-slot="${i}">✕</button>`;
      el.querySelector('.compare-slot-remove').addEventListener('click',e=>{
        e.stopPropagation();
        const s=+e.target.dataset.slot;
        const oldIdx=compareSlots[s];
        compareSlots[s]=null;
        // Remove selected class from card
        document.querySelectorAll(`.ex-card[data-i="${oldIdx}"]`).forEach(c=>c.classList.remove('selected'));
        updateCompareBar();
      });
    } else {
      el.className='compare-slot-empty';
      el.innerHTML=i===0?'Select first iPhone':'Select second iPhone';
    }
  });
  goBtn.disabled=!(compareSlots[0]!==null&&compareSlots[1]!==null);
}

function showCompare(a,b){
  const content=document.getElementById('compareContent');
  const imgA=IMG[a.m]||'';
  const imgB=IMG[b.m]||'';

  const specs=[
    ['Screen',a.s+'"',b.s+'"',a.s>b.s],
    ['Camera',a.cm+' MP × '+a.cl,b.cm+' MP × '+b.cl,a.cm*a.cl>b.cm*b.cl],
    ['Price','$'+a.p,'$'+b.p,a.p<b.p],
    ['Battery',(a.bat||0)+' mAh',(b.bat||0)+' mAh',(a.bat||0)>(b.bat||0)],
    ['Weight',a.w+'g',b.w+'g',a.w<b.w],
    ['Thickness',a.t+'mm',b.t+'mm',a.t<b.t],
    ['Display',a.d,b.d,null],
    ['Connector',a.con,b.con,null],
    ['Biometric',a.bio||'None',b.bio||'None',null],
    ['Processor',a.proc,b.proc,null],
    ['iOS',a.ios?'iOS '+a.ios:'—',b.ios?'iOS '+b.ios:'—',null],
  ];

  const clA=a.cat==='pro_max'?'Pro Max':a.cat==='se'?'SE':a.cat.charAt(0).toUpperCase()+a.cat.slice(1);
  const clB=b.cat==='pro_max'?'Pro Max':b.cat==='se'?'SE':b.cat.charAt(0).toUpperCase()+b.cat.slice(1);

  content.innerHTML=`
    <div class="compare-header">
      <div class="compare-title">${a.m} vs ${b.m}</div>
      <button class="compare-close-btn" id="compareCloseBtn">✕</button>
    </div>
    <div class="compare-phones">
      <div class="compare-phone">
        <div class="compare-phone-img">${imgA?`<img src="${imgA}" alt="${a.m}">`:''}  </div>
        <div class="compare-phone-name">${a.m}</div>
        <div class="compare-phone-sub">${a.y} · ${a.proc} · ${clA}</div>
      </div>
      <div class="compare-phone">
        <div class="compare-phone-img">${imgB?`<img src="${imgB}" alt="${b.m}">`:''}  </div>
        <div class="compare-phone-name">${b.m}</div>
        <div class="compare-phone-sub">${b.y} · ${b.proc} · ${clB}</div>
      </div>
    </div>
    <div class="compare-table">
      ${specs.map(([label,valA,valB,aWins])=>`
        <div class="compare-row">
          <div class="compare-label">${label}</div>
          <div class="compare-val${aWins===true?' winner':''}">${valA}</div>
          <div class="compare-val${aWins===false?' winner':''}">${valB}</div>
        </div>
      `).join('')}
      <div class="compare-row">
        <div class="compare-label">Colors</div>
        <div class="compare-colors-row">${a.c.map(c=>`<div class="compare-color-dot" style="background:${CH[c]||'#888'}" title="${c}"></div>`).join('')}</div>
        <div class="compare-colors-row">${b.c.map(c=>`<div class="compare-color-dot" style="background:${CH[c]||'#888'}" title="${c}"></div>`).join('')}</div>
      </div>
    </div>
  `;

  document.getElementById('compareOverlay').classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('compareCloseBtn').addEventListener('click',()=>{
    document.getElementById('compareOverlay').classList.remove('open');
    document.body.style.overflow='';
  });
}
let panelOpens=0;
const PANEL_FREE_LIMIT=2;
let gateWasDismissed=0;

function showPanel(p,activeColor){
  const b=document.getElementById('panelBody');
  panelOpens++;

  // Email gate after free limit
  if(panelOpens>PANEL_FREE_LIMIT && !isSubscribed() && gateWasDismissed<=0){
    b.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;text-align:center;padding:40px 20px">
        <div style="font-family:var(--serif);font-size:32px;color:var(--off-white);margin-bottom:8px">Glad you're exploring.</div>
        <div style="font-size:15px;color:var(--gray-text);margin-bottom:28px;line-height:1.6;max-width:320px">Each of these stories takes weeks to build. Drop your email and keep exploring every iPhone ever made. It's free.</div>
        <input type="email" id="gateEmailInput" placeholder="your@email.com" style="width:100%;max-width:300px;font-family:var(--mono);font-size:14px;padding:14px 16px;border:1px solid rgba(255,255,255,.12);border-radius:10px;margin-bottom:12px;outline:none;background:rgba(255,255,255,.06);color:#fff" value="${localStorage.getItem('sw_email')||''}">
        <button id="gateSubmitBtn" style="width:100%;max-width:300px;font-family:var(--mono);font-size:13px;font-weight:700;padding:14px;background:var(--accent);color:#fff;border:none;border-radius:10px;cursor:pointer;letter-spacing:.04em">Subscribe free</button>
        <button id="gateDismissBtn" style="background:none;border:none;color:var(--gray-dim);font-size:13px;cursor:pointer;margin-top:16px;padding:8px">Maybe later</button>
        <div style="font-family:var(--mono);font-size:10px;color:var(--gray-dim);margin-top:12px">No spam. Unsubscribe anytime.</div>
      </div>`;
    document.getElementById('gateSubmitBtn').onclick=()=>{
      const email=document.getElementById('gateEmailInput').value.trim();
      if(!email||!email.includes('@'))return;
      saveEmail(email,'iphone-panel-gate');
      panelOpens=0;
      showPanel(p,activeColor); // Re-render with actual content
    };
    document.getElementById('gateDismissBtn').onclick=()=>{
      gateWasDismissed=3; // Allow 3 more free opens
      showPanel(p,activeColor);
    };
    document.getElementById('overlay').classList.add('open');
    document.getElementById('panel').classList.add('open');
    document.body.style.overflow='hidden';
    return;
  }
  if(gateWasDismissed>0) gateWasDismissed--;

  const cl=p.cat==='pro_max'?'Pro Max':p.cat==='se'?'SE':p.cat.charAt(0).toUpperCase()+p.cat.slice(1);

  // Build image URL for specific color — try Apple Store back-view first, then AppleDB
  function getColorImgUrl(model,color){
    // Try Apple Store finish-select (shows back with color)
    const finishUrl=getFinishUrl(model,color);
    if(finishUrl) return finishUrl;
    // Fallback to AppleDB angle shot
    const modelIdMap={};
    Object.entries(IMG).forEach(([m,url])=>{
      const match=url.match(/device@main\/([^/]+)\//);
      if(match) modelIdMap[m]=match[1];
    });
    const modelId=modelIdMap[model];
    if(!modelId)return IMG[model]||'';
    const encodedColor=encodeURIComponent(color);
    return ADB+modelId+'/'+encodedColor+'.png';
  }

  const defaultColor=activeColor||p.c[0];
  const imgUrl=getColorImgUrl(p.m,defaultColor)||IMG[p.m]||'';

  b.innerHTML=`
    ${imgUrl?`<div class="panel-img-wrap"><img id="panelImg" src="${imgUrl}" alt="${p.m} in ${defaultColor}" onerror="this.src='${IMG[p.m]||''}';this.onerror=null"></div>`:''}
    <div class="panel-model">${p.m}</div>
    <div class="panel-sub">${p.y} · ${p.proc} · ${cl}</div>
    <div class="panel-feature">${p.f}</div>
    <div class="panel-grid">
      <div class="panel-cell"><div class="panel-cell-val">${p.s}"</div><div class="panel-cell-lbl">Screen</div></div>
      <div class="panel-cell"><div class="panel-cell-val">${p.cm} MP × ${p.cl}</div><div class="panel-cell-lbl">Camera</div></div>
      <div class="panel-cell"><div class="panel-cell-val">$${p.p}</div><div class="panel-cell-lbl">Launch price</div></div>
      <div class="panel-cell"><div class="panel-cell-val">${p.bat?p.bat+' mAh':'—'}</div><div class="panel-cell-lbl">Battery</div></div>
      <div class="panel-cell"><div class="panel-cell-val">${p.w}g</div><div class="panel-cell-lbl">Weight</div></div>
      <div class="panel-cell"><div class="panel-cell-val">${p.t}mm</div><div class="panel-cell-lbl">Thickness</div></div>
      <div class="panel-cell"><div class="panel-cell-val">${p.con}</div><div class="panel-cell-lbl">Connector</div></div>
      <div class="panel-cell"><div class="panel-cell-val">${p.bio||'None'}</div><div class="panel-cell-lbl">Biometric</div></div>
      <div class="panel-cell"><div class="panel-cell-val">${p.d}</div><div class="panel-cell-lbl">Display</div></div>
      <div class="panel-cell"><div class="panel-cell-val">${p.ios?'iOS '+p.ios:'—'}</div><div class="panel-cell-lbl">Shipped with</div></div>
    </div>
    <div class="panel-colors" id="panelColors">
      ${p.c.map(c=>`<div class="panel-swatch${c===defaultColor?' active':''}" data-color="${c}"><div class="panel-swatch-dot" style="background:${CH[c]||'#888'}"></div><span class="panel-swatch-name">${c}</span></div>`).join('')}
    </div>
    ${p.r?`<div class="panel-removed"><b>Removed</b><p>${p.r}</p></div>`:''}`;

  // Wire up color swatch clicks to change the phone image
  const panelColors=document.getElementById('panelColors');
  if(panelColors){
    panelColors.addEventListener('click',e=>{
      const swatch=e.target.closest('.panel-swatch');
      if(!swatch)return;
      const color=swatch.dataset.color;
      const newUrl=getColorImgUrl(p.m,color);
      const img=document.getElementById('panelImg');
      if(img&&newUrl){
        img.style.opacity='0';
        setTimeout(()=>{img.src=newUrl;img.alt=p.m+' in '+color;img.style.opacity='1'},150);
        img.onerror=function(){this.src=IMG[p.m]||'';this.onerror=null};
      }
      panelColors.querySelectorAll('.panel-swatch').forEach(s=>s.classList.remove('active'));
      swatch.classList.add('active');
    });
  }

  document.getElementById('overlay').classList.add('open');
  document.getElementById('panel').classList.add('open');
  document.body.style.overflow='hidden';
}

/* ══════════════════════ OBSERVERS ══════════════════════ */
function setupObservers(){
  // Fade-in
  const fadeObs=new IntersectionObserver(ents=>ents.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.fade-in,.stat').forEach(el=>fadeObs.observe(el));
  // Stats (static now)
  // Price chart
  let priceDone=false;
  new IntersectionObserver(([e])=>{if(e.isIntersecting&&!priceDone){priceDone=true;document.getElementById('pLineBase')?.classList.add('draw');document.getElementById('pLineMax')?.classList.add('draw');document.getElementById('pArea')?.classList.add('show')}},{threshold:.25}).observe(document.getElementById('priceSect'));
  // Graveyard
  const graveObs=new IntersectionObserver(ents=>ents.forEach(e=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('dead'),500)}),{threshold:.6});
  document.querySelectorAll('.grave-row').forEach(el=>graveObs.observe(el));
  // Color dots stagger
  const colorObs=new IntersectionObserver(ents=>ents.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.color-dot').forEach((d,i)=>setTimeout(()=>d.classList.add('show'),i*50))}}),{threshold:.2});
  document.querySelectorAll('.color-row').forEach(el=>colorObs.observe(el));
  // Camera counter
  let camDone=false;
  new IntersectionObserver(([e])=>{if(e.isIntersecting&&!camDone){camDone=true;countUp(document.getElementById('camFrom'),0,2,800);countUp(document.getElementById('camTo'),0,48,2000)}},{threshold:.4}).observe(document.getElementById('cameraSect'));
  // Scrollytelling steps
  const scrollyObs=new IntersectionObserver(ents=>{
    ents.forEach(e=>{
      if(e.isIntersecting && e.intersectionRatio > 0.3){
        document.querySelectorAll('.scrolly-step').forEach(s=>s.classList.remove('is-active'));
        e.target.classList.add('is-active');
        updateScrollyPhone(parseInt(e.target.dataset.index));
      }
    });
  },{rootMargin:'-33% 0px -33% 0px',threshold:.3});
  document.querySelectorAll('.scrolly-step').forEach(el=>scrollyObs.observe(el));
}

function countUp(el,from,to,dur,suffix=''){
  const t0=performance.now();
  (function tick(now){
    const p=Math.min((now-t0)/dur,1);
    const ease=1-Math.pow(1-p,4);
    el.textContent=Math.round(from+(to-from)*ease)+suffix;
    if(p<1)requestAnimationFrame(tick);
  })(t0);
}

/* ── CTA ── */
document.getElementById('ctaForm')?.addEventListener('submit',async function(e){
  e.preventDefault();const email=this.querySelector('input').value;if(!email)return;
  const btn=this.querySelector('button');btn.textContent='...';btn.disabled=true;
  saveEmail(email,'iphone-footer');
  btn.textContent='Subscribed ✓';btn.style.background='#30d158';
});

/* ══════════════════════ EMAIL & TRACKING ══════════════════════ */
const SW_EMAIL_KEY='sw_email',SW_SUB_KEY='sw_subscribed',SW_DISMISS_KEY='sw_bar_dismissed_iphone';
function isSubscribed(){return !!localStorage.getItem(SW_SUB_KEY)}
function saveEmail(email,source){
  localStorage.setItem(SW_EMAIL_KEY,email);
  localStorage.setItem(SW_SUB_KEY,'1');
  if(typeof gtag==='function')gtag('event','newsletter_signup',{source});
  fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'dataviz-newsletter',email,name:'',company:'',data:{source}})}).catch(()=>{});
  // Hide sticky bar if visible
  const bar=document.getElementById('stickyEmailBar');
  if(bar)bar.style.transform='translateY(100%)';
}

// Pre-fill saved email
const savedEmail=localStorage.getItem(SW_EMAIL_KEY);
if(savedEmail){
  const fi=document.querySelector('.cta-input');if(fi)fi.value=savedEmail;
}

/* ── Sticky email bar (20% scroll or 30s) ── */
(function(){
  if(isSubscribed())return;
  const dismissed=localStorage.getItem(SW_DISMISS_KEY);
  if(dismissed&&(Date.now()-parseInt(dismissed))<14*86400000)return;

  // Create sticky bar
  const bar=document.createElement('div');
  bar.id='stickyEmailBar';
  bar.style.cssText='position:fixed;bottom:0;left:0;right:0;background:rgba(10,10,10,.95);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-top:1px solid rgba(255,255,255,.1);padding:14px 24px;z-index:180;transform:translateY(100%);transition:transform .4s cubic-bezier(.16,1,.3,1);box-shadow:0 -4px 24px rgba(0,0,0,.2)';
  bar.innerHTML=`
    <button onclick="this.parentElement.style.transform='translateY(100%)';localStorage.setItem('${SW_DISMISS_KEY}',Date.now())" style="position:absolute;top:12px;right:16px;background:none;border:none;font-size:18px;color:#888;cursor:pointer">✕</button>
    <div style="max-width:800px;margin:0 auto;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
      <div style="flex:1;min-width:200px">
        <div style="font-size:14px;font-weight:600;color:#E8E6E3">This is The Data Drop. We build one of these every month.</div>
        <div style="font-size:12px;color:#98989d;margin-top:2px">iPhones, airlines, pop culture, sports. Always free.</div>
      </div>
      <input type="email" id="stickyEmailInput" placeholder="your@email.com" value="${savedEmail||''}" style="font-family:var(--mono);font-size:13px;padding:10px 14px;border:1px solid rgba(255,255,255,.12);border-radius:8px;width:200px;outline:none;background:rgba(255,255,255,.06);color:#fff">
      <button onclick="var e=document.getElementById('stickyEmailInput').value;if(e&&e.includes('@')){saveEmail(e,'iphone-sticky');this.textContent='✓';this.style.background='#30d158'}" style="font-family:var(--mono);font-size:12px;font-weight:700;padding:10px 20px;background:#0066cc;color:#fff;border:none;border-radius:8px;cursor:pointer;letter-spacing:.04em">Subscribe</button>
    </div>`;
  document.body.appendChild(bar);

  let shown=false;
  function showBar(){if(shown)return;shown=true;bar.style.transform='translateY(0)'}
  window.addEventListener('scroll',function(){
    const pct=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight);
    if(pct>.20)showBar();
  },{passive:true});
  setTimeout(showBar,30000);
})();

/* (Removed full-page email popup. The sticky bar + panel gate + footer
   still capture 78% of signups without the user-hostile interrupt.) */

try{if(sessionStorage.getItem('bmc_dismissed')==='1'){var w=document.getElementById('bmc-wrap');if(w)w.style.display='none'}}catch(e){}
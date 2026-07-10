/* ==========================================
   NURMAN
   Duygusal Yapay Zekâ Sistemi
   script.js
   Bölüm 1/5
==========================================*/

"use strict";

/*==========================================
    ELEMENTLER
==========================================*/

const bootScreen = document.getElementById("bootScreen");
const giris = document.getElementById("giris");
const sistem = document.getElementById("sistem");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const baslatBtn = document.getElementById("baslatBtn");

const aiMesaj = document.getElementById("aiMesaj");

const tarih = document.getElementById("tarih");
const saat = document.getElementById("saat");

const temaMuzigi = document.getElementById("temaMuzigi");
const bipSesi = document.getElementById("bipSesi");
const glitchSesi = document.getElementById("glitchSesi");

/*==========================================
    SES
==========================================*/

function sesCal(ses){

    if(!ses) return;

    try{

        ses.currentTime = 0;

    }catch(e){}

    try{

        const p = ses.play();

        if(p && typeof p.catch === "function"){

            p.catch(()=>{});

        }

    }catch(e){}

}

/*==========================================
    TARİH & SAAT
==========================================*/

function saatGuncelle(){

    const simdi = new Date();

    if(saat){

        saat.textContent =
        simdi.toLocaleTimeString("tr-TR");

    }

    if(tarih){

        tarih.textContent =
        simdi.toLocaleDateString("tr-TR",{

            weekday:"long",

            day:"numeric",

            month:"long",

            year:"numeric"

        });

    }

}

saatGuncelle();

setInterval(saatGuncelle,1000);

/*==========================================
    BOOT
==========================================*/

let yukleme = 0;

let gecisYapildi = false;

function girisEkraniniAc(){

    if(gecisYapildi) return;

    gecisYapildi = true;

    try{

        sesCal(glitchSesi);

    }catch(e){}

    if(bootScreen){

        bootScreen.style.display = "none";

        bootScreen.classList.add("hidden");

    }

    if(giris){

        giris.classList.remove("hidden");

    }

}

const boot = setInterval(()=>{

    try{

        yukleme++;

        if(progressBar){

            progressBar.style.width = yukleme + "%";

        }

        if(progressText){

            progressText.textContent = yukleme + "%";

        }

        if(yukleme % 25 === 0){

            sesCal(bipSesi);

        }

        if(yukleme >=100){

            clearInterval(boot);

            setTimeout(girisEkraniniAc,600);

        }

    }catch(err){

        console.error("Boot dongusunde hata:",err);

        clearInterval(boot);

        setTimeout(girisEkraniniAc,600);

    }

},45);

/* Güvenlik ağı: her ne sebeple olursa olsun 6 saniye içinde
   geçiş gerçekleşmediyse zorla giriş ekranını aç. */

setTimeout(girisEkraniniAc,6000);

/*==========================================
    GİRİŞ
==========================================*/

baslatBtn?.addEventListener("click",()=>{

    sesCal(bipSesi);

    giris.classList.add("hidden");

    sistem.classList.remove("hidden");

    if(temaMuzigi){

        temaMuzigi.volume=.35;

        temaMuzigi.play().catch(()=>{});

    }

    yapayZekaMesaji();

});

/*==========================================
    DAKTİLO
==========================================*/

const mesaj = `

Hoş geldin Nurçin...

Ben NURMAN.

Mansur'un senin için hazırladığı
özel yapay zekâ sistemiyim.

Bugün sana;

birlikte yaşadığınız anıları,

onun sana yazdığı mektubu,

ve kalbinde sakladığı duyguları göstereceğim.

Hazırsan başlayalım...

❤️

`;

function daktilo(element,yazi,hiz=35){

    if(!element) return;

    element.textContent="";

    let i=0;

    const yaz=setInterval(()=>{

        element.textContent+=yazi.charAt(i);

        i++;

        if(i>=yazi.length){

            clearInterval(yaz);

        }

    },hiz);

}

function yapayZekaMesaji(){

    daktilo(aiMesaj,mesaj);

}
/* ==========================================
   NURMAN
   script.js
   Bölüm 2/5
==========================================*/

/*==========================================
    BİRLİKTE GEÇEN SÜRE
==========================================*/

// İlişkinizin başlangıç tarihi
// Aylar JavaScript'te 0'dan başlar.
// 6 Mayıs 2025 = (2025,4,6)

const baslangic = new Date(2025,4,6,0,0,0);

const gun = document.getElementById("gun");
const saatSayac = document.getElementById("saatSayac");
const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

function iliskiSayaci(){

    const simdi = new Date();

    const fark = simdi - baslangic;

    const toplamSaniye = Math.floor(fark/1000);

    const g = Math.floor(toplamSaniye/86400);

    const s = Math.floor((toplamSaniye%86400)/3600);

    const d = Math.floor((toplamSaniye%3600)/60);

    const sn = toplamSaniye%60;

    if(gun) gun.textContent=g;

    if(saatSayac) saatSayac.textContent=String(s).padStart(2,"0");

    if(dakika) dakika.textContent=String(d).padStart(2,"0");

    if(saniye) saniye.textContent=String(sn).padStart(2,"0");

}

iliskiSayaci();

setInterval(iliskiSayaci,1000);

/*==========================================
    SİSTEM DURUMU
==========================================*/

const emotionStatus=document.getElementById("emotionStatus");
const memoryStatus=document.getElementById("memoryStatus");
const systemStatus=document.getElementById("systemStatus");

const durumlar=[
    "Hazır",
    "Aktif",
    "Çalışıyor",
    "Kararlı",
    "Senkronize"
];

setInterval(()=>{

    if(emotionStatus){

        emotionStatus.textContent=
        durumlar[Math.floor(Math.random()*durumlar.length)];

    }

    if(memoryStatus){

        memoryStatus.textContent="15 Anı Yüklendi";

    }

    if(systemStatus){

        systemStatus.textContent="Çevrim İçi";

    }

},3500);

/*==========================================
    MEKTUP
==========================================*/

const mektupBar=document.getElementById("mektupBar");
const mektupYazi=document.getElementById("mektupYazi");

const mektup=`

Sevgili Nurçin,

Bu satırları okurken umarım yüzünde küçük de olsa bir tebessüm oluşur.

Hayatımın en güzel anılarının çoğunda sen varsın.

İyi ki yollarımız kesişti.

İyi ki hayatımdasın.

❤️

Seni çok seviyorum.

- Mansur

`;

let mektupBasladi=false;

function mektubuBaslat(){

    if(mektupBasladi) return;

    mektupBasladi=true;

    let yuzde=0;

    const yukleme=setInterval(()=>{

        yuzde++;

        if(mektupBar){

            mektupBar.style.width=yuzde+"%";

        }

        if(yuzde>=100){

            clearInterval(yukleme);

            daktilo(mektupYazi,mektup,25);

        }

    },20);

}

/*==========================================
    TERMINAL
==========================================*/

const terminal=document.getElementById("terminalYazisi");

const terminalMetni=[

"> NURMAN başlatıldı",

"> Kimlik doğrulandı",

"> Kullanıcı: Nurçin",

"> Duygu çekirdeği etkin",

"> Anılar okunuyor",

"> Sevgi seviyesi: %100",

"> Hedef başarıyla bulundu",

"> Sistem kararlı",

"> Hazır..."

];

function terminalYaz(){

    if(!terminal) return;

    let satir=0;

    const yaz=setInterval(()=>{

        terminal.innerHTML+=terminalMetni[satir]+"<br>";

        terminal.scrollTop=terminal.scrollHeight;

        satir++;

        if(satir>=terminalMetni.length){

            clearInterval(yaz);

        }

    },700);

}

setTimeout(terminalYaz,2500);

/*==========================================
    GÖRÜNÜR OLUNCA
==========================================*/

const mektupBolumu=document.querySelector(".mektupKutu");

const gozlemci=new IntersectionObserver((girdiler)=>{

    girdiler.forEach(girdi=>{

        if(girdi.isIntersecting){

            mektubuBaslat();

        }

    });

});

if(mektupBolumu){

    gozlemci.observe(mektupBolumu);

}
/* ==========================================
   NURMAN
   script.js
   Bölüm 3/5
==========================================*/

/*==========================================
    FOTOĞRAF GALERİSİ
==========================================*/

const fotoKartlari=document.querySelectorAll(".fotoKart");
const fotoModal=document.getElementById("fotoModal");
const modalResim=document.getElementById("modalResim");
const modalKapat=document.getElementById("modalKapat");

fotoKartlari.forEach(kart=>{

    kart.addEventListener("click",()=>{

        const resim=kart.querySelector("img");

        if(!resim) return;

        modalResim.src=resim.src;

        modalResim.alt=resim.alt;

        fotoModal.classList.add("aktif");

        sesCal(bipSesi);

    });

});

modalKapat?.addEventListener("click",()=>{

    fotoModal.classList.remove("aktif");

});

fotoModal?.addEventListener("click",(e)=>{

    if(e.target===fotoModal){

        fotoModal.classList.remove("aktif");

    }

});

/*==========================================
    GLITCH EFEKTİ
==========================================*/

const glitchKatmani=document.getElementById("glitchKatmani");

function glitchYap(){

    if(!glitchKatmani) return;

    glitchKatmani.classList.add("glitch");

    sesCal(glitchSesi);

    setTimeout(()=>{

        glitchKatmani.classList.remove("glitch");

    },180);

}

setInterval(()=>{

    if(Math.random()>0.96){

        glitchYap();

    }

},4000);

/*==========================================
    PARÇACIK SİSTEMİ
==========================================*/

const canvas=document.getElementById("parcacikCanvas");
const ctx=canvas?.getContext("2d");

let parcaciklar=[];

function yenidenBoyutlandir(){

    if(!canvas) return;

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

}

window.addEventListener("resize",yenidenBoyutlandir);

yenidenBoyutlandir();

for(let i=0;i<70;i++){

    parcaciklar.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:Math.random()*2+1,

        dx:(Math.random()-0.5)*0.4,

        dy:(Math.random()-0.5)*0.4

    });

}

function parcacikCiz(){

    if(!ctx) return;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    parcaciklar.forEach(p=>{

        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0||p.x>canvas.width) p.dx*=-1;
        if(p.y<0||p.y>canvas.height) p.dy*=-1;

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

        ctx.fillStyle="rgba(0,217,255,.7)";

        ctx.fill();

    });

    requestAnimationFrame(parcacikCiz);

}

parcacikCiz();

/*==========================================
    BÖLÜMLERİ GÖSTER
==========================================*/

const paneller=document.querySelectorAll(".panel");

const panelGozlemci=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("goster");

        }

    });

},{
    threshold:0.15
});

paneller.forEach(panel=>{

    panel.classList.add("gizliBolum");

    panelGozlemci.observe(panel);

});

/*==========================================
    BAŞA DÖN
==========================================*/

const yukariCik=document.getElementById("yukariCik");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        yukariCik.style.display="block";

    }else{

        yukariCik.style.display="none";

    }

});

yukariCik?.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ==========================================
   NURMAN
   script.js
   Bölüm 4/5
==========================================*/

/*==========================================
    FİNAL SAHNESİ
==========================================*/

const finalSahne=document.getElementById("finalSahne");
const finalYazi=document.getElementById("finalYazi");

const finalMetni=`

Analiz tamamlandı...

Sonuç:

Mansur'un kalbindeki
en değerli kişi sensin.

Bu sistem bir gün kapanabilir.

Ama sana olan sevgisi...

Asla bitmeyecek.

❤️ Sonsuza kadar.

`;

let finalCalisti=false;

function finaliBaslat(){

    if(finalCalisti) return;

    finalCalisti=true;

    if(finalSahne){

        finalSahne.classList.add("aktif");

    }

    setTimeout(()=>{

        daktilo(finalYazi,finalMetni,45);

    },800);

}

/*==========================================
    SAYFA SONU KONTROLÜ
==========================================*/

window.addEventListener("scroll",()=>{

    const scrollY=window.scrollY;

    const yukseklik=
    document.documentElement.scrollHeight-window.innerHeight;

    if(scrollY>yukseklik-200){

        finaliBaslat();

    }

});

/*==========================================
    GİZLİ KISAYOLLAR
==========================================*/

document.addEventListener("keydown",(e)=>{

    switch(e.key.toLowerCase()){

        case "g":

            glitchYap();
            break;

        case "m":

            if(temaMuzigi.paused){

                temaMuzigi.play().catch(()=>{});

            }else{

                temaMuzigi.pause();

            }

            break;

        case "escape":

            fotoModal?.classList.remove("aktif");
            break;

    }

});

/*==========================================
    YILDIZ EFEKTİ
==========================================*/

function rastgeleParlama(){

    document.body.animate([

        {filter:"brightness(1)"},

        {filter:"brightness(1.08)"},

        {filter:"brightness(1)"}

    ],{

        duration:700,

        easing:"ease"

    });

}

setInterval(()=>{

    if(Math.random()>0.95){

        rastgeleParlama();

    }

},5000);

/*==========================================
    KONSOL MESAJI
==========================================*/

console.clear();

console.log("%cNURMAN","font-size:32px;color:#00d9ff;font-family:monospace;");

console.log("Duygusal Yapay Zekâ Sistemi");

console.log("Durum : ÇEVRİM İÇİ");

console.log("Kullanıcı : Nurçin");

console.log("Geliştirici : Mansur");

console.log("Sevgi Seviyesi : %100 ❤️");
/* ==========================================
   NURMAN
   script.js
   Bölüm 5/5
==========================================*/

/*==========================================
    GÜVENLİ SES BAŞLATMA
==========================================*/

let muzikBasladi = false;

function muzigiBaslat() {

    if (muzikBasladi) return;

    muzikBasladi = true;

    if (!temaMuzigi) return;

    temaMuzigi.volume = 0.35;

    temaMuzigi.play().catch(() => {});

}

document.addEventListener("click", muzigiBaslat, { once: true });

document.addEventListener("touchstart", muzigiBaslat, { once: true });

/*==========================================
    RESİMLERİ ÖN BELLEĞE AL
==========================================*/

document.querySelectorAll(".fotoKart img").forEach(img => {

    const preload = new Image();

    preload.src = img.src;

});

/*==========================================
    SAYFA YÜKLENDİ
==========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("hazir");

    console.log("Tüm kaynaklar başarıyla yüklendi.");

});

/*==========================================
    BAĞLANTI DURUMU
==========================================*/

window.addEventListener("offline", () => {

    console.warn("İnternet bağlantısı kesildi.");

});

window.addEventListener("online", () => {

    console.log("Bağlantı yeniden kuruldu.");

});

/*==========================================
    PERFORMANS
==========================================*/

let yenidenBoyutlandirma;

window.addEventListener("resize", () => {

    clearTimeout(yenidenBoyutlandirma);

    yenidenBoyutlandirma = setTimeout(() => {

        yenidenBoyutlandir();

    }, 150);

});

/*==========================================
    HATA YAKALAMA
==========================================*/

window.onerror = function (mesaj, kaynak, satir) {

    console.warn("NURMAN hata yakaladı:");

    console.warn(mesaj);

    return true;

};

/*==========================================
    SON SİSTEM KONTROLÜ
==========================================*/

function sistemKontrolu() {

    const gerekli = [

        "bootScreen",
        "giris",
        "sistem",
        "progressBar",
        "baslatBtn",
        "aiMesaj",
        "gun",
        "mektupYazi",
        "terminalYazisi",
        "fotoModal",
        "parcacikCanvas",
        "finalSahne"

    ];

    let eksik = [];

    gerekli.forEach(id => {

        if (!document.getElementById(id)) {

            eksik.push(id);

        }

    });

    if (eksik.length === 0) {

        console.log("NURMAN Sistem Kontrolü: BAŞARILI");

    } else {

        console.warn("Eksik bileşenler:");

        console.table(eksik);

    }

}

window.addEventListener("load", sistemKontrolu);

/*==========================================
    BAŞLANGIÇ MESAJI
==========================================*/

setTimeout(() => {

    console.log("");

    console.log("================================");

    console.log("NURMAN");

    console.log("Duygusal Yapay Zekâ Sistemi");

    console.log("Sürüm : 1.0");

    console.log("Durum : Hazır");

    console.log("================================");

}, 1000);

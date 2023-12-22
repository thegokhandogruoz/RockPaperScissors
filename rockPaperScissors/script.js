function alBilgisayarSecim(){
    let tkmSecim = ['Tas', 'Kagıt', 'Makas']
    let bilgisayarSecim = tkmSecim[Math.floor(Math.random() * 3)]
    return bilgisayarSecim
}

function sonucAl(oyuncuSecim, bilgisayarSecim){
    let skor;

    if(oyuncuSecim === bilgisayarSecim){
        skor = 0
    } else if (oyuncuSecim === 'Tas' && bilgisayarSecim === 'Makas'){
        skor = 1
    } else if (oyuncuSecim === 'Kagıt' && bilgisayarSecim === 'Tas'){
        skor = 1
    } else if (oyuncuSecim === 'Makas' && bilgisayarSecim === 'Kagıt'){
        skor = 1
    } else {
        skor = -1
    }

    return skor
}

function sonucGoster(skor, oyuncuSecim, bilgisayarSecim) {
    let sonuc = document.getElementById('sonuc')
    switch (skor){
        case -1:
            sonuc.innerText = `Kaybettin!`
            break;
        case 0:
            sonuc.innerText = `Berabere`
            break;
        case 1:
            sonuc.innerText = `Kazandın!`
            break;
    }

    let oyuncuSkor = document.getElementById('oyuncu-skor')
    let sayı = document.getElementById('sayı')
    oyuncuSkor.innerText = `${Number(oyuncuSkor.innerText) + skor}`
      sayı.innerText = `👱 ${oyuncuSecim} vs 🤖 ${bilgisayarSecim}`
}

function onClickRPS(oyuncuSecim){
    const bilgisayarSecim = alBilgisayarSecim()
    const skor = sonucAl(oyuncuSecim.value, bilgisayarSecim)
    sonucGoster(skor, oyuncuSecim.value, bilgisayarSecim)
}

function oyunuOyna(){
    let tkmButtons = document.querySelectorAll('.tkmButton')

    tkmButtons.forEach(tkmButton => {
        tkmButton.onclick = () => onClickRPS(tkmButton)
    })

    let sıfırlamaTusu = document.getElementById('sıfırlamaTusu')
    sıfırlamaTusu.onclick = () => oyunuBitir()
}

function oyunuBitir(){
    let oyuncuSkor = document.getElementById('oyuncu-skor')
    let sayı = document.getElementById('sayı')
    let sonuc = document.getElementById('sonuc')
    oyuncuSkor.innerText = ``
    sayı.innerText = ``
    sonuc.innerText = ``
}

oyunuOyna()
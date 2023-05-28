const posts = document.querySelector(".infoAdd")
const html = document.querySelector(".html")

const inftxt = document.querySelector(".inftxt")
const infimg = document.querySelector("#infimg")
const infimg2 = document.querySelector("#infimg2")
const infimg3 = document.querySelector("#infimg3")
const infimg4 = document.querySelector("#infimg4")
const infimg5 = document.querySelector("#infimg5")
const inftxtcont = document.querySelector(".inftxtcont")
const inftxth = document.querySelector(".inftxth")
const inftxtd = document.querySelector(".inftxtd")



const slidWidth = document.querySelector("#infimg")

const visit = document.getElementById('vistw');


window.onload = function() {
    posts.style.display = 'none';
};

const info00 = document.getElementById('checkinfoAdd');
info00.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Arte & Grill`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += `Das 8h ás 18h`;
    inftxtd.innerHTML += `(Terça - Domingo)`;

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;

}

const info02 = document.querySelector('.info02');
info02.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Churrascaria Boi e Brasa`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info03 = document.querySelector('.info03');
info03.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Gameleira regional`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info04 = document.querySelector('.info04');
info04.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Mercado da Ribeira`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info05 = document.querySelector('.info05');
info05.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Galeria São Salvador`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info06 = document.querySelector('.info06');
info06.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Mercado de artesanato alto da sé`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info07 = document.querySelector('.info07');
info07.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Arte do Imaginário`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info08 = document.querySelector('.info08');
info08.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Gomes Cachaçaria`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info09 = document.querySelector('.info09');
info09.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Bacanas Sorvetes`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info10 = document.querySelector('.info10');
info10.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Sorvetes Olinda`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info11 = document.querySelector('.info11');
info11.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `4 Cantos de Olinda`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";
    
    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info12 = document.querySelector('.info12');
info12.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Pousada Amparo`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info13 = document.querySelector('.info13');
info13.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Alto Astral`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info14 = document.querySelector('.info14');
info14.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Pousada São Francisco`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info15 = document.querySelector('.info15');
info15.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Hotel Samburá`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info16 = document.querySelector('.info16');
info16.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Hotel Costeiro`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info17 = document.querySelector('.info17');
info17.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Hotel 5 Sóis`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info18 = document.querySelector('.info18');
info18.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Shopping Patteo Olinda`;
    inftxtcont.innerHTML += `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "";

    visit.innerHTML += `                        <label for="check" class="checkInfo">
    <div class="info11" id="checkvisit" style="
    /* top: 236px; */
    /* position: relative; */
    /* display: flex; */
    /* align-items: center; */
    top: 228px;
    position: relative;
    width: 150px;
    height: 44px;
    cursor: pointer;
    border-radius: 10px;
    left: -17px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    "></div>
    <a target="_blank" href="" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const back = document.getElementById('checkinfoRemov');
back.onclick = function() {
    infimg.innerHTML -= `<img class="infimg">`;
    infimg2.innerHTML -= `<img class="infimg">`;
    infimg3.innerHTML -= `<img class="infimg">`;
    infimg4.innerHTML -= `<img class="infimg">`;
    infimg5.innerHTML -= `<img class="infimg">`;

    inftxt.innerHTML = "";
    inftxtcont.innerHTML = "";
    inftxth.innerHTML = "";
    inftxtd.innerHTML = "";
    visit.innerHTML = "";

    posts.style.display = 'none';
    html.style.overflow = 'visible';

    
}

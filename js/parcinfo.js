window.onload = function() {
    posts.style.display = 'none';
};
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

//Versão PC

const info00 = document.getElementById('checkinfoAdd');
info00.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/artegrill2.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/artegrill1.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Arte & Grill`;
    inftxtcont.innerHTML += `O Restaurante Art Grill de Olinda com um cardápio Regional há mais de 20 anos de existência, é um dos restaurantes mais bonitos do Alto da Sé de Olinda, especialista em frutos do mar e comidas regionais e com uma excelente Peixada ao molho de camarão, tem uma vista privilegiada da cidade historica e instalações aconchegantes. Tudo isso, somado a um variado cardápio, faz do Art Gril  um  lugar perfeito para suas refeições.`;
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
    infimg.innerHTML = `<img class="infimg" src="../img/boiebrasa1.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/boiebrasa2.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/boiebrasa3.jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/boiebrasa4.jpg">`;
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
    <a target="_blank" href="https://localpartner.com.br/olinda/churrascaria/boi-e-brasa-olinda/" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info03 = document.querySelector('.info03');
info03.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/cantinhodase2.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/cantinhodase2.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Cantinho da Sé`;
    inftxtcont.innerHTML += `Comida regional farta e bem temperada pode ser facime encontrada no restaurante. Em funcionamento há mais de 40 anos  apresenta a mesma qualidade da ma localizada em Olinda. O Peixe ao molho de camarão pecialidade da casa, seguido da carne de sol sertaneja, decorada com pimentões e ervilha ao molho de ta arroz, farofa de jerimum, feijão e macaxeira frita. També ficam atrás o cozido de chambaril com arroz, piro e o galeto na brasa, servida para três pessoas.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "Terça a quinta, das 11h às 23h; sexta e sábado, das liha go, das 11h às 18h.";

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
    infimg.innerHTML = `<img class="infimg" src="../img/galeriasaosalvador.jpg">`;
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

const info05 = document.querySelector('.info05');
info05.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/imaginario1.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Imaginário Brasileiro artesanato`;
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
    <a target="_blank" href="www.imaginariobrasileiro.com.br" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}

const info06 = document.querySelector('.info06');
info06.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/difarias1.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/difarias2.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/difarias3.jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Galeria Di Farias`;
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
    infimg.innerHTML = `<img class="infimg" src="../img/sorveteriaolinda1.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/sorveteriaolinda2.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/sorveteriaolinda3.jpg">`;
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

const info14 = document.querySelector('.info14');
info14.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/cincosois1.jpg">`;
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

const info15 = document.querySelector('.info15');
info15.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/sambura1.jpg">`;
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
    infimg.innerHTML = `<img class="infimg" src="../img/costeiro1.jpg">`;
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

const info18 = document.querySelector('.info18');
info18.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/patteo1.jpg">`;
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

const info019 = document.querySelector('.info019');
info019.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/garagemtapioca1.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/garagemtapioca2.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Garagem Tapiocaria`;
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
    <a target="_blank" href="https://www.instagram.com/reel/CtuZ3psoFOh/?igshid=MTc4MmM1YmI2Ng==" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}
//Fechar aba

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
    html.style.overflow = 'scroll';
    
}

//Version mobile 

const info001 = document.querySelector('.info001');
info001.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/artegrill2.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/artegrill1.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Arte & Grill`;
    inftxtcont.innerHTML += `O Restaurante Art Grill de Olinda com um cardápio Regional há mais de 20 anos de existência, é um dos restaurantes mais bonitos do Alto da Sé de Olinda, especialista em frutos do mar e comidas regionais e com uma excelente Peixada ao molho de camarão, tem uma vista privilegiada da cidade historica e instalações aconchegantes. Tudo isso, somado a um variado cardápio, faz do Art Gril  um  lugar perfeito para suas refeições.`;
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
const info002 = document.querySelector('.info002');
info002.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/boiebrasa1.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/boiebrasa2.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/boiebrasa3.jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/boiebrasa4.jpg">`;
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
    <a target="_blank" href="https://localpartner.com.br/olinda/churrascaria/boi-e-brasa-olinda/" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}
const info003 = document.querySelector('.info003');
info003.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/cantinhodase2.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/cantinhodase2.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Cantinho da Sé`;
    inftxtcont.innerHTML += `Comida regional farta e bem temperada pode ser facime encontrada no restaurante. Em funcionamento há mais de 40 anos  apresenta a mesma qualidade da ma localizada em Olinda. O Peixe ao molho de camarão pecialidade da casa, seguido da carne de sol sertaneja, decorada com pimentões e ervilha ao molho de ta arroz, farofa de jerimum, feijão e macaxeira frita. També ficam atrás o cozido de chambaril com arroz, piro e o galeto na brasa, servida para três pessoas.`;
    inftxth.innerHTML += "";
    inftxtd.innerHTML += "Terça a quinta, das 11h às 23h; sexta e sábado, das liha go, das 11h às 18h.";

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
const info0019 = document.querySelector('.info0019');
info0019.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/garagemtapioca1.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/garagemtapioca2.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Garagem Tapiocaria`;
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
    <a target="_blank" href="https://www.instagram.com/reel/CtuZ3psoFOh/?igshid=MTc4MmM1YmI2Ng==" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}
const info004 = document.querySelector('.info004');
info004.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/galeriasaosalvador.jpg">`;
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
const info005 = document.querySelector('.info005');
info005.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/imaginario1.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Imaginário Brasileiro artesanato`;
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
    <a target="_blank" href="www.imaginariobrasileiro.com.br" id="cvisit" class="c wats tw" style="position: relative;top: 181px;left: -15px;cursor: pointer;">
        <h1 class="ctw t">Visitar</h1></a>
</label>`;
}
const info006 = document.querySelector('.info006');
info006.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/sorveteriaolinda1.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/sorveteriaolinda2.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/sorveteriaolinda3.jpg">`;
    infimg4.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    infimg5.innerHTML = `<img class="infimg" src="../img/BiuTurIMG (1).jpg">`;
    inftxt.innerHTML += `Galeria Di Farias`;
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
const info007 = document.querySelector('.info007');
info007.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/sorveteriaolinda1.jpg">`;
    posts.style.display = 'block';
    html.style.overflow = 'hidden';
    infimg2.innerHTML = `<img class="infimg" src="../img/sorveteriaolinda2.jpg">`;
    infimg3.innerHTML = `<img class="infimg" src="../img/sorveteriaolinda3.jpg">`;
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
const info008 = document.querySelector('.info008');
info008.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/cincosois1.jpg">`;
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
const info009 = document.querySelector('.info009');
info009.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/sambura1.jpg">`;
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
const info0010 = document.querySelector('.info0010');
info0010.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/costeiro1.jpg">`;
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
const info0011 = document.querySelector('.info0011');
info0011.onclick = function() {
    infimg.innerHTML = `<img class="infimg" src="../img/patteo1.jpg">`;
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
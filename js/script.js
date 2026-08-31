/* =========================================================
   CONFIGURACIÓN — edita solo esta parte para personalizar
   ========================================================= */
const CONFIG = {
  name: "Nombre",
  birthDate: "2004-08-31",
  turningAge: 22,

  things: [
    { title: "Tu sonrisa", text: "Porque tienes una de esas sonrisas que pueden cambiar completamente el ambiente de un momento." },
    { title: "Tu mirada", text: "Hay algo especial en tu forma de mirar, de esas cosas que probablemente tú ni siquiera notas, pero que alguien más puede recordar durante mucho tiempo." },
    { title: "Tu forma de ser", text: "Porque no necesitas esforzarte demasiado para hacer que tu personalidad destaque." },
    { title: "Tu manera de hablar", text: "Incluso las conversaciones más sencillas pueden terminar siendo especiales cuando vienen de ti." },
    { title: "Tu espontaneidad", text: "Esa manera tuya de hacer cosas inesperadas y convertir un momento normal en uno que termina quedándose en la memoria." },
    { title: "Tu ternura", text: "Porque tienes una parte muy bonita y dulce que aparece incluso cuando probablemente no te das cuenta." },
    { title: "Tu forma de reír", text: "Hay risas que simplemente se escuchan, y hay otras que terminan haciendo que uno también quiera sonreír." },
    { title: "Tu personalidad", text: "Porque eres mucho más que una cara bonita. Hay una personalidad detrás de esa sonrisa que hace que conocerte sea todavía más interesante." },
    { title: "Tu manera de preocuparte por los demás", text: "Es bonito encontrar personas que tienen la capacidad de pensar en cómo están los demás." },
    { title: "Tu autenticidad", text: "Porque no hay nada más bonito que alguien que puede ser simplemente quien es." },
    { title: "Tus pequeños detalles", text: "Esas pequeñas cosas que haces sin pensar demasiado son precisamente las que terminan haciendo la diferencia." },
    { title: "Tu forma de ver las cosas", text: "Porque tienes una manera particular de interpretar el mundo y eso hace que conversar contigo nunca sea exactamente igual." },
    { title: "Tu energía", text: "Hay personas cuya presencia simplemente se nota. Tú eres una de ellas." },
    { title: "Tu fortaleza", text: "Has llegado hasta aquí superando días buenos, días malos y momentos que probablemente nadie más conoce completamente." },
    { title: "Tus sueños", text: "Porque tienes todavía muchísimas cosas por vivir, descubrir y conseguir." },
    { title: "Tu forma de querer", text: "Cuando alguien realmente te importa, se nota en los pequeños detalles." },
    { title: "Tu inteligencia", text: "Esa capacidad que tienes para aprender, entender y resolver las cosas también forma parte de lo increíble que eres." },
    { title: "Tu belleza", text: "Sí, eres muy bonita. Pero lo bonito es que tu belleza no termina en lo que se ve." },
    { title: "Tus imperfecciones", text: "Porque incluso esas pequeñas cosas que quizá tú cambiarías forman parte de la persona que eres, y precisamente eso te hace real." },
    { title: "Todo lo que todavía no sabes de ti misma", text: "Hay tantas cosas bonitas que probablemente todavía no has descubierto sobre ti." },
    { title: "La persona que estás llegando a ser", text: "Porque cumplir 22 no significa tener todo resuelto. Significa estar construyendo poco a poco la persona que quieres ser." },
    { title: "Simplemente tú", text: "Y si tuviera que elegir solamente una cosa, elegiría esta: que seas tú. Porque no necesitas convertirte en alguien diferente para ser especial." }
  ],

  wishes: [
    "Que nunca te falten motivos para sonreír.",
    "Que encuentres personas que sepan valorarte.",
    "Que cumplas aquello que hoy parece lejano.",
    "Que nunca pierdas tu esencia.",
    "Que tengas días tranquilos.",
    "Que viajes muchísimo.",
    "Que conozcas lugares increíbles.",
    "Que tengas personas sinceras a tu lado.",
    "Que nunca dejes de aprender.",
    "Que tengas valentía para empezar de nuevo.",
    "Que te quieras cada día un poquito más.",
    "Que tengas muchas aventuras.",
    "Que puedas cumplir tus sueños.",
    "Que tengas salud y tranquilidad.",
    "Que siempre tengas un lugar donde sentirte en casa.",
    "Que recibas el mismo cariño que das.",
    "Que tengas momentos inolvidables.",
    "Que nunca te conformes con menos de lo que mereces.",
    "Que siempre encuentres algo por lo que agradecer.",
    "Que tengas muchísimas historias que contar.",
    "Que este año sea mejor que el anterior.",
    "Que seas muy feliz."
  ],

  photos: [
    { src: "icons/image1.png", caption: "Porque hay momentos que merecen quedarse." },
    { src: "icons/image2.png", caption: "Una sonrisa demasiado bonita para no guardarla." },
    { src: "icons/image3.png", caption: "De esas fotos que simplemente hacen sonreír." },
    { src: "icons/image4.png", caption: "Una pequeña parte de alguien increíble." }
  ],

  letter: `Para una niña muy bonita que hoy cumple 22...

Hoy quiero que sepas, aunque sea por un momento, todo lo que representas para quienes te rodean. No es solo un cumpleaños más: es un año entero de aprender, de crecer, de reír y también de sostenerte en los días difíciles.

Ojalá pudieras verte como te ve la gente que te quiere de verdad. Ojalá supieras cuántas cosas bonitas hay en ti que probablemente todavía ni siquiera has notado.

Este es apenas el comienzo de otro año lleno de historias por vivir. Espero que lo vivas con la misma luz con la que iluminas todo lo que tocas.

Feliz cumpleaños.`
};

/* =========================================================
   NAVEGACIÓN ENTRE CAPÍTULOS
   ========================================================= */
const chapters = ["intro", "birthday", "things", "wishes", "gallery", "letter", "final"];
const navMap = {
  intro: "intro", birthday: "intro",
  things: "things",
  wishes: "gallery", gallery: "gallery",
  letter: "letter", final: "letter"
};
let currentChapter = 0;

function goToChapter(id){
  const idx = chapters.indexOf(id);
  if (idx === -1) return;
  currentChapter = idx;

  document.querySelectorAll(".screen").forEach(s => s.classList.toggle("active", s.id === id));
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.go === navMap[id]);
  });

  const active = document.getElementById(id);
  active.querySelectorAll(".fade-in").forEach(el => {
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  });
}

document.querySelectorAll("[data-next]").forEach(btn => {
  btn.addEventListener("click", () => goToChapter(btn.dataset.next));
});
document.querySelectorAll(".nav-link, .nav-logo").forEach(btn => {
  btn.addEventListener("click", () => goToChapter(btn.dataset.go));
});

document.getElementById("startBtn").addEventListener("click", () => goToChapter("birthday"));

/* =========================================================
   CONTADOR DE DÍAS / HORAS
   ========================================================= */
function setupCounter(){
  document.getElementById("bigNumber").textContent = CONFIG.turningAge;
}
setupCounter();

/* =========================================================
   3. TARJETAS — 22 COSAS
   ========================================================= */
let thingIndex = 0;
const totalThings = CONFIG.things.length;

function renderThing(){
  const t = CONFIG.things[thingIndex];
  document.getElementById("thingNumber").textContent = String(thingIndex + 1).padStart(2, "0");
  document.getElementById("thingTitle").textContent = t.title;
  document.getElementById("thingText").textContent = t.text;
  document.getElementById("cardCountCurrent").textContent = thingIndex + 1;
  document.getElementById("thingsProgress").style.width = ((thingIndex + 1) / totalThings * 100) + "%";

  const card = document.getElementById("thingCard");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "";

  document.getElementById("thingsEnd").hidden = thingIndex !== totalThings - 1;
}

document.getElementById("cardNext").addEventListener("click", () => {
  if (thingIndex < totalThings - 1){
    thingIndex++;
    renderThing();
  } else {
    document.getElementById("thingsEnd").hidden = false;
  }
});
document.getElementById("cardPrev").addEventListener("click", () => {
  if (thingIndex > 0){
    thingIndex--;
    document.getElementById("thingsEnd").hidden = true;
    renderThing();
  }
});
renderThing();

document.addEventListener("keydown", (e) => {
  if (!document.getElementById("things").classList.contains("active")) return;
  if (e.key === "ArrowRight") document.getElementById("cardNext").click();
  if (e.key === "ArrowLeft") document.getElementById("cardPrev").click();
});

/* =========================================================
   4. 22 DESEOS
   ========================================================= */
let wishIndex = 0;
const totalWishes = CONFIG.wishes.length;

function renderWish(){
  const el = document.getElementById("wishText");
  el.style.animation = "none";
  void el.offsetWidth;
  el.style.animation = "";
  el.textContent = CONFIG.wishes[wishIndex];
  document.getElementById("wishCurrent").textContent = wishIndex + 1;
}
renderWish();

document.getElementById("wishNext").addEventListener("click", () => {
  if (wishIndex < totalWishes - 1){
    wishIndex++;
    renderWish();
  }
  if (wishIndex === totalWishes - 1){
    document.getElementById("wishNext").hidden = true;
    document.getElementById("toGallery").hidden = false;
  }
});

/* =========================================================
   5. GALERÍA
   ========================================================= */
function renderGallery(){
  const row = document.getElementById("polaroidRow");
  const rotations = [-4, 3, -2, 5, -3, 2, -5, 4];
  CONFIG.photos.forEach((p, i) => {
    const fig = document.createElement("figure");
    fig.className = "polaroid";
    fig.style.setProperty("--r", (rotations[i % rotations.length]) + "deg");

    const photoBox = document.createElement("div");
    photoBox.className = "polaroid-photo";
    const img = document.createElement("img");
    img.src = p.src;
    img.alt = p.caption;
    img.loading = "lazy";
    img.onerror = () => {
      img.remove();
      photoBox.textContent = "añade tu foto aquí";
    };
    photoBox.appendChild(img);

    const caption = document.createElement("figcaption");
    caption.textContent = p.caption;

    fig.appendChild(photoBox);
    fig.appendChild(caption);
    row.appendChild(fig);
  });
}
renderGallery();

/* =========================================================
   6. CARTA
   ========================================================= */
document.getElementById("openLetterBtn").addEventListener("click", () => {
  const envelope = document.getElementById("envelope");
  envelope.classList.add("opened");
  spawnPetals();

  setTimeout(() => {
    document.getElementById("envelopeWrap").style.display = "none";
    const paper = document.getElementById("letterPaper");
    paper.hidden = false;
    typewriteLetter();
  }, 500);
});

function typewriteLetter(){
  const target = document.getElementById("letterBody");
  const text = CONFIG.letter;
  let i = 0;
  target.textContent = "";
  const speed = 18;

  function step(){
    if (i < text.length){
      target.textContent += text[i];
      i++;
      setTimeout(step, speed);
    } else {
      document.getElementById("toFinal").hidden = false;
    }
  }
  step();
}

function spawnPetals(){
  const container = document.getElementById("petals");
  const symbols = ["🌷", "🌸", "🌼"];
  for (let n = 0; n < 16; n++){
    const p = document.createElement("span");
    p.className = "petal";
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (4 + Math.random() * 3) + "s";
    p.style.animationDelay = (Math.random() * 2) + "s";
    container.appendChild(p);
    setTimeout(() => p.remove(), 9000);
  }
}

/* =========================================================
   7. FINAL
   ========================================================= */
function renderFinal(){
  document.getElementById("finalTitle").textContent =
    CONFIG.name && CONFIG.name !== "Nombre"
      ? `Feliz cumpleaños, ${CONFIG.name}`
      : "Feliz cumpleaños";
}
renderFinal();

const restartModal = document.getElementById("restartModal");
document.getElementById("restartBtn").addEventListener("click", () => restartModal.hidden = false);
document.getElementById("restartNo").addEventListener("click", () => restartModal.hidden = true);
document.getElementById("restartYes").addEventListener("click", () => {
  restartModal.hidden = true;
  location.reload();
});

/* =========================================================
   DECORACIÓN FLOTANTE POR PANTALLA
   (rellena visualmente cada sección sin sobrecargarla)
   ========================================================= */
(function addDecor(){
  const sets = {
    stars: ["✦", "✧", "⋆"],
    flowers: ["🌷", "🌸", "✦"]
  };
  document.querySelectorAll(".screen[data-deco]").forEach(screen => {
    const kind = screen.dataset.deco;
    const glyphs = sets[kind] || sets.flowers;
    const count = kind === "stars" ? 16 : 6;
    for (let i = 0; i < count; i++){
      const el = document.createElement("span");
      el.className = "deco-glyph";
      if (kind === "stars") el.classList.add("deco-twinkle");
      el.setAttribute("aria-hidden", "true");
      el.textContent = glyphs[i % glyphs.length];
      const size = (1 + Math.random() * 1.1).toFixed(2);
      el.style.fontSize = size + "rem";
      el.style.left = (5 + Math.random() * 85) + "%";
      el.style.top = (10 + Math.random() * 78) + "%";
      el.style.animationDelay = (Math.random() * 5).toFixed(1) + "s";
      el.style.animationDuration = (5 + Math.random() * 3).toFixed(1) + "s";
      if (kind === "stars"){
        el.style.setProperty("--op-min", (0.12 + Math.random() * 0.12).toFixed(2));
        el.style.setProperty("--op-max", (0.45 + Math.random() * 0.3).toFixed(2));
      }
      el.style.color = kind === "stars"
        ? "rgba(253,243,240,.6)"
        : "var(--rosa-oscuro)";
      screen.appendChild(el);
    }
  });
})();

/* =========================================================
   ESTRELLAS DE FONDO (canvas, visibles desde el inicio)
   ========================================================= */
(function stars(){
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, particles;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function init(){
    resize();
    const count = Math.min(70, Math.floor((w * h) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.3,
      s: Math.random() * 0.15 + 0.02,
      o: Math.random() * 0.5 + 0.2
    }));
  }
  function draw(){
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#FDF3F0";
    particles.forEach(p => {
      ctx.globalAlpha = p.o;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      if (!reduceMotion){
        p.y -= p.s;
        if (p.y < -4){ p.y = h + 4; p.x = Math.random() * w; }
      }
    });
    ctx.globalAlpha = 1;
    if (!reduceMotion) requestAnimationFrame(draw);
  }
  window.addEventListener("resize", init);
  init();
  draw();
})();

/* =========================================================
   ESTELA DEL CURSOR
   ========================================================= */
(function cursorTrail(){
  const trail = document.getElementById("cursor-trail");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  let last = 0;
  window.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - last < 30) return;
    last = now;
    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";
    trail.style.opacity = "0.5";
    clearTimeout(trail._t);
    trail._t = setTimeout(() => trail.style.opacity = "0", 300);
  });
})();

/* =========================================================
   CORAZONES FLOTANTES OCASIONALES
   ========================================================= */
(function floatingHearts(){
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  setInterval(() => {
    if (currentChapter === 0) return;
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.setProperty("--dx", (Math.random() * 40 - 20) + "px");
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5200);
  }, 4500);
})();
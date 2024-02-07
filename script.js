window.onload = function() {
  var isHome = true;
  var isAboutMe = false;
  var isProject = false;
  var links = false;
  let introText = document.querySelector("#AboutDesc");
  let linkButton = document.querySelector(".Links");
  let homeButton = document.querySelector(".Home");
  let aboutButton = document.querySelector(".About_Me");
  let projectButton = document.querySelector(".Projects");
  let suit = document.querySelector(".suit");
  let name = document.querySelector(".name");
  let buttons = document.querySelector(".buttons");
  let projectText = document.querySelector("#projectDesc");
  let info = document.querySelector(".info");
  gsap.fromTo(name, { x: "-40vw" }, { x: "0vw", ease: "power2.out", duration: 2.5 })
  gsap.fromTo(buttons, { x: "70vw" }, { x: "0vw", ease: "power2.out", duration: 2.5 })
  loadHome(suit, name, buttons);
  aboutButton.addEventListener("click", async function() {
    if (isHome && !isAboutMe) {
      await deloadHome(suit);
      isHome = false;
      isAboutMe = true;
      loadAboutMe(introText);
    }
    if (isProject && !isAboutMe) {
      await deloadProject(projectDesc);
      isProject = false;
      isAboutMe = true;
      loadAboutMe(introText);
    }
    if(links && !isAboutMe) {
      await deloadLinks(info);
      links = false;
      isAboutMe = true;
      loadAboutMe(introText);
    }
  });
  homeButton.addEventListener("click", async function() {
    if (isAboutMe && !isHome) {
      await deloadAboutMe(introText);
      isHome = true;
      isAboutMe = false;
      loadHome(suit, name, buttons);
    }
    if (isProject && !isHome) {
      await deloadProject(projectDesc);
      isProject = false;
      isHome = true;
      loadHome(suit, name, buttons);
    }
    if(links && !isHome) {
      await deloadLinks(info);
      links = false;
      isHome = true;
      loadHome(suit, name, buttons);
    }
  });
  projectButton.addEventListener("click", async function() {
    if (isHome && !isProject) {
      await deloadHome(suit);
      isHome = false;
      isProject = true;
      loadProject(projectDesc);
    }
    if (isAboutMe && !isProject) {
      await deloadAboutMe(introText);
      isAboutMe = false;
      isProject = true;
      loadProject(projectDesc);
    }
    if(links && !isProject) {
      await deloadLinks(info);
      links = false;
      isProject = true;
      loadProject(projectDesc);
    }
  });
  linkButton.addEventListener("click", async function() {
    if (isHome && !links) {
      await deloadHome(suit);
      isHome = false;
      links = true;
      loadLinks(info);
    }
    if (isAboutMe && !links) {
      await deloadAboutMe(introText);
      isAboutMe = false;
      links = true;
      loadLinks(info);
    }
    if(isProject && !links) {
      await deloadProject(projectDesc);
      isProject = false;
      links = true;
      loadLinks(info);
    }
  });
}

function loadHome(suit, name, buttons) {
  suit.style.display = "block";
  gsap.fromTo(suit, { y: "100vh" }, { y: "2vh", ease: "power2.out", duration: 2.5 })
  let hover = gsap.to(suit, { scale: 1.1, paused: true, ease: "power2.out", duration: 1 });
  suit.addEventListener("mouseenter", () => hover.play());
  suit.addEventListener("mouseleave", () => hover.reverse());
}

async function deloadHome(suit) {
  gsap.fromTo(suit, { y: "2vh" }, { y: "100vh", ease: "power2.out", duration: 2.5 })
  await sleep(2000);
  suit.style.display = "none";
}

function loadAboutMe(introText) {
  introText.style.display = "flex";
  gsap.fromTo(introText, { y: "100vh" }, { y: "0vh", ease: "power2.out", duration: 2.5 });
}

async function deloadAboutMe(introText) {
  gsap.fromTo(introText, { y: "0vh" }, { y: "100vh", ease: "power2.out", duration: 2.5 });
  await sleep(2000);
  introText.style.display = "none";
}

function loadProject(projectDesc) {
  projectDesc.style.display = "flex";
  gsap.fromTo(projectDesc, { y: "100vh" }, { y: "0vh", ease: "power2.out", duration: 2.5 });
}

async function deloadProject(projectDesc) {
  gsap.fromTo(projectDesc, { y: "0vh" }, { y: "100vh", ease: "power2.out", duration: 2.5 });
  await sleep(2000);
  projectDesc.style.display = "none";
}

function loadLinks(info) {
  info.style.display = "flex";
  gsap.fromTo(info, { y: "100vh" }, { y: "0vh", ease: "power2.out", duration: 2.5 });
}

async function deloadLinks(info) {
  gsap.fromTo(info, { y: "0vh" }, { y: "100vh", ease: "power2.out", duration: 2.5 });
  await sleep(2000);
  info.style.display = "none";
}

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}
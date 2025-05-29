document.addEventListener("DOMContentLoaded", function () {
  // ---------- Gallery Functionality ----------
  const gallery = document.getElementById("gallery");

  const imageData = [
    {
      url: "https://ik.imagekit.io/pc2v41npm/1000200575.jpg?updatedAt=1748502038343",
      caption: "Buka Bersama Kelas 9i",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/1000197908.jpg?updatedAt=1748502038449",
      caption: "Hari Batik",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/1000200517.jpg?updatedAt=1748502038340",
      caption: "Hari Guru",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/1000200515.jpg?updatedAt=1748502038307",
      caption: "Ulang tahun Bu Fitri",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/batikdaygirl.jpeg?updatedAt=1748520741706",
      caption: "hari batik(cewe)",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/batikdayguy.jpeg?updatedAt=17485207420787",
      caption: "hari batik (cowo)",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/bukber.jpeg?updatedAt=1748520741999",
      caption: "Bukber kelas 9i",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/studytourjogja.jpeg?updatedAt=1748520750516",
      caption: "Study Tour Jogja (Studio Gamplong)",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/bulisin.jpeg?updatedAt=1748520742915",
      caption: "bu lisin tercinta (luplup)",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/bupur1.jpeg?updatedAt=1748520745519",
      caption: "Bupur :3",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/pakrival.jpeg?updatedAt=1748520746205",
      caption: "Pak Rival Nih",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/agustusguy.jpeg?updatedAt=1748520741719",
      caption: "Agustusan (cowo)",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/agustus.jpeg?updatedAt=1748520741641",
      caption: "Agustusan:v",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/after%20exam.jpeg?updatedAt=1748520742827",
      caption: "After Exam:(",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/random%20girl.jpeg?updatedAt=1748520747583",
      caption: "vintage",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/randomguy1.jpeg?updatedAt=1748520750849",
      caption: "Vintage",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/randomguy.jpeg?updatedAt=1748520749717",
      caption: "Random",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/noooo.jpeg?updatedAt=1748520754951",
      caption: "ohhnooo",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/lucu%20haha.jpeg?updatedAt=1748520754800",
      caption: "ditembak dia",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/hihi.jpeg?updatedAt=1748520753847",
      caption: "Smile :)",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/default%20jir.jpeg?updatedAt=1748520753877",
      caption: "Trio Dapa Skin Default:v",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/photo%203%20jir.jpeg?updatedAt=1748520755979",
      caption: "Trio Dapa After Exam",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/spiderman%20dapa.jpeg?updatedAt=1748520756218",
      caption: "Spidermen",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/papua.jpeg?updatedAt=1748522277006",
      caption: "Pacee",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/anak%20ilang.jpeg?updatedAt=1748520741344",
      caption: "anak siapa ini",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/vintage%20bree.jpeg?updatedAt=1748520751667",
      caption: "Vintage jir",
    },
  ];

  if (gallery) {
    imageData.forEach((item) => {
      const div = document.createElement("div");
      div.className = "gallery-item";

      const img = document.createElement("img");
      img.src = item.url;
      img.alt = item.caption;

      const caption = document.createElement("div");
      caption.className = "caption";
      caption.textContent = item.caption;

      div.appendChild(img);
      div.appendChild(caption);
      gallery.appendChild(div);
    });

    document
      .getElementById("imageUpload")
      ?.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const imgSrc = e.target.result;

            const div = document.createElement("div");
            div.className = "gallery-item";

            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = "User uploaded image";

            const caption = document.createElement("div");
            caption.className = "caption";
            caption.textContent = "Uploaded Image";

            div.appendChild(img);
            div.appendChild(caption);
            gallery.prepend(div);
          };
          reader.readAsDataURL(file);
        }
      });

    // Modal preview
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.style.cssText = `
      display: none;
      position: fixed;
      top:0; left:0; width:100vw; height:100vh;
      background: rgba(0,0,0,0.8);
      justify-content: center;
      align-items: center;
      z-index: 1000;
    `;
    document.body.appendChild(modal);

    const modalImg = document.createElement("img");
    modalImg.style.maxWidth = "90vw";
    modalImg.style.maxHeight = "90vh";
    modalImg.style.borderRadius = "8px";
    modal.appendChild(modalImg);

    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.style.cssText = `
      position: absolute;
      top: 20px;
      right: 30px;
      color: white;
      font-size: 40px;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    `;
    modal.appendChild(closeBtn);

    function openModal(src) {
      modalImg.src = src;
      modal.style.display = "flex";
    }

    function closeModal() {
      modal.style.display = "none";
      modalImg.src = "";
    }

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    function addClickEventToImage(img) {
      img.style.cursor = "pointer";
      img.addEventListener("click", () => openModal(img.src));
    }

    document
      .querySelectorAll(".gallery-item img")
      .forEach(addClickEventToImage);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains("gallery-item")) {
            const img = node.querySelector("img");
            if (img) addClickEventToImage(img);
          }
        });
      });
    });
    observer.observe(gallery, { childList: true });
  }

  // ---------- Navbar toggle ----------
  const barbtn = document.getElementById("bar-icon");
  const dropdown = document.getElementById("menu");

  barbtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });

  // submenu

  const droptog = document.querySelectorAll(".droptoggle");
  const submenu = document.getElementsByClassName("submenu");

  for (let x = 0; x < droptog.length; x++) {
    droptog[x].addEventListener("click", () => {
      submenu[x].classList.toggle("submenushow");
    });

    // Klik diluar sidebar untuk menghilangkan nav
    const barbtn = document.querySelector("bar-icon");

    document.addEventListener("click", function (e) {
      if (!barbtn.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
      }
    });
  }
});

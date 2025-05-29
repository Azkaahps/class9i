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
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/WhatsApp%20Image%202025-05-29%20at%2020.35.43.jpeg?updatedAt=1748532131291",
      caption: "irpan kecik",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/WhatsApp%20Image%202025-05-29%20at%2020.35.42.jpeg?updatedAt=1748532131287",
      caption: "unyu unyu",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/WhatsApp%20Image%202025-05-29%20at%2020.35.45.jpeg?updatedAt=1748532131295",
      caption: "Pramuka 2022/2023",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/WhatsApp%20Image%202025-05-29%20at%2020.35.46.jpeg?updatedAt=1748532131406",
      caption: ":v",
    },
    {
      url: "https://ik.imagekit.io/pc2v41npm/photo%209i%20random/WhatsApp%20Image%202025-05-29%20at%2020.35.43.jpeg?updatedAt=1748532131291",
      caption: "irpan kecik",
    },
  ];

  if (gallery) {
    imageData.forEach((item) => {
      const div = document.createElement("div");
      div.className = "gallery-item";

      // Cek apakah item adalah video atau gambar
      if (item.isVideo) {
        const video = document.createElement("video");
        video.src = item.url;
        video.alt = item.caption;
        video.controls = true; // Menambahkan kontrol pemutar video
        video.style.maxWidth = "100%"; // Mengatur lebar video agar responsif

        const caption = document.createElement("div");
        caption.className = "caption";
        caption.textContent = item.caption;

        div.appendChild(video);
        div.appendChild(caption);
      } else {
        const img = document.createElement("img");
        img.src = item.url;
        img.alt = item.caption;

        const caption = document.createElement("div");
        caption.className = "caption";
        caption.textContent = item.caption;

        div.appendChild(img);
        div.appendChild(caption);
      }

      gallery.appendChild(div);
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

    const modalContent = document.createElement("div");
    modalContent.style.maxWidth = "50vw";
    modalContent.style.maxHeight = "75vh";
    modalContent.style.borderRadius = "8px";
    modal.appendChild(modalContent);

    const modalMedia = document.createElement("div");
    modalMedia.id = "modal-media";
    modalContent.appendChild(modalMedia);

    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.style.cssText = `
      position: absolute;
      top: 50px;
      right: 28px;
      color: white;
      font-size: 40px;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    `;
    modalContent.appendChild(closeBtn);

    function openModal(src, isVideo) {
      if (isVideo) {
        const video = document.createElement("video");
        video.src = src;
        video.controls = true;

        modalMedia.appendChild(video);
      } else {
        const img = document.createElement("img");
        img.src = src;

        modalMedia.appendChild(img);
      }
      modal.style.display = "flex";
    }

    function closeModal() {
      modal.style.display = "none";
      modalMedia.innerHTML = "";
    }

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    function addClickEventToMedia(mediaElement, isVideo) {
      mediaElement.style.cursor = "pointer";
      mediaElement.addEventListener("click", () =>
        openModal(mediaElement.src, isVideo)
      );
    }

    document.querySelectorAll(".gallery-item img").forEach((img) => {
      addClickEventToMedia(img, false);
    });

    document.querySelectorAll(".gallery-item video").forEach((video) => {
      addClickEventToMedia(video, true);
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains("gallery-item")) {
            const img = node.querySelector("img");
            const video = node.querySelector("video");
            if (img) addClickEventToMedia(img, false);
            if (video) addClickEventToMedia(video, true);
          }
        });
      });
    });
    observer.observe(gallery, { childList: true });
  }
});

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

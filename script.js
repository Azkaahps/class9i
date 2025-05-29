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

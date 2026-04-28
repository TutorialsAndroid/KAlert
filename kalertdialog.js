(function (global) {
  // Inject Font Awesome automatically
  if (!document.getElementById("kalert-fa")) {
    const fa = document.createElement("link");

    fa.id = "kalert-fa";
    fa.rel = "stylesheet";
    fa.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";

    document.head.appendChild(fa);
  }

  // Inject stylesheet automatically
  if (!document.getElementById("kalert-style")) {
    const style = document.createElement("link");
    style.id = "kalert-style";
    style.rel = "stylesheet";
    style.href =
      "https://cdn.jsdelivr.net/gh/TutorialsAndroid/KAlert@v1.1.1/kalertdialog.css";
    document.head.appendChild(style);
  }

  function createModal({ message, type = "info", buttons }) {
    return new Promise((resolve) => {
      const overlay = document.createElement("div");
      overlay.className = "kalert-overlay";

      const modal = document.createElement("div");
      modal.className = `kalert-box kalert-${type}`;

      modal.innerHTML = `
        <div class="kalert-icon">${getIcon(type)}</div>
        <div class="kalert-message">${message}</div>
        <div class="kalert-buttons">
          ${buttons
            .map(
              (btn, index) =>
                `<button class="kalert-btn" data-index="${index}">
                  ${btn.text}
                </button>`,
            )
            .join("")}
        </div>
      `;

      overlay.appendChild(modal);
      document.body.appendChild(overlay);

      modal.querySelectorAll(".kalert-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const index = btn.dataset.index;
          overlay.remove();
          resolve(buttons[index].value);
        });
      });
    });
  }

  function getIcon(type) {
    const icons = {
      success: '<i class="fa-solid fa-circle-check"></i>',
      error: '<i class="fa-solid fa-circle-xmark"></i>',
      warning: '<i class="fa-solid fa-triangle-exclamation"></i>',
      info: '<i class="fa-solid fa-circle-info"></i>',
    };

    return icons[type] || icons.info;
  }

  global.KAlert = {
    show(message, type = "info") {
      return createModal({
        message,
        type,
        buttons: [{ text: "OK", value: true }],
      });
    },

    confirm(message, type = "warning") {
      return createModal({
        message,
        type,
        buttons: [
          { text: "Cancel", value: false },
          { text: "Confirm", value: true },
        ],
      });
    },
  };
})(window);

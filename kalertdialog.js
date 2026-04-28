(function (global) {
  // Version for cache busting
  const version = "v1.2.0";

  if (!document.getElementById("kalert-fa")) {
    const fa = document.createElement("link");

    fa.id = "kalert-fa";

    fa.rel = "stylesheet";

    fa.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";

    document.head.appendChild(fa);
  }

  if (!document.getElementById("kalert-style")) {
    const style = document.createElement("link");

    style.id = "kalert-style";

    style.rel = "stylesheet";

    style.href =
      "https://cdn.jsdelivr.net/gh/TutorialsAndroid/KAlert@" + version + "/kalertdialog.css";

    document.head.appendChild(style);
  }

  function icon(type) {
    const icons = {
      success: "fa-circle-check",

      error: "fa-circle-xmark",

      warning: "fa-triangle-exclamation",

      info: "fa-circle-info",
    };

    return icons[type] || icons.info;
  }

  function modal(options = {}) {
    return new Promise((resolve) => {
      const {
        title = "",

        message = "",

        type = "info",

        confirmText = "OK",

        cancelText = "Cancel",

        showCancel = false,

        input = false,

        placeholder = "",

        closeOnOutside = true,
      } = options;

      const overlay = document.createElement("div");

      overlay.className = "kalert-overlay";

      const box = document.createElement("div");

      box.className = `kalert-box kalert-${type}`;

      box.innerHTML = `
        <div class="kalert-icon">
          <i class="fa-solid ${icon(type)}"></i>
        </div>

        ${title ? `<div class="kalert-title">${title}</div>` : ""}

        <div class="kalert-message">${message}</div>
        ${input ? `<input class="kalert-input" placeholder="${placeholder}"/>` : ""}

        <div class="kalert-buttons">
          ${showCancel ? `<button class="kalert-btn cancel">${cancelText}</button>` : ""}
          <button class="kalert-btn confirm">${confirmText}</button>
        </div>
      `;

      overlay.appendChild(box);

      document.body.appendChild(overlay);

      if (closeOnOutside) {
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) {
            overlay.remove();

            resolve(null);
          }
        });
      }

      document.addEventListener("keydown", function esc(e) {
        if (e.key === "Escape") {
          overlay.remove();

          resolve(null);

          document.removeEventListener("keydown", esc);
        }
      });

      box.querySelector(".confirm").onclick = () => {
        const value = input ? box.querySelector(".kalert-input").value : true;

        overlay.remove();

        resolve(value);
      };

      if (showCancel) {
        box.querySelector(".cancel").onclick = () => {
          overlay.remove();

          resolve(false);
        };
      }
    });
  }

  global.KAlert = {
    show(options) {
      if (typeof options === "string") {
        options = { message: options };
      }

      return modal(options);
    },

    confirm(options) {
      if (typeof options === "string") {
        options = { message: options };
      }

      options.showCancel = true;

      options.confirmText = "Confirm";

      return modal(options);
    },

    prompt(options) {
      options.input = true;

      options.showCancel = true;

      options.confirmText = "Submit";

      return modal(options);
    },
  };
})(window);

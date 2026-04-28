const style = document.createElement("link");

style.rel = "stylesheet";
style.href = "https://cdn.jsdelivr.net/gh/TutorialsAndroid/kalertdialog@latest/kalertdialog.css";

document.head.appendChild(style);

(function (global) {
  function createDialog(message) {
    const overlay = document.createElement("div");
    overlay.className = "kalert-overlay";

    const box = document.createElement("div");
    box.className = "kalert-box";

    box.innerHTML = `
      <p>${message}</p>
      <button id="kalert-ok">OK</button>
    `;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    document.getElementById("kalert-ok").addEventListener("click", () => {
      overlay.remove();
    });
  }

  function createConfirm(message, callback) {
    const overlay = document.createElement("div");
    overlay.className = "kalert-overlay";

    const box = document.createElement("div");
    box.className = "kalert-box";

    box.innerHTML = `
      <p>${message}</p>
      <button id="kalert-yes">Yes</button>
      <button id="kalert-no">No</button>
    `;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    document.getElementById("kalert-yes").onclick = () => {
      callback(true);
      overlay.remove();
    };

    document.getElementById("kalert-no").onclick = () => {
      callback(false);
      overlay.remove();
    };
  }

  global.KAlert = {
    show(message) {
      createDialog(message);
    },

    confirm(message, callback) {
      createConfirm(message, callback);
    },
  };
})(window);

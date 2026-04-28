# KAlert.js

✨ Lightweight, modern, animated alert dialog library for JavaScript projects.

KAlert.js provides beautiful alert and confirm dialogs with **zero setup required**.
It automatically loads styles and icons and works instantly via CDN.

---

# 🚀 Features

✅ Animated modal dialogs

✅ Promise-based API

✅ Font Awesome icons included automatically

✅ Blur background overlay

✅ Confirm dialog support

✅ Zero configuration required

✅ Works via CDN (jsDelivr)

✅ Lightweight and fast

✅ No dependencies

---

# 📦 Installation

Include via CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/TutorialsAndroid/KAlert@v1.2.0/kalertdialog.js"></script>
```

That's it. No setup needed.

---

# 📘 Usage

## Simple Alert

```js
KAlert.show({
    title: "Success",
    message: "Saved successfully!",
    type: "success"
});
```

Supported types:

```
success
error
warning
info
```

Example:

```js
 KAlert.show({
    title: 'Error',
    message: 'Something went wrong!',
    type: 'error',
});
```

---

## Confirm Dialog

Promise-based confirm dialog:

```js
KAlert.confirm({
title: "Delete this file?",
message: "This action cannot be undone"
}).then(result => {
    if(result){
        console.log("User confirmed");
    }else{
        console.log("User cancelled");
    }
});
```

---

# 🎨 Alert Types Preview

| Type    | Example             |
| ------- | ------------------- |
| success | Green check icon    |
| error   | Red cross icon      |
| warning | Yellow warning icon |
| info    | Blue info icon      |

Icons powered automatically by Font Awesome.

---

# ⚡ Why KAlert.js?

Unlike default browser alerts:

```
alert("Hello")
```

KAlert provides:

✔ animations
✔ modern UI
✔ async promise support
✔ customizable styles
✔ professional look

---

# 📂 CDN Versioning (Recommended)

Use version locking for stability:

```html
<script src="https://cdn.jsdelivr.net/gh/TutorialsAndroid/KAlert@v1.2.0/kalertdialog.js"></script>
```

Or latest version:

```html
<script src="https://cdn.jsdelivr.net/gh/TutorialsAndroid/KAlert@latest/kalertdialog.js"></script>
```

---

# 🛠 Example Full Usage

```html
<script src="https://cdn.jsdelivr.net/gh/TutorialsAndroid/KAlert@v1.2.0/kalertdialog.js"></script>

<script>

KAlert.show({
    title: "Welcome",
    message: "Hello from KAlert.js",
    type: "info"
});

KAlert.confirm({
title: "Continue?",
message: "Do you want to proceed?"
}).then(result => console.log(result));

</script>
```

---

# 📜 License

MIT License

Free for personal and commercial use.

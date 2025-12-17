const files = [
  "photo.jpg",
  "image.png",
  "icon.gif",
  "document.pdf",
  "my-photo.jpg",
  "cat.jpeg",
  "logo_png",
  "wallpaper.png",
];

const regex = /\w+\.(?:jpg|png|gif)$/;
let r = /\w+\.(?:jpg|png|gif)$/;

files.forEach((file) => {
  console.log(`${file} → ${regex.test(file)}`);
});

console.log("apple.jpg".match(r));

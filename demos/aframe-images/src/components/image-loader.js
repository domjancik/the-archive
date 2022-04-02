/* global AFRAME, THREE */

const { loadImages } = require("../load-utils");

AFRAME.registerSystem("image-loader", {
  schema: {
    // default: "http://localhost:7500",
    default: "/files",
  },
  init: function () {
    this.load();
  },

  load: async function () {
    const imagePaths = await loadImages(this.data);
    console.log(imagePaths);

    const imagePathsSubset = imagePaths.slice(0, 200);
    imagePathsSubset.forEach(this.addImage.bind(this));

    window.s = this;
  },

  addImage: function (src) {
    console.log(`adding ${src}`);
    const imageElement = document.createElement("a-image");
    const randomFromTo = (from, to) => Math.random() * (to - from) + from;

    imageElement.setAttribute("src", src);
    const position = {
      x: randomFromTo(-10, 10),
      y: randomFromTo(1, 3),
      z: randomFromTo(-10, 10),
    };
    console.log(position);
    // TODO aspect correct ratio
    imageElement.setAttribute("width", 1);
    imageElement.setAttribute("height", 2/3);
    // TODO more reasonable positions
    imageElement.setAttribute("position", position);

    this.sceneEl.appendChild(imageElement);
    setTimeout(() => {
        imageElement.object3D.lookAt(0, 1.7, 0);
    }, 0);
  },
});

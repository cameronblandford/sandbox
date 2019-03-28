const _ = require("lodash");

const pre = [
  "crypto",
  "theo",
  "anthro",
  "arthro",
  "astro",
  "biblio",
  "chryso",
  "dicto",
  "duo",
  "bio",
  "techno",
  "ethno",
  "homeo",
  "demo",
  "gastro",
  "homo",
  "hetero",
  "hypo",
  "icono",
  "iso",
  "logo",
  "metro",
  "necro",
  "thermo",
  "xeno",
  "hyper"
];

post = ["logism", "logy", "graphy", "sophy", "nomy", "cracy", "nomy", "teny"];

const gen = () => {
  return _.sample(pre) + _.sample(post);
};

console.log(gen());

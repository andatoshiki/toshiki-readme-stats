const numb = require("numbro");
const jaJP = require("numbro/languages/ja-JP");

numb.registerLanguage(jaJP, true);
numb.setLanguage("ja-JP");
console.log(numb(10000, "native").format("0a"));
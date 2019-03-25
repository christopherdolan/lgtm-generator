#!/usr/bin/env node
var enUS = require('dictionary-en-us');

enUS(function(err, result) {
  var dict = result.dic.toString()
  var dictAry = dict.split("\n")
  var result = {"l": false, "g": false, "t": false, "m": false}
  shuffle(dictAry).forEach(function(el) {
    if (!result["l"] && el.match('^l','i')) {
      if (el.match('/')) {
        el = el.substring(0, el.indexOf('/'))
      }
      result["l"] = el
    }
    if (!result["g"] && el.match('^g','i')) {
      if (el.match('/')) {
        el = el.substring(0, el.indexOf('/'))
      }
      result["g"] = el
    }
    if (!result["t"] && el.match('^t','i')) {
      if (el.match('/')) {
        el = el.substring(0, el.indexOf('/'))
      }
      result["t"] = el
    }
    if (!result["m"] && el.match('^m','i')) {
      if (el.match('/')) {
        el = el.substring(0, el.indexOf('/'))
      }
      result["m"] = el
    }
    if (result["l"] && result["g"] && result["t"] && result["m"]) {
      console.log(result["l"], result["g"], result["t"], result["m"])
      process.exit(0)
    }
  })
});

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

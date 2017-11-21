const tap = require('tap');
const test = tap.test;
const {Item, Shop} = require('./gilded_rose');

test("Gilded Rose", (t) => {
  t.test("should foo", (t) => {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    t.equal(items[0].name, "fixxme");
  });
});

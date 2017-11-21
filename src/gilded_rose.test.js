const tap = require('tap');
const test = tap.test;
const { Item, Shop } = require('./gilded_rose');

test("Gilded Rose", (t) => {
    function shopWithItems(items) {
        return new Shop(items);
    }
    t.test("after quality update on a non-special item", (t) => {
        t.test("length is unchanged", (t) => {
            const items = shopWithItems([new Item("foo", 0, 0)]).updateQuality();
            t.equal(items.length, 1);
            t.end();
        });
        t.test("name stays", (t) => {
            const items = shopWithItems([new Item("foo", 0, 0)]).updateQuality();
            t.equal(items[0].name, "foo");
            t.end();
        });

        t.test('the quality lowers by 1', (t) => {
            const items = shopWithItems([new Item('', 1, 4)]).updateQuality();
            t.equal(items[0].quality, 3);
            t.end()
        });
        t.test('the sell-in lowers by 1', (t) => {
            const items = shopWithItems([new Item('', 1, 4)]).updateQuality();
            t.equal(items[0].sellIn, 0);
            t.end()
        });
        t.test('quality lowers by 2, once sell-in is 0', (t) => {
            const items = shopWithItems([new Item('', 0, 4)]).updateQuality();
            t.equal(items[0].quality, 2);
            t.end()
        });
        t.test('quality is never negative', (t) => {
            const items = shopWithItems([new Item('', 0, 0)]).updateQuality();
            t.equal(items[0].quality, 0);
            t.end()
        });
        t.end();
    });
    t.test('update quality of "Aged Brie"', (t) => {
        t.test('quality increases by 2', (t) => {
            const items = shopWithItems([new Item('Aged Brie', 0, 0)]).updateQuality();
            t.equal(items[0].quality, 2);
            t.end()
        });
       t.end();
    });

    t.end();
});

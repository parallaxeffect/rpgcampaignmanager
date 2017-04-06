QUnit.module("Insert tests");
QUnit.test("Category exists", function (assert) {
	var cat = category();
	assert.ok(cat, "Category exists");
});

QUnit.test("Insert into category", function (assert) {
	var cat = category();
	var id = cat.insert({});
	assert.equal(id, 0, "Insert returned id 0");
});

QUnit.test("Insert two items", function (assert) {
	var cat = category();
	var id1 = cat.insert({});
	var id2 = cat.insert({});
	assert.equal(id1, 0, "Insert returned id 0");
	assert.equal(id2, 1, "Insert returned id 1");
});

QUnit.module("Read tests");
QUnit.test("Read item", function (assert) {
	var cat = category();
	var item = {"name": "item"};
	var id = cat.insert(item);
	var ret = cat.read(id);
	assert.equal(ret, item, "Read back inserted item");	
});

QUnit.test("Read two items", function (assert) {
	var cat = category();
	var item1 = {"name": "item one"};
	var item2 = {"name": "item two"};
	var id1 = cat.insert(item1);
	var id2 = cat.insert(item2);
	assert.equal(cat.read(id1), item1, "Read back item one");
	assert.equal(cat.read(id2), item2, "Read back item two");
});

QUnit.module("Delete tests");
QUnit.test("Delete item", function (assert) {
	var cat = category();
	var item1 = {"name": "item one"};
	var id1 = cat.insert(item1);
	cat.delete(id1);
	assert.ok(!cat.read(id1), "Item deleted");
});

QUnit.test("Delete one item of two", function (assert) { 
	var cat = category();
	var item1 = {"name": "item one"};
	var item2 = {"name": "item two"};
	var id1 = cat.insert(item1);
	var id2 = cat.insert(item2);
	cat.delete(id1);
	assert.ok(!cat.read(id1), "item one deleted");
	assert.equal(cat.read(id2), item2, "item two intact");
});

QUnit.module("List tests");
QUnit.test("list items", function (assert) {
	var cat = category();
	var item1 = {"name": "item one"};
	var item2 = {"name": "item two"};
	var id1 = cat.insert(item1);
	var id2 = cat.insert(item2);
	assert.deepEqual(cat.list(), [item1, item2], "list both items");
});

QUnit.test("list items after delete", function (assert) {
	var cat = category();
	var item1 = {"name": "item one"};
	var item2 = {"name": "item two"};
	var item3 = {"name": "item three"};
	var id1 = cat.insert(item1);
	var id2 = cat.insert(item2);
	var id3 = cat.insert(item3);
	cat.delete(id2);
	// This test should change to behave more like JSON API
	assert.deepEqual(cat.list(), [item1, undefined, item3], "list items one and three");
});

QUnit.module("Resource id tests");
QUnit.test("insert resource with id", function (assert) {
	var cat = category();
	var item23 = {"name": "item twentythree"};
	cat.insert(item23, 23);
	assert.deepEqual(cat.read(23), item23, "read back item 23");
});

QUnit.test("insert same id twice", function (assert) {
	var cat = category();
	var item10 = {"name": "item ten"};
	cat.insert(item10, 10);
	var anotheritem = {"name": "another item"};
	cat.insert(anotheritem, 10);
	assert.deepEqual(cat.read(10), item10, "read back original item");
});

QUnit.module("key test");
QUnit.test("list keys", function (assert) {
	var cat = category();
	var item10 = {"name": "item ten"};
	cat.insert(item10, 10);
	assert.deepEqual(cat.keys(), ["10"], "listed keys");
});
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
QUnit.module("Category View");
QUnit.test("categoryview exists", function (assert) {
	var view = categoryView();
	assert.ok(view, "View exists");
});

QUnit.test("empty category view", function (assert) {
	var res = resource();
	var view = categoryView(res);
	assert.equal(view.html(), "", "Empty view returns empty string");
});

QUnit.test("single item category view", function (assert) {
	var res = resource();
	var cat = resNewOb("category", {"name": "character"});
	res.insert(cat);
	var item = resNewOb("character", {"name": "Scooby"});
	res.insert(item);
	var view = categoryView(res);
	var expected = '<div class="category"><h3>character</h3><div><ul><li><a href="#">Scooby</a></li></ul></div></div>';
	assert.equal(view.html(), expected, "category view generated");
});
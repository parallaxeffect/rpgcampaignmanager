QUnit.module("Resource tests");
QUnit.test("Resource exists", function (assert) {
	var res = resource();
	assert.ok(res, "Resource exists");
});

QUnit.test("Resource identifier object", function (assert) {
	var expected = {
		"data": {
			"type": "articles",
			"id": "1"
		}
	}
	assert.deepEqual(resId("articles", "1"), expected, "Resource identifier object returned");
});

QUnit.test("Force to string", function (assert) {
	var expected = {
		"data": {
			"type": "books",
			"id": "2"
		}
	}
	assert.deepEqual(resId("books", 2), expected, "RIO returned string id");
});

QUnit.test("Return null on empty", function (assert) {
	var res = resource();
	var rio = resId("articles", "1");
	assert.equal(res.read(rio), null, "Empty resource returns null");
});

QUnit.test("Return inserted item", function (assert) {
	var res = resource();
	var item = {
		"name": "Scooby"
	};
	var obj = resOb("character", "1", item);
	res.insert(obj);
	assert.deepEqual(res.read("character", "1"), obj, "Returned object");
});

QUnit.test("Return two inserted items", function (assert) {
	var res = resource();
	var item1 = {
		"name": "Scooby"
	}
	var item2 = {
		"name": "Shaggy"
	}
	var obj1 = resOb("character", "1", item1);
	var obj2 = resOb("character", "2", item2);
	res.insert(obj1);
	res.insert(obj2);
	assert.deepEqual(res.read("character", "1"), obj1, "Object one returned");
	assert.deepEqual(res.read("character", "2"), obj2, "Object two returned");
});

QUnit.test("Return items of different types", function (assert) {
	var res = resource();
	var item1 = {
		"name": "Scooby"
	};
	var item2 = {
		"name": "Scooby Snack"
	};
	var obj1 = resOb("character", "1", item1);
	var obj2 = resOb("item", "1", item2);
	res.insert(obj1);
	res.insert(obj2);
	assert.deepEqual(res.read("character", "1"), obj1, "Object one returned");
	assert.deepEqual(res.read("item", "1"), obj2, "Object two returned");
});

QUnit.test("Delete item", function (assert) {
	var res = resource();
	var item = {
		"name": "Scooby"
	};
	var obj = resOb("character", "1", item);
	res.insert(obj);
	res.delete(obj);
	assert.equal(res.read("character", "1"), null, "Item deleted");
});

QUnit.test("List category", function (assert) {
	var res = resource();
	var item = {
		"name": "Scooby"
	};
	var obj = resOb("character", "1", item);
	res.insert(obj);
	var expected = [{ "data": {
		"type": "character",
		"id": "1"
	}}]
	assert.deepEqual(res.list("character"), expected, "RIO listed");
	
});

QUnit.test("Read resource identifier", function (assert) {
	var res = resource();
	var item = {
		"name": "Scooby"
	};
	var obj = resOb("character", "1", item);
	var rio = resId("character", "1");
	res.insert(obj);
	assert.deepEqual(res.read(rio), obj, "Returned object");
});

QUnit.test("Insert object without id", function (assert) {
	var res = resource();
	var item = {
		"name": "Scooby"
	};
	var obj = resNewOb("character", item);
	assert.equal("0", res.insert(obj), "Id returned");
	assert.deepEqual(res.read("character", "0").data.attributes, item, "item retrieved");
});
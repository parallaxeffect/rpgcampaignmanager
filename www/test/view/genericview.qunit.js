QUnit.module("View");
QUnit.test("generic view exists", function (assert) {
	var view = genericView();
	assert.ok(view, "View exists");
}); 

QUnit.test("generate html", function (assert) {
	var view = genericView('Name');
	var html = '<div class="view"><h3>Name</h3><div></div></div>';
	assert.equal(view.html(), html, "html generated");
});

QUnit.test("subview", function (assert) {
	var view = subView();
	var html = '<div></div>';
	assert.equal(view.html(), html, "html generated");
});

QUnit.test("basic view", function (assert) {
	var item = resOb("character", "1", {"name": "Scooby"});
	var view = basicView(item);
	var html = '<div class="view"><h3>character</h3><div>' +
		       '<ul><li>name: Scooby</li></ul>'+
	           '</div></div>';
	assert.equal(view.html(), html, "html generated");
});

QUnit.test("edit view", function (assert) {
	var item = resOb("character", "1", {"name": "Scooby"});
	var view = editView(item);
	var html = '<div class="view"><h3>character</h3><div>' +
		       '<ul><li>name: <input value="Scooby"></li></ul>'+
	           '</div></div>';
	assert.equal(view.html(), html, "html generated");
});

QUnit.test("notes view", function (assert) {
	var item = resOb("character", "1", {
		"name": "Scooby", 
		"notes": "Likes Scooby Snacks."
	});
	var view = notesView(item);
	var html = '<div class="view"><h3>Scooby</h3><div>' +
	           '<textarea>Likes Scooby Snacks.</textarea>' +
			   '</div></div>';
	assert.equal(view.html(), html, "html generated");
});
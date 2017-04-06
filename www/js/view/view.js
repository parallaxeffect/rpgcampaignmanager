QUnit.module("View");
QUnit.test("generic view exists", function (assert) {
	var view = genericView();
	assert.ok(view, "View exists");
});
QUnit.module("List view")
QUnit.test("Generate Scooby view from list", function (assert) {
	var characters = ["Shaggy", "Velma", "Fred", "Daphne", "Scooby"];
	var view = listview();
	var html = view.html(characters);
	
	var expected = "<div>"+
	    "<ul>"+
		  "<li><a href='#'>Shaggy</a></li>"+
		  "<li><a href='#'>Velma</a></li>"+
		  "<li><a href='#'>Fred</a></li>"+
		  "<li><a href='#'>Daphne</a></li>"+
		  "<li><a href='#'>Scooby</a></li>"+
		"</ul>"+
	  "</div>";
	
	assert.equal(html, expected, "View generated");
});

QUnit.test("Generate Scooby view", function (assert) {
	var characters = ["Shaggy", "Velma", "Fred", "Daphne", "Scooby"];
	var cat = category();
	for (var i in characters) {
		cat.insert(characters[i]);
	}
	
	var view = listview();
	var html = view.html(cat.list());
	
	var expected = "<div>"+
	    "<ul>"+
		  "<li><a href='#'>Shaggy</a></li>"+
		  "<li><a href='#'>Velma</a></li>"+
		  "<li><a href='#'>Fred</a></li>"+
		  "<li><a href='#'>Daphne</a></li>"+
		  "<li><a href='#'>Scooby</a></li>"+
		"</ul>"+
	  "</div>";
	
	assert.equal(html, expected, "View generated");
});

QUnit.test("Generate Rocky view", function (assert) {
	var characters = ["Rocky", "Bullwinkle"];
	var cat = category();
	for (var i in characters) {
		cat.insert(characters[i]);
	}
	
	var view = listview();
	var html = view.html(cat.list());
	
	var expected = "<div>"+
	    "<ul>"+
		  "<li><a href='#'>Rocky</a></li>"+
		  "<li><a href='#'>Bullwinkle</a></li>"+
		"</ul>"+
	  "</div>";
	
	assert.equal(html, expected, "View generated");
});
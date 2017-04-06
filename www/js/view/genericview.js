genericView = function (name) {
	return {
		name: name,
		
		html: function () {
			return this.render();
		},
		
		render: function () {
			var template = '<div class="view"><h3>{{name}}</h3><div>{{{content}}}</div></div>';
			return Mustache.render(template, {"name": this.name, "content": this.content.bind(this)});
		},
		
		content: function () {
			return '';
		}
		
	};
}

subView = function () {
	return {
		html: function () {
			return "<div></div>";
		}
	}
}

basicView = function (object) {
	var type = object.data.type;
	
	var that = genericView(type);
	that.object = object;
	that.fields = function () {
		return Object.entries(this.object.data.attributes);
	};
	that.template = "<ul>{{#.}}" +
		"<li>{{0}}: {{1}}</li>"+
		"{{/.}}</ul>";
	that.content = function () {
			
		var fields = this.fields();
		console.log(fields)
		return (Mustache.render(this.template, fields));
	};
	return that;
}

editView = function (object) {
	var that = basicView(object);
	that.template = "<ul>{{#.}}" +
		'<li>{{0}}: <input value="{{1}}"></li>'+
		"{{/.}}</ul>";
	return that;
}

notesView = function (object) {
	var name = object.data.attributes.name;
	var that = genericView(name);
	that.notes = object.data.attributes.notes;
	that.template = '<textarea>{{.}}</textarea>';
	that.content = function () {
		return Mustache.render(this.template, this.notes);	
	};
	return that;
}



listview = function() {
	return {
		html: function (list) {
			template = "<div><ul>{{#list}}" +
			"<li><a href='#'>{{.}}</a></li>" +
			"{{/list}}</ul></div>"
			data = {"list": list};
			
			return (Mustache.render(template, data));
		}
	};
}
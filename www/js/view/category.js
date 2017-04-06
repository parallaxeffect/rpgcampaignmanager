categoryView = function (res) {
	return {
		html: function () {
			var html = "";
			catlist = res.list("category");
			for (var index in catlist) {
				var cat = res.read(catlist[index]).data.attributes.name;
				var list = res.list(cat).map(function (item) {
					return res.read(item);
				});
				
				var template = '<div class="category">' +
				'<h3>{{category}}</h3>' +
				'<div><ul>{{#list}}' +
				'<li><a href="#">{{data.attributes.name}}</a></li>' +
				'{{/list}}</ul></div>' +
				'</div>';
				
				var data = {
					"category": cat,
					"list": list
				};
			
				html += (Mustache.render(template, data));
			}
			return html;
		}
	};
}
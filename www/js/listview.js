listview = function() {
	return {
		html: function (list) {
			var that = "<div>"+"<ul>";		 
			for (var i in list) {
				that = that + this.listitem(list[i]);
			}
			that = that +"</ul>"+"</div>";
			return that;
		},
		
		listitem: function (item) {
			return "<li><a href='#'>"+item +"</a></li>";
		}
	};
}
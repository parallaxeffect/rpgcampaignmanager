category = function () {
	var that = {
		items: [],
		insert: function (item) {
			return this.items.push(item) - 1;
		},
		
		read: function (id) {
			return this.items[id];
		},
		
		delete: function (id) {
			delete this.items[id];
		},
		
		list: function () {
			return this.items;
		}
	}
	return that;
}
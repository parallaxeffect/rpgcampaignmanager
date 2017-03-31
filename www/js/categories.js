category = function () {
	var that = {
		count: 0,
		items: [],
		insert: function (item) {
			return this.items.push(item) - 1;
		},
		
		read: function (id) {
			return this.items[id];
		}
	}
	return that;
}
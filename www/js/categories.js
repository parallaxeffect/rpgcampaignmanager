category = function () {
	var that = {
		items: [],
		insert: function (item, id) {
			if (id !== undefined) {
				if (id in this.items) {
					return undefined;
				}
				this.items[id] = item;
				return id;
			}
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
		},
		
		keys: function () {
			return Object.keys(this.items);
		}
		
		
	}
	return that;
}
resource = function () {
	return {
		categories: {},
		
		read: function (type, id) {
			if (type.data) {
				id = type.data.id;
				type = type.data.type;
			}
			
			if (type in this.categories) {
				var item = this.categories[type].read(id);
				if (item) {
					return resOb(type, id, item);
				}
			}
			
			return null;
		},
		
		insert: function (object) {
			var type = object.data.type;
			var id = object.data.id;
			var attr = object.data.attributes;
			if (!(type in this.categories)) {
				this.categories[type] = category();
			}
			return this.categories[type].insert(attr, id);
			
		},
		
		delete: function (object) {
			var type = object.data.type;
			var id = object.data.id;
			if (type in this.categories) {
				this.categories[type].delete(id);
			}
		},
		
		list: function (type) {
			if (type in this.categories) {
				var keys = this.categories[type].keys();
				return keys.map( function (key) {
					return resId(type, key);
				});
			}
			return [];
		}
	};
}

resId = function (type, id) {
	return {
		"data": {
			"type": type.toString(),
			"id" : id.toString()
		}
	}
}

resOb = function (type, id, object) {
	return {
		"data": {
			"type": type.toString(),
			"id": id.toString(),
			"attributes": object
		}
	}
}

resNewOb = function (type, object) {
	return {
		"data": {
			"type": type.toString(),
			"attributes": object
		}
	}
}
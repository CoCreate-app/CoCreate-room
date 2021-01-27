const CoCreateRoom = {
  
	init: function(container) {
		let mainContainer = container || document;
		if (!mainContainer.querySelectorAll) {
			return;
		}
		
		let elements = mainContainer.querySelectorAll('[data-namespace], [data-room]');
		
		let clients = {};
		elements.forEach((el) => {
			if (el.isUsedForRoom) {
				return;
			}
			const host = CoCreate.host;
			let namespace = el.getAttribute('data-namespace');
			let room = el.getAttribute('data-room') || ''
			if (!namespace) {
				namespace = config.organization_Id;
			}
			
			let key = `${namespace}`;
			if (room) {
				key = `${namespace}/${room}`
			}
			
			if (!clients[key]) {
				CoCreateSocket.create({
					namespace,
					room,
					host
				})
				
				clients[key] = true;
			}
			
			el.isUsedForRoom = true;
		});
	}
}

CoCreateRoom.init();

export default CoCreateRoom;
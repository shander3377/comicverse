AFRAME.registerComponent("comics-poster", {
	init: function () {
		this.posterContainer = this.el;
		this.createCards();
	},

	createCards: function () {
		const data = [
			{
				id: "spider-man",
				title: "Spider Man",
				src: "assets/spider-man.jpg",
			},
			{
				id: "iron-man",
				title: "Iron Man",
				src: "assets/iron-man.jpg",
			},
			{
				id: "super-man",
				title: "Super Man",
				src: "assets/super-man.jpg",
			},
			{
				id: "bat-man",
				title: "Bat Man",
				src: "assets/bat-man.jpg",
			},
		];
		let previousxposition = -60;
		for (var i = 0; i < data.length; i++) {
			const posx = previousxposition + 25;
			const posy = 15;
			const posz = -40;
			const position = { x: posx, y: posy, z: posz };
			previousxposition = posx;

			var borderEl = this.createBorder(position, data[i].id);

            var thumbnailEl = this.createThumbnail(data[i]);
			borderEl.appendChild(thumbnailEl);

		

			this.posterContainer.appendChild(borderEl);
			console.log(borderEl)
		}
	},

	createBorder: function (pos, id) {
		const el = document.createElement("a-entity");
		console.log(id)
		el.setAttribute("id", id);
		el.setAttribute("material", { color: "white", opacity: 1 });
		el.setAttribute("geometry", {
            primitive: "plane",
            width: 22,
            height: 30
		});
		el.setAttribute("position", pos);
		el.setAttribute("visible", true);
		el.setAttribute("highlight", {});

		return el;
	},

    createThumbnail: function (item) {
		const el = document.createElement("a-entity");
		el.setAttribute("material", { src: item.src });
        el.setAttribute("position", { x: 0, y: 0, z: 0.1 });

		el.setAttribute("visible", true);
		el.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
		});
console.log(item.url)
		return el;
	},


});

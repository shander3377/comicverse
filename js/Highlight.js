AFRAME.registerComponent("highlight", {
	schema: {
		selectedItemId: { type: "string", default: "" },
	},

	init: function () {
		this.handleMouseEnter();
		this.handleMouseLeave();
	},
update: function(){
	var fadeBackground = document.querySelector("#fadeBackground");
	
	c = fadeBackground.children
	console.log(c)
	if (c.length > 0) {
		console.log("doing")
		for (var i = 0; i <= c.length; i++){
			console.log(c[i])
			fadeBackground.removeChild(c[i])
		} 
	} else {
		this.handleMouseClickEvent()
	}
},
	handleMouseEnter: function () {
		this.el.addEventListener("mouseenter", (e) => {
			const id = this.el.getAttribute("id");

			const posterIds = ["spider-man", "super-man", "iron-man", "bat-man"];
			if (posterIds.includes(id)) {
				const posterContainer = document.querySelector("#poster-container");
				posterContainer.setAttribute("highlight", {
					selectedItemId: id,
				});

				this.el.setAttribute("material", { color: "#1565c0" });
				// var pos = this.el.getAttribute("position");
				// pos.z += 10;
				// this.el.setAttribute("position", pos);
			}
		});
	},

	handleMouseLeave: function () {
		// const selectedItemEl = document.querySelector(`#${selectedItemId}`)
		this.el.addEventListener("mouseleave", () => {
			const selectedItemId = this.data.selectedItemId;
			if (selectedItemId) {
				const el = document.querySelector(`#${selectedItemId}`);
				const id = el.getAttribute("id");
				//checking if wrong selectedItemId is not there, if its not there then it will run perfectly fine
				if (id === selectedItemId) {
					el.setAttribute("material", { color: "white" });
					// var pos = el.getAttribute("position");
					// pos.z -= 10;
					// el.setAttribute("position", pos);
				}
			}
			// 	selectedItemEl.setAttribute("material", { color: "white" });
		});
	},

	handleMouseClickEvent: function () {
		this.el.addEventListener("click", (e) => {
			const {selectedItemId} = this.data
			var fadeBackground = document.querySelector("#fadeBackground");
			var titleEL = document.querySelector("#title");
			var cursorEl = document.querySelector("#camera-cursor");
			if (selectedItemId) {
				
				fadeBackground.setAttribute("visible", true);
				fadeBackground.setAttribute("InfoBanner", { itemId: selectedItemId });
				titleEL.setAttribute("visible", false);
				cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
				cursorEl.setAttribute("geometry", {
				  radiusInner: 0.03,
				  radiusOuter: 0.04,
				});
			} else {
				fadeBackground.setAttribute("visible", false);
				titleEL.setAttribute("visible", true);
				cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
				cursorEl.setAttribute("geometry", {
				  radiusInner: 0.08,
				  radiusOuter: 0.12,
				});
			}
		});
	},
});

AFRAME.registerComponent("highlight", {
	schema: {
		selectedItemId: { type: "string", default: "" },
	},

	init: function () {
		this.handleMouseEnter();
		this.handleMouseLeave();
	},

	handleMouseEnter: function () {
		this.el.addEventListener("mouseenter", (e) => {
			const id = this.el.getAttribute("id");

			const posterIds = ["spider-man", "super-man", "iron-man", "bat-man"];
			if (posterIds.includes(id)) {
				const posterContainer = document.querySelector("#poster-container");
				console.log(id);
				posterContainer.setAttribute("highlight", {
					selectedItemId: id,
				});
				// var camera = document.querySelector("#camera")
				// var cameraPos = camera.getAttribute("position")
				// cameraPos.z -= 10
				// console.log(cameraPos)
				// camera.setAttribute("position", cameraPos)
				this.el.setAttribute("material", { color: "#1565c0" });
				var pos = this.el.getAttribute("position");
				pos.z += 10;
				this.el.setAttribute("position", pos);
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
					var pos = el.getAttribute("position");
					pos.z -= 10;
					el.setAttribute("position", pos);
					// 				var camera = document.querySelector("#camera")
					// var cameraPos = camera.getAttribute("position")
					// cameraPos.z += 10
					// console.log(cameraPos)
					// camera.setAttribute("position", cameraPos)
				}
			}
			// 	selectedItemEl.setAttribute("material", { color: "white" });
		});
	},
});

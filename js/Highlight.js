AFRAME.registerComponent("highlight", {
	schema: {
		selectedItemId: { type: "string", default: "card1" },
	},

	init: function () {
		this.handleMouseEnter();
		this.handleMouseLeave();
	},

	handleMouseEnter: function () {
        this.el.addEventListener("mouseenter", (e) => {
            const id = this.el.getAttribute("id");
            console.log(id)
            
			const posterIds = ["spider-man", "super-man", "iron-man", "bat-man"];
            if (posterIds.includes(id)) {
                console.log("works")
				const posterContainer = document.querySelector("#poster-container");
				posterContainer.setAttribute("highlight", {
					selectedItemId: id,
				});
				this.el.setAttribute("material", { color: "#1565c0" });
			}
		});
    },

    handleMouseLeave: function () {
		this.el.addEventListener("mouseleave", () => {
			const id = this.el.getAttribute("id");
			const posterIds = ["spider-man", "super-man", "iron-man", "bat-man"];
			if (posterIds.includes(id)) {
				const posterContainer = document.querySelector("#poster-container");
				posterContainer.setAttribute("highlight", {
					selectedItemId: id,
				});
				this.el.setAttribute("material", { color: "white" });
			}
		});
	},
});

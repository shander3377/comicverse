AFRAME.registerComponent("InfoBanner", {
    schema: {
        itemId: {type: "string", default: ""}
    },
    update: function () {
        this.createBanner()
    },
    createBanner: function () {
        var info = {
            "spider-man": {
                banner_url: "./assets/spiderman_banner.jpg",
                title: "Spiderman",
                released_year: "1962",
                description:
                  "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
            },
            "super-man": {
                banner_url: "./assets/superman_banner.jpeg",
                title: "Superman",
                released_year: "1983",
                description:
                  "Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939.",
            },
            "iron-man": {
                banner_url: "./assets/ironman_banner.png",
                title: "Ironman",
                released_year: "1963",
                description: "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby."
            },
            "bat-man": {
                banner_url: "./assets/batman-banner.jpg",
                title: "Batman",
                released_year: "1939",
                description: "Batman[a] is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939"
            }

       }

        
        const itemid= this.data.itemId
        
        var data = info[itemid]
        var fadeBackgroudnEl = document.querySelector("#fadeBackground")
        fadeBackgroudnEl.setAttribute("visible", true)
        const banner = document.createElement("a-entity")
        banner.setAttribute("visible", true)
        banner.setAttribute("id", `${itemid}-banner`)

        banner.setAttribute("geometry", {
            primitive: "plane", 
            width: 0.9,
            height: 1
        })
        banner.setAttribute("material", { color: "#000" });
        banner.setAttribute("position", { x: 0, y: 0.1, z: -1 });

        var imageEl = this.createImageEl(data)
        var titleEl = this.createTitleEl(data)
        var descEl = this.createDescEl(data)

        banner.appendChild(imageEl)
        banner.appendChild(titleEl)
        banner.appendChild(descEl)

        fadeBackgroudnEl.appendChild(banner)
    },

    createImageEl: function (data) {
        var imageEl = document.createElement("a-entity")
        imageEl.setAttribute("material", { src: data.banner_url })
        imageEl.setAttribute("geometry", {primitive: "plane", height:  0.4, width: 0.85})
        imageEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 })
        
        return imageEl
    },
    createTitleEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          anchor: "left",
          width: 1.2,
          height: 2,
          color: "#fff",
          value: `${item.title} (${item.released_year})`,
        });
        entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
        return entityEl;
      },
      createDescEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          anchor: "left",
          width: 0.75,
          height: 2,
          color: "#fff",
          wrapCount: "40",
          value: item.description,
        });
        entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
        return entityEl;
      },

})
// src/app.js
var app = new Vue ({
    el:'#portfolio',
    data: {
        navMenu: false,
        githubProjects: [
            { 'imageUrl': 'img/boolflix.PNG', 'title': 'Boolflix', 'url':'https://simone-pagotto.github.io/vue-boolflix/'},
            { 'imageUrl': 'img/boolflix.PNG', 'title': 'Boolflix', 'url':'https://simone-pagotto.github.io/vue-boolflix/'},
            { 'imageUrl': 'img/boolflix.PNG', 'title': 'Boolflix', 'url':'https://simone-pagotto.github.io/vue-boolflix/'},
            { 'imageUrl': 'img/boolflix.PNG', 'title': 'Boolflix', 'url':'https://simone-pagotto.github.io/vue-boolflix/'},
            { 'imageUrl': 'img/boolflix.PNG', 'title': 'Boolflix', 'url':'https://simone-pagotto.github.io/vue-boolflix/'},
            { 'imageUrl': 'img/boolflix.PNG', 'title': 'Boolflix', 'url':'https://simone-pagotto.github.io/vue-boolflix/'},
    
            
        ]
    },
    methods: {
        showNav: function() {
            let reverse = this.navMenu;
            this.navMenu = !reverse;
        }
    }
})

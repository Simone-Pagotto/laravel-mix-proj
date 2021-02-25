// src/app.js
var app = new Vue ({
    el:'#portfolio',
    data: {
        navMenu: false,
        githubProjects: [
            {'imageUrl':'img/boolflix.PNG','title' : 'Boolflix'},
            {'imageUrl':'img/boolflix.PNG','title' : 'Boolflix'},
            {'imageUrl':'img/boolflix.PNG','title' : 'Boolflix'},
            {'imageUrl':'img/boolflix.PNG','title' : 'Boolflix'},
            {'imageUrl':'img/boolflix.PNG','title' : 'Boolflix'},
            {'imageUrl':'img/boolflix.PNG','title' : 'Boolflix'},
            
        ]
    },
    methods: {
        showNav: function() {
            let reverse = this.navMenu;
            this.navMenu = !reverse;
        }
    }
})

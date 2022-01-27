console.log('ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        images:
            [
                {
                    imageLink: 'https://picsum.photos/id/237/200/300'
                },
                {
                    imageLink: 'https://picsum.photos/id/237/200/300'
                },
                {
                    imageLink: 'https://picsum.photos/id/237/200/300'
                },
                {
                    imageLink: 'https://picsum.photos/id/237/200/300'
                }
            ]
    },

    methods: {
        isIndex(index) {
            if (this.currentIndex === index) {
                return true;
            }
            return false;
        }
    }
});
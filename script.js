console.log('ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',

    data: {
        currentIndex: 0,
        autopla: undefined,
        isStarted: true,
        images:
            [
                {
                    imageLink: 'https://picsum.photos/id/237/200/300'
                },
                {
                    imageLink: 'https://picsum.photos/id/1005/367/267'
                },
                {
                    imageLink: 'https://picsum.photos/id/1001/367/267'
                },
                {
                    imageLink: 'https://cdn-images-1.medium.com/max/500/1*OBasuVv5oympWw_ImWkWuQ.png'
                }
            ]
    },

    methods: {
        isIndex(index) {
            return this.currentIndex === index;
        },

        nextPic() {
            if (this.currentIndex === this.images.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },

        prevPic() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.images.length - 1;
            } else {
                this.currentIndex--;
            }
        },

        setPic(index) {
            this.currentIndex = index;
        },

        startAutoPlay() {
            this.autoplay = setInterval(this.nextPic, 3000);
            console.log(this.autoplay);
        },

        stopAutoPlay() {
            console.log(this.autoplay);
            clearInterval(this.autoplay);
        },
    },

    created() {
        this.startAutoPlay();
    }
});
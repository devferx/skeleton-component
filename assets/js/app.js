const app = new Vue({
  el: "#app",
  data: { posts: new Array(9).fill(null) },
  methods: {
    fetchData: function () {
      setTimeout(() => {
        fetch("/assets/data/articles.json")
          .then((response) => response.json())
          .then((data) => (this.posts = data));
      }, 3000);
    },
  },
  mounted: function () {
    this.fetchData();
  },
});

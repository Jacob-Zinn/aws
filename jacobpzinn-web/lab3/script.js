Vue.component("star-rating", VueStarRating.default);

let app = new Vue({
  el: "#app",
  data: {
    number: "",
    max: "",
    current: {
      title: "",
      img: "",
      alt: "",
    },
    loading: true,
    addedName: "",
    addedComment: "",
    comments: {},
    ratings: {},
    rating: ``
  },
  created() {
    this.xkcd();
  },
  computed: {
    month() {
      var month = new Array();
      if (this.current.month === undefined) return "";
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      return month[this.current.month - 1];
    },
    avgRating() {
        let rating = this.ratings[this.number]
        if (rating != null) {
            return (rating.sum / rating.total).toPrecision(3)
        }
        // let happy = [3,2,4]
        // return (happy.reduce((sum, current) => {sum += current})) / happy.length
    },
  },
  watch: {
    number(value, oldvalue) {
      if (oldvalue === ``) {
        this.max = value;
      } else {
        this.xkcd();
      }
    },
  },
  methods: {
    async xkcd() {
      try {
        this.loading = true;

        let url = "https://xkcd.now.sh/?comic=";
        if (this.number === "") {
          url += "latest";
        } else {
          url += this.number;
        }

        let response = await axios.get(url);
        this.current = await response.data;
        this.loading = false;
        this.number = response.data.num;
      } catch (error) {
        this.number = this.max;

        console.log(error);
      }
    },
    firstComic() {
      this.number = 1;
    },
    previousComic() {
      this.number = this.current.num - 1;
      if (this.number < 1) this.number = 1;
    },
    nextComic() {
      this.number = this.current.num + 1;
      if (this.number > this.max) this.number = this.max;
    },
    lastComic() {
      this.number = this.max;
    },
    getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
    },
    randomComic() {
      this.number = this.getRandom(1, this.max);
    },
    addComment() {
      if (!(this.number in this.comments))
        Vue.set(app.comments, this.number, new Array());
      this.comments[this.number].push({
        author: this.addedName,
        text: this.addedComment,
        date: this.getDate(),
      });
      this.addedName = "";
      this.addedComment = "";
    },
    getDate() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      var today = new Date();

      return today.toLocaleDateString("en-US", options);
    },
    ratingSelected() {
      if (!(this.number in this.ratings))
        Vue.set(this.ratings, this.number, {
          sum: 0,
          total: 0,
        });
      this.ratings[this.number].sum += this.rating;
      this.ratings[this.number].total += 1;
    },
    avgRatings() {
        let ratings = this.ratings
        console.log(ratings.reduce((sum, current) => {return sum += current} ))
        console.log((ratings.reduce((sum, current) => {return sum += current})) / ratings.length)
        return (ratings.reduce((sum, current) => {return sum += current})) / ratings.length
    }
  },
});

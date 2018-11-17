// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    name: "Earn",
    photo:
      "https://ewedit.files.wordpress.com/2016/09/atl_pilot_0721_114d.jpg?w=612",
    scores: [3, 1, 1, 1, 3, 5, 1, 4, 4, 4]
  },
  {
    name: "Paper Boy",
    photo:
      "https://assets3.thrillist.com/v1/image/1770931/size/tmg-article_default_mobile.jpg",
    scores: [1, 3, 5, 4, 4, 1, 1, 3, 3, 3]
  },
  {
    name: "Tracy",
    photo:
      "http://bruhginnersguide.com/wp-content/uploads/2018/03/Waves-After-Waves-of-Corporate-Culture-Clashes-12.png",
    scores: [1, 1, 1, 5, 5, 5, 5, 3, 2, 2]
  },
  {
    name: "Darius",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 2, 4, 3, 5, 2, 2, 2, 4, 1]
  },
  {
    name: "Vanessa",
    photo:
      "https://imgix.bustle.com/uploads/image/2018/3/16/f4ebf4ec-791b-4c76-b650-057298f60ecf-atl-203_1r.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
    scores: [4, 1, 5, 2, 5, 1, 2, 5, 2, 1]
  },
  {
    name: "Dennis",
    photo:
      "https://www.thewrap.com/wp-content/uploads/2018/01/Always-Sunny-Dennis-Reynolds.jpg",
    scores: [1, 3, 1, 4, 5, 3, 2, 3, 2, 5]
  },
  {
    name: "Frank",
    photo:
      "https://yt3.ggpht.com/a-/AN66SAy8RVT-1Q8VhbBL-Y7gWBCYuqz4IFN4T-s76Q=s900-mo-c-c0xffffffff-rj-k-no",
    scores: [2, 3, 4, 4, 1, 1, 1, 1, 3, 5]
  },
  {
    name: "Dee",
    photo:
      "https://imgix.bustle.com/2017/1/4/4aab375c-6513-46e9-a4bc-7db3763e86c2.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
    scores: [3, 2, 5, 5, 5, 3, 2, 4, 4, 4]
  },
  {
    name: "Mac",
    photo:
      "https://www.maxim.com/.image/t_share/MTU2MjY5ODY3MTQwMzkyNzU4/fat-mac-donuts-promo.jpg",
    scores: [2, 3, 2, 3, 3, 4, 1, 4, 4, 5]
  },
  {
    name: "Charlie",
    photo:
      "https://uproxx.files.wordpress.com/2018/05/charlie.jpg?quality=95&w=650",
    scores: [1, 3, 5, 2, 1, 3, 4, 4, 4, 1]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;

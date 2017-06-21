var app = {
  s: {
    exampleMsg: 'hello world'
  },
  onDomReady: function () {
    console.log(this.s.exampleMsg);
  }
};

$(function () {
  app.onDomReady();
});

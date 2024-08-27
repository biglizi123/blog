var posts=["2024/08/06/hello-world/","2024/08/04/Python小屋刷题记录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
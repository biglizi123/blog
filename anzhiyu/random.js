var posts=["2024/08/04/Python小屋刷题记录/","2024/08/28/实验一 C++简单程序设计/","2024/08/28/实验二 函数的应用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2024/08/04/Python小屋刷题记录/","2024/08/28/实验一 C++简单程序设计/","2024/08/28/实验三 类和对象/","2024/08/28/实验五 数组、指针与字符串/","2024/08/28/实验四 数据的共享与保护/","2024/08/28/实验二 函数的应用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
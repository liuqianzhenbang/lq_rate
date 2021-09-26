// index.js
// 获取应用实例
var start,rate,sum;
Page({
  startNum:function(e){
    start=parseFloat(e.detail.value);
  },
  rateNum:function(e){
    rate=parseFloat(e.detail.value);
  },
  calc:function(){
    sum=start;
    for(var i=0;i<5;i++){
      sum=sum+rate*sum;
    }
    this.setData({
      sum:sum//将全局变量sum的值渲染到视图层
    })
  }
})
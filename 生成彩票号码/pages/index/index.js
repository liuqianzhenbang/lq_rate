// index.js
// 获取应用实例
var rand;
function createRand(){
  rand=[];
  for(var i=0;i<7;i++){
    var r=parseInt(Math.random()*31)*1;
    for(;r==0;){
      r=parseInt(Math.random()*31)*1;
    }
    rand.push(r);
  }
    console.log(rand[i]);
};
Page({
  onLoad:function(){
    createRand();
    this.setData({
      rand:rand
    })
  },
  newRand:function(){
    createRand();
    this.setData({
      rand:rand
    })
  }
})
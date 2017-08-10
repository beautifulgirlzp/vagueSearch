$(function() {

  $('#fullpage').fullpage({
    anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5'],
    menu: '#menu',
    navigation: true,
    afterLoad: function(anchorLink, index) {
      if (index === 2) {
        //滑动到当前页,自动播放一次动画
        $('.section0-con .layer1').addClass('auto-play1')
        $('.section0-con .layer2').addClass('auto-play2')
        $('.section0-con .layer3').addClass('auto-play3')

      }
    },
    onLeave: function(index) {

      if (index === 2) {
        //离开第二屏,去除小灯泡
        removeLight(1)
        removeLight(2)
        removeLight(3)
          //隐藏文字区域
        $('.section0-con .img4,.section0-con .img5').removeClass('active')
          //去除自动播放动画 和点击播放动画
        $('.section0-con .layer1').removeClass('show1-layer1 show2-layer1 show3-layer1 auto-play1')
        $('.section0-con .layer2').removeClass('show1-layer2 show2-layer2 show3-layer2 auto-play2')
        $('.section0-con .layer3').removeClass('show1-layer3 show2-layer3 show3-layer3 auto-play3')
      }

      if (index === 3) {
        var $target = $('.js-show-line');
        $target.nextAll('.lines').removeClass('active');
        $target.children('i.vertical').removeClass('active');
        $target.nextAll('.tip').removeClass('active');

      }
    }
  })




  //移除灯泡
  var removeLight = function(i) {
    $(`.section0-con .layer${i} .img2`).removeClass('layer-height-show-1')
    $(`.section0-con .layer${i} .img3`).removeClass('layer-height-show-2')

  }

  //增加灯泡
  var addLight = function(i) {
    $(`.section0-con .layer${i} .img2`).addClass('layer-height-show-1')
    $(`.section0-con .layer${i} .img3`).addClass('layer-height-show-2')

  }


  //第一层图片点击
  $('.section0-con .layer1 .img1').click(function() {
    //移除第2.3层的灯泡
    removeLight(2)
    removeLight(3)

    $('.section0-con .layer3').removeClass('show2-layer3 show3-layer3').addClass('show1-layer3')
    $('.section0-con .layer2').removeClass('show2-layer2 show3-layer2').addClass('show1-layer2')
    $('.section0-con .layer1').removeClass('show2-layer1 show3-layer1').addClass('show1-layer1')
      //显示第一层灯泡
    addLight(1)
    $(
      '.section0-con .layer2 .img4,.section0-con .layer3 .img4,.section0-con .layer2 .img5,.section0-con .layer3 .img5'
    ).removeClass('active')
    $('.section0-con .layer1 .img4,.section0-con .layer1 .img5').addClass('active')


  })

  //第二层图片点击
  $('.section0-con .layer2  .img1').click(function() {
    //移除第1.3层的灯泡
    removeLight(1)
    removeLight(3)

    $('.section0-con .layer3').addClass('show2-layer3')
    $('.section0-con .layer1').addClass('show2-layer1')
    $('.section0-con .layer2').addClass('show2-layer2')

    //显示第二层灯泡
    setTimeout(addLight(2), 500)
    $(
      '.section0-con .layer1 .img4,.section0-con .layer3 .img4,.section0-con .layer1 .img5,.section0-con .layer3 .img5'
    ).removeClass('active')
    $('.section0-con .layer2 .img4,.section0-con .layer2 .img5').addClass('active')


  })


  //第三层图片点击
  $('.section0-con .layer3 .img1').click(function() {

    //移除第1.2层的灯泡
    removeLight(1)
    removeLight(2)

    //第一层和第二层先向上
    $('.section0-con .layer1').addClass('show3-layer1')
    $('.section0-con .layer2').addClass('show3-layer2')
    $('.section0-con .layer3').addClass('show3-layer3')
    addLight(3)
    $(
      '.section0-con .layer1 .img4,.section0-con .layer2 .img4,.section0-con .layer1 .img5,.section0-con .layer2 .img5'
    ).removeClass('active')
    $('.section0-con .layer3 .img4,.section0-con .layer3 .img5').addClass('active')

  })


  //新首屏js
  function RandomNumBoth(Min, Max) {
    var Range = Max - Min
    var Rand = Math.random()
    var num = Min + Math.round(Rand * Range) //四舍五入
    return num
  }

  function showLine() {
    var hideLine = RandomNumBoth(1, 8)
    var showLine = RandomNumBoth(1, 8)
    $(`.section-layer .layer${hideLine} .line`).addClass('active')
    $(`.section-layer .layer${showLine} .line`).removeClass('active')

  }

  setInterval(showLine, 1000)

  // 第二个页面的事件
  $('.js-show-line').click(function() {
    $(this).nextAll('.lines').toggleClass('active');
    $(this).children('i.vertical').toggleClass('active');
    $(this).nextAll('.tip').toggleClass('active');
  });

})

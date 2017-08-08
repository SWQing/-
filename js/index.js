/**
 * Created by su on 2017/7/31.
 */
$(function () {
    /***********购物车特效***********/
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover, mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function () {
        $(this).css('color', '#fff');
    }).mouseout(function () {
        $(this).css('color', '#a4b094')
    })
    $('.shopCar').mouseover(function () {
        $('.goods').stop(true, false).slideDown();
    }).mouseout(function () {
        $('.goods').stop(true, false).slideUp();
    })

    /***********头部特效***********/
    /*表单的输入框移入效果*/
    var flag = true;
    $('.ser1').mouseover(function () {
        if(flag) {
            $('.ser1 input').css('border', '1px solid #c0c0c0').parent().siblings('.ser2').css({'border': '1px solid #c0c0c0', 'borderLeft': 'none'})
        }
    })
    $('.ser1').mouseout(function () {
        if(flag) {
            $('.ser1 input').css('border', '1px solid #ccc').parent().siblings('.ser2').css({'border': '1px solid #ccc', 'borderLeft': 'none'})
        }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function () {
        $(this).css({'color': '#fff', 'background': 'orange',})
    }).mouseout(function () {
        $(this).css({'color': '#757575', 'background': '#eee'})
    })
    /*按钮的移入效果*/
    $('.ser2').mouseover(function () {
        if(flag) {
            ser('orange', '#fff', 'none');
        }
    }).mouseout(function () {
        if(flag) {
            ser('#fff', '#000', '1px solid #ccc', 'none');
        }
    })
    function ser(a, b, c, d) {
        $('.ser1 input').css('border', '1px solid #ccc').parent().siblings('.ser2').css({
            'background': a,
            'color': b,
            'border': c,
            'borderLeft': d
        })
    }
    /*表单获取焦点时*/
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color', 'orange').siblings().css('display', 'none');
        $('.ser2').css('border-color', 'orange').siblings('.keywordList').css({'border-color': 'orange', 'display': 'block'});
    }).blur(function () {
        flag = true;
        $(this).css('border-color', '#ccc').siblings().css('display', 'block');
        $('.ser2').css('border-color', '#ccc').siblings('.keywordList').css({'border-color': '#ccc', 'display': 'none'});
    })
    /*导航效果开始*/
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color', '#ff6700');
        if($(this).index() < 7) {
            $('.select').removeClass('hide').slideDown().finish().find('ul').addClass('hide').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color', '#000');
    })
    $('.nav').mouseout(function () {
        $('.select').slideUp().finish();
    })
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish();//停止当前动画和动画队列
    }).mouseout(function () {
        $('.select').slideUp();
    })
    /*二级结束*/

    /*轮播图的效果*/
    var num = 0;
    //自动
    var timer;
    timer = setInterval(autoPlay, 5000);
    $('.banner').mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(autoPlay, 5000);
    })
    function autoPlay() {
        num++;
        num = num > 4 ? 0 : num;
        displayImg();
    }
    //手动
    $('.round li').mouseover(function () {
        num = $(this).index();
        displayImg();
    })
    //点击
    $('.direcL').click(function () {
        //上一张
        num = num - 1;
        num = num < 0 ? 4 : num;
        displayImg();
    })
    $('.direcR').click(function () {
        //下一张
        num = num + 1;
        num = num > 4 ? 0 : num;
        displayImg();
    })
    function displayImg() {
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
        $('.round li').eq(num).css('background', 'orange').siblings().css({
            'background': '#342416',
            'opacity': '0.8'
        });
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function () {
        $(this).css('background', '#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background', 'transparent');
    })
    //鼠标移出二级导航的范围后消失
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide');
    })
    //用户移入三级导航的时候让它显示
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background', '#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background', 'transparent');
    })

    /*小米明星单品特效*/
    //自动
    var n = 0;
    var auto = setInterval(function () {
        n++;
        n = n > 1 ? n = 0 : n;
        $('.star .star-list ul').css('marginLeft', (-1225 * n) + 'px');
        if( n == 0) {
            $('.star .back').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        }
        else if(n == 1) {
            $('.star .forward').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        }
    }, 10000)
    //手动
    var aa = false;
    var bb = true;
    $('.star .forward').click(function () {
        $('.star .star-list ul').css('marginLeft', '-1225px');
        $('.star .forward').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        aa = true;
        bb = false;
    })
    $('.star .back').click(function () {
        $('.star .star-list ul').css('marginLeft', '0');
        $('.star .back').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        aa = false;
        bb = true;
    })
    //颜色变化
    $('.star .forward').mouseover(function () {
        if($('.star .forward').css('color') == 'rgb(176, 180, 188)' && aa == false) {
            $(this).css('color', 'red')
        }
    }).mouseout(function () {
        if(aa == false) {
            $(this).css('color', '#b0b4bc');
        }
    })
    $('.star .back').mouseover(function () {
        if($('.star .back').css('color') == 'rgb(176, 180, 188)' && bb == false) {
            $(this).css('color', 'red')
        }
    }).mouseout(function () {
        if(bb == false) {
            $(this).css('color', '#b0b4bc');
        }
    })
    /***********商品特效***********/
    /*右侧查看全部的特效*/
    $('.allGoods .title span').mouseover(function () {
        $('.allGoods .title span a').children().addBack().css('color', 'rgb(255, 103, 0)').children();
    }).mouseout(function () {
        $('.title span a').children().addBack().css('color', '#424242');
    })
    /*商品名字特效*/
    $('.name').mouseover(function () {
        $(this).css('color', 'rgb(255, 103, 0)');
    }).mouseout(function () {
        $(this).css('color', '#000');
    })
    /*商品列表特效*/
    //阴影特效
    function outAni(self, a, b, c) {
        $(self).css({
            'transform': a,
            'transition': 'transform .4s',
            'z-index': b,
            'box-shadow': c
        })
    }
    //智能硬件、为你推荐 阴影特效
    $('.hardware .goodsList li').add('.recommend .goodsList li').mouseover(function () {
        outAni(this, 'translate(0, -2px)', '2', '0 15px 30px rgba(0, 0, 0, 0.1)');
    }).mouseout(function () {
        outAni(this, 'translate(0, 0)', '1', 'none');
    })
    //智能硬件、搭配、配件、周边、热评产品、视频 阴影特效
    $('.hardware .goodsList li').add('.seven .goodsList li').mouseover(function () {
        if($(this).index() < 7) {
            outAni(this, 'translate(0, -2px)', '2', '0 15px 30px rgba(0, 0, 0, 0.1)');
        }
    }).mouseout(function () {
        if($(this).index() < 7) {
            outAni(this, 'translate(0, 0)', '1', 'none');
        }
    })
    //评价特效
    $('.secondList > li').mouseover(function () {
        $(this).children('.evaluate').stop(true, false).slideDown();
    }).mouseout(function () {
        $(this).children('.evaluate').stop(true, false).slideUp();
    })
    //右侧tab切换
    function smallNav(self) {
        $(self).css({
            'color': '#ff6700',
            'border-bottom': '2px solid #ff6700'
        }).siblings().css({
            'color': '#000',
            'border-bottom': 'none'
        })
    }
    $('.title-list li').mouseover(function () {
        smallNav(this);
        $(this).parents('section').find('.secondList').eq($(this).index()).removeClass('hide').siblings('.secondList').addClass('hide');
    })
    //为你推荐tab特效
    var tab = 0;
    //下一个
    $('.recommend .forward').click(function () {
        if(tab >= 0 && tab < 3) {
            tab++;
            $('.recommend .goodsList ul').css('marginLeft', (-1230 * tab) + 'px');
        }
        turnC();
    })
    //上一个
    $('.recommend .back').click(function () {
        if(tab > 0 && tab <= 3) {
            tab--;
            $('.recommend .goodsList ul').css('marginLeft', (-1230 * tab) + 'px');
        }
        turnC();
    })
    function turnC() {
        tab == 3 ? $('.recommend .forward').css('color', '#dfdfe0') : $('.recommend .forward').css('color', '#b0b4bc');
        tab == 0 ? $('.recommend .back').css('color', '#dfdfe0') : $('.recommend .back').css('color', '#b0b4bc');
    }
    //内容特效
    var arr = [0, 0, 0, 0];
    var index = 0;
    //鼠标进入和移出圆圈特效
    $('.content .bottom span').mouseover(function () {
        $(this).css('background', '#ff6700');
    }).mouseout(function () {
        $(this).css('background', '#b0b0b0');
    })
    //鼠标点击圆圈特效
    $('.content .bottom span').click(function () {
        $(this).parents('ul').css('marginLeft', (-295 * $(this).index()) + 'px');
        $(this).addClass('active').siblings().removeClass('active');
        arr[index] = $(this).index();
    })
    //翻页
    $('.content .goodsList > div').mouseover(function () {
        index = $(this).index();
    })
    //下一页
    $('.content .goodsList .next').click(function () {
        arr[index] = arr[index] >= 0 && arr[index] < 3 ? arr[index] + 1 : arr[index];
        left(this, arr);
    })
    //上一页
    $('.content .goodsList .prev').click(function () {
        arr[index] = arr[index] > 0 && arr[index] <= 3 ? arr[index] - 1 : arr[index]
        right(this, arr);
    })
    //翻页对应的函数
    function left(left, arr) {
        $(left).parent().css('marginLeft', (-295 * arr[index]) + 'px');
        $(left).parent().children(' .bottom').children('span').eq(arr[index]).addClass('active').siblings().removeClass('active');
    }
    function right(right, arr) {
        $(right).parent().css('marginLeft', (-295 * arr[index]) + 'px');
        $(right).parent().children(' .bottom').children('span').eq(arr[index]).addClass('active').siblings().removeClass('active');
    }
    //视频特效
    $('.video .goodsList img').mouseover(function () {
        $(this).siblings('.icon').css('color', 'rgb(255, 103, 0)');
        $('.video .icon').mouseover(function () {
            $(this).css('color', 'rgb(255, 103, 0)');
        })
    }).mouseout(function () {
        $(this).siblings('.icon').css('color', 'rgb(255, 255, 255)');
    })
})
// 获取元素
const img1 = document.querySelectorAll(".gray");
const li1 = document.querySelector("#ul1>li:nth-child(1)");
const li1top = document.querySelectorAll(".down");
const shade = document.querySelector(".shade");
const down = document.querySelector("#down");
const hide = document.querySelectorAll(".hide");

// 下拉导航图片变色
for (let index = 0; index < img1.length; index++) {
    img1[index].onmouseenter = function () {
        this.classList.remove("gray");
        // 图片下面的字体变色
        hide[index].style.color = "#dc2a60"
    }

    img1[index].onmouseleave = function () {
        this.classList.add("gray");
        hide[index].style.color = "white"
    }
}
// 进入li触发下拉
li1.onmouseenter = function () {
    shade.style.display = "block";
    for (let index = 0; index < hide.length; index++) {
        hide[index].classList.remove("hide")
    }
    for (let index = 0; index < img1.length; index++) {
        img1[index].style.height = "155px"
    }
}


// 离开down关闭下拉效果
down.onmouseleave = function () {
    shade.style.display = "none";
    for (let index = 0; index < hide.length; index++) {
        hide[index].classList.add("hide")
    }
    for (let i = 0; i < img1.length; i++) {
        img1[i].style.height = "0"
    }
}

// 轮播图
function lunBo() {
    lock = false;
    bgColor = ["rgb(179, 189, 196)", "rgb(180, 183, 166)", "rgb(140, 152, 187)"]; //背景色
    var mySwiper = new Swiper('.swiper-container', {
        speed: 1300,
        allowTouchMove: false,//禁止触摸滑动
        parallax: true,  //文字位移视差
        on: {
            transitionStart: function () {
                lock = true;//锁住按钮
                slides = this.slides
                imgBox = slides.eq(this.previousIndex).find('.img-box') //图片包装器
                imgPrev = slides.eq(this.previousIndex).find('img')  //当前图片
                imgActive = slides.eq(this.activeIndex).find('img')  //下一张图片
                derection = this.activeIndex - this.previousIndex
                this.$el.css("background-color", bgColor[this.activeIndex]);//背景颜色动画

                imgBox.transform('matrix(0.6, 0, 0, 0.6, 0, 0)');
                imgPrev.transition(1000).transform('matrix(1.2, 0, 0, 1.2, 0, 0)');//图片缩放视差
                this.slides.eq(this.previousIndex).find('h3').transition(1000).css('color', 'rgba(255,255,255,0)');//文字透明动画

                imgPrev.transitionEnd(function () {
                    imgActive.transition(1300).transform('translate3d(0, 0, 0) matrix(1.2, 0, 0, 1.2, 0, 0)');//图片位移视差
                    imgPrev.transition(1300).transform('translate3d(' + 60 * derection + '%, 0, 0)  matrix(1.2, 0, 0, 1.2, 0, 0)');
                });
            },
            transitionEnd: function () {
                this.slides.eq(this.activeIndex).find('.img-box').transform(' matrix(1, 0, 0, 1, 0, 0)');
                imgActive = this.slides.eq(this.activeIndex).find('img')
                imgActive.transition(1000).transform(' matrix(1, 0, 0, 1, 0, 0)');
                this.slides.eq(this.activeIndex).find('h3').transition(1000).css('color', 'rgba(255,255,255,1)');

                imgActive.transitionEnd(function () {
                    lock = false
                });
                //第一个和最后一个，禁止按钮
                if (this.activeIndex == 0) {
                    this.$el.find('.button-prev').addClass('disabled');
                } else {
                    this.$el.find('.button-prev').removeClass('disabled');
                }

                if (this.activeIndex == this.slides.length - 1) {
                    this.$el.find('.button-next').addClass('disabled');
                } else {
                    this.$el.find('.button-next').removeClass('disabled');
                }
            },
            init: function () {
                this.emit('transitionEnd');//在初始化时触发一次transitionEnd事件
            },

        }
    });

    //不使用自带的按钮组件，使用lock控制按钮锁定时间
    mySwiper.$el.find('.button-next').on('click', function () {
        if (!lock) {
            mySwiper.slideNext();
        }
    })
    mySwiper.$el.find('.button-prev').on('click', function () {
        if (!lock) {
            mySwiper.slidePrev();
        }
    })
}
lunBo();

// 图片效果
const divLeft = document.querySelector(".left-img");
const imgOne = document.querySelector(".left-img>img:nth-child(2)");
const img2 = document.querySelector(".left-img>img:nth-child(1)");

const divRight = document.querySelector(".right-img");
const img3 = document.querySelector(".right-img>img:nth-child(2)");
const img4 = document.querySelector(".right-img>img:nth-child(1)");

divRight.addEventListener("mouseenter",function(){
    img4.style.display = "block";
    img3.style.display = "none";
    img2.style.display = "none";
    imgOne.style.display = "block";
})

divLeft.addEventListener("mouseenter",function(){
    img4.style.display = "none";
    img3.style.display = "block";
    img2.style.display = "block";
    imgOne.style.display = "none";
})

// 第二组
const keLo1 = document.querySelector(".keLo1");
const img5 = document.querySelector(".keLo1>img:nth-child(2)");
const img6 = document.querySelector(".keLo1>img:nth-child(1)");

const keLo2 = document.querySelector(".keLo2");
const img7 = document.querySelector(".keLo2>img:nth-child(2)");
const img8 = document.querySelector(".keLo2>img:nth-child(1)");

keLo2.addEventListener("mouseenter",function(){
    img8.style.display = "block";
    img7.style.display = "none";
    img6.style.display = "none";
    img5.style.display = "block";
})

keLo1.addEventListener("mouseenter",function(){
    img8.style.display = "none";
    img7.style.display = "block";
    img6.style.display = "block";
    img5.style.display = "none";
})
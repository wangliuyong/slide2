$(function () {

    let $buttons = $('.buttonsWrapper > button');
    let $imageWrapper = $('.images');
    let current=0;
    let $images = $imageWrapper.children('img');

    makeFakeSlide();
    $imageWrapper.css({ transform: 'translateX(-400px)' })

    $(".buttonsWrapper").on('click','button',(e)=>{
        let $button=$(e.currentTarget);
        let index =$button.index();
        goSlide(index);  
    });
    //前后切换
    $('.pre').on('click',()=>{
        goSlide(current-1);
    })
    $('.next').on('click', () => {
        goSlide(current+1);
    })
    //自动轮播
    setInterval(()=>{
        goSlide(current + 1);
    },2000);
    //slide function
    function goSlide(index) {
        if (index < 0) { 
            index = $images.length - 1
        } else if (index > $images.length - 1){
            index=0;
        }


        if (current === 0 && index === $images.length - 1) {
            //第一张切换到最后一张
            $imageWrapper.css({ transform: `translateX(${-(current) * 400}px)` })
                .one('transitionend', function () {
                    $imageWrapper.hide()
                        .offset()
                    $imageWrapper.css({ transform: `translateX(${(index + 1) * -400}px)` })
                        .show()
                    current = $images.length - 1;
                })
        } else if (current === $images.length - 1 && index === 0) {
            //最后被一张切换到第一张时
            $imageWrapper.css({ transform: `translateX(${(current + 2) * -400}px)` })
                .one('transitionend', function () {
                    $imageWrapper.hide()
                        .offset()
                    $imageWrapper.css({ transform: 'translateX(-400px)' })
                        .show()
                    current = 0;
                })

        } else {
            $imageWrapper.css({ transform: `translateX(${-(index + 1) * 400}px)` })
            current = index;
        }
    }
    
    
    /*构思过程
    listrenEvent();
     function listrenEvent(){
        $buttons.eq(0).on('click', () => {
            if (current == 2) {
                $imageWrapper.css({ transform: 'translateX(-1600px)' })
                    .one('transitionend', function () {
                        $imageWrapper.hide()
                            .offset()
                        $imageWrapper.css({ transform: 'translateX(-400px)' })
                            .show()
                        current = 0;
                    })
            } else {
                $imageWrapper.css({ transform: 'translateX(-400px)' })
                current = 0;
            }

        })

        $buttons.eq(1).on('click', () => {
            $imageWrapper.css({ transform: 'translateX(-800px)' })
            current = 1;
        })

        $buttons.eq(2).on('click', () => {
            if (current == 0) {
                $imageWrapper.css({ transform: 'translateX(0)' })
                    .one('transitionend', function () {
                        $imageWrapper.hide()
                            .offset()
                        $imageWrapper.css({ transform: 'translateX(-1200px)' })
                            .show();
                        current = 2;
                    })

            } else {
                $imageWrapper.css({ transform: 'translateX(-1200px)' })
                current = 2;
            }
        })
    } */
    
    function makeFakeSlide() {
        let $firstCopy = $images.eq(0).clone(true);
        let $lastCopy = $images.eq($images.length - 1).clone(true);
        $imageWrapper.append($firstCopy)
        $imageWrapper.prepend($lastCopy)
    }


    
    /*普通轮播
    !function slide(){
        let index, imgs = null,timer=null;
        init();
        timer=changeView();
            



        //判断用户是否切换页面的bug
        document.addEventListener('visibilitychange', (e) => {
            if(document.hidden){
                clearInterval(timer)
            }else{
                timer = changeView();
            }
        });

<<<<<<< HEAD
=======
        //定时器
        function changeView() {
            let id = setInterval(() => {
                makeLeave(getImage(index)).one("transitionend", event => {
                    makeReady($(event.currentTarget));
                });
                makeCurrent(getImage(index + 1));
                index++;
                index = (index > imgs.length - 1 ? 0 : index);
            }, 2000);
            return id;
        }

>>>>>>> development
        //重置索引
        function resetIndex(n) {
            if (n == imgs.length) {
                return 0;
            } else {
                return n;
            }
        }
        //初始化
        function init() {
            imgs = $('.images>img');
            index = 0;
            imgs.eq(0).addClass('current').siblings().addClass('ready');
        }
        //获取目标图片
        function getImage(n) {
            return imgs.eq(resetIndex(n));
            //es6用法 return $(`.images>img:nth-child(${n})`)
        }
        //切换到状态
        function makeCurrent($node) {
            $node.removeClass('ready leave').addClass('current');
            return $node;
        }
        function makeReady($node) {
            $node.removeClass('current leave').addClass('ready');
            return $node;
        }
        function makeLeave($node) {
            $node.removeClass('ready current').addClass('leave');
            return $node;
        }
    }.call(); */
    

})
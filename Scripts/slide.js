(function() {
    'use strict';
    
    // 等待 DOM 加载完成后再初始化
    function init() {
        var currentSlide = 0;
        // 限定在 craftSlider 容器内查找，避免冲突
        var slider = document.getElementById('craftSlider');
        var slides = document.querySelectorAll('#craftSlider .slide');
        var totalSlides = slides.length;
        var autoPlayInterval;
        var dotContainer = document.getElementById('sliderDots');
        
        // 调试：控制台输出元素查找结果
        console.log('Slider元素:', slider);
        console.log('图片数量:', totalSlides);
        console.log('圆点容器:', dotContainer);
        
        // 如果找不到必要元素，停止执行
        if (!slider) {
            console.error('错误：未找到 id="craftSlider" 的轮播容器');
            return;
        }
        if (totalSlides === 0) {
            console.error('错误：未找到 class="slide" 的图片');
            return;
        }
        if (!dotContainer) {
            console.error('错误：未找到 id="sliderDots" 的圆点容器');
            return;
        }
        
        // 创建圆点
        function createDots() {
            dotContainer.innerHTML = ''; // 清空
            for(var i = 0; i < totalSlides; i++) {
                var dot = document.createElement('span');
                dot.className = 'dot' + (i === 0 ? ' active' : '');
                dot.onclick = (function(index) {
                    return function() {
                        goToSlide(index);
                        resetAutoPlay();
                    };
                })(i);
                dotContainer.appendChild(dot);
            }
        }
        
        // 切换幻灯片（使用 classList 更安全）
        function goToSlide(n) {
            var dots = dotContainer.querySelectorAll('.dot');
            
            // 移除当前 active
            slides[currentSlide].classList.remove('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.remove('active');
            }
            
            // 计算新索引（循环）
            currentSlide = (n + totalSlides) % totalSlides;
            
            // 添加新 active
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }
        
        // 暴露给全局供按钮调用
        window.changeSlide = function(direction) {
            goToSlide(currentSlide + direction);
            resetAutoPlay();
        };
        
        // 自动播放
        function autoPlay() {
            autoPlayInterval = setInterval(function() {
                goToSlide(currentSlide + 1);
            }, 3000);
        }
        
        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            autoPlay();
        }
        
        // 鼠标悬停暂停
        slider.onmouseenter = function() { clearInterval(autoPlayInterval); };
        slider.onmouseleave = function() { autoPlay(); };
        
        // 启动
        createDots();
        autoPlay();
        console.log('✓ 轮播图初始化成功');
    }
    
    // 确保 DOM 已加载
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
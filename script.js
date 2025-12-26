// 等待页面完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 1. Cookie 提示栏功能
    const cookieBanner = document.querySelector('.cookie-banner');
    const cookieBtn = document.querySelector('.cookie-btn');
    
    if (cookieBtn) {
        cookieBtn.addEventListener('click', function() {
            cookieBanner.style.display = 'none';
            // 在实际应用中，这里应该设置一个cookie来记住用户的选择
            localStorage.setItem('cookieAccepted', 'true');
        });
    }
    
    // 检查是否已经接受过cookie
    if (localStorage.getItem('cookieAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }
    
    // 2. 移动端汉堡菜单功能
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // 点击导航链接时关闭移动菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // 更新活动链接状态
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 3. 轮播图功能
    const slides = document.querySelectorAll('.slider-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;
    
    // 初始化轮播图
    function initSlider() {
        if (slides.length === 0) return;
        
        // 显示第一张幻灯片
        showSlide(currentSlide);
        
        // 设置自动轮播
        startAutoSlide();
        
        // 添加事件监听器
        if (prevBtn) {
            prevBtn.addEventListener('click', showPrevSlide);
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', showNextSlide);
        }
        
        // 添加指示器点击事件
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
            });
        });
        
        // 鼠标悬停时暂停自动轮播
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', pauseAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
        }
    }
    
    // 显示指定索引的幻灯片
    function showSlide(index) {
        // 隐藏所有幻灯片
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // 更新指示器
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // 显示当前幻灯片
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // 显示下一张幻灯片
    function showNextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }
    
    // 显示上一张幻灯片
    function showPrevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        showSlide(prevIndex);
    }
    
    // 跳转到指定幻灯片
    function goToSlide(index) {
        showSlide(index);
    }
    
    // 开始自动轮播
    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(showNextSlide, 5000); // 每5秒切换一次
    }
    
    // 暂停自动轮播
    function pauseAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // 4. 标签页功能
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // 移除所有按钮的active类
                tabButtons.forEach(btn => btn.classList.remove('active'));
                // 添加active类到当前按钮
                this.classList.add('active');
                
                // 隐藏所有标签页内容
                tabPanes.forEach(pane => pane.classList.remove('active'));
                // 显示当前标签页内容
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // 5. 平滑滚动功能
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 减去导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 6. 初始化所有功能
    initSlider();
    
    // 7. 响应式导航栏滚动效果
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动
            header.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 8. 产品卡片悬停效果增强
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // 9. 表单验证（如果有表单的话）
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 简单的表单验证示例
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff6b35';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // 在实际应用中，这里应该发送表单数据到服务器
                alert('表单提交成功！');
                this.reset();
            } else {
                alert('请填写所有必填字段！');
            }
        });
    });
    
    // 10. 回到顶部按钮（可选功能）
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #4299e1;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // 11. 懒加载图片（性能优化）
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // 回退方案：直接加载所有图片
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
    
    // 控制台日志（开发时有用）
    console.log('网站初始化完成！');
});

console.log("Custom.js loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, searching for elements...");
    
    // 查找所有可能的选择器
    var menuButton1 = document.querySelector('.wy-nav-top .wy-nav-top-i');
    var menuButton2 = document.querySelector('.wy-nav-top i');
    var menuButton3 = document.querySelector('.wy-nav-top .fa-bars');
    var sidebar = document.querySelector('.wy-nav-side');
    var contentWrap = document.querySelector('.wy-nav-content-wrap'); // 👈 关键：主内容区域
    
    console.log("Button1:", menuButton1);
    console.log("Button2:", menuButton2);
    console.log("Button3:", menuButton3);
    console.log("Sidebar:", sidebar);
    console.log("Content wrap:", contentWrap);
    
    // 尝试所有可能的按钮
    var menuButton = menuButton1 || menuButton2 || menuButton3;
    
    if (menuButton && sidebar && contentWrap) {
        console.log("Found button, sidebar and content, adding click handler");
        
        menuButton.addEventListener('click', function(e) {
            console.log("Menu button clicked!");
            e.preventDefault();
            
            // 检查当前状态
            var isHidden = sidebar.style.display === 'none' || getComputedStyle(sidebar).display === 'none';
            
            if (isHidden) {
                console.log("Showing sidebar");
                // 显示侧边栏
                sidebar.style.display = 'block';
                sidebar.style.left = '0';
                // 恢复内容区域的正常位置
                contentWrap.style.marginLeft = '300px'; // 或者sidebar的宽度
            } else {
                console.log("Hiding sidebar");
                // 隐藏侧边栏
                sidebar.style.display = 'none';
                // 让内容区域占满全宽
                contentWrap.style.marginLeft = '0';
            }
        });
    } else {
        console.log("Could not find menu button or sidebar or content wrap");
        console.log("Available elements in top nav:", document.querySelectorAll('.wy-nav-top *'));
        
        // 👈 由于找不到按钮，我们在顶部导航栏的左侧创建一个点击区域
        var topNav = document.querySelector('.wy-nav-top');
        if (topNav && sidebar && contentWrap) {
            console.log("Creating click area in top nav");
            
            topNav.addEventListener('click', function(e) {
                // 只有点击左边100px区域才触发
                if (e.clientX < 100) {
                    console.log("Left area clicked, toggling sidebar");
                    
                    var isHidden = sidebar.style.display === 'none' || getComputedStyle(sidebar).display === 'none';
                    
                    if (isHidden) {
                        console.log("Showing sidebar");
                        sidebar.style.display = 'block';
                        contentWrap.style.marginLeft = '300px';
                    } else {
                        console.log("Hiding sidebar");
                        sidebar.style.display = 'none';
                        contentWrap.style.marginLeft = '0';
                    }
                }
            });
        }
    }
});
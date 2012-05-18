/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
(function(){
	//加入过滤器标示并建立好对象	
	var doumail=$("a[href*='http://www.douban.com/doumail/']");
	doumail.after("<a id='douban-filter-btn' href='#'>过滤器</a>");

	var overlay_html="<div id='lemon-overlay' style='position:absolute;left: 0px;top: 0px;width:100%;height:100%;z-index: 1000;'>";
	var overlaydiv_html="<div style='width:300px;margin: 100px auto;background-color: #fff;border:1px solid #000;padding:15px;'>";
	var closelnk_html="<a href='#'' class='overlay-lnk-close'>x</a>";
	var content_html="<p>Content you want the user to see goes here</p>";
	var overlayend_html="</div></div>";
	doumail.after(overlay_html+overlaydiv_html+closelnk_html+content_html+overlayend_html);

	//缓存好【过滤器】这个关键的按钮对象
	var db_filter_btn=$("#douban-filter-btn");
	//缓存好【弹出窗口的CLOSE对象】
	var overlay_close_btn=$(".overlay-lnk-close");
	//缓存好弹出窗口本身
	var overlay_win=$("#lemon-overlay");
	//设置窗口的关闭按钮
	overlay_close_btn.click(function(){
		overlay_win.hide();	
	});

	//初始化的一些代码
	overlay_win.hide();	
	
	//过滤器链接的点击事件响应
	db_filter_btn.click(function(){
			console.log("db_filter_btn click!");
			overlay_win.show();
		}
	);

} )();

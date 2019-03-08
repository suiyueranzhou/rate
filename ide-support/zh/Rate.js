/**
 * 评分插件，结合 ht.ui.Label 展示分数，进行鼠标移动预览分数，鼠标点击选择分数，可设置为只读模式<br>
 * 样式属性(不含从父类继承)：max, is:readOnly, is:allowHalf, colors, uncheckedColors, icons, uncheckedIcons, iconWidth, iconHeight, iconGap<br>
 * 普通属性(不含从父类继承): value, hoverValue
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.Rate = function() {}

/**
 * 获取图标数量
 * @return {Number} 图标数量
 */
ht.ui.Rate.prototype.getMax = function() {}

/**
 * 设置图标数量
 * @param {Number} max 图标数量
 */
ht.ui.Rate.prototype.setMax = function(max) {}

/**
 * 判断是否为只读状态
 * @return {Boolean} 值为 true | false
 */
ht.ui.Rate.prototype.isReadOnly = function() {}

/**
 * 设置是否只读
 * @param {Boolean} readOnly 是否只读
 */
ht.ui.Rate.prototype.setReadOnly = function(readOnly) {}


/**
 * 获取是否允许半星，即是否进行分值小数位的渲染
 * @return {Boolean} 值为 true | false
 */
ht.ui.Rate.prototype.isAllowHalf = function() {}

/**
 * 设置是否允许半星
 * @param {Boolean} allowHalf 是否半星
 */
ht.ui.Rate.prototype.setAllowHalf = function(allowHalf) {}

/**
 * 获取选中颜色
 * @return {String | Array} 选中颜色
 */
ht.ui.Rate.prototype.getColors = function() {}

/**
 * 设置选中颜色，值可为一个或一组颜色值
 * @param {String | Array} colors 选中颜色
 */
ht.ui.Rate.prototype.setColors = function(colors) {}

/**
 * 获取未选中颜色
 * @return {String | Array} 未选中颜色
 */
ht.ui.Rate.prototype.getUncheckedColors = function() {}

/**
 * 设置未选中颜色，值可为一个或一组颜色值
 * @param {String | Array} uncheckedColors 未选中颜色
 */
ht.ui.Rate.prototype.setUncheckedColors = function(uncheckedColors) {}

/**
 * 获取选中图标
 * @return {String | Array} 选中图标
 */
ht.ui.Rate.prototype.getIcons = function() {}

/**
 * 设置选中图标，值可为一个或一组自定义图标
 * @param {String | Array} icons 选中图标
 */
ht.ui.Rate.prototype.setIcons = function(colors) {}

/**
 * 获取未选中图标
 * @return {String | Array} 未选中图标
 */
ht.ui.Rate.prototype.getUncheckedIcons = function() {}

/**
 * 设置未选中图标，值可为一个或一组自定义图标
 * @param {String | Array} uncheckedIcons 未选中图标(值为一个或一组颜色值)
 */
ht.ui.Rate.prototype.setUncheckedIcons = function(uncheckedIcons) {}

/**
 * 获取图标宽度
 * @return {Number} 宽度值
 */
ht.ui.Rate.prototype.getIconWidth = function() {}

/**
 * 设置图标宽度
 * @param {Number} iconWidth 宽度值
 */
ht.ui.Rate.prototype.setIconWidth = function(iconWidth) {}

/**
 * 获取图标高度
 * @return {Number} 高度值
 */
ht.ui.Rate.prototype.getIconHeight = function() {}

/**
 * 设置图标高度
 * @param {Number} iconHeight 高度值
 */
ht.ui.Rate.prototype.setIconHeight = function(iconHeight) {}

/**
 * 获取图标之间的间距
 * @return {Number} 距离值
 */
ht.ui.Rate.prototype.getIconGap = function() {}

/**
 * 设置图标之间的间距
 * @param {Number} iconGap 距离值
 */
ht.ui.Rate.prototype.setIconGap = function(iconGap) {}

/**
 * 获取分值
 * @return {Number} 分值
 */
ht.ui.Rate.prototype.getValue = function() {}

/**
 * 设置分值
 * @param {Number} value 分值
 */
ht.ui.Rate.prototype.setValue = function(value) {}

/**
 * 获取鼠标悬浮时的分值
 * @return {Number} 分值
 */
ht.ui.Rate.prototype.getHoverValue = function() {}

/**
 * 设置鼠标悬浮时的分值
 * @param {Number} hoverValue 分值
 */
ht.ui.Rate.prototype.setHoverValue = function(hoverValue) {}
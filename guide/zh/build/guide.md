
索引

* [概述](#ref_description)

---

!(#ref_description)

### 概述

`ht.ui.Rate` 评分组件，和 `ht.ui.Label` 结合实现鼠标移动预览分数，鼠标点击选择分数。

使用此组件需要先引入 `js` 文件

    <script src="ht.js"></script>
    <script src="ht-ui.js"></script>
    <script src="ht-ui-rate.js"></script>

示例：

!(#example_demo1@100)

可设置图标数量（即最大分值），图标的宽高，图标之间的间距，代码如下：

    rate.setMax(6); // 图标数量
    rate.setIconWidth(20); // 图标宽度
    rate.setIconHeight(20); // 图标高度
    rate.setIconGap(10); // 图标间距

实现标签文字随分值变化代码如下： 

    rate.on('p:hoverValue', function(e) {
        label.setText(e.newValue);
        if (!e.newValue) {
            // 当鼠标离开时，显示之前点击选中的分值
            var value = rate.getValue();
            if (value === 0) {
                label.setText();
            }
            else {
                label.setText(value);
            }
        }
    });


可设置选中和未选中两种状态下默认图标（星星）的颜色，也可设置自定义图标（颜色和自定义图标的值可为数组，分别设置对应不同分值的图标）。

!(#example_demo2@100)

代码如下：

    rate.setUncheckedColors('#ccc'); // 设置未选中颜色
    rate.setColors('red'); // 设置选中颜色
    rate.setColors(['red', 'blue', 'yellow', 'green', 'orange']);
    rate.setUncheckedIcons('icon'); // 设置未选中图标
    rate.setIcons('icon1'); // 设置选中图标
    rate.setIcons(['icon1', 'icon2', 'icon3', 'icon4', 'icon5']);

使用 `ht.Default.setImage` 进行绘制的矢量对象，可进行 `func: 'attr@color'` 绑定，绑定后可通过 `setColors`、`setUncheckedColors` 改变颜色。

    ht.Default.setImage('myIcon', {
        width: 100,
        height: 100,
        comps: [
            {
                type: 'diamond',
                rect: [0, 0, 100, 100],
                background: { func: 'attr@color' } // 进行颜色绑定
            }
        ]
    });

组件可设置为只读状态，只读状态下没有了鼠标交互，根据设置的分值，进行图标渲染，只读模式下，可设置是否允许半星（即进行分值小数位渲染）。

!(#example_demo3@200)

代码如下：

    rate.setReadOnly(true);
    rate.setAllowHalf(false); // 设置不允许半星
    rate.setValue(4.5);

组件也常用在表单中，进行星级的评定。

!(#example_demo4@160)

组件结合弹框组件，用来展示一些数据信息，可鼠标悬浮查看。

!(#example_demo5@170)
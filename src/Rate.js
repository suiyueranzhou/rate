/**
 * 评分组件
 */
ui.Rate = function () {
    ht.ui.Rate.superClass.constructor.call(this);
};

def('ht.ui.Rate', ht.ui.View, {

    ui_ac: ['max', 'is:readOnly', 'is:allowHalf', 'colors', 'uncheckedColors', 'icons', 'uncheckedIcons', 'iconWidth', 'iconHeight', 'iconGap'],

    __max: 5,                                             // 分数最大值
    __readOnly: false,                                    // 设置只读
    __allowHalf: true,                                    // 设置只读时是否允许半星
    __colors: '#F7BA2A',                                  // 默认星形图标被选中的颜色
    __uncheckedColors: '#cccccc',                         // 默认星形图标未被选中的颜色
    __icons: 'rate_star',                                 // 鼠标选中时的图标
    __uncheckedIcons: 'rate_star',                        // 鼠标未选中时的图标
    __iconWidth: 20,                                      // 图标宽度
    __iconHeight: 20,                                     // 图标高度
    __iconGap: 5,                                         // 图标间距

    ms_ac: ['value', 'hoverValue', 'formDataName'],  

    _value: 0,                                            // 选中分值   
    _hoverValue: 0,                                       // 悬浮分值                                  

    getInteractorClasses: function() {
        return [ui.RateInteractor];
    },

    figurePreferredSize: function() {
        var self = this,
            max = self.getMax(),
            iconWidth = self.getIconWidth(),
            iconHeight = self.getIconHeight(),
            gap = self.getIconGap(),
            size = {
                width: self.getPaddingLeft() + self.getPaddingRight() +
                        self.getBorderLeft() + self.getBorderRight(),
                height: self.getPaddingTop() + self.getPaddingBottom() +
                        self.getBorderTop() + self.getBorderBottom()
            };
        
        size.width += gap + max * (iconWidth + gap);
        size.height += iconHeight;

        return size;
    },

    getPreferredSizeProperties: function() {
        var preferredSizeProperties = ht.ui.Rate.superClass.getPreferredSizeProperties.call(this);
        preferredSizeProperties = Default.clone(preferredSizeProperties);

        preferredSizeProperties.max = true;
        preferredSizeProperties.iconWidth = true;
        preferredSizeProperties.iconHeight = true;
        preferredSizeProperties.iconGap = true;

        return preferredSizeProperties;
    },

    getFormDataProperties: function() {
        return { value: true };
    },

    getFormDataValue: function() {
        return this.getValue();
    },

    setFormDataValue: function(value) {
        this.setValue(value);
    },

    setAllowHalf: function(allowHalf) {
        var oldValue = this.__allowHalf;
        this.__allowHalf = allowHalf;
        // 派发属性变化事件
        this.firePropertyChange('allowHalf', oldValue, allowHalf);
        this.setValue(Math.floor(this.getValue()));
    },

    validateImpl: function(x, y, width, height) {
        var self = this;
        self.iconRects = [];
        ht.ui.Rate.superClass.validateImpl.call(self, x, y, width, height);

        var g = self.getRootContext(),

            colors = self.getColors(),
            uncheckedColors = self.getUncheckedColors(),
            icons = self.getIcons(),
            uncheckedIcons = self.getUncheckedIcons(),
            iconWidth = self.getIconWidth(),
            iconHeight = self.getIconHeight(),
            gap = self.getIconGap(),

            hoverValue = self.getHoverValue(),
            value = hoverValue || self.getValue(),
            max = self.getMax(),
            allowHalf = self.isAllowHalf();

        for(var i = 0; i < max; i++) {
            var gx = x + gap + i * (iconWidth + gap),
                gy = y;
            
            self.iconRects.push({
                rect: { x: gx - self.getPaddingLeft() - self.getBorderLeft(), y: gy - self.getPaddingTop() - self.getBorderTop(), width: i === (max - 1) ? iconWidth : iconWidth + gap, height: iconHeight }
            });
            
            g.beginPath();
            
            var color = (typeof(colors) === 'string') ? colors : colors[i],
                uncheckedColor = (typeof(uncheckedColors) === 'string') ? uncheckedColors : uncheckedColors[i],
                icon = ht.Default.isArray(icons) ? icons[i % icons.length] : icons,
                uncheckedIcon = ht.Default.isArray(uncheckedIcons) ? uncheckedIcons[i % uncheckedIcons.length] : uncheckedIcons;

            var iconDrawable = icon instanceof ht.ui.drawable.ImageDrawable ? icon : new ht.ui.drawable.ImageDrawable(icon),
                uncheckedIconDrawable = uncheckedIcon instanceof ht.ui.drawable.ImageDrawable ? uncheckedIcon : new ht.ui.drawable.ImageDrawable(uncheckedIcon);
                
            if (icon === self.__icons) iconDrawable.setColorTint(color);
            if (uncheckedIcon === self.__uncheckedIcons) uncheckedIconDrawable.setColorTint(uncheckedColor);
            
            var drawable = null;
            if (i < Math.floor(value)) {
                drawable = iconDrawable;
            }
            else if (i > Math.floor(value))  {
                drawable = uncheckedIconDrawable;
            }
            else if (allowHalf) {
                var percentage = value - Math.floor(value);
                g.save();
                g.rect(gx, gy, iconWidth * percentage, iconHeight);
                g.clip();
                iconDrawable.draw(gx, gy, iconWidth, iconHeight, null, self);
                g.restore();

                g.beginPath();
                g.save();
                g.rect(gx + iconWidth * percentage, gy, width * (1 - percentage), iconHeight);
                g.clip();  
                uncheckedIconDrawable.draw(gx, gy, iconWidth, iconHeight, null, self);
                g.restore();
            }
            else {
                drawable = uncheckedIconDrawable;
            }
            drawable && drawable.draw(gx, gy, iconWidth, iconHeight, null, self);
        }
    },
    getSerializableProperties:function() {
        var parentProperties = ht.ui.Rate.superClass.getSerializableProperties.call(this);

        return Default.addMethod(parentProperties, {
            max: true,
            'is:readOnly': true,
            'is:allowHalf': true,
            colors: true,
            uncheckedColors: true,
            icons: true,
            uncheckedIcons: true,
            iconWidth: true,
            iconHeight:true,
            iconGap: true,
            value:true,
            hoverValue: true
        });
    }
});

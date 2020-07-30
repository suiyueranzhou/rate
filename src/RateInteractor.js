/**
 * 交互器
 */
ui.RateInteractor = function (comp) {
    ui.RateInteractor.superClass.constructor.call(this, comp);
}

def(ui.RateInteractor, ui.Interactor, {
    handle_mousemove: function (e) {
        this.handle_touchmove(e);
    },
    handle_touchmove: function (e) {
        var self = this;

        Default.preventDefault(e);
        var rate = self.getComponent(),
            iconRects = rate.iconRects,
            lp = rate.lp(e),
            readOnly = rate.isReadOnly();

        var hoverValue = 0;
        for(var i = 0, len = iconRects.length; i < len; i++) {
            if (Default.containsPoint(iconRects[i].rect, lp) && !readOnly) {
                rate.setCursor('pointer');
                hoverValue = i + 1;
                break;
            }
            else {
                rate.setCursor('default');
            }
        }

        if (hoverValue !== rate.getHoverValue()) {
            rate.setHoverValue(hoverValue);
        }
    },
    handle_mousedown: function (e) {
        this.handle_touchstart(e);
    },
    handle_touchstart: function (e) {
        var self = this;

        Default.preventDefault(e);
        if (ht.Default.isLeftButton(e)) {
            var rate = self.getComponent(),
                iconRects = rate.iconRects,
                lp = rate.lp(e),
                readOnly = rate.isReadOnly();

            for(var i = 0, len = iconRects.length; i < len; i++) {
                if (Default.containsPoint(iconRects[i].rect, lp) && !readOnly) {
                    rate.setValue(i + 1);
                    break;
                }
            }
        }
    },
    handle_mouseout: function(e) {
        var self = this;

        var rate = self.getComponent();
        
        rate.setHoverValue(0);
    }
});
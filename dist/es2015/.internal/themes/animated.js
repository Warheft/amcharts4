import { SpriteState } from "../core/SpriteState";
import { Component } from "../core/Component";
import { Scrollbar } from "../core/elements/Scrollbar";
import { Tooltip } from "../core/elements/Tooltip";
import { Series } from "../charts/series/Series";
import { SankeyDiagram } from "../charts/types/SankeyDiagram";
var theme = function (object) {
    if (object instanceof SpriteState) {
        object.transitionDuration = 400;
    }
    if (object instanceof Component) {
        object.rangeChangeDuration = 800;
        object.interpolationDuration = 800;
        object.sequencedInterpolation = false;
        if (object instanceof SankeyDiagram) {
            object.sequencedInterpolation = true;
        }
    }
    if (object instanceof Tooltip) {
        object.animationDuration = 400;
    }
    if (object instanceof Scrollbar) {
        object.animationDuration = 800;
    }
    if (object instanceof Series) {
        object.defaultState.transitionDuration = 1200;
    }
};
export default theme;
//# sourceMappingURL=animated.js.map
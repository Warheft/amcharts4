/**
 * DateAxisBreak includes functionality to add breaks on a [[DateAxis]].
 *
 * A "break" can be used to "cut out" specific ranges of the axis scale, e.g.
 * weekends and holidays out of the Date-based axis.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { ValueAxisBreak } from "./ValueAxisBreak";
import { registry } from "../../core/Registry";
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Class used to define breaks for [[DateAxis]].
 *
 * A "break" can be used to "cut out" specific ranges of the axis scale, e.g.
 * weekends and holidays out of the Date-based axis.
 *
 * @see {@link IDateAxisBreakEvents} for a list of available events
 * @see {@link IDateAxisBreakAdapters} for a list of available Adapters
 * @important
 */
var DateAxisBreak = /** @class */ (function (_super) {
    __extends(DateAxisBreak, _super);
    /**
     * Constructor
     */
    function DateAxisBreak() {
        var _this = _super.call(this) || this;
        _this.className = "DateAxisBreak";
        _this.applyTheme();
        return _this;
    }
    Object.defineProperty(DateAxisBreak.prototype, "startDate", {
        /**
         * @return {Date} Start date
         */
        get: function () {
            return this.getPropertyValue("startDate");
        },
        /**
         * Starting date for the break.
         *
         * @param {Date} value Start date
         */
        set: function (value) {
            if (this.setPropertyValue("startDate", value)) {
                this.startValue = value.getTime();
                if (this.axis) {
                    this.axis.invalidateDataRange();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateAxisBreak.prototype, "endDate", {
        /**
         * @return {Date} End date
         */
        get: function () {
            return this.getPropertyValue("endDate");
        },
        /**
         * Ending date for the break.
         *
         * @param {Date} value End date
         */
        set: function (value) {
            if (this.setPropertyValue("endDate", value)) {
                this.endValue = value.getTime();
                if (this.axis) {
                    this.axis.invalidateDataRange();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return DateAxisBreak;
}(ValueAxisBreak));
export { DateAxisBreak };
/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */
registry.registeredClasses["DateAxisBreak"] = DateAxisBreak;
//# sourceMappingURL=DateAxisBreak.js.map
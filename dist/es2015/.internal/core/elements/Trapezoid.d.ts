/**
 * Functionality for drawing a trapezoid.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Sprite, ISpriteProperties, ISpriteAdapters, ISpriteEvents, SpriteEventDispatcher, AMEvent } from "../Sprite";
import { Percent } from "../../core/utils/Percent";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[Trapezoid]].
 */
export interface ITrapezoidProperties extends ISpriteProperties {
    /**
     * Wdith of the top side. Absolute (px) or relative ([[Percent]]).
     *
     * @default Percent(100)
     * @type {number | Percent}
     */
    topSide?: number | Percent;
    /**
     * Wdith of the bottom side. Absolute (px) or relative ([[Percent]]).
     *
     * @default Percent(100)
     * @type {number | Percent}
     */
    bottomSide?: number | Percent;
    /**
     * Height of the left side. Absolute (px) or relative ([[Percent]]).
     *
     * @default Percent(100)
     * @type {number | Percent}
     */
    leftSide?: number | Percent;
    /**
     * Height of the right side. Absolute (px) or relative ([[Percent]]).
     *
     * @default Percent(100)
     * @type {number | Percent}
     */
    rightSide?: number | Percent;
    /**
     * A relative vertical position of the "neck". If the top and bottom sides
     * are of different width, and `horizontalNeck` is set, a choke point
     * will be created at that position, creating a funnel shape.
     *
     * @type {Percent}
     */
    horizontalNeck?: Percent;
    /**
     * A relative horizontal position of the "neck". If the left and right sides
     * are of different height, and `verticalNeck` is set, a choke point
     * will be created at that position, creating a funnel shape.
     *
     * @type {Percent}
     */
    verticalNeck?: Percent;
}
/**
 * Defines events for [[Trapezoid]].
 */
export interface ITrapezoidEvents extends ISpriteEvents {
}
/**
 * Defines adapters for [[Trapezoid]].
 *
 * @see {@link Adapter}
 */
export interface ITrapezoidAdapters extends ISpriteAdapters, ITrapezoidProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Used to draw a Trapezoid.
 *
 * @see {@link ITrapezoidEvents} for a list of available events
 * @see {@link ITrapezoidAdapters} for a list of available Adapters
 */
export declare class Trapezoid extends Sprite {
    /**
     * Defines available properties.
     *
     * @ignore Exclude from docs
     * @type {ITrapezoidProperties}
     */
    _properties: ITrapezoidProperties;
    /**
     * Defines available adapters.
     *
     * @ignore Exclude from docs
     * @type {ITrapezoidAdapters}
     */
    _adapter: ITrapezoidAdapters;
    /**
     * Event dispacther.
     * @type {SpriteEventDispatcher<AMEvent<Trapezoid, ITrapezoidEvents>>} Event dispatcher instance
     */
    events: SpriteEventDispatcher<AMEvent<Trapezoid, ITrapezoidEvents>>;
    /**
     * Constructor
     */
    constructor();
    /**
     * Draws the element.
     *
     * @ignore Exclude from docs
     */
    draw(): void;
    /**
     * @return {number} Width
     */
    /**
     * Wdith of the top side. Absolute (px) or relative ([[Percent]]).
     *
     * @default Percent(100)
     * @param {number | Percent}  value  Width
     */
    topSide: number | Percent;
    /**
     * @return {number} Width
     */
    /**
     * Wdith of the bottom side. Absolute (px) or relative ([[Percent]]).
     *
     * @default Percent(100)
     * @param {number | Percent}  value  Width
     */
    bottomSide: number | Percent;
    /**
     * @return {number} Height
     */
    /**
     * Height of the left side. Absolute (px) or relative ([[Percent]]).
     *
     * @default Percent(100)
     * @param {number | Percent}  value  Height
     */
    leftSide: number | Percent;
    /**
     * @return {number} Height
     */
    /**
     * Height of the right side. Absolute (px) or relative ([[Percent]]).
     *
     * @default Percent(100)
     * @param {number | Percent}  value  Height
     */
    rightSide: number | Percent;
    /**
     * @return {Percent} Horizontal neck position
     */
    /**
     * A relative vertical position of the "neck". If the top and bottom sides
     * are of different width, and `horizontalNeck` is set, a choke point
     * will be created at that position, creating a funnel shape.
     *
     * @param {Percent}  value  Horizontal neck position
     */
    horizontalNeck: Percent;
    /**
     * @return {Percent} Vertical neck position
     */
    /**
     * A relative horizontal position of the "neck". If the left and right sides
     * are of different height, and `verticalNeck` is set, a choke point
     * will be created at that position, creating a funnel shape.
     *
     * @param {Percent}  value  Vertical neck position
     */
    verticalNeck: Percent;
}

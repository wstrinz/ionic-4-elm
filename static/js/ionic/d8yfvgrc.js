/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{a as e,d as i,c as s}from"./chunk-d7be1947.js";class r{constructor(){this.itemStyles={},this.button=!1,this.disabled=!1}itemStyle(t){t.stopPropagation();const e=t.target.tagName,i=t.detail,s=Object.keys(t.detail),r={},o=this.itemStyles[e]||{};let n=!1;for(const t of s){const e=`item-${t}`,s=i[t];s!==o[e]&&(n=!0),r[e]=s}n&&(this.itemStyles[e]=r,this.el.forceUpdate())}componentDidLoad(){const t=this.el.querySelectorAll("ion-button");for(let e=0;e<t.length;e++)t[e].size||(t[e].size="small")}render(){const r={};for(const t in this.itemStyles)Object.assign(r,this.itemStyles[t]);const o=!!(this.href||this.el.onclick||this.button),n=o?this.href?"a":"button":"div",l="button"===n?{type:"button"}:{href:this.href},a=null!=this.detail?this.detail:"ios"===this.mode&&o,c=Object.assign({},r,e(this.mode,this.color,"item"),i(this.el.classList),{"item-disabled":this.disabled,"item-detail-push":a,[`item-lines-${this.lines}`]:!!this.lines,[`item-${this.mode}-lines-${this.lines}`]:!!this.lines});return t(n,Object.assign({},l,{class:c,onClick:t=>s(this.win,this.href,t,this.routerDirection)}),t("slot",{name:"start"}),t("div",{class:"item-inner"},t("div",{class:"input-wrapper"},t("slot",null)),t("slot",{name:"end"})),o&&"md"===this.mode&&t("ion-ripple-effect",{tapClick:!0}))}static get is(){return"ion-item"}static get properties(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},win:{context:"window"}}}static get listeners(){return[{name:"ionStyle",method:"itemStyle"}]}static get style(){return"ion-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block}.item{border-radius:0;margin:0;padding:0;text-align:initial;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:44px;border:0;outline:0;font-weight:400;line-height:normal;text-decoration:none;color:inherit}.item-inner{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-webkit-flex-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-webkit-align-items:inherit;-ms-flex-align:inherit;align-items:inherit;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0}.input-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-webkit-flex-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-webkit-align-items:inherit;-ms-flex-align:inherit;align-items:inherit;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis}ion-item-group{display:block}.input.item,[vertical-align-top]{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.item-cover{left:0;top:0;position:absolute;width:100%;height:100%;background:0 0;cursor:pointer}.item-inner>ion-icon,.item>ion-icon{font-size:1.6em}.item .button{margin:0}.item-disabled{cursor:default;opacity:.4;pointer-events:none}.item-md{padding-left:16px;position:relative;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400;text-transform:none;color:var(--ion-item-md-text-color,var(--ion-item-text-color,var(--ion-text-color,#000)));background-color:var(--ion-item-md-background-color,var(--ion-item-background-color,var(--ion-background-color,#fff)));-webkit-box-shadow:none;box-shadow:none;-webkit-transition:background-color .3s cubic-bezier(.4,0,.2,1);transition:background-color .3s cubic-bezier(.4,0,.2,1)}.item-md .item-inner{padding-right:8px}.item-md.activated{background-color:var(--ion-item-md-background-color-active,var(--ion-item-background-color-active,#f1f1f1))}.item-md h1{margin:0 0 2px;font-size:24px;font-weight:400}.item-md h2{margin:2px 0;font-size:16px;font-weight:400}.item-md h3,.item-md h4,.item-md h5,.item-md h6{margin:2px 0;font-size:14px;font-weight:400;line-height:normal}.item-md p{margin:0 0 2px;overflow:inherit;font-size:14px;line-height:normal;text-overflow:inherit;color:var(--ion-text-md-color-step-400,var(--ion-text-color-step-400,#666))}.item-md,.item-md .item-inner{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:rgba(var(--ion-item-md-border-color-rgb,var(--ion-item-border-color-rgb,0,0,0)),.13)}.item-md.item-interactive{border-bottom-width:1px}.item-md-lines-full,.item-md-lines-inset .item-inner{border-bottom-width:1px}.item-md-lines-full .item-inner,.item-md-lines-inset,.item-md-lines-none,.item-md-lines-none .item-inner{border-bottom-width:0}.item-md.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='rgba(var(--ion-item-md-border-color-rgb,%20var(--ion-item-border-color-rgb,%200,%200,%200)),%200.13)'/></svg>\");padding-right:32px;background-position:right 14px center;background-repeat:no-repeat;background-size:14px 14px}.item-md [slot=end],.item-md [slot=start]{margin:0 8px 0 0}.item-md>ion-icon[slot=end],.item-md>ion-icon[slot=start]{margin-left:0;margin-top:11px;margin-bottom:10px}.item-md>ion-icon[slot=start]+.item-inner,.item-md>ion-icon[slot=start]+.item-interactive{margin-left:24px}.item-md ion-avatar[slot=start],.item-md ion-thumbnail[slot=start]{margin:8px 16px 8px 0}.item-md ion-avatar[slot=end],.item-md ion-thumbnail[slot=end]{margin:8px}.item-md.item-label-floating [slot=end],.item-md.item-label-stacked [slot=end]{margin-top:7px;margin-bottom:7px}.item-md .button-small-md{padding:0 .6em;height:25px;font-size:12px}.item-md .button-small-md ion-icon[slot=icon-only]{padding:0}.item-md ion-avatar{width:40px;height:40px}.item-md ion-thumbnail{width:80px;height:80px}.item-md-primary{border-bottom-color:var(--ion-color-md-primary-shade,var(--ion-color-primary-shade,#3171e0));color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-md-primary .item-inner{border-bottom-color:var(--ion-color-md-primary-shade,var(--ion-color-primary-shade,#3171e0))}.item-md-primary p{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.item-md-primary.activated{background-color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.item-md-primary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-primary-shade,%20var(--ion-color-primary-shade,%20%233171e0))'/></svg>\")}.item-md-secondary{border-bottom-color:var(--ion-color-md-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc));color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.item-md-secondary .item-inner{border-bottom-color:var(--ion-color-md-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc))}.item-md-secondary p{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.item-md-secondary.activated{background-color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.item-md-secondary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-secondary-shade,%20var(--ion-color-secondary-shade,%20%230bb8cc))'/></svg>\")}.item-md-tertiary{border-bottom-color:var(--ion-color-md-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0));color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.item-md-tertiary .item-inner{border-bottom-color:var(--ion-color-md-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0))}.item-md-tertiary p{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.item-md-tertiary.activated{background-color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.item-md-tertiary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-tertiary-shade,%20var(--ion-color-tertiary-shade,%20%23633ce0))'/></svg>\")}.item-md-success{border-bottom-color:var(--ion-color-md-success-shade,var(--ion-color-success-shade,#0ec254));color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.item-md-success .item-inner{border-bottom-color:var(--ion-color-md-success-shade,var(--ion-color-success-shade,#0ec254))}.item-md-success p{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff))}.item-md-success.activated{background-color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070))}.item-md-success.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-success-shade,%20var(--ion-color-success-shade,%20%230ec254))'/></svg>\")}.item-md-warning{border-bottom-color:var(--ion-color-md-warning-shade,var(--ion-color-warning-shade,#e0b500));color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff));background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.item-md-warning .item-inner{border-bottom-color:var(--ion-color-md-warning-shade,var(--ion-color-warning-shade,#e0b500))}.item-md-warning p{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff))}.item-md-warning.activated{background-color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.item-md-warning.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-warning-shade,%20var(--ion-color-warning-shade,%20%23e0b500))'/></svg>\")}.item-md-danger{border-bottom-color:var(--ion-color-md-danger-shade,var(--ion-color-danger-shade,#d33939));color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.item-md-danger .item-inner{border-bottom-color:var(--ion-color-md-danger-shade,var(--ion-color-danger-shade,#d33939))}.item-md-danger p{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff))}.item-md-danger.activated{background-color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454))}.item-md-danger.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-danger-shade,%20var(--ion-color-danger-shade,%20%23d33939))'/></svg>\")}.item-md-light{border-bottom-color:var(--ion-color-md-light-shade,var(--ion-color-light-shade,#d7d8da));color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.item-md-light .item-inner{border-bottom-color:var(--ion-color-md-light-shade,var(--ion-color-light-shade,#d7d8da))}.item-md-light p{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000))}.item-md-light.activated{background-color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9))}.item-md-light.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-light-shade,%20var(--ion-color-light-shade,%20%23d7d8da))'/></svg>\")}.item-md-medium{border-bottom-color:var(--ion-color-md-medium-shade,var(--ion-color-medium-shade,#86888f));color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff));background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.item-md-medium .item-inner{border-bottom-color:var(--ion-color-md-medium-shade,var(--ion-color-medium-shade,#86888f))}.item-md-medium p{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff))}.item-md-medium.activated{background-color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.item-md-medium.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-medium-shade,%20var(--ion-color-medium-shade,%20%2386888f))'/></svg>\")}.item-md-dark{border-bottom-color:var(--ion-color-md-dark-shade,var(--ion-color-dark-shade,#1e2023));color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}.item-md-dark .item-inner{border-bottom-color:var(--ion-color-md-dark-shade,var(--ion-color-dark-shade,#1e2023))}.item-md-dark p{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff))}.item-md-dark.activated{background-color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e))}.item-md-dark.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-dark-shade,%20var(--ion-color-dark-shade,%20%231e2023))'/></svg>\")}"}static get styleMode(){return"md"}}class o{componentDidLoad(){const t=this.el.querySelectorAll("ion-button");for(let e=0;e<t.length;e++)t[e].size||(t[e].size="small")}render(){return[t("slot",{name:"start"}),t("div",{class:"item-divider-inner"},t("div",{class:"item-divider-wrapper"},t("slot",null)),t("slot",{name:"end"}))]}static get is(){return"ion-item-divider"}static get host(){return{theme:"item-divider"}}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"}}}static get style(){return"ion-item-divider{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px}ion-item-divider[sticky]{position:-webkit-sticky;position:sticky;top:0}.item-divider-inner{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-webkit-flex-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-webkit-align-items:inherit;-ms-flex-align:inherit;align-items:inherit;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0}.item-divider-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-webkit-flex-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-webkit-align-items:inherit;-ms-flex-align:inherit;align-items:inherit;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis}.item-divider-md{padding-left:16px;border-bottom:1px solid rgba(var(--ion-item-md-border-color-rgb,var(--ion-item-border-color-rgb,0,0,0)),.13);font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;color:var(--ion-text-md-color-step-600,var(--ion-text-color-step-600,#999));background-color:var(--ion-background-md-color,var(--ion-background-color,#fff))}.item-divider-md .item-divider-inner{padding-right:8px}.item-divider-md [slot=end],.item-divider-md [slot=start]{margin:0 8px 0 0}.item-divider-md ion-icon[slot=end],.item-divider-md ion-icon[slot=start]{margin-left:0;margin-top:11px;margin-bottom:10px}.item-divider-md ion-icon[slot=start]+.item-inner,.item-divider-md ion-icon[slot=start]+.item-interactive{margin-left:24px}.item-divider-md ion-avatar[slot=start],.item-divider-md ion-thumbnail[slot=start]{margin:8px 16px 8px 0}.item-divider-md ion-avatar[slot=end],.item-divider-md ion-thumbnail[slot=end]{margin:8px}.item-divider-md h1{margin:0 0 2px;font-size:24px;font-weight:400}.item-divider-md h2{margin:2px 0;font-size:16px;font-weight:400}.item-divider-md h3,.item-divider-md h4,.item-divider-md h5,.item-divider-md h6{margin:2px 0;font-size:14px;font-weight:400;line-height:normal}.item-divider-md p{margin:0 0 2px;overflow:inherit;font-size:14px;line-height:normal;text-overflow:inherit;color:var(--ion-text-md-color-step-400,var(--ion-text-color-step-400,#666))}.item-divider-md-primary{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-divider-md-primary p{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.item-divider-md-primary.activated{background-color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.item-divider-md-secondary{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.item-divider-md-secondary p{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.item-divider-md-secondary.activated{background-color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.item-divider-md-tertiary{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.item-divider-md-tertiary p{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.item-divider-md-tertiary.activated{background-color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.item-divider-md-success{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.item-divider-md-success p{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff))}.item-divider-md-success.activated{background-color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070))}.item-divider-md-warning{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff));background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.item-divider-md-warning p{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff))}.item-divider-md-warning.activated{background-color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.item-divider-md-danger{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.item-divider-md-danger p{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff))}.item-divider-md-danger.activated{background-color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454))}.item-divider-md-light{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.item-divider-md-light p{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000))}.item-divider-md-light.activated{background-color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9))}.item-divider-md-medium{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff));background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.item-divider-md-medium p{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff))}.item-divider-md-medium.activated{background-color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.item-divider-md-dark{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}.item-divider-md-dark p{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff))}.item-divider-md-dark.activated{background-color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e))}"}static get styleMode(){return"md"}}class n{static get is(){return"ion-item-group"}static get host(){return{theme:"item-group"}}static get style(){return"ion-item-group{display:block}.item-group-md ion-item:first-child .item-inner{border-top-width:0}.item-group-md ion-item-sliding:last-child .item .item-inner,.item-group-md ion-item:last-child .item-inner{border:0}"}static get styleMode(){return"md"}}class l{getText(){return this.el.textContent||""}componentDidLoad(){this.positionChanged()}positionChanged(){const t=this.position;return this.ionStyle.emit({[`label-${t}`]:!!t})}hostData(){const t=this.position;return{class:{[`label-${t}`]:!!t,[`label-${this.mode}-${t}`]:!!t}}}static get is(){return"ion-label"}static get host(){return{theme:"label"}}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0},getText:{method:!0},mode:{type:String,attr:"mode"},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}}static get events(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-label{margin:0;display:block;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:inherit;text-overflow:ellipsis;white-space:nowrap}.item-input ion-label{-webkit-box-flex:initial;-webkit-flex:initial;-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}[text-wrap] ion-label{white-space:normal}.label-fixed{-webkit-box-flex:0;-webkit-flex:0 0 100px;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.item-label-floating ion-label,.item-label-stacked ion-label{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-floating,.label-stacked{margin-bottom:0}.item-label-floating .input-wrapper,.item-label-stacked .input-wrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.item-label-floating ion-select,.item-label-stacked ion-select{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;max-width:100%}.label-md{margin:13px 8px 13px 0;font-family:Roboto,\"Helvetica Neue\",sans-serif}[text-wrap] .label-md{font-size:14px;line-height:1.5}.item-interactive .label-md{color:var(--ion-text-md-color-step-600,var(--ion-text-color-step-600,#999))}.label-md-stacked{font-size:12px}.label-md-floating{-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out,-webkit-transform 150ms ease-in-out}.label-md-floating,.label-md-stacked{margin-left:0;margin-bottom:0}.item-input-has-focus .label-md-floating,.item-input-has-focus .label-md-stacked{color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-input-has-focus .label-md-floating,.item-input-has-value .label-md-floating{-webkit-transform:translate3d(0,0,0) scale(.8);transform:translate3d(0,0,0) scale(.8)}.item-interactive .label-md-primary,.label-md-primary{color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-interactive .label-md-secondary,.label-md-secondary{color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.item-interactive .label-md-tertiary,.label-md-tertiary{color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.item-interactive .label-md-success,.label-md-success{color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.item-interactive .label-md-warning,.label-md-warning{color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.item-interactive .label-md-danger,.label-md-danger{color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.item-interactive .label-md-light,.label-md-light{color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.item-interactive .label-md-medium,.label-md-medium{color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.item-interactive .label-md-dark,.label-md-dark{color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"}static get styleMode(){return"md"}}class a{getOpenItem(){return this.openItem}setOpenItem(t){this.openItem=t}closeSlidingItems(){return!!this.openItem&&(this.openItem.close(),this.openItem=void 0,!0)}hostData(){return{class:{[`list-lines-${this.lines}`]:!!this.lines,[`list-${this.mode}-lines-${this.lines}`]:!!this.lines}}}static get is(){return"ion-list"}static get host(){return{theme:"list"}}static get properties(){return{closeSlidingItems:{method:!0},getOpenItem:{method:!0},lines:{type:String,attr:"lines"},setOpenItem:{method:!0}}}static get style(){return"ion-list{margin:0;padding:0;display:block;contain:content;list-style-type:none}ion-list[inset]{overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.list-md{margin:-1px 0 16px}.list-md+.list ion-list-header{margin-top:-16px}.list-md>.input:last-child::after{left:0}.list-md[inset]{margin:16px;border-radius:2px}.list-md[inset] ion-item:first-child .item-md{border-top-left-radius:2px;border-top-right-radius:2px;border-top-width:0}.list-md[inset] ion-item:last-child .item-md{border-bottom-right-radius:2px;border-bottom-left-radius:2px;border-bottom-width:0}.list-md[inset] .item-interactive{padding-left:0;padding-right:0}.list-md[inset]+ion-list[inset]{margin-top:0}.list-md[inset] ion-list-header{background-color:var(--ion-item-md-background-color,var(--ion-item-background-color,var(--ion-background-color,#fff)))}.list-md-lines-none .item-md,.list-md-lines-none .item-md .item-inner{border-bottom-width:0}.list-md .item-md-lines-full,.list-md-lines-full .item-md{border-bottom-width:1px}.list-md .item-md-lines-inset .item-inner,.list-md-lines-inset .item-md .item-inner{border-bottom-width:1px}.list-md .item-md-lines-full .item-inner,.list-md .item-md-lines-inset{border-bottom-width:0}"}static get styleMode(){return"md"}}class c{static get is(){return"ion-list-header"}static get host(){return{theme:"list-header"}}static get properties(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}}static get style(){return"ion-list-header{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px}.list-header-md{padding-left:16px;margin-bottom:13px;min-height:45px;font-size:14px;color:var(--ion-text-md-color-step-400,var(--ion-text-color-step-400,#666))}.list-header-md-primary{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.list-header-md-secondary{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.list-header-md-tertiary{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.list-header-md-success{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.list-header-md-warning{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff));background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.list-header-md-danger{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.list-header-md-light{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.list-header-md-medium{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff));background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.list-header-md-dark{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"}static get styleMode(){return"md"}}class d{constructor(){this.width="100%"}render(){return t("span",{style:{width:this.width}}," ")}static get is(){return"ion-skeleton-text"}static get host(){return{theme:"skeleton-text"}}static get properties(){return{width:{type:String,attr:"width"}}}static get style(){return"ion-skeleton-text{display:inline-block;width:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-skeleton-text span{display:inline-block;font-size:8px}.skeleton-text-md span{background-color:var(--ion-text-md-color,var(--ion-text-color,#000));opacity:.1}"}static get styleMode(){return"md"}}export{r as IonItem,o as IonItemDivider,n as IonItemGroup,l as IonLabel,a as IonList,c as IonListHeader,d as IonSkeletonText};
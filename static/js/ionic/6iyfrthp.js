/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic,i="split-pane-main",t="split-pane-side",s={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""};class n{constructor(){this.visible=!1,this.disabled=!1,this.when=s.md}visibleChanged(e){const i={visible:e};this.ionChange.emit(i),this.ionSplitPaneVisible.emit(i)}componentDidLoad(){this._styleChildren(),this.whenChanged()}componentDidUnload(){this.rmL&&this.rmL(),this.rmL=null}whenChanged(){if(this.isServer)return;if(this.rmL&&this.rmL(),this.rmL=null,this.disabled)return void(this.visible=!1);const e=this.when;if("boolean"==typeof e)return void(this.visible=e);const i=s[e]||e;if(!i||0===i.length)return void(this.visible=!1);const t=e=>this.visible=e.matches,n=this.win.matchMedia(i);n.addListener(t),this.rmL=(()=>n.removeListener(t)),this.visible=n.matches}isVisible(){return this.visible}isPane(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains(t)}_styleChildren(){if(this.isServer)return;const e=this.el.children,i=this.el.childElementCount;let t=!1;for(let s=0;s<i;s++){const i=e[s],n=i.hasAttribute("main");if(n){if(t)return void console.warn("split pane can not have more than one main node");t=!0}l(i,n)}t||console.warn("split pane could not found any main node")}hostData(){return{class:{"split-pane-visible":this.visible}}}static get is(){return"ion-split-pane"}static get host(){return{theme:"split-pane"}}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},isPane:{method:!0},isServer:{context:"isServer"},isVisible:{method:!0},visible:{state:!0,watchCallbacks:["visibleChanged"]},when:{type:"Any",attr:"when",watchCallbacks:["whenChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSplitPaneVisible",method:"ionSplitPaneVisible",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".split-pane{left:0;right:0;top:0;bottom:0;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;z-index:0;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>ion-menu>.menu-inner{left:0;right:0;width:auto;-webkit-box-shadow:none!important;box-shadow:none!important;-webkit-transform:none!important;transform:none!important}.split-pane-visible>ion-menu>.ion-backdrop{display:hidden!important}.split-pane-visible>.split-pane-side[side=start]{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.split-pane-visible>.split-pane-side[side=left]{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=right]{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.split-pane-ios.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:.55px solid var(--ion-item-ios-border-color,var(--ion-item-border-color,#c8c7cc));border-left:0}.split-pane-ios.split-pane-visible>.split-pane-side[side=right]{border-right:0;border-left:.55px solid var(--ion-item-ios-border-color,var(--ion-item-border-color,#c8c7cc))}"}static get styleMode(){return"ios"}}function l(e,s){let n,l;s?(n=i,l=t):(n=t,l=i);const a=e.classList;a.add(n),a.remove(l)}export{n as IonSplitPane};
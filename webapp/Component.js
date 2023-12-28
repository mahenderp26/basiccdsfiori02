sap.ui.define(["sap/ui/core/UIComponent"], function(oUIComponent) {
    return oUIComponent.extend("com.wb.cds.Component",{
        metadata:{
            manifest: "json"
        },
        init: function(){
            debugger;
            oUIComponent.prototype.init.apply(this);
            // enable routing
            var oRouter = this.getRouter()
            oRouter.initialize();
        }
    })  
});
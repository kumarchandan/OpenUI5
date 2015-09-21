(function() {
	"use strict";

	sap.ui.controller("view.Master", {


		onInit: function() {
			var oModel = sap.ui.model.json.JSONModel("http://www.ajaxtown.com/playground/macSpecs.php");
			sap.ui.getCore().setModel(oModel, "data");
		},

		//  onBeforeRendering: function() {
		//
		//  },

		//  onAfterRendering: function() {
		//
		//  },

		//  onExit: function() {
		//
		//  }

		// Custom functions
		itemSelected: function() {
			var app = sap.ui.getCore().byId("appId");
			var list = sap.ui.getCore().byId("listId");

			var sItem = list.getSelectedItem(list);
			var sPath = sItem.oBindingContexts.data.sPath;

			var item = sap.ui.getCore().getModel("data").getProperty(sPath);
			console.log(item);

			var oModel = new sap.ui.model.json.JSONModel(item);
			sap.ui.getCore().setModel(oModel, "item");
			app.toDetail("detailsId","show");					// show fade slide
		}
	});
}());
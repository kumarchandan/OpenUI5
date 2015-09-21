(function() {
	"use strict";

	sap.ui.jsview("view.Master", {

		getControllerName: function() {
			return "view.Master";
		},

		createContent: function(oController) {
			var oList = new sap.m.List({
				id: "listId",
				mode: sap.m.ListMode.SingleSelect,
				select: function() {
					oController.itemSelected();
				}
			});

			var oItemTemplate = new sap.m.StandardListItem({
				id: "sList",
				title: "{data>name}",
				description: "{data>price}"
			});

			oList.bindAggregation("items", "data>/", oItemTemplate);

			return new sap.m.Page({
				title: "Products",
				content: [oList
				]
			});
		}
	});
}());
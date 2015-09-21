(function() {
	"use strict";

	sap.ui.jsview("view.Intro", {

		getControllerName: function() {
			return "view.Intro";
		},

		createContent: function(oController) {
			return new sap.m.Page({
				title: "Welcome",
				content: [
					new sap.ui.commons.TextView({
						text: "Welcome you, Please select a product from the Master Page(left) to see the description",
						design: sap.ui.commons.TextViewDesign.H5
					})
				]
			});
		}
	});
}());
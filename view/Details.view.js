(function() {
	"use strict";

	sap.ui.jsview("view.Details", {

		getControllerName: function() {
			return "view.Details";
		},

		createContent: function(oController) {
			
			var oLayout = new sap.ui.commons.layout.MatrixLayout({
				id: "matrixId",
				layoutFixed: false,
				columns: 2,
				width: "90%",
				widths: ["20%", "80%"]
			});

			oLayout.createRow(new sap.ui.commons.TextView({
				text: "Name",
				design: sap.ui.commons.TextViewDesign.Bold
			}), new sap.ui.commons.TextView({
				text: "{item>/name}"
			}));

			oLayout.createRow(new sap.ui.commons.TextView({
				text: "Price",
				design: sap.ui.commons.TextViewDesign.Bold
			}), new sap.ui.commons.TextView({
				text: "{item>/price}"
			}));

			oLayout.createRow(new sap.ui.commons.TextView({
				text: "Display",
				design: sap.ui.commons.TextViewDesign.Bold
			}), new sap.ui.commons.TextView({
				text: "{item>/display}"
			}));

			oLayout.createRow(new sap.ui.commons.TextView({
				text: "Storage",
				design: sap.ui.commons.TextViewDesign.Bold
			}), new sap.ui.commons.TextView({
				text: "{item>/storage}"
			}));

			oLayout.createRow(new sap.ui.commons.TextView({
				text: "Processor",
				design: sap.ui.commons.TextViewDesign.Bold
			}), new sap.ui.commons.TextView({
				text: "{item>/processor}"
			}));

			oLayout.createRow(new sap.ui.commons.TextView({
				text: "Memory",
				design: sap.ui.commons.TextViewDesign.Bold
			}), new sap.ui.commons.TextView({
				text: "{item>/memory}"
			}));

		}
	});
}());
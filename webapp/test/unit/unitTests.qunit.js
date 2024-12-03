/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"arledesmafiorimm/ui5_consultar_stock_ext/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

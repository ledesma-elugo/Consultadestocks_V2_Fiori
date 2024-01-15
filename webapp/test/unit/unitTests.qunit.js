/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ar/ledesma/fiori/mm/consultastock/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

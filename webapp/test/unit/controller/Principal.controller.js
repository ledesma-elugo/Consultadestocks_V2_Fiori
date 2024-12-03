/*global QUnit*/

sap.ui.define([
	"arledesmafiorimm/ui5_consultar_stock_ext/controller/Principal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Principal Controller");

	QUnit.test("I should test the Principal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

"use strict";

var $ = require("jquery");

QUnit.test("widgets-web", function(assert) {

    $.each([
        "dxAccordion",
        "dxContextMenu",
        "dxDataGrid",
        "dxMenu",
        "dxPivotGrid",
        "dxPivotGridFieldChooser",
        "dxScheduler",
        "dxTreeView"
    ], function(_, namespace) {
        assert.ok(DevExpress.ui[namespace], "DevExpress.ui." + namespace + " present");
    });

});

// Find callnumbers in maps, JSON 
// M. Providenti, June 2018
$(document).ready(function() {
	var Range = $('#loc').on('change', function(){
		var jsonLayer = $(this).attr("data-floorplan");
		var Range2 = Range.val();
		$.getJSON('json/shelves' + jsonLayer +'.json', function(ShelfData) {
			for (var i = 0; i < ShelfData.collection.length ; i++) {
			var iC = i + 1;
				for (var iU = 0; iU < ShelfData.collection[i].shelfRow[0].shelfUnits.length ; iU++) {
				var iuC = iU + 1;
				$("#shelves" + iC + " " + ".shelf" + iuC).attr("data-layer", "nothere" );
				if (ShelfData.collection[i].shelfRow[0].shelfUnits[iU].callNumber == Range2) {
					$("#shelves" + iC + " " + ".shelf" + iuC).attr("data-layer", "here" );
					}
				}
			}
		});
	});
});
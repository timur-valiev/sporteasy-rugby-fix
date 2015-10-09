$(".up-thead").
find('.stat_player_drops_strict_sum').
after('<th scope="col" class="stat_player_conv_kicks_strict_sum js-tooltip type_number header" data-tooltip="# conversions scored" title="">Conv.</th>')

rows = $("#stats-players").find('tbody').find('tr')
$.each(rows,function(rowind, row){
	pts = parseInt($($(row).find('td')[6]).html());
	tr = parseInt($($(row).find('td')[7]).html());
	pen = parseInt($($(row).find('td')[8]).html());
	drp = parseInt($($(row).find('td')[9]).html());
	conv = (pts - tr*5-pen*3-drp*3)/2;
	$($(row).find('td')[9]).after('<td>'+conv+'</td>');
}
)


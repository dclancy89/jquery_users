"use strict";

$(document).ready(function() {

	$('#add_users').submit(function(e){
		e.preventDefault();
		var row = '<tr>';
		row += '<td>' + $('#first_name').val() + '</td>';
		row += '<td>' + $('#last_name').val() + '</td>';
		row += '<td>' + $('#email').val() + '</td>';
		row += '<td>' + $('#phone').val() + '</td>';

		row += '</tr>';

		$('#user_table tbody').append(row);
		$('#add_users').children('label').children('input[type="text"]').val('');
	});



})
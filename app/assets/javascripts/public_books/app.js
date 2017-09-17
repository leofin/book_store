
function call_api(){
  var endpoint = "http://localhost:3000/api/books";
  var params = "";
  $.getJSON(endpoint, params, function populate_books(data){
    debugger;
    var $tableBody = $('table tbody');
    var tableBodyData = '';

    data.data.forEach(function(item, id) {
      tableBodyData += TableRow(item, id);
    }, this);

    $tableBody.replaceWith('<tbody>' + tableBodyData + '</tbody>');
  });
}

var TableRow = function(data, id) {
  var t = '';

  t += '<tr>';
    t += '<td>' + data.title +'</td>';
    t += '<td>' + data.author +'</td>';
    t += '<td>' + data.url +'</td>';
    t += '<td>' + data.description +'</td>';
    // t += '<td><button type="button" class="btn btn-link" data-toggle="modal" data-target="#modal" data-target-id=' + id + '>Detalhes</button></td>';
  t += '</tr>';

  return t;
};
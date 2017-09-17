
function call_api(){
  var endpoint = '{{ env('API_BOOKS') }}';
  var params = getParams();

  $.getJSON(endpoint + params, function populate_books(data){
    var $tableBody = $('table tbody');
    var tableBodyData = '';

    data.data.forEach(function(item, id) {
      tableBodyData += TableRow(item, id);
    }, this);

    $tableBody.replaceWith('<tbody>' + tableBodyData + '</tbody>');
  });
}

function getParams(){
  var $search_field = document.getElementsByName("search_field")[0];
  var $author = document.getElementsByName("author")[0];
  debugger;
  var query = $search_field ? $search_field.value : "";
  var author_filter = $author ? $author.value : "";
  return "?query=" + query + "&author=" + author_filter;
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

call_api();
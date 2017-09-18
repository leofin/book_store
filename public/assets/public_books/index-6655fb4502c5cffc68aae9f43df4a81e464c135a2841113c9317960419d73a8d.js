var order = "asc";
var page = 0;
var total = 0;
var size = 10;

function search_books(){
  var endpoint = "http://localhost:3000/api/books";
  var params = getParams();

  $.getJSON(endpoint + params, function populate_books(data){
    var $tableBody = $('table tbody');
    var tableBodyData = '';

    books = data.data
    total = data.total

    books.forEach(function(item, id) {
      tableBodyData += TableRow(item, id);
    }, this);

    if (typeof books === 'undefined'){
      tableBodyData = "<span> Não foram encontrados livros para a respectiva pesquisa</span>"
    }

    $tableBody.replaceWith('<tbody>' + tableBodyData + '</tbody>');

    load_pagination();
  });

}

function getParams(){
  var search_field = $("#search_field").val();
  var author = $("#author").val();
  size = $("#per-page option:selected").val();

  var query = typeof search_field === 'undefined' ? "" : search_field;
  var author_filter = typeof author === 'undefined' ? "" : author;
  size = typeof size === 'undefined' ? 5 : size;
  return "?query=" + query + "&author=" + author_filter + "&order=" + order + "&size=" + size + "&page=" + page;
}

var TableRow = function(data, id) {
  var t = '';

  t += '<tr>';
    t += '<td>' + data.title +'</td>';
    t += '<td>' + data.author +'</td>';
    t += '<td>' + data.url +'</td>';
    t += '<td title="'+data.description+'">' + data.description +'</td>';
  t += '</tr>';

  return t;
};

function orderTable(){
  var asc = "fa-sort-asc";
  var desc = "fa-sort-desc";
  var $order = $("#order");

  $order.toggleClass(asc);
  $order.toggleClass(desc);

  order = order == "asc" ? "desc": "asc"

  search_books();
}

function change_page(new_page){
  if(new_page < 0) {
    new_page = 0;
  }

  var numberOfPages = total / size;
  if(new_page > numberOfPages) {
    new_page = numberOfPages;
  }

  page = new_page;
  search_books();
}

function load_pagination(){
  var previousButtom = '<li id="previous-page" onclick="change_page(page - 1)"><a><span aria-hidden="true">&laquo;</span></a></li>'
  var nextButtom = '<li id="next-page" onclick="change_page(page + 1)"><a><span aria-hidden="true">&raquo;</span></a></li>'

  var numberOfPages = parseInt(total / size);

  var buttonsNumberPages = "";

  for (var i = 0; i <= numberOfPages; i++) {
    var numerOfPage = i+1
    buttonsNumberPages += '<li><a onclick="change_page(' + i + ')">' + numerOfPage + '</a></li>';
  }

  var $pagination = $("#pagination");

  $pagination.replaceWith('<ul id="pagination" class="pagination">' + previousButtom + buttonsNumberPages + nextButtom + '</ul>');
}

function init(){
  
  search_books();
  
}

init();

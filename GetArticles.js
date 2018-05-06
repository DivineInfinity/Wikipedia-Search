
function searchArticle(){
    let searchUrl = "https://en.wikipedia.org/w/api.php?format=json&callback=?&action=opensearch&search=";
    let searchTerm = document.getElementById("search-bar").value;
    searchUrl += searchTerm;

    $.ajax({
        type: 'GET',
        url: searchUrl,
        async: false,
        dataType: 'json',
        success: function(data){
          $('#results').html('');
          for (i=0; i<data[1].length; i++){
            $('#results').append("<div class='container box mybox'><a class='is-link' href="+data[3][i]+" target='_blank'>"+data[1][i]+
            "</a><p class='has-text-black is-primary'>"+data[2][i]+"</p></div>");
          }
        },
        error: function(errorMessage){
          alert('Error');
        }
        
             });

}

function randomArticle(){
 let url = "https://en.wikipedia.org/wiki/Special:Random";

 var win = window.open(url, '_blank');

}

document.getElementById("search-button").addEventListener("click",searchArticle,false);
document.getElementById("random-button").addEventListener("click",randomArticle,false);
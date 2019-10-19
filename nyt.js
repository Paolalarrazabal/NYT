$("#run-search").on("click", function () {
    const article = $(this).val("#search-term");
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      article + "&api-key=eCcaSnMShxP30dRWVXaPhFB9lYoDGgbR";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function (response) {
        console.log(response);
        
    });
});
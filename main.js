$.get("https://jsonplaceholder.typicode.com/posts", function(data) {
  $.each(data, function(index, item) {
    var bodyText = item.body.length > 30 ? item.body.slice(0, 30) + "..." : item.body;
    var newRow = `
      <tr>
        <th scope="row">${item.id}</th>
        <td>${item.title}</td>
        <td>${bodyText}</td>
        <td class="comments-${item.id}"></td>
      </tr>`;
    $(".tableData").append(newRow);

    $.get(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`, function(comments) {
      var commentsHtml = "";
      for (var i = 0; i < Math.min(comments.length, 3); i++) {
        commentsHtml += `${comments[i].body}<br>`;
      }
      $(`.comments-${item.id}`).html(commentsHtml);
    });
  });
});

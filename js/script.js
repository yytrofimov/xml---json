records = `[
    {
        "title": "Title 1",
        "artist": "Artist 1",
        "genre": "Genre 1",
        "year_of_publication": 2000,
        "label": "Label 1",
        "producer": "Producer 1"
    },
    {
        "title": "Title 2",
        "artist": "Artist 2",
        "genre": "Genre 2",
        "year_of_publication": 2001,
        "label": "Label 2",
        "producer": "Producer 2"
    },
    {
        "title": "Title 3",
        "artist": "Artist 3",
        "genre": "Genre 3",
        "year_of_publication": 2002,
        "label": "Label 3",
        "producer": "Producer 3"
    },
    {
        "title": "Title 4",
        "artist": "Artist 4",
        "genre": "Genre 4",
        "year_of_publication": 2003,
        "label": "Label 4",
        "producer": "Producer 4"
    }
]`;

function getRecords(records) {
  for (let i = 0; i < records.length; i++) {
    let record = "";
    for (let j in records[i]) {
      record += records[i][j] + " ";
    }
    let li = document.createElement("li");
    li.innerHTML = record;
    document
      .getElementById("records")
      .getElementsByTagName("ul")[0]
      .appendChild(li);
  }
}

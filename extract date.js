let date = "2024-01-02";
function extract(example) {
    let day = example.substring(8,10);
    let month = example.substring(5,7);
    let year = example.substring(0,4);
    console.log('day = ' + day + ", " + 'month = ' + month + ', ' + 'year = ' + year);
}

extract(date)
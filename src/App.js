const $ = require("jquery");
let Index;

const initHTML = () => {
    fetch("https://cdn.jsdelivr.net/gh/benjamin1234-ben/Clabs-AMADAO@master/src/html/index.html")
    .then(res => res.text())
    .then(text => {
        Index = text;
    }).catch(err => console.log(err));
}

const initJquery = () => {
    $(function() {
        console.log(`${Index}`);
        $("#clabs").html(`${Index}`);

        $("a.clabs-underline").on("click", () => {
            $("#download").hide();
        })
    });
};

module.exports = { initJquery, initHTML };
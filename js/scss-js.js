
// Get SCSS elements
var allSCSS = document.getElementsByTagName('scss');
// For each SCSS element in the DOM
for (var i=0; i < allSCSS.length; ++i){
  let ele = allSCSS[i];
  // If it's an external file
  if (ele.getAttribute('src') != null){
    // Download scss file and compile
    downloadAndCompile(ele.getAttribute('src'), function(css){
      // New style element
      let style = document.createElement('style');
      style.innerHTML = css;
      // Document original src address
      style.setAttribute('data-src', ele.getAttribute('src'));
      ele.replaceWith(style);
      --i; // Fix i because we just remove an SCSS element
    });

  // If it's a local file
  }else{
    // Fix &amp; encoding issues
    var txtArea = document.createElement('textarea');
    txtArea.innerHTML = ele.innerHTML;
    // New style element
    let style = document.createElement('style');
    ele.replaceWith(style);
    --i; // Fix i because we just remove an SCSS element
    // Compile
    Sass.compile(txtArea.value, function(res) {
      style.innerHTML = res.text;
    });
  }

} // END for loop

/*
// This is with jquery
function downloadAndCompile(url, callback){
  $.get( url, function( data ) {
    Sass.compile(data, function(res) {
      callback(res.text);
    });
  });
}
*/

// This is without jquery
function downloadAndCompile(url, callback){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
              Sass.compile(xmlhttp.responseText, function(res) {
                callback(res.text);
              });
           }
           else if (xmlhttp.status == 400) {
              console.log('There was an error 400');
           }
           else {
              console.log('something else other than 200 was returned');
           }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

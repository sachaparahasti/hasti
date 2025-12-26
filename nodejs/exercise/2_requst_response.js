var http = require("http");

var server = http.createServer(function (request, response) {
  let url = request.url;
  console.log(url);
  response.writeHead(200, { "content-type": "text/html" });
  if (url === "/") {
    response.write(
      "<html><head><title>Home Page</title></head><body><h1>Cities of Gujarat</h1><ul><li>Bhavnagar</li><li>Ahmedabad</li><li>Baroda</li><li>Surat</li><li>Rajkot</li></ul></body></html>"
    );
  } else if (url === "/bhavnagar") {
    response.write(
      "<html><head><title>Bhavnagar Details</title></head><body><h1>Bhavnagar City</h1><p>Bhavnagar is a beautiful city located in the state of Gujarat, India. It is known for its rich culture, history, and coastal location.</p><h2>Basic Information</h2><ul><li><strong>State:</strong> Gujarat</li><li><strong>Country:</strong> India</li><li><strong>Language:</strong> Gujarati</li><li><strong>Famous For:</strong> Diamond industry, temples, coastline</li></ul><h2>Famous Places</h2><ol><li>Takhteshwar Temple</li><li>Victoria Park</li><li>Gaurishankar Lake</li><li>Barton Library</li></ol><h2>About Bhavnagar</h2><p>Bhavnagar was founded in 1723 and has played an important role in Gujarat’s history. The city is also close to the Gulf of Khambhat.</p></body></html>"
    );
  } else if (url === "/ahmedabad") {
    response.write(
      "<html><head><title>Ahmedabad Details</title></head><body><h1>Ahmedabad City</h1><p>Ahmedabad is the largest city in Gujarat and a major economic and cultural hub.</p><h2>Basic Information</h2><ul><li><strong>State:</strong> Gujarat</li><li><strong>Country:</strong> India</li><li><strong>Language:</strong> Gujarati</li><li><strong>Famous For:</strong> Textile industry, Sabarmati Ashram, culture</li></ul><h2>Famous Places</h2><ol><li>Sabarmati Ashram</li><li>Kankaria Lake</li><li>Adalaj Stepwell</li><li>Jama Masjid</li></ol></body></html>"
    );
  } else if (url === "/baroda") {
    response.write(
      "<html><head><title>Baroda Details</title></head><body><h1>Baroda (Vadodara) City</h1><p>Baroda is a major city in Gujarat, famous for Laxmi Vilas Palace, rich culture, and educational institutions.</p><h2>Basic Information</h2><ul><li><strong>State:</strong> Gujarat</li><li><strong>Country:</strong> India</li><li><strong>Language:</strong> Gujarati</li><li><strong>Famous For:</strong> Laxmi Vilas Palace, education, culture</li></ul><h2>Famous Places</h2><ol><li>Laxmi Vilas Palace</li><li>Sayaji Baug</li><li>Kirti Mandir</li></ol></body></html>"
    );
  } else if (url === "/surat") {
    response.write(
      "<html><head><title>Surat Details</title></head><body><h1>Surat City</h1><p>Surat is a major city in Gujarat known for its diamond and textile industry.</p><h2>Basic Information</h2><ul><li><strong>State:</strong> Gujarat</li><li><strong>Country:</strong> India</li><li><strong>Language:</strong> Gujarati</li><li><strong>Famous For:</strong> Diamond and textile industry</li></ul><h2>Famous Places</h2><ol><li>Surat Castle</li><li>Dumas Beach</li><li>Sardar Patel Museum</li></ol></body></html>"
    );
  } else if (url === "/rajkot") {
    response.write(
      "<html><head><title>Rajkot Details</title></head><body><h1>Rajkot City</h1><p>Rajkot is a city in Gujarat famous for its culture, industries, and connection to Mahatma Gandhi.</p><h2>Basic Information</h2><ul><li><strong>State:</strong> Gujarat</li><li><strong>Country:</strong> India</li><li><strong>Language:</strong> Gujarati</li><li><strong>Famous For:</strong> Culture, industries, Mahatma Gandhi</li></ul><h2>Famous Places</h2><ol><li>Kaba Gandhi No Delo</li><li>Rotary Dolls Museum</li><li>Aji Dam</li></ol></body></html>"
    );
  }
  response.end();
});
server.listen(5000);
console.log("server started...");

let rowData = [];
const thead = [];
const tbody = [];

const element = document.getElementById('table1');

const c = element.childNodes;
console.log(element);
console.log(element.childNodes);
console.log(c[0].firstChild.childNodes);
c[0].firstChild.childNodes.forEach(function(item) {
  // console.log(item);
  // console.log(item.childNodes);
  item.childNodes.forEach(item1 => {
    // console.log(item1);
    // console.log(item1.childNodes);
    item1.childNodes.forEach(item2 => {
      if (item2.nodeName === 'THEAD') {
        // console.log(item2);
        item2.childNodes.forEach(item3 => {
          // console.log(item3);
          item3.childNodes.forEach(item4 => {
            // console.log(item4);
            item4.childNodes.forEach(item5 => {
              // console.log(item5);
              item5.childNodes.forEach(item6 => {
                if (item6.nodeName === 'BUTTON') {
                  // console.log(item6.nodeName);
                  // console.log(item6.textContent);
                  thead.push(item6.textContent);
                }
              });
            });
          });
        });
      } else if (item2.nodeName === 'TBODY') {
        // console.log(item2);
        item2.childNodes.forEach(item3 => {
          item3.childNodes.forEach(item4 => {
            // console.log(item4.childNodes);
            item4.childNodes.forEach(item5 => {
              // console.log(item5.nodeName);
              if (item5.nodeName === '#text') {
                // console.log(item5.nodeValue);
                rowData.push(item5.nodeValue);
              }
            });
            // console.log('---');
            // console.log(item4.textContent);
          });
          // console.log(rowData);
          tbody.push(rowData);
          rowData = [];
        });
      }
    });
  });
});

console.log(thead);
tbody.splice(0, 1);
console.log(tbody);

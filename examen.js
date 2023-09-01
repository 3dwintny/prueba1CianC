function fixFiles(files) {
    const countMap = new Map();
  
    for (let i = 0; i < files.length; i++) {
      const fileName = files[i];
      if (countMap.has(fileName)) {
        let count = countMap.get(fileName) + 1;
        while (countMap.has(`${fileName}(${count})`)) {
          count++;
        }
        countMap.set(`${fileName}(${count})`, 0);
        files[i] = `${fileName}(${count})`;
      } else {
        countMap.set(fileName, 0);
      }
    }
  
    return files;
  }
  
  // Ejemplos dados
  const files = ['photo', 'postcard', 'photo', 'photo','photo', 'video'];
  console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
  
  const files2 = ['file', 'file', 'file', 'game', 'game'];
  console.log(fixFiles(files2)); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']
  
  const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
  console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
  
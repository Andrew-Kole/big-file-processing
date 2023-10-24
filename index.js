const fs = require('node:fs');

fs.readFile('./files/free_company_dataset.csv', 'utf8', (error, content) => {
   if(error) {
       const errorMessage = `Error: ${error.message}\n`;
       const errorDetails = error.stack;
       fs.writeFile('README.md', `# Errors\n ${errorMessage}\n## Details:\n${errorDetails}`, (errorWriting) => {
           if(errorWriting) {
               throw errorWriting;
           }
           console.log('Error details are in README.md');
       })
   }
   else {
       console.log('Files content: ', content);
   }
});

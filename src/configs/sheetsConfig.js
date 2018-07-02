function getPendant(index) {
   const alpha = new Map([
      [1, 'A'],
      [2, 'B'],
      [3, 'C'],
      [4, 'D'],
      [5, 'E'],
      [6, 'F'],
      [7, 'G'],
      [8, 'H'],
      [9, 'I'],
      [10, 'J'],
      [11, 'K'],
      [12, 'L'],
      [13, 'M'],
      [14, 'N'],
      [15, 'O'],
      [16, 'P'],
      [17, 'Q'],
   ]);

   return alpha.get(index);
}

const baseConfig = {
   // The ID of the spreadsheet to update.
   spreadsheetId: '1j38pF9XjUjMFPKpL-H6YwvkD-yWr12A2-kd8bS0jc7Q',

   // How the input data should be interpreted.
   valueInputOption: 'RAW',
};

module.exports = {
   baseConfig,
   getPendant,
};

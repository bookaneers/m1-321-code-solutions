var orderHistory = [
  {
    orderNumber: '001',
    orderPlaced: '03 / 16 / 2021',
    booksOrdered: [{
      isbn: 124567890123,
      author: 'Smith',
      title: 'JS for Beginners',
      price: 19.99,
      coverImage: 'image'
    }],

    gamesOrdered: [{
      skuNumber: 1234,
      productDescription: 'GameX',
      manufacturer: 'Nintendo',
      price: 59.99,
      coverImage: 'image'
    }],
    totalForTheOrder: 80.00,
    shipTo: {
      line1: '364 40th Street',
      line2: 'Apt 401',
      city: 'Oakland',
      state: 'CA',
      zip: 94609
    },
    deliveredOn: '04 / 01 / 21'
  }
];

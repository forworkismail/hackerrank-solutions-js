function bonAppetit(bill, k, b) {
  let eaten = 0;
  for (let i = 0; i < bill.length; i++) {
      if (i !== k) {
          eaten += bill[i];
      }
  }
  
  return eaten / 2 == b ? console.log('Bon Appetit'): console.log(b - (eaten / 2));
}
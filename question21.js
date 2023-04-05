// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const checkAndAddCountry = (countryName, countryArray) => {
    if (countryArray.includes(country => country === countryName)) {
      console.log(countryName.toUpperCase());
    } else {
      countryArray.push(countryName)
    }
  }
  
 
  const countries = ['Japan', 'United States', 'Germany', 'France']
  checkAndAddCountry('Ethiopia', countries)
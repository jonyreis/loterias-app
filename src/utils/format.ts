export const numberWithCommas = (number: any) => {
  let newNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  console.log(newNumber)
  return newNumber
}
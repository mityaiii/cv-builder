const getInputNumbersValue = (input: string): string => {
  return input.replace(/\D/g, '');
}

function getValidPhoneNumber(e: React.ChangeEvent<HTMLInputElement>, setPhoneNumber: Function) {
  let input = e.target,
      inputNumbersValue = getInputNumbersValue(e.target.value),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

  if (!inputNumbersValue)
    formattedInputValue = '';
  
  if (input.value.length !== selectionStart) {
    if ('0' <= e.nativeEvent.data && e.nativeEvent.data <= '9')
      formattedInputValue = input.value
    else
      formattedInputValue = input.value.substring(0, inputNumbersValue.length - 1);
  } 

  else if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1){
    if (inputNumbersValue[0] === '9')
      inputNumbersValue = '7' + inputNumbersValue;

    let firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
    formattedInputValue = firstSymbols;

    if (inputNumbersValue.length > 1) 
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    if (inputNumbersValue.length > 4)
      formattedInputValue += ')' + inputNumbersValue.substring(4, 7);
    if (inputNumbersValue.length > 7)
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    if (inputNumbersValue.length > 9)
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
  } else 
    formattedInputValue = '+' + inputNumbersValue
        
  setPhoneNumber(formattedInputValue)
} 

export default getValidPhoneNumber;

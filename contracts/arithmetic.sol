 //SPDX-License-Identifier: MIT
 pragma solidity ^0.8.8;


 library arithmetic{
 //Add two numbers together
     function add(uint num1, uint num2) internal pure returns(uint){
         uint result = num1 + num2;
         return result;
     }
 //Subtracts two numbers
     function subtract(uint num1, uint num2) internal view returns(uint){
         uint result = num1 - num2;
         return result;
     }
 //Multiply two numbers
     function multiply(uint num1, uint num2) internal pure returns(uint){
         uint result = num1 * num2;
         return result;
     }
 //divide two numbers
     function divide(uint num1, uint num2) internal pure returns(uint){
         uint result = num1 / num2;
         return result;
     }
 //modulo of two numbers
     function modulo(uint num1, uint num2) internal pure returns(uint){
         uint result = num1 % num2;
         return result;
     }
 //Exponential of two numbers
     function exponential(uint num1, uint num2) internal returns(uint){
         uint result = num1 ** num2;
         return result;
     }
 
 }
 
 
 contract Test {

    
     //using the library
     //THis contract is used to test the library
 
     //we are using the arithmetic library here
     //we applied all the arithmetic method in the library to all the uint
     //variable declared here.
         using arithmetic for uint;
    
    uint res;
 
     //we  declared two uint (_num1 and _num2) and assigned a number to them
         uint _num1 = 5;
         uint _num2 = 6;
 
     //we use the add functions to add the two number together here
         uint public results = _num1.add(_num2);
 
     // We create a function getExponent that accepts two input and we return their exponential
     //using the exponential method in the library.
        //  function getExponent(uint num1, uint num2) external returns(uint){
        //      uint output = num1.exponential(num2);
        //      res = output;
        //      return output;
        //  }

         string name;
         function saveName(string memory _name) external {
            name = _name;
         }

         function getName() external view returns(string memory) {
            return name;
         }
     }
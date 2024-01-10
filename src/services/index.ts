import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { persist } from "../redux/store";
import { toast } from "react-toastify";

export const replaceString = (
  str: string,
  item: string,
  replaceItem: string
) => {
  return str.replace(item, replaceItem);
};

export const firstLetterCap = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
};

export const httpAxios = axios.create({
  baseURL: "http://localhost:8000",
});

export const isAuth = () => {
  const unsubscribe = onAuthStateChanged(auth, (isUser) => {
    if(!isUser){
      persist.purge().then(()=>{
        console.log("You are logged out")
      })
    }
  });
  return unsubscribe;
};


export const calculateDiscountedPrice = (price:number | undefined, discount:number | undefined) => {
  try {
    if(price && discount){
      const finalPrice = parseFloat((price - (discount*price)/100).toFixed(2));
      return finalPrice;
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
}

export const calculateGST = (total:number | undefined) => {
  try {
    if(total){
      const finalPrice = parseFloat((total*0.07).toFixed(2));
      return finalPrice;
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
}

export const calculateTotal = (subTotal:number | undefined) => {
  try {
    if(subTotal){
      const finalPrice = parseFloat(((subTotal || 0) + (calculateGST(subTotal) || 0)).toFixed(2));
      return finalPrice;
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
}

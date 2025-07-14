import{test,expect} from "@playwright/test";
import { request } from "http";

test("GET/products",async({request})=>{
   const apiurl:string="https://api.practicesoftwaretesting.com";
   const responce=await request.get(apiurl+"/products");

   expect(responce.status()).toBe(200);
   const body=await responce.json();
   console.log(body);

});
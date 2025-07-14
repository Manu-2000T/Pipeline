import {test as setup,expect} from "@playwright/test";
import{credentials,urls} from '../utils/testData'
import { Link } from '../pages/link';



setup("Create customer 01 auth",async({page,context})=>{

    const customer01AuthFile=".auth/customer01.json";
      
      const loginPage = new Link(page);
       await loginPage.gotoLoginPage();
       await loginPage.login();
       await context.storageState({ path: customer01AuthFile });
});


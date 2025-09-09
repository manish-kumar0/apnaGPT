const IS_PROD = true;  

const server = IS_PROD 
  ? "https://apnagpt-backend-erq5.onrender.com"   
  : "http://localhost:8080";                

export default server;

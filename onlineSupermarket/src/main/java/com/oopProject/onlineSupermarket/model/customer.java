package com.oopProject.onlineSupermarket.model;

public class customer extends user {
    public customer(String userName, String userId, long phoneNumber, String address, String emailId, String password) {
        super(userName, userId, phoneNumber, address, emailId, password);
    }
    public double viewWalletBalance(){
        //returns walletBalance field data from mongodb for the particular user
        return walletBalance;
    }
    public void addMoney(double amountToBeAdded){
        double balance=viewWalletBalance();
        double newBalance=amountToBeAdded+balance;
        //push newBalance to mongodb field
    }
    public void makePayment(double totalCost){
        //if(totalCost>viewWalletBalance()){
        //Use this check at frontend to make sure if you can buy or not
        //import all the items bought in JSON format
        addMoney(totalCost*-1);
        //deducts the amount from the walletBalance
        // import itemId, addrs, userNm from frontend
        order newOrder= new order(userNm , addrs, itemId);
        //userName, address, itemIds provided by Frontend
        // push newOrder object in mongo table Orders
        //console Log confirmation message
        //reduce Stock of corresponding itemId from items mongodb table
    }
}

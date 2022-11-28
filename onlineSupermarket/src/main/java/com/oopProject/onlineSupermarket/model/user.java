package com.oopProject.onlineSupermarket.model;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class user {
    protected String userName;
    protected String userId;
    protected long phoneNumber;
    protected String address;
    protected String emailId;
    private String password;
    public double walletBalance=1000;


    public void setPhoneNumber(long phoneNumber) {
        if (phoneNumber<1000000000){
        this.phoneNumber = phoneNumber;}
        else {
            this.phoneNumber=0;
        }
    }

    public user(String userName, String userId, long phoneNumber, String address, String emailId, String password) {
        this.userName = userName;
        this.userId = userId;
        setPhoneNumber(phoneNumber);
        this.address = address;
        this.emailId = emailId;
        try{
        this.password=toHexString(getSHA(password));}
        catch (NoSuchAlgorithmException e) {
            System.out.println("Exception thrown for incorrect algorithm: " + e);
        }
    }

    public void login(String userId, String password){
        //get data using JS
        String passkey = "";
        try{
            passkey=toHexString(getSHA(password));}
        catch (NoSuchAlgorithmException e) {
            System.out.println("Exception thrown for incorrect algorithm: " + e);
        }
        //check userId data to mongodb table users
        //check for passkey for corresponding user if matches
        //return to login page if check fails
    }
    protected void registerCustomer(String userName, String userId, long phoneNumber, String address, String emailId, String password){
        //get data using JS
        //wrap data into a new object using user newUser= new user;
        user newUser= new user(userName, userId, phoneNumber, address, emailId, password);
        //push object into mongodb table users
        //return to registerCustomer page if login fails
    }
    protected void updatePhone(String userId, long newPhoneNumber){
        //update phone field for that particular user
    }
    protected void updateEmail(String userId, String newEmail){
        //update Email field for that particular user
    }
    protected void updateAddress(String userId, String newAddress){
        //update Address field for that particular user
    }
    protected void deleteProfile(String userId){
        //deletes that particular user from mongodb
    }
    protected void passwordChange(){
        //get input of new password
        String pass = "";
        try{
            pass=toHexString(getSHA(password));}
        catch (NoSuchAlgorithmException e) {
            System.out.println("Exception thrown for incorrect algorithm: " + e);
        }
        //push pass to mongoDB table users
    }

    public static byte[] getSHA(String input) throws NoSuchAlgorithmException
    {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        return md.digest(input.getBytes(StandardCharsets.UTF_8));
    }

    public static String toHexString(byte[] hash)
    {
        BigInteger number = new BigInteger(1, hash);

        StringBuilder hexString = new StringBuilder(number.toString(16));

        while (hexString.length() < 64)
        {
            hexString.insert(0, '0');
        }

        return hexString.toString();
    }
}

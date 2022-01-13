package com.company.Loops;

import java.util.Date;
import java.util.Scanner;

public class ScannerAndDate {
    String username;
    int userAge;

    public static void main(String[] args) {
        Scanner userInput = new Scanner(System.in);
        Date today = new Date();

        ScannerAndDate personalData = new ScannerAndDate();

        System.out.println("Enter your name:");
        personalData.username = userInput.nextLine();

        System.out.println("Enter your date of birth: ");
        personalData.userAge = userInput.nextInt();

        System.out.println(today);
        System.out.println("Your name is " + personalData.username + " and your age is ");
    }
}

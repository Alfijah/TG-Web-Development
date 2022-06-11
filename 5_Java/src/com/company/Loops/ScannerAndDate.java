package com.company.Loops;

import java.time.LocalDate;
import java.time.Period;
import java.util.Scanner;

public class ScannerAndDate {
    String username;
    static String userAge;

    public static void main(String[] args) {
        Scanner userInput = new Scanner(System.in);
        LocalDate today = LocalDate.now();
        ScannerAndDate personalData = new ScannerAndDate();

        System.out.println("Enter your name:");
        personalData.username = userInput.nextLine();

        System.out.println("Enter your date of birth in the following format yyyy-mm-dd: ");
        personalData.userAge = userInput.nextLine();
        LocalDate birthDate = LocalDate.parse(userAge);
        int calculateAge = Period.between(birthDate, today).getYears();

        System.out.println("Your name is " + personalData.username + " and your age is "+ calculateAge + "!");
    }
}

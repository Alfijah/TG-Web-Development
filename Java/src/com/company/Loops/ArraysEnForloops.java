package com.company.Loops;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class ArraysEnForloops {

    public static void Cars() {
        String[] eastcars = {"Kia", "Honda"};
        String[] cars = {"Kia", "Volkswagen", "Renault", "BMW"};
        ArrayList<String> westcars = new ArrayList<>();

        for (int i = 0; i < cars.length - 1; i++) {
            cars[i] = cars[i];
            System.out.println(cars[i]);
        }

        for (String car : cars) {
            System.out.println(car);
        }

        for (String car : cars) {
            if(!Arrays.toString(eastcars).contains(car)) {
                westcars.add(car);
            }
        }
        System.out.println("The elements in westcars: " + westcars);

        Arrays.sort(eastcars);
        Arrays.sort(cars);
        Collections.sort(westcars);

        System.out.println(Arrays.toString(eastcars));
        System.out.println(Arrays.toString(cars));
        System.out.println(westcars);
    }

    public static void main(String[] args) {
        Cars();
    }
}

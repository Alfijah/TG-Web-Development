package com.company.Dierentuin;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class Animal {
    String name;
    String species;

    public static ArrayList<Animal> allAnimals = new ArrayList<>();
    public static ArrayList<Bird> birds = new ArrayList<>();

    public Animal(String name, String species) {
        this.name = name;
        this.species = species;
    }

    public void animalList() {

    }

    public void feedAnimal() {

    }


    public static void main(String[] args) {
        Bird bird = new Bird("test", "test");
        birds.add(bird);
        allAnimals.addAll(birds);
        System.out.println(allAnimals);
    }
}

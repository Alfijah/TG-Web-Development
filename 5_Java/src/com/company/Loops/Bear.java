package com.company.Loops;

import java.util.Arrays;

public class Bear extends Animal {
    String type;
    int weight;

    public Bear(String name, int age, String typeBear) {
        super(name, age);
        type = typeBear;
        System.out.println("The bear's name is " + name + ", he is " + age + " years old and he's of type " + typeBear + ".");
    }

    public Bear(String name, int age, int weight) {
        super(name, age);
        this.weight = weight;
    }

   public void showType() {
        System.out.println("Type from Bear class: " + this.type);
        System.out.println("Type from Animal class: " + Animal.type);
    }

    public void feed() {
        super.feed();
        System.out.println("The bear ate the vet!");
    }

    public void feed(String food) {
        System.out.println("The " + type + " loves " + food + ".");
    }

    public void visitVet() {
        super.visitVet();
    }

    public static void main(String[] args) {
        Bear brownBear = new Bear("Grizzle", 10, "Brown Bear");
        Bear polarBear = new Bear("Polestar", 7, "Polar Bear");
        Animal animal = new Animal("Indie", 9);

        brownBear.showType();
        polarBear.showType();

        Bear[] allBears = {brownBear, polarBear};
        Animal[] allAnimals = {animal, brownBear, brownBear};

//        String[] allBears = new String[]{brownBear.type, polarBear.type};
//        String[] allAnimals = new String[] {animal.type, brownBear.type, polarBear.type};
        System.out.println(Arrays.toString(allBears));
        System.out.println(Arrays.toString(allAnimals));

        for (Bear bear : allBears) {
            brownBear.feed();
            polarBear.feed();
        }

        for (Animal creature : allAnimals) {
            animal.feed();
        }

        brownBear.feed("salmon");
    }
}
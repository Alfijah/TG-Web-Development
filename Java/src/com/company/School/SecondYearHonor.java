package com.company.School;

import java.util.ArrayList;

public class SecondYearHonor extends SecondYearStudent implements HonorStudent{
    private ArrayList<String> firstHonorStudent = new ArrayList<>();

    public SecondYearHonor(String name) {
        super(name);
    }

    public void addToProgram(String studentName) {
        firstHonorStudent.add(studentName);
    }

    @Override
    public void removeFromProgram(String studentName) {
        firstHonorStudent.remove(studentName);
    }

    @Override
    public void checkForNotes() {
        if (getRemarksList().size() > 1) {
            System.out.println("You no longer meet the honor student conditions.");
        }
    }

    public ArrayList<String> getFirstHonorStudent() {
        return firstHonorStudent;
    }
}

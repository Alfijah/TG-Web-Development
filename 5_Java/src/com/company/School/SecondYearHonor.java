package com.company.School;

import java.util.ArrayList;

public class SecondYearHonor extends SecondYearStudent implements HonorStudent{
    private ArrayList<String> secondHonorStudent = new ArrayList<>();

    public void addToProgram(String studentName) {
        secondHonorStudent.add(studentName);
    }

    @Override
    public void removeFromProgram(String studentName) {
        secondHonorStudent.remove(studentName);
    }

    @Override
    public void checkForNotes() {
        if (getRemarksList().size() > 1) {
            System.out.println("You no longer meet the honor student conditions.");
        }
    }

    public ArrayList<String> getSecondHonorStudent() {
        return secondHonorStudent;
    }
}

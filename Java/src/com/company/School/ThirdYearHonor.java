package com.company.School;

import java.util.ArrayList;

public class ThirdYearHonor extends ThirdYearStudent implements HonorStudent{
    private ArrayList<String> thirdHonorStudent = new ArrayList<>();

    public ThirdYearHonor(String name) {
        super(name);
    }

    public void addToProgram(String studentName) {
        thirdHonorStudent.add(studentName);
    }

    @Override
    public void removeFromProgram(String studentName) {
        thirdHonorStudent.remove(studentName);
    }

    @Override
    public void checkForNotes() {
        if (getRemarksList().size() > 1) {
            System.out.println("You no longer meet the honor student conditions.");
        }
    }

    public ArrayList<String> getThirdHonorStudent() {
        return thirdHonorStudent;
    }
}

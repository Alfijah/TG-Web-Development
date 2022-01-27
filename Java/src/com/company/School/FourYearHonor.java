package com.company.School;

import java.util.ArrayList;

public class FourYearHonor extends FourthYearStudent implements HonorStudent{
    private ArrayList<String> fourthHonorStudent = new ArrayList<>();

    public FourYearHonor(String name) {
        super(name);
    }

    public void addToProgram(String studentName) {
        fourthHonorStudent.add(studentName);
    }

    @Override
    public void removeFromProgram(String studentName) {
        fourthHonorStudent.remove(studentName);
    }

    @Override
    public void checkForNotes() {
        if (getRemarksList().size() > 1) {
            System.out.println("You no longer meet the honor student conditions.");
        }
    }

    public ArrayList<String> getFourthHonorStudentHonorStudent() {
        return fourthHonorStudent;
    }
}

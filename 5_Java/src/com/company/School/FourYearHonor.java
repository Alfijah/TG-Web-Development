package com.company.School;

import java.util.ArrayList;

public class FourYearHonor extends FourthYearStudent implements HonorStudent{
    private ArrayList<String> fourthHonorStudent = new ArrayList<>();

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

    public ArrayList<String> getFourthHonorStudent() {
        return fourthHonorStudent;
    }
}

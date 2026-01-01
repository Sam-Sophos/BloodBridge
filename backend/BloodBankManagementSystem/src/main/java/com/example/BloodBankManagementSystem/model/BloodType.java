package com.example.BloodBankManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
@Entity
public class BloodType {

    // Getters and Setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type; // e.g., "O+", "A-", "B+", etc.

    // Constructors
    public BloodType() {
    }

    public BloodType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "BloodType{" +
                "id=" + id +
                ", type='" + type + '\'' +
                '}';
    }
}

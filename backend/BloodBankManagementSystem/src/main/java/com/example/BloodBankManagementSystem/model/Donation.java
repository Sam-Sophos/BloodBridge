package com.example.BloodBankManagementSystem.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Builder
@Data
@Table
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Donor donor;

    @OneToOne
    private Receiver receiver;

    // Getters and Setters
}


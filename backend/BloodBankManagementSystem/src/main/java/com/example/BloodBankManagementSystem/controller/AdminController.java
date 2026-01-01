package com.example.BloodBankManagementSystem.controller;

import com.example.BloodBankManagementSystem.model.Beneficiary;
import com.example.BloodBankManagementSystem.model.BloodInventory;
import com.example.BloodBankManagementSystem.model.BloodRequest;
import com.example.BloodBankManagementSystem.model.Donor;
import com.example.BloodBankManagementSystem.service.BeneficiaryService;
import com.example.BloodBankManagementSystem.service.BloodInventoryService;
import com.example.BloodBankManagementSystem.service.BloodRequestService;
import com.example.BloodBankManagementSystem.service.DonorServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")  // All admin related operations handled here
public class AdminController {

    private final DonorServiceImpl donorServiceImpl;
    private final BloodInventoryService bloodInventoryService;
    private final BeneficiaryService beneficiaryService;
    private final BloodRequestService bloodRequestService;

    @Autowired
    public AdminController(DonorServiceImpl donorServiceImpl, BloodInventoryService bloodInventoryService,
                           BeneficiaryService beneficiaryService, BloodRequestService bloodRequestService) {
        this.donorServiceImpl = donorServiceImpl;
        this.bloodInventoryService = bloodInventoryService;
        this.beneficiaryService = beneficiaryService;
        this.bloodRequestService = bloodRequestService;
    }

    // Donor CRUD operations
    @GetMapping("/donors")
    public ResponseEntity<List<Donor>> getAllDonors() {
        List<Donor> donors = donorServiceImpl.getAllDonors();
        return ResponseEntity.ok(donors);
    }

    @GetMapping("/donors/{id}")
    public ResponseEntity<Donor> getDonorById(@PathVariable Long id) {
        Donor donor = donorServiceImpl.getDonorById(id);
        if (donor == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(donor);
    }

    @PostMapping("/donors")
    public ResponseEntity<Donor> createDonor(@RequestBody Donor donor) {
        Donor createdDonor = donorServiceImpl.createDonor(donor);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDonor);
    }

    @PutMapping("/donors/{id}")
    public ResponseEntity<Donor> updateDonor(@PathVariable Long id, @RequestBody Donor donor) {
        Donor updatedDonor = donorServiceImpl.updateDonor(id, donor);
        if (updatedDonor == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(updatedDonor);
    }

    @DeleteMapping("/donors/{id}")
    public ResponseEntity<Void> deleteDonor(@PathVariable Long id) {
        donorServiceImpl.deleteDonor(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    // Blood Inventory CRUD operations
    @GetMapping("/inventory")
    public ResponseEntity<List<BloodInventory>> getAllInventory() {
        List<BloodInventory> inventory = bloodInventoryService.getAllBloodInventories();
        return ResponseEntity.ok(inventory);
    }

    @GetMapping("/inventory/{id}")
    public ResponseEntity<BloodInventory> getInventoryById(@PathVariable Long id) {
        BloodInventory inventory = bloodInventoryService.getBloodInventoryById(id);
        if (inventory == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(inventory);
    }

    @PostMapping("/inventory")
    public ResponseEntity<BloodInventory> createOrUpdateInventory(@RequestBody BloodInventory bloodInventory) {
        BloodInventory createdInventory = bloodInventoryService.createOrUpdateBloodInventory(bloodInventory);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdInventory);
    }

    @PutMapping("/inventory/{id}")
    public ResponseEntity<BloodInventory> updateInventory(@PathVariable Long id, @RequestBody BloodInventory bloodInventory) {
        BloodInventory updatedInventory = bloodInventoryService.updateBloodInventory(id, bloodInventory);
        if (updatedInventory == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(updatedInventory);
    }

    @DeleteMapping("/inventory/{id}")
    public ResponseEntity<Void> deleteInventory(@PathVariable Long id) {
        bloodInventoryService.deleteBloodInventory(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    // Beneficiary CRUD operations
    @GetMapping("/beneficiaries")
    public ResponseEntity<List<Beneficiary>> getAllBeneficiaries() {
        List<Beneficiary> beneficiaries = beneficiaryService.getAllBeneficiaries();
        return ResponseEntity.ok(beneficiaries);
    }

    @GetMapping("/beneficiaries/{id}")
    public ResponseEntity<Beneficiary> getBeneficiaryById(@PathVariable Long id) {
        Beneficiary beneficiary = beneficiaryService.getBeneficiaryById(id);
        if (beneficiary == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(beneficiary);
    }

    @PostMapping("/beneficiaries")
    public ResponseEntity<Beneficiary> createBeneficiary(@RequestBody Beneficiary beneficiary) {
        Beneficiary createdBeneficiary = beneficiaryService.createBeneficiary(beneficiary);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBeneficiary);
    }

    @PutMapping("/beneficiaries/{id}")
    public ResponseEntity<Beneficiary> updateBeneficiary(@PathVariable Long id, @RequestBody Beneficiary beneficiary) {
        Beneficiary updatedBeneficiary = beneficiaryService.updateBeneficiary(id, beneficiary);
        if (updatedBeneficiary == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(updatedBeneficiary);
    }

    @DeleteMapping("/beneficiaries/{id}")
    public ResponseEntity<Void> deleteBeneficiary(@PathVariable Long id) {
        beneficiaryService.deleteBeneficiary(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    // Mapping for admin dashboard page
    @GetMapping("/admin-dashboard")
    public String adminDashboard() {
        return "admin-dashboard";  // This will load admin-dashboard.html
    }

    // Blood Request CRUD operations
    @GetMapping("/requests")
    public ResponseEntity<List<BloodRequest>> getAllRequests() {
        List<BloodRequest> requests = bloodRequestService.getAllBloodRequests();
        return ResponseEntity.ok(requests);
    }

    @GetMapping("/requests/{id}")
    public ResponseEntity<BloodRequest> getRequestById(@PathVariable Long id) {
        BloodRequest request = bloodRequestService.getBloodRequestById(id);
        if (request == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(request);
    }

    @PostMapping("/requests")
    public ResponseEntity<BloodRequest> createBloodRequest(@RequestBody BloodRequest bloodRequest) {
        BloodRequest createdRequest = bloodRequestService.addBloodRequest(bloodRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRequest);
    }

    @PutMapping("/requests/{id}")
    public ResponseEntity<BloodRequest> updateBloodRequest(@PathVariable Long id, @RequestBody BloodRequest bloodRequest) {
        BloodRequest updatedRequest = bloodRequestService.updateBloodRequest(id, bloodRequest);
        if (updatedRequest == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(updatedRequest);
    }

    @DeleteMapping("/requests/{id}")
    public ResponseEntity<Void> deleteBloodRequest(@PathVariable Long id) {
        bloodRequestService.deleteBloodRequest(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}

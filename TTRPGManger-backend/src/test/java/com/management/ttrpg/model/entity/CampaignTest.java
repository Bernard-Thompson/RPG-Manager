package com.management.ttrpg.model.entity;



import java.util.Set;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.management.ttrpg.model.Campaign;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;

public class CampaignTest {

    private Validator validator;

    @BeforeEach
    void setUp() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }

    @Test
    void testValidCampaignCreation() {
        Campaign campaign = new Campaign();
        campaign.setTitle("Epic Adventure");
        campaign.setDescription("A journey through mysterious lands.");
        campaign.setTheme("Fantasy");
        campaign.setStartingLevel(1);
        campaign.setProgressionType(ProgressionType.MILESTONE);
        campaign.setSessionFrequency("Weekly");
        campaign.setSessionDuration("2 hours");
        

        Set<ConstraintViolation<Campaign>> violations = validator.validate(campaign);
        assertTrue(violations.isEmpty(), "Campaign should be valid with all required fields.");
    }

    @Test
    void testCampaignTitleNull() {
        Campaign campaign = new Campaign();
        campaign.setDescription("A journey through mysterious lands.");
        campaign.setTheme("Fantasy");
        campaign.setStartingLevel(1);
        campaign.setProgressionType(ProgressionType.MILESTONE);
        campaign.setSessionFrequency("Weekly");
        campaign.setSessionDuration("2 hours");

        Set<ConstraintViolation<Campaign>> violations = validator.validate(campaign);
        assertFalse(violations.isEmpty(), "Campaign title should not be null.");
        assertEquals(1, violations.size());
        assertTrue(violations.stream().anyMatch(v -> v.getMessage().contains("must not be null")));
    }

    @Test
    void testInvalidStartingLevel() {
        Campaign campaign = new Campaign();
        campaign.setTitle("Epic Adventure");
        campaign.setDescription("A journey through mysterious lands.");
        campaign.setTheme("Fantasy");
        campaign.setStartingLevel(-1); // Invalid level
        campaign.setProgressionType(ProgressionType.MILESTONE);
        campaign.setSessionFrequency("Weekly");
        campaign.setSessionDuration("2 hours");

        Set<ConstraintViolation<Campaign>> violations = validator.validate(campaign);
        assertFalse(violations.isEmpty(), "Starting level should not be negative.");
        assertTrue(violations.stream().anyMatch(v -> v.getMessage().contains("must be greater than or equal to 1")));
    }

    @Test
    void testProgressionTypeNull() {
        Campaign campaign = new Campaign();
        campaign.setTitle("Epic Adventure");
        campaign.setDescription("A journey through mysterious lands.");
        campaign.setTheme("Fantasy");
        campaign.setStartingLevel(1);
        campaign.setProgressionType(null); // Missing progression type
        campaign.setSessionFrequency("Weekly");
        campaign.setSessionDuration("2 hours");

        Set<ConstraintViolation<Campaign>> violations = validator.validate(campaign);
        assertFalse(violations.isEmpty(), "Progression type should not be null.");
        assertTrue(violations.stream().anyMatch(v -> v.getMessage().contains("Progression type is required")));
    }

    @Test
    void testEmptySessionFrequency() {
        Campaign campaign = new Campaign();
        campaign.setTitle("Epic Adventure");
        campaign.setDescription("A journey through mysterious lands.");
        campaign.setTheme("Fantasy");
        campaign.setStartingLevel(1);
        campaign.setProgressionType(ProgressionType.MILESTONE);
        campaign.setSessionFrequency(""); // Empty session frequency
        campaign.setSessionDuration("2 hours");

        Set<ConstraintViolation<Campaign>> violations = validator.validate(campaign);
        assertFalse(violations.isEmpty(), "Session frequency should not be empty.");
        assertTrue(violations.stream().anyMatch(v -> v.getMessage().contains("must not be blank")));
    }

    @Test
    void testSessionDurationPattern() {
        Campaign campaign = new Campaign();
        campaign.setTitle("Epic Adventure");
        campaign.setDescription("A journey through mysterious lands.");
        campaign.setTheme("Fantasy");
        campaign.setStartingLevel(1);
        campaign.setProgressionType(ProgressionType.MILESTONE);
        campaign.setSessionFrequency("Weekly");
        campaign.setSessionDuration("1 month"); // Invalid format

        Set<ConstraintViolation<Campaign>> violations = validator.validate(campaign);
        assertFalse(violations.isEmpty(), "Session duration should match the expected format.");
        assertTrue(violations.stream().anyMatch(v -> v.getMessage().contains("Invalid session duration format")));
    }
	
	
}

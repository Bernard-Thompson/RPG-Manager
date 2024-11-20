package com.management.ttrpg.model.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Arrays;

/**
 * Enum to represent the type of progression used in a D&D campaign.
 * 
 * <p>This enum defines how players progress through levels in the campaign, 
 * either by reaching key milestones in the story or by earning experience points (XP).</p>
 */



public enum ProgressionType {

	
	
	
	
    /**
     * Milestone-based progression where players level up at story-driven points.
     */
    MILESTONE("Milestone"),

    /**
     * Experience-based progression where players level up based on accumulated XP.
     */
    EXPERIENCE("Experience");

    // Human-readable value for display and JSON serialization
    private final String displayName;

    /**
     * Constructor to associate a human-readable display name with the enum value.
     *
     * @param displayName The name to display for this progression type.
     */
    ProgressionType(String displayName) {
        this.displayName = displayName;
    }

    /**
     * Get the human-readable name of the progression type.
     *
     * @return The display name of the progression type.
     */
    @JsonValue
    public String getDisplayName() {
        return displayName;
    }

    /**
     * Parse a string value into a ProgressionType enum.
     * This method supports case-insensitive matching.
     *
     * @param value The string to parse (e.g., "Milestone", "Experience").
     * @return The corresponding ProgressionType enum value.
     * @throws IllegalArgumentException if the value does not match any enum value.
     */
    @JsonCreator
    public static ProgressionType fromValue(String value) {
        return Arrays.stream(ProgressionType.values())
                     .filter(type -> type.displayName.equalsIgnoreCase(value))
                     .findFirst()
                     .orElseThrow(() -> new IllegalArgumentException(
                         "Invalid progression type: " + value
                     ));
    }
    
    @Override
    public String toString() {
        return displayName;
    }
}

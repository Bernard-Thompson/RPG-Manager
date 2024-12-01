package com.management.ttrpg.model;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.management.ttrpg.model.entity.ProgressionType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import lombok.Data;







@Data
@Entity
@Table(name = "campaigns")
@EntityListeners(AuditingEntityListener.class)
public class Campaign {

	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required and must not be null")
    private String title;

    @NotBlank(message = "Description is required")
    @Size(max = 1000, message = "Description cannot exceed 1000 characters")
    private String description;

    @NotBlank(message = "Theme is required")
    private String theme;

    @Column(name = "starting_level")
    @Min(value = 1, message = "Starting level must be greater than or equal to 1")
    @Max(value = 20, message = "Starting level cannot exceed 20") 
    private int startingLevel;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Progression type is required")
    private ProgressionType progressionType;

    @NotBlank(message = "Session frequency is required and must not be blank")
    private String sessionFrequency;

    @NotBlank(message = "Session duration is required")
    @Pattern(
            regexp = "^\\d+\\s*(hours|minutes|hrs|min)$",
            message = "Invalid session duration format. Example: '2 hours' or '90 minutes'"
        )
    private String sessionDuration;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Session> sessions;

    @Column(name = "created_at", updatable = false)
    @CreatedDate
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    @LastModifiedDate
    private LocalDateTime updatedAt;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public int getStartingLevel() {
		return startingLevel;
	}

	public void setStartingLevel(int startingLevel) {
		this.startingLevel = startingLevel;
	}

	public ProgressionType getProgressionType() {
		return progressionType;
	}

	public void setProgressionType(ProgressionType progressionType) {
		this.progressionType = progressionType;
	}

	public String getSessionFrequency() {
		return sessionFrequency;
	}

	public void setSessionFrequency(String sessionFrequency) {
		this.sessionFrequency = sessionFrequency;
	}

	public String getSessionDuration() {
		return sessionDuration;
	}

	public void setSessionDuration(String sessionDuration) {
		this.sessionDuration = sessionDuration;
	}

	public List<Session> getSessions() {
		return sessions;
	}

	public void setSessions(List<Session> sessions) {
		this.sessions = sessions;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

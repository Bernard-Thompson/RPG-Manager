# **TTRPG Campaign Manager**

An **enterprise-level application** for managing **Dungeons & Dragons 5th Edition (D&D 5E)** campaigns, designed to streamline the gameplay experience for both **Dungeon Masters (DMs)** and **players**. This application provides a robust set of tools for creating, running, and managing campaigns, offering features like campaign creation, character tracking, and game world customization.

---

## **Table of Contents**

1. [Overview](#overview)
2. [Features](#features)
   - [For Dungeon Masters](#for-dungeon-masters)
   - [For Players](#for-players)
3. [Roadmap](#roadmap)
4. [Tech Stack](#tech-stack)
5. [Contributing](#contributing)

---

## **Overview**

The **TTRPG Campaign Manager** is a full-stack application built to help **Dungeon Masters** and **players** organize and enhance their D&D 5E campaigns. With features for **campaign management, world-building, character tracking**, and more, the app makes it easy to focus on gameplay while handling the technicalities of campaign management.

Whether you're a seasoned DM running an intricate world or a new player tracking your character's journey, this application caters to all.

---

## 🔥**Features**

### 🧙‍♂️**For Dungeon Masters**
- **Campaign Creation**:
  - Define titles, descriptions, themes, starting levels, and progression rules.
  - Manage session frequency and duration.
  - Import/export campaign data for sharing or backups.

- **World-Building**:
  - Create and manage locations, NPCs, and quests.
  - Add lore and custom details unique to your world.

- **Character Management**:
  - Track all players' stats, items, and progress.
  - Add DM-only notes for key events.

- **Game Session Tools**:
  - Roll dice directly within the app.
  - Monitor initiative order and combat status.
  - Generate random encounters or events.

### 🛡️**For Players**
- **Character Tracking**:
  - Create and manage characters with stats, skills, and inventory.
  - Upload character sheets or generate them in-app.

- **Session Notes**:
  - Record session-specific notes and goals.
  - Track quest progress and personal achievements.

- **Immersive Tools**:
  - Access maps, NPC profiles, and in-world lore shared by the DM.
  - Use built-in dice rollers and calculators.

### 🌐**Shared Features**
- **Real-Time Updates**:
  - Stay in sync with your party using live updates during sessions.
- **Cross-Platform Access**:
  - Seamless compatibility across desktop and mobile devices.
- **Secure Data Storage**:
  - Save your campaigns and characters with MongoDB (NoSQL) and PostgreSQL (Relational DB).

---

## 📜**Roadmap**

This application is under active development. Here’s a glimpse into upcoming features:

### 🔮**Planned Features**
#### For Dungeon Masters
- **Advanced Encounter Builder**  
  AI-driven recommendations for encounter balancing based on party composition and CR (Challenge Rating).  
  *Expected Release*: v1.2.0

- **Interactive World Map Integration**  
  Support for importing and annotating campaign maps with pins, locations, and secrets.  
  *Expected Release*: v1.3.0

- **NPC Interaction Tracker**  
  Track player-NPC interactions, including dialogue logs and relationship scores.  
  *Expected Release*: v1.4.0

#### For Players
- **Character Sheet Export**  
  Export character sheets in PDF and JSON formats.  
  *Expected Release*: v1.2.0

- **Advanced Inventory Management**  
  Custom tagging for items and auto-calculation of encumbrance.  
  *Expected Release*: v1.3.0

- **Party Overview Dashboard**  
  Real-time dashboard showing party stats, items, and HP/conditions.  
  *Expected Release*: v1.4.0

#### Shared Features
- **Virtual Tabletop Integration**  
  API integrations with Roll20, Foundry VTT, and Fantasy Grounds.  
  *Expected Release*: v2.0.0

- **Voice and Video Support**  
  In-app voice and video chat capabilities for remote sessions.  
  *Expected Release*: v2.1.0

- **Session Replay Logs**  
  Compile DM notes, player actions, and events into a timeline view.  
  *Expected Release*: v2.2.0

---


### 🏗️ Development Milestones

| Version | Milestone                                  | Status       |
|---------|-------------------------------------------|--------------|
| v1.0.0  | Core campaign management features         | ✅ Released  |
| v1.1.0  | Real-time session updates with Socket.IO  | 🔄 In Progress |
| v1.2.0  | AI-driven encounter builder and exports   | 🔜 Planned   |
| v2.0.0  | Virtual tabletop integration              | 🔜 Planned   |

---


## 💻**Tech Stack**

- **Frontend**: React with Vite
- **Backend**: Spring Boot (Jakarta EE)
- **Databases**:
  - MongoDB for flexible homebrew content.
  - PostgreSQL for relational data storage.
- **Real-Time Communication**: Socket.IO
- **Testing**:
  - JUnit and Mockito for backend testing.
  - React Testing Library for frontend testing.
- **Build and Deployment**:
  - CI/CD pipelines using GitHub Actions.
  - Docker for containerized deployment.

---

## 🤝**Contributing**

We welcome contributions from the community! Here’s how you can get involved:

1. **Feature Requests**:  
   Open a GitHub issue with a clear description of your idea.

2. **Bug Reports**:  
   Report bugs by opening an issue with reproduction steps and expected behavior.

3. **Code Contributions**:  
   Submit pull requests for any of the features or enhancements listed in the roadmap.



# Dockerfile for TTRPGManager-backend

# Use an official Maven image to build the JAR file
FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY . /app
RUN mvn clean package -DskipTests

# Use a lightweight OpenJDK image for running the application
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY ./target/*.jar /app/TTRPGManager-backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "TTRPGManager-backend.jar"]

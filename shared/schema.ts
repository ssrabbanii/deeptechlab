import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Application form table
export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  role: text("role").notNull(),
  organization: text("organization").notNull(),
  applicationType: text("application_type").notNull(),
  ventureName: text("venture_name"),
  teamMembers: text("team_members"),
  projectDescription: text("project_description").notNull(),
  resumeFilename: text("resume_filename"),
  hearAbout: text("hear_about"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  status: text("status").default("pending").notNull(),
});

export const insertApplicationSchema = createInsertSchema(applications).omit({
  id: true,
  createdAt: true,
  resumeFilename: true,
  status: true,
});

export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Application = typeof applications.$inferSelect;

// Contact form table
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isResolved: boolean("is_resolved").default(false).notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
  isResolved: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Nominations table
export const nominations = pgTable("nominations", {
  id: serial("id").primaryKey(),
  nomineeName: text("nominee_name").notNull(),
  nomineeEmail: text("nominee_email").notNull(),
  nomineeRole: text("nominee_role").notNull(),
  ventureDescription: text("venture_description").notNull(),
  nominatorName: text("nominator_name").notNull(),
  nominatorEmail: text("nominator_email").notNull(),
  nominatorOrganization: text("nominator_organization").notNull(),
  relationship: text("relationship").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  status: text("status").default("pending").notNull(),
});

export const insertNominationSchema = createInsertSchema(nominations).omit({
  id: true,
  createdAt: true,
  status: true,
});

export type InsertNomination = z.infer<typeof insertNominationSchema>;
export type Nomination = typeof nominations.$inferSelect;

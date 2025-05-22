import { 
  users, type User, type InsertUser,
  applications, type Application, type InsertApplication,
  contacts, type Contact, type InsertContact,
  nominations, type Nomination, type InsertNomination
} from "@shared/schema";

// Storage interface
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Application methods
  getApplication(id: number): Promise<Application | undefined>;
  getAllApplications(): Promise<Application[]>;
  createApplication(application: InsertApplication & { resumeFilename?: string | null }): Promise<Application>;
  updateApplicationStatus(id: number, status: string): Promise<Application | undefined>;
  
  // Contact methods
  getContact(id: number): Promise<Contact | undefined>;
  getAllContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  markContactResolved(id: number): Promise<Contact | undefined>;
  
  // Nomination methods
  getNomination(id: number): Promise<Nomination | undefined>;
  getAllNominations(): Promise<Nomination[]>;
  createNomination(nomination: InsertNomination): Promise<Nomination>;
  updateNominationStatus(id: number, status: string): Promise<Nomination | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private applications: Map<number, Application>;
  private contacts: Map<number, Contact>;
  private nominations: Map<number, Nomination>;
  
  private userId: number;
  private applicationId: number;
  private contactId: number;
  private nominationId: number;

  constructor() {
    this.users = new Map();
    this.applications = new Map();
    this.contacts = new Map();
    this.nominations = new Map();
    
    this.userId = 1;
    this.applicationId = 1;
    this.contactId = 1;
    this.nominationId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Application methods
  async getApplication(id: number): Promise<Application | undefined> {
    return this.applications.get(id);
  }
  
  async getAllApplications(): Promise<Application[]> {
    return Array.from(this.applications.values());
  }
  
  async createApplication(insertApplication: InsertApplication & { resumeFilename?: string | null }): Promise<Application> {
    const id = this.applicationId++;
    const now = new Date();
    const application: Application = {
      ...insertApplication,
      id,
      createdAt: now,
      status: "pending",
      resumeFilename: insertApplication.resumeFilename || null
    };
    this.applications.set(id, application);
    return application;
  }
  
  async updateApplicationStatus(id: number, status: string): Promise<Application | undefined> {
    const application = this.applications.get(id);
    if (!application) return undefined;
    
    const updatedApplication: Application = {
      ...application,
      status
    };
    this.applications.set(id, updatedApplication);
    return updatedApplication;
  }
  
  // Contact methods
  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
  
  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const now = new Date();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: now,
      isResolved: false
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async markContactResolved(id: number): Promise<Contact | undefined> {
    const contact = this.contacts.get(id);
    if (!contact) return undefined;
    
    const updatedContact: Contact = {
      ...contact,
      isResolved: true
    };
    this.contacts.set(id, updatedContact);
    return updatedContact;
  }
  
  // Nomination methods
  async getNomination(id: number): Promise<Nomination | undefined> {
    return this.nominations.get(id);
  }
  
  async getAllNominations(): Promise<Nomination[]> {
    return Array.from(this.nominations.values());
  }
  
  async createNomination(insertNomination: InsertNomination): Promise<Nomination> {
    const id = this.nominationId++;
    const now = new Date();
    const nomination: Nomination = {
      ...insertNomination,
      id,
      createdAt: now,
      status: "pending"
    };
    this.nominations.set(id, nomination);
    return nomination;
  }
  
  async updateNominationStatus(id: number, status: string): Promise<Nomination | undefined> {
    const nomination = this.nominations.get(id);
    if (!nomination) return undefined;
    
    const updatedNomination: Nomination = {
      ...nomination,
      status
    };
    this.nominations.set(id, updatedNomination);
    return updatedNomination;
  }
}

export const storage = new MemStorage();

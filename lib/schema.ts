import { pgTable, serial, varchar, text, boolean, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  locale: varchar('locale', { length: 5 }).notNull(),
  title: text('title').notNull(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  category: varchar('category', { length: 100 }),
  coverImage: varchar('cover_image', { length: 500 }),
  published: boolean('published').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  message: text('message'),
  type: varchar('type', { length: 50 }).default('general'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  locale: varchar('locale', { length: 5 }),
  subscribedAt: timestamp('subscribed_at').defaultNow(),
});

export const domainChecks = pgTable('domain_checks', {
  id: serial('id').primaryKey(),
  domain: varchar('domain', { length: 255 }),
  result: jsonb('result'),
  checkedAt: timestamp('checked_at').defaultNow(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type NewBlogPost = typeof blogPosts.$inferInsert;
export type ContactSubmission = typeof contactSubmissions.$inferInsert;

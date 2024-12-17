import { sql } from "drizzle-orm/sql";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const teamsTable = sqliteTable("teams_table", {
  id: int().primaryKey({ autoIncrement: true }),
  team_name: text().notNull(),
  answer_one: text(),
  answer_two: text(),
  answer_three: text(),
  answer_four: text(),
  timestamp: text('timestamp')
    .notNull()
    .default(sql`(current_timestamp)`),
});
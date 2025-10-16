import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://phhukhackprxrmkmcjab.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoaHVraGFja3ByeHJta21jamFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzMzA1MzAsImV4cCI6MjA3NTkwNjUzMH0.RiTF0dD16-9bhFISOm4i2j7FLsU2KNhfPfsULCl5l7k";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

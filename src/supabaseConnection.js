import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nbkoipgwykgoivfezwuu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ia29pcGd3eWtnb2l2ZmV6d3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzIyNjcsImV4cCI6MjA2MjcwODI2N30.kYGWc_90TD2SGPU7-xjgYeUq56Na3aQ7LAmdtg1cZLE";

export const supabase = createClient(supabaseUrl, supabaseKey);

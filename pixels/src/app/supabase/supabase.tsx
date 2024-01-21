// supabase.tsx
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://abdyiueeybhktyffmbzs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZHlpdWVleWJoa3R5ZmZtYnpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2MDc2ODcsImV4cCI6MjAyMTE4MzY4N30.RqJz1Oq_V6WHtypJ-WGByYPFwJ0cWneArob81N1D68c';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);


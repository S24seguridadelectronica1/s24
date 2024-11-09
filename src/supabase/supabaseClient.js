// src/supabase/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Accede a las variables de entorno con el prefijo REACT_APP_
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Verificación de que las variables existan
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan las variables de entorno de Supabase');
}

// Creando el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
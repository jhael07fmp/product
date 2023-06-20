import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { env } from '../../enviroment/enviroment';
import { Product } from '../models/interfaces/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  client = createClient(env.DATABASE_URL, env.SUPABASE_KEY);
}

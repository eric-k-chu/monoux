import { getEnvironmentVar } from '@monoux/common'
import { createClient } from '@supabase/supabase-js'

export const sbClient = createClient(
  getEnvironmentVar('VERT_SUPABASE_URL'),
  getEnvironmentVar('VERT_SUPABASE_KEY')
)

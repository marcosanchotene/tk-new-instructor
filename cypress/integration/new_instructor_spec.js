import Tenant from '../actors/tenant';
import Instructor from '../actors/instructor';

describe('New Instructor Flow', () => {
  it('should create new Instructor when all fields are typed in', () => {    
    const tenant = new Tenant("tenant_email", "tenant_password", "tenant_first_name", "tenant_last_name")
    const instructor = new Instructor("Roque", "Escroque", "roque.escroque@test.com", "Awesome Trainer", "Short bio")
    tenant.signIn()
    tenant.createNewInstructor(instructor)    
  })

})
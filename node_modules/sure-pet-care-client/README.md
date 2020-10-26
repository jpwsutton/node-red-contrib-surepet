# Sure PetCare API Client

This API client provides basic functionality for Sure PetCare products.

Available features:

* Get details on a pet, including location
* Set the location of pets

## Installation

```bash
npm install --save-dev sure-pet-care-client
```

## Usage

With ES modules

```typescript
import { SurePetCareClient } from 'sure-pet-care-client';

const client = new SurePetCareClient();
client.authenticate('username', 'password').then(...)
```

## API Reference

### Available functions

#### Constructor

Creates a new instance of the client.

```typescript
const client = new SurePetCareClient();
```

#### Authenticate

Authenticates the user using email and password.

```typescript
client.authenticate(email: string, password: string): Promise<void>;
```

#### Get pets

Returns a list of all pets for authenticated user.

```typescript
client.getPets(): Promise<Pet[]>;
```

#### Get pet by name

Returns a pet by a given name (case insensitive). Throws an error if the pet is not found.

```typescript
client.getPetByName(name: string): Promise<Pet>;
```

#### Get pet by ID

Returns a pet by ID. Throws an error if the pet is not found.

```typescript
client.getPetByName(id: number): Promise<Pet>;
```


#### Set pet location

Sets the location of a pet, with an optional timestamp for when the change happened.

```typescript
client.setPetLocation(petID: number, location: PetLocation, since?: Date): Promise<void>;
```

Example:

```typescript
await client.setPetLocation(123, PetLocation.Inside, new Date());
```

### Types

All types are available in the [./src/types.ts](https://github.com/RMHonor/sure-pet-care/blob/master/src/types.ts)

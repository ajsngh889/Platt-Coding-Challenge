export interface Planet {
    name:string;
    population : number;
    diameter : number;
    terrain: string; 
    orbital_period: number;
    lengthOfYear :number;
    formattedPopulation: string;
}

export interface Vehicle {
    manufacturerName: string;
    vehicleCount: number;
    averageCost: number
}

export interface PlanetDetails {
    name: string;
    rotation_period: string;
    lengthOfYear: string;
    diameter: string;
    climate: string;
    gravity: string;
    surface_water: string;
    population: string;
}

export interface Residents {
    name: string;
    height: string;
    eye_Color: string;
    hair_Color: string;
    skin_Color: string;
    gender: string;
    mass: string;
}